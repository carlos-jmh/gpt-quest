from pydantic import BaseModel
from typing import List

class InitialStory(BaseModel):
    title: str
    initial_story: str
    character_id: int

class NewEvent(BaseModel):
    title: str
    description: str
    summary: str

class SummaryPrevious(BaseModel):
    summary: str

class Story(BaseModel):
    story: List[NewEvent]