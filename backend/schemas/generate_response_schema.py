from typing import Any, Dict, List

from pydantic import BaseModel


class GenerateResponse(BaseModel):

    interest: str

    research: str

    generated_projects: str

    selected_project: str

    difficulty: int

    industry_value: int

    resume_impact: int

    domain_relevance: int

    architecture: str

    roadmap: List[Dict[str, Any]]