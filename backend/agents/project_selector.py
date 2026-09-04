from models.llm import llm


def select_best_project(
    projects: str,
    evaluation: str,
    domain: str
):

    prompt = f"""
    Domain:

    {domain}
    Projects:

    {projects}

    Evaluation:

    {evaluation}

    Select ONLY ONE best project.

    Consider:

1. Domain Relevance
2. Resume Value
3. Market Demand
4. Learning Opportunity
5. Real-World Impact
6. Uniqueness

    Return:

    Project Name:
    Reason:
    IMPORTANT:

Select the project that best solves
a real problem in the user's domain.

IMPORTANT:

Choose the project that best solves
a real problem in the domain.

Domain relevance is more important
than generic AI popularity.

Do not choose a project simply because
it uses more AI technologies.

Choose the project with the strongest
real-world value for the domain.
    """

    response = llm.invoke(prompt)

    return response.content