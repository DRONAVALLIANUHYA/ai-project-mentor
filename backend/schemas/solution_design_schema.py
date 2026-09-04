from pydantic import BaseModel, Field
from typing import List


class ArchitectureComponents(BaseModel):
    frontend: str = Field(max_length=300)
    backend: str = Field(max_length=300)
    ai_ml: str = Field(max_length=300)
    database: str = Field(max_length=300)
    apis: str = Field(max_length=300)
    data_sources: str = Field(max_length=300)
    security: str = Field(max_length=300)
    deployment: str = Field(max_length=300)


class RoadmapWeek(BaseModel):
    title: str = Field(max_length=100)

    tasks: List[str] = Field(
        min_length=2,
        max_length=3
    )


class SolutionDesign(BaseModel):
    architecture: ArchitectureComponents

    data_flow: List[str] = Field(
        min_length=4,
        max_length=6
    )

    roadmap: List[RoadmapWeek] = Field(
        min_length=4,
        max_length=4
    )