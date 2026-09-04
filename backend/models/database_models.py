from datetime import datetime

from sqlalchemy import (
    Column,
    DateTime,
    ForeignKey,
    Integer,
    String,
    Text,
)

from db.database import Base


class Project(Base):
    __tablename__ = "projects"

    id = Column(
        Integer,
        primary_key=True,
        autoincrement=True
    )

    interest = Column(
        String(255),
        nullable=False
    )

    project_name = Column(
        String(255),
        nullable=False
    )

    problem = Column(
        Text,
        nullable=False
    )

    solution = Column(
        Text,
        nullable=False
    )

    why_unique = Column(
        Text,
        nullable=False
    )

    difficulty = Column(
        Integer,
        nullable=False
    )

    domain_relevance = Column(
        Integer,
        nullable=False
    )

    industry_value = Column(
        Integer,
        nullable=False
    )

    resume_impact = Column(
        Integer,
        nullable=False
    )

    created_at = Column(
        DateTime,
        default=datetime.utcnow,
        nullable=False
    )


class ProjectArchitecture(Base):
    __tablename__ = "project_architecture"

    id = Column(
        Integer,
        primary_key=True,
        autoincrement=True
    )

    project_id = Column(
        Integer,
        ForeignKey("projects.id"),
        nullable=False
    )

    frontend = Column(Text, nullable=False)
    backend = Column(Text, nullable=False)
    ai_ml = Column(Text, nullable=False)
    database = Column(Text, nullable=False)
    apis = Column(Text, nullable=False)
    data_sources = Column(Text, nullable=False)
    security = Column(Text, nullable=False)
    deployment = Column(Text, nullable=False)


class RoadmapWeek(Base):
    __tablename__ = "roadmap_weeks"

    id = Column(
        Integer,
        primary_key=True,
        autoincrement=True
    )

    project_id = Column(
        Integer,
        ForeignKey("projects.id"),
        nullable=False
    )

    week_number = Column(
        Integer,
        nullable=False
    )

    title = Column(
        String(255),
        nullable=False
    )

    tasks = Column(
        Text,
        nullable=False
    )