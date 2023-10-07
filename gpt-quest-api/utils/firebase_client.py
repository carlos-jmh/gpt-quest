import datetime

from services.classes import ClassesService
from schemas.classes import ClassesSchema
from utils.firestore_dao import FirestoreDAO
from google.cloud.firestore_v1.watch import Watch
from typing import Dict, Callable, Any

CHARACTERS_COLLECTION = "characters"
STORY_COLLECTION = "story"
STORY_ACTOIN_COLLECTOIN = "story_action"

class FirebaseClient:
    """
    A service class for handling Firebase Firestore operations related to user connections.

    This class provides methods to connect users and manage user-related functionality.
    """

    def __init__(self, firebase_dao: FirestoreDAO) -> None:
        self.firebase_dao = firebase_dao

    #Create Character
    def create_character(self, character: ClassesSchema) -> dict[ClassesSchema, Any] | None:
        character_data = {"character": character}
        created_character = self.firebase_dao.add(CHARACTERS_COLLECTION, character_data)
        return created_character.to_dict()

    #Create story
    def create_story(self, intial, from_gpt) -> dict[str, Any] | None:
        story_data = {
            "intial_description": intial,
            "from": from_gpt,
            "createdAt": datetime.datetime.now()
        }
    #Create Story Action

        created_message = self.firebase_dao.add(MESSAGES_COLLECTION, message_data)
        return created_message.to_dict()

    def subscribe_to_messages(self, callback: Callable) -> Watch:
        subscription = self.firebase_dao.subscribe_to_collection(MESSAGES_COLLECTION, callback)
        return subscription


if __name__ == "__main__":
    FIRESTORE_DAO = FirestoreDAO("firestore_creds.json")
    FIREBASE_CLIENT = FirebaseClient(FIRESTORE_DAO)
    Classes = ClassesService()
    FIREBASE_CLIENT.create_character(Classes.get_class(1).__dict__)