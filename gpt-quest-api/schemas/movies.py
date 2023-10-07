from pydantic import BaseModel


class MovieSchema(BaseModel):
    title: str
    released: int
    rating: float