from fastapi import FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field


from graph.workflow import graph
from db.history_service import (
    save_history,
    save_project,
    get_history
)

from schemas.generate_response_schema import GenerateResponse
from slowapi import Limiter, _rate_limit_exceeded_handler
from slowapi.errors import RateLimitExceeded
from slowapi.util import get_remote_address
from utils.error_handlers import global_exception_handler
from utils.logger import logger
app = FastAPI()
app.add_exception_handler(
    Exception,
    global_exception_handler
)
limiter = Limiter(
    key_func=get_remote_address
)

app.state.limiter = limiter

app.add_exception_handler(
    RateLimitExceeded,
    _rate_limit_exceeded_handler
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://127.0.0.1:3000",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def home():
    return {
        "message": "AI Project Mentor API is running"
    }


@app.get("/hello")
def hello():
    return {
        "message": "Frontend connected successfully"
    }


from pydantic import BaseModel, Field


class InterestRequest(BaseModel):
    interest: str = Field(
        min_length=2,
        max_length=100,
        description="AI or technology domain for project generation"
    )

@app.post(
    "/generate",
    response_model=GenerateResponse
)
@limiter.limit("5/minute")
def generate_project(
    request: Request,
    data: InterestRequest
):
    logger.info(
    "Project generation started | interest=%s",
    data.interest.strip()
)
    if not data.interest.strip():
        raise HTTPException(
            status_code=400,
            detail="Interest cannot be empty"
        )

    try:

        result = graph.invoke(
            {
                "interest": data.interest.strip()
            }
        )

        save_project(
    data.interest.strip(),
    result["selected_project"],
    result["architecture"],
    result["roadmap"]
)
        logger.info(
    "Project generation completed | interest=%s",
    data.interest.strip()
)

        return result

    except Exception as e:

        import traceback

        traceback.print_exc()

        raise HTTPException(
            status_code=500,
            detail=(
                f"Project generation failed: "
                f"{type(e).__name__}: {str(e)}"
            )
        )


@app.get("/history")
def history():

    records = get_history()

    return records