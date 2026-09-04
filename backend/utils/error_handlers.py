from fastapi import Request
from fastapi.responses import JSONResponse

from utils.logger import logger


async def global_exception_handler(
    request: Request,
    exc: Exception
):

    logger.exception(
        "Unhandled error on %s %s",
        request.method,
        request.url.path
    )

    return JSONResponse(
        status_code=500,
        content={
            "error": "Internal Server Error",
            "message": (
                "Something went wrong while "
                "processing the request."
            )
        }
    )