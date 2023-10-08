from schemas.classes import *

"""- Red - Barbarian
- Orange - Ranger
- Green - Druid
- Yellow - Cleric
- Blue - Rogue
- Purple - Warlock"""


class ClassesService:

    def __init__(self) -> None:
        pass

    @staticmethod
    def get_class(class_enum: CharacterClassEnum) -> ClassesSchema:
        """Get classes by ID."""

        classes_list = [
            {
                "character_class": CharacterClassEnum.Barbarian,
                "health": 140
            },
            {
                "character_class": CharacterClassEnum.Ranger,
                "health": 140
            },
            {
                "character_class": CharacterClassEnum.Druid,
                "health": 140
            },
            {
                "character_class": CharacterClassEnum.Cleric,
                "health": 140
            },
            {
                "character_class": CharacterClassEnum.Rogue,
                "health": 140
            },
            {
                "character_class": CharacterClassEnum.Warlock,
                "health": 140
            },
            {
                "character_class": CharacterClassEnum.Bard,
                "health": 140
            },
        ]

        return ClassesSchema(**classes_list[class_enum.value])
