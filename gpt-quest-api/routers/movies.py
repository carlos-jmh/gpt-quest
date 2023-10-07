from fastapi import (
    APIRouter,
)

from schemas.movies import MovieSchema
from services.movies import MovieService

router = APIRouter()


@router.get("/", response_model=MovieSchema)
def get_movie() -> MovieSchema:
    """Get movie by ID."""

    return MovieService().get_movie(0)