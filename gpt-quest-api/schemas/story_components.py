from pydantic import BaseModel
from typing import List

class InitialString(BaseModel):
    introduction: str

class InitialStory(BaseModel):
    initial_story: InitialString

class NewEvent(BaseModel):
    event_title: str
    prompt: str
    previous_event_summary: str

class Event(BaseModel):
    event: NewEvent

class SummaryPrevious(BaseModel):
    summary: str

class Story(BaseModel):
    story: List[NewEvent]