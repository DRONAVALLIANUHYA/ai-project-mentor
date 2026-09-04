from pydantic import BaseModel, Field
from typing import List


class ProjectPlan(BaseModel):
    project_name: str = Field(
        description="Clear name of the selected AI project"
    )

    problem: str = Field(
        description="Real-world problem solved by the project"
    )

    solution: str = Field(
        description="How the project solves the problem"
    )

    why_unique: str = Field(
        description="What makes the project different or valuable"
    )

    difficulty: int = Field(
        ge=1,
        le=10,
        description="Project difficulty from 1 to 10"
    )

    domain_relevance: int = Field(
        ge=1,
        le=10,
        description="How strongly the project matches the requested domain"
    )

    industry_value: int = Field(
        ge=1,
        le=10,
        description="Potential real-world industry value"
    )

    resume_impact: int = Field(
        ge=1,
        le=10,
        description="Potential resume and portfolio impact"
    )

    tech_stack: List[str] = Field(
        description="Technologies required to build the project"
    )

    why_project_won: str = Field(
        description="Why this project was selected over the other candidates"
    )