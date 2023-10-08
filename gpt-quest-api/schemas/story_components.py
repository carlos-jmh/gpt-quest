from pydantic import BaseModel
from typing import List


class InitialString(BaseModel):
    introduction: str
    
class Item(BaseModel):
    item_name: str
    item_type: str
    item_summary: str


class InitialStory(BaseModel):
    initial_story: InitialString
    items: List[Item]


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
