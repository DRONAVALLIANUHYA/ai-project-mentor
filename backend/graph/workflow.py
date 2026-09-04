from langgraph.graph import StateGraph, END

from graph.state import ProjectState

from agents.project_evaluator import plan_projects
from agents.architecture_agent import generate_solution_design
from agents.research_agent import research_trends


def normalize_domain(interest: str) -> str:
    """
    Normalize common variations of AI-related domains.
    """

    domain = interest.strip()

    normalized = " ".join(
        domain.split()
    )

    lower_domain = normalized.lower()

    if lower_domain in {
        "ai",
        "a.i.",
        "artificial intelligence",
    }:
        return "Artificial Intelligence"

    if lower_domain in {
        "ml",
        "m.l.",
        "machine learning",
    }:
        return "Machine Learning"

    if lower_domain in {
        "cv",
        "computer vision",
    }:
        return "Computer Vision"

    if lower_domain in {
        "nlp",
        "natural language processing",
    }:
        return "Natural Language Processing"

    return normalized


def research_node(state: ProjectState):

    domain = normalize_domain(
        state["interest"]
    )

    research = research_trends(
        domain
    )

    return {
        "interest": domain,
        "research": research
    }


def project_planner_node(state: ProjectState):

    domain = normalize_domain(
        state["interest"]
    )

    planning = plan_projects(
        domain,
        state["research"]
    )

    return {
        "interest": domain,

        "generated_projects": planning.model_dump_json(
            indent=2
        ),

        "selected_project": planning.model_dump_json(
            indent=2
        ),

        "difficulty": planning.difficulty,

        "industry_value": planning.industry_value,

        "resume_impact": planning.resume_impact,

        "domain_relevance": planning.domain_relevance
    }


def solution_design_node(state: ProjectState):

    solution = generate_solution_design(
        state["generated_projects"],
        state["interest"]
    )

    return {
        "architecture": solution.model_dump_json(
    indent=2
),
        "roadmap": [
            week.model_dump()
            for week in solution.roadmap
        ]
    }


builder = StateGraph(ProjectState)


builder.add_node(
    "research",
    research_node
)

builder.add_node(
    "planner",
    project_planner_node
)

builder.add_node(
    "solution",
    solution_design_node
)


builder.set_entry_point(
    "research"
)


builder.add_edge(
    "research",
    "planner"
)

builder.add_edge(
    "planner",
    "solution"
)

builder.add_edge(
    "solution",
    END
)


graph = builder.compile()