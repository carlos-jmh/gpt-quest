from fastapi import (
    APIRouter,
    Depends
)
from pydantic import BaseModel
from schemas.classes import CharacterClassEnum
from services.character import *


class CharacterCreateBody(BaseModel):
    character_class: CharacterClassEnum


router = APIRouter()


@router.post("/character/create", response_model=str)
def create_character(character_request: CharacterCreateBody) -> str:
    character_service: CharacterService = get_character_service()
    character_id = character_service.create_character(character_request.character_class)
    return character_id
