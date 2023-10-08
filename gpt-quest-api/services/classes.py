from schemas.classes import ClassesSchema
from enum import Enum

"""- Red - Barbarian
- Orange - Ranger
- Green - Druid
- Yellow - Cleric
- Blue - Rogue
- Purple - Warlock"""


class CharacterClassEnum(Enum):
    Barbarian = 0
    Ranger = 1
    Druid = 2
    Cleric = 3
    Rogue = 4
    Warlock = 5
    Bard = 6


class ClassesService:

    def __init__(self) -> None:
        pass

    def get_class(self, class_enum: CharacterClassEnum) -> ClassesSchema:
        """Get classes by ID."""

        classes_list = [
            {
                "name": "Barbarian",
                "health": 140
            },
            {
                "name": "Ranger",
                "health": 140
            },
            {
                "name": "Druid",
                "health": 140
            },
            {
                "name": "Cleric",
                "health": 140
            },
            {
                "name": "Rogue",
                "health": 140
            },
            {
                "name": "Warlock",
                "health": 140
            },
            {
                "name": "Bard",
                "health": 140
            },
        ]

        return ClassesSchema(**classes_list[class_enum.value])
