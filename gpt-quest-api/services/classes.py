from schemas.classes import ClassesSchema

"""- Red - Barbarian
- Orange - Ranger
- Green - Druid
- Yellow - Cleric
- Blue - Rogue
- Purple - Warlock"""

class ClassesService:

    def __init__(self) -> None:
        pass

    def get_class(self, classes_id) -> ClassesSchema:
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

        return ClassesSchema(**classes_list[classes_id])