from models.llm import llm


def generate_roadmap(project_name: str, domain: str):

    prompt = f"""
You are an expert project mentor.

Domain:
{domain}

Project:
{project_name}

IMPORTANT:

Create a practical roadmap specifically
for this domain and project.

The roadmap must include:

- Domain datasets
- APIs
- Tools
- Frameworks
- Model development
- Testing
- Deployment

Do not create a generic AI roadmap.

Each week must clearly contribute
to solving a real problem in the domain.

Provide:

Week 1:
Goals
Tasks

Week 2:
Goals
Tasks

Week 3:
Goals
Tasks

Week 4:
Goals
Tasks

Keep it concise.
"""

    response = llm.invoke(prompt)

    return response.content