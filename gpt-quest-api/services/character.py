from services.classes import CharacterClassEnum, ClassesService
from utils.firebase_client import FirebaseClient
from utils.firestore_dao import FirestoreDAO


class CharacterService:
    def __init__(self, firebase_client: FirebaseClient, classes_service: ClassesService):
        self.firebase_client = firebase_client
        self.classes_service = classes_service

    def create_character(self, character_class: CharacterClassEnum):
        character = self.classes_service.get_class(character_class)
        created_character = self.firebase_client.create_character(character)
        if created_character is None:
            raise Exception("Character not created properly")

        return created_character.get("id")


def get_character_service():
    firestore_dao = FirestoreDAO("firebase_creds.json")
    firebase_client = FirebaseClient(firestore_dao)
    classes_service = ClassesService()
    return CharacterService(firebase_client, classes_service)


if __name__ == "__main__":
    character_service = get_character_service()
    print(character_service.create_character(CharacterClassEnum.Warlock))
