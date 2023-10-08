from fastapi import (
    APIRouter,
    Depends
)
from pydantic import BaseModel
from schemas.story_components import *
from services.story import *


class StoryStartRequest(BaseModel):
    character_id: str
    story_length: StoryLengthEnum


router = APIRouter()


@router.post("/story/start", response_model=InitialStory)
def start_story(story_data: StoryStartRequest) -> InitialStory:
    story_service: StoryService = get_story_service()
    initial_story = story_service.initialize_story(story_data.character_id, story_data.story_length)
    return initial_story

@router.post("/story/{story_id}/action", response_model=Event)
def take_story_action(story_id: str, story_action_body: dict) -> Event:
    story_service: StoryService = get_story_service()
    event = story_service.take_action(story_id, story_action_body.get("action"))
    return event
