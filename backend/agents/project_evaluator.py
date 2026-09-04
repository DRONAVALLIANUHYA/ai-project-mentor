import json

from models.llm import llm
from schemas.project_plan_schema import ProjectPlan


def plan_projects(
    user_interest: str,
    research: str
):

    prompt = f"""
You are a senior AI project architect and domain specialist.

USER'S REQUESTED DOMAIN:
{user_interest}

RESEARCH:
{research}

TASK:

Internally create 3 different project candidates.

Compare them using:

- Domain relevance
- Real-world problem value
- Industry value
- Technical feasibility
- Uniqueness
- Resume value
- Learning opportunity

Then select ONE best project.

DO NOT return the 3 candidates.

Return ONLY the final selected project.

DOMAIN ALIGNMENT IS VERY IMPORTANT.

The final project MUST:

1. Be strongly related to the requested domain.
2. Use the requested domain as a central part of the project.
3. Solve a real-world problem.
4. Be technically realistic for a student.
5. Have good software engineering value.
6. Have a useful AI/ML component when appropriate.
7. Be suitable for a portfolio.
8. Be different from a generic chatbot.

Do NOT simply mention the requested domain in the technology stack.

For example, if the domain is:

"Machine Learning"

The core project should actually use machine learning.

Good examples:

- Predictive maintenance using machine learning
- Fraud detection using machine learning
- Demand forecasting
- Customer churn prediction
- Anomaly detection

Bad example:

- A normal web application that only has an ML API added to it.

SCORING:

difficulty:
1 = very easy
10 = very difficult

domain_relevance:
1 = barely related
10 = directly focused on the requested domain

industry_value:
1 = little practical value
10 = very strong industry value

resume_impact:
1 = weak portfolio value
10 = very strong portfolio value

Be honest with the scores.

Do not automatically give 9 or 10.

The project should be achievable by a student with
beginner/intermediate programming knowledge.

IMPORTANT:

Use simple and practical technologies.

Prefer technologies such as:

Python
FastAPI
MySQL
Next.js
scikit-learn
PyTorch
Git
Docker

Do not add unnecessary technologies just to make the
project sound advanced.

Return ONLY valid JSON.

DO NOT use Markdown.

DO NOT use code fences.

DO NOT use tables.

DO NOT add explanations before or after the JSON.

The JSON must follow EXACTLY this structure:

{{
  "project_name": "Project name",
  "problem": "Short description of the real-world problem.",
  "solution": "Short description of how the project solves the problem.",
  "why_unique": "Short explanation of what makes the project unique.",
  "difficulty": 6,
  "domain_relevance": 9,
  "industry_value": 8,
  "resume_impact": 9,
  "tech_stack": [
    "Python",
    "FastAPI",
    "PostgreSQL"
  ],
  "why_project_won": "Short explanation of why this project was selected."
}}
"""

    # Use JSON mode instead of tool calling.
    json_llm = llm.with_structured_output(
        ProjectPlan,
        method="json_mode"
    )

    project_plan = json_llm.invoke(prompt)

    return project_plan