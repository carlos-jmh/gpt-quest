from pydantic import BaseModel
from typing import List

class SerperResponse(BaseModel):
    title: str
    snippet: str
    

class SerperResponseList(BaseModel):
    responses: List[SerperResponse]