from pydantic import BaseModel
from enum import Enum


class CharacterClassEnum(Enum):
    Barbarian = 0
    Ranger = 1
    Druid = 2
    Cleric = 3
    Rogue = 4
    Warlock = 5
    Bard = 6


class ClassesSchema(BaseModel):
    character_class: CharacterClassEnum
    health: int
