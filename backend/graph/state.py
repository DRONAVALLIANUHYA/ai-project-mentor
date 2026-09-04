from typing import List, TypedDict


class ProjectState(TypedDict, total=False):

    interest: str
    research: str

    generated_projects: str
    selected_project: str

    difficulty: int
    industry_value: int
    resume_impact: int
    domain_relevance: int

    architecture: str

    roadmap: List[dict]

    report: str