from pydantic import BaseModel
from typing import List
from enum import Enum


class StoryLengthEnum(Enum):
    Short = 5
    Medium = 10
    Long = 15


class InitialString(BaseModel):
    introduction: str


class Item(BaseModel):
    item_name: str
    item_type: str


class InitialStory(BaseModel):
    id: str | None
    initial_story: InitialString
    items: List[Item] | None
    max_iterations: int | None


class NewEvent(BaseModel):
    story_bit: str
    event_title: str
    prompt: str

class NewSummary(BaseModel):
    current_summary: str

class NewCharacter(BaseModel):
    health: int
    items: List[Item] | None


class Event(BaseModel):
    id: str | None
    event: NewEvent
    summary: NewSummary
    character: NewCharacter
    iteration: int | None


class SummaryPrevious(BaseModel):
    summary: str


class Story(BaseModel):
    story: List[NewEvent]
