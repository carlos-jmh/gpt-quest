from unicodedata import name
from pydantic import BaseModel


class ClassesSchema(BaseModel):
    name: str
    health: int