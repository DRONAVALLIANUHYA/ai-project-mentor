import json

from models.llm import llm
from schemas.solution_design_schema import SolutionDesign


def generate_solution_design(
    project_plan: str,
    domain: str
):

    prompt = f"""
You are a software architect helping a student.

DOMAIN:
{domain}

SELECTED PROJECT:
{project_plan}

Create a simple technical plan for this project.

IMPORTANT:
- Use simple English.
- Keep everything practical.
- Do not add unnecessary advanced technologies.
- The project should be realistic for a student.
- Use MySQL as the database.
- Include basic API security.

ARCHITECTURE:

Provide short explanations for:

Frontend
Backend
AI/ML
Database
APIs
Data Sources
Security
Deployment

DATA FLOW:

Provide 4 to 6 simple steps.

ROADMAP:

Create exactly 4 weeks:

Week 1: Project Setup
Week 2: AI & Backend
Week 3: Frontend & Integration
Week 4: Testing & Deployment

Each week must contain 2 or 3 simple tasks.

Avoid unnecessary technologies such as:

Kubernetes
Terraform
OPA
Prometheus
Grafana
service mesh
complex cloud infrastructure

unless the project genuinely requires them.

Do not use Markdown.
Do not use HTML.

Return ONLY valid JSON.

The JSON must have exactly this structure:

{{
  "architecture": {{
    "frontend": "short explanation",
    "backend": "short explanation",
    "ai_ml": "short explanation",
    "database": "short explanation",
    "apis": "short explanation",
    "data_sources": "short explanation",
    "security": "short explanation",
    "deployment": "short explanation"
  }},
  "data_flow": [
    "step 1",
    "step 2",
    "step 3",
    "step 4"
  ],
  "roadmap": [
    {{
      "title": "Week 1: Project Setup",
      "tasks": [
        "task 1",
        "task 2"
      ]
    }},
    {{
      "title": "Week 2: AI & Backend",
      "tasks": [
        "task 1",
        "task 2"
      ]
    }},
    {{
      "title": "Week 3: Frontend & Integration",
      "tasks": [
        "task 1",
        "task 2"
      ]
    }},
    {{
      "title": "Week 4: Testing & Deployment",
      "tasks": [
        "task 1",
        "task 2"
      ]
    }}
  ]
}}
"""

    response = llm.invoke(prompt)

    raw_output = response.content.strip()

    # Remove accidental markdown code fences
    if raw_output.startswith("```"):
        raw_output = raw_output.replace("```json", "")
        raw_output = raw_output.replace("```", "")
        raw_output = raw_output.strip()

    try:
        data = json.loads(raw_output)

        solution = SolutionDesign.model_validate(data)

        return solution

    except Exception as e:

        raise ValueError(
            f"Failed to parse architecture response: {e}\n\n"
            f"Model response:\n{raw_output}"
        )