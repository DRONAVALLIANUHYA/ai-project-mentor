import json

from sqlalchemy import Column, Integer, String, Text, TIMESTAMP
from sqlalchemy.sql import func

from db.database import Base, SessionLocal, engine

from models.database_models import (
    Project,
    ProjectArchitecture,
    RoadmapWeek
)


class History(Base):
    __tablename__ = "history"

    id = Column(
        Integer,
        primary_key=True,
        autoincrement=True
    )

    interest = Column(
        String(255),
        nullable=False
    )

    selected_project = Column(
        Text,
        nullable=False
    )

    architecture = Column(
        Text,
        nullable=False
    )

    created_at = Column(
        TIMESTAMP,
        server_default=func.current_timestamp()
    )


Base.metadata.create_all(
    bind=engine
)


def save_history(
    interest,
    selected_project,
    architecture
):

    db = SessionLocal()

    try:

        history = History(
            interest=interest,
            selected_project=selected_project,
            architecture=architecture
        )

        db.add(history)
        db.commit()

    finally:

        db.close()


def save_project(
    interest,
    selected_project,
    architecture,
    roadmap
):

    db = SessionLocal()

    try:

        project_data = json.loads(
            selected_project
        )

        architecture_data = json.loads(
            architecture
        )

        project = Project(
            interest=interest,
            project_name=project_data["project_name"],
            problem=project_data["problem"],
            solution=project_data["solution"],
            why_unique=project_data["why_unique"],
            difficulty=project_data["difficulty"],
            domain_relevance=project_data["domain_relevance"],
            industry_value=project_data["industry_value"],
            resume_impact=project_data["resume_impact"]
        )

        db.add(project)

        db.flush()

        architecture_record = ProjectArchitecture(
            project_id=project.id,
            frontend=architecture_data["architecture"]["frontend"],
            backend=architecture_data["architecture"]["backend"],
            ai_ml=architecture_data["architecture"]["ai_ml"],
            database=architecture_data["architecture"]["database"],
            apis=architecture_data["architecture"]["apis"],
            data_sources=architecture_data["architecture"]["data_sources"],
            security=architecture_data["architecture"]["security"],
            deployment=architecture_data["architecture"]["deployment"]
        )

        db.add(
            architecture_record
        )

        for index, week in enumerate(
            roadmap,
            start=1
        ):

            roadmap_record = RoadmapWeek(
                project_id=project.id,
                week_number=index,
                title=week["title"],
                tasks=json.dumps(
                    week["tasks"]
                )
            )

            db.add(
                roadmap_record
            )

        db.commit()

        return project.id

    except Exception:

        db.rollback()

        raise

    finally:

        db.close()


def get_history():

    db = SessionLocal()

    try:

        records = (
            db.query(Project)
            .order_by(
                Project.created_at.desc()
            )
            .all()
        )

        return [
            {
                "id": project.id,
                "interest": project.interest,
                "selected_project": {
                    "project_name": project.project_name,
                    "problem": project.problem,
                    "solution": project.solution,
                    "why_unique": project.why_unique,
                    "difficulty": project.difficulty,
                    "domain_relevance": project.domain_relevance,
                    "industry_value": project.industry_value,
                    "resume_impact": project.resume_impact
                },
                "created_at": project.created_at
            }
            for project in records
        ]

    finally:

        db.close()