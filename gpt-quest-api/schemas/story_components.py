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
    story_bit: str
    event_title: str
    prompt: str

class NewSummary(BaseModel):
    current_summary: str


class Event(BaseModel):
    event: NewEvent
    summary: NewSummary


class SummaryPrevious(BaseModel):
    summary: str


class Story(BaseModel):
    story: List[NewEvent]
