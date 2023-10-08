import datetime
from services.classes import ClassesService
from schemas.classes import ClassesSchema
from schemas.story_components import InitialStory
from schemas.story_components import Item
from schemas.story_components import NewEvent
from utils.firestore_dao import FirestoreDAO
from google.cloud.firestore_v1.watch import Watch
from typing import Dict, Callable, Any

CHARACTERS_COLLECTION = "characters"
INITIAL_STORY_COLLECTION = "stories"



class FirebaseClient:
    """
    A service class for handling Firebase Firestore operations related to user connections.

    This class provides methods to connect users and manage user-related functionality.
    """

    def __init__(self, firebase_dao: FirestoreDAO) -> None:
        self.firebase_dao = firebase_dao

    # Create Character
    def create_character(self, character: ClassesSchema) -> dict[str, Any] | None:
        character_data = {"name": character.name, "health": character.health}
        created_character = self.firebase_dao.add(CHARACTERS_COLLECTION, character_data)
        return created_character.to_dict()

    # Create InitialString
    def create_initial_string(self, initial_string: str) -> dict[str, Any] | None:
        initial_string_data = {"initial_string": initial_string}
        created_initial_string = self.firebase_dao.add(INITIAL_STORY_COLLECTION, initial_string_data)
        return created_initial_string.to_dict()

    #Create InitialStory
    def create_initial_story(self, character_id:str, initial_story:InitialStory, ItemInput: list) -> dict[InitialStory, Any] | None:
        #item_data = {"item_name" :item.item_name, "item_type": item.item_type, "item_data": item.item_summary}
        initial_story.items = ItemInput
        initial_story_data = {"introduction": initial_story.initial_story, "character_id": character_id, "items": initial_story.items}
        created_initial_story = self.firebase_dao.add(INITIAL_STORY_COLLECTION, initial_story_data)
        return created_initial_story.to_dict()
    
    #Create Story Action
    def  add_event_to_story(self, storyid:str, new_event:NewEvent) -> dict[NewEvent, Any] | None:
        event_data = {"title": new_event.event_title, "prompt": new_event.prompt, "previous_event_summary": new_event.previous_event_summary}
        EVENT_COLLECTION = INITIAL_STORY_COLLECTION + "/" + storyid + "/events"
        created_event_story = self.firebase_dao.add(EVENT_COLLECTION, event_data)
        return created_event_story.to_dict()
    
    """def add_items_to_story(self, storyid:str, new_item:Item) -> dict[Item, Any] | None:
        item_data = {"item_name": new_item.item_name, "item_type": new_item.item_type, "item_summary": new_item.item_summary}
        ITEM_COLLECTION = INITIAL_STORY_COLLECTION + "/" + storyid"""
    


if __name__ == "__main__":
    FIRESTORE_DAO = FirestoreDAO("firestore_creds.json")
    FIREBASE_CLIENT = FirebaseClient(FIRESTORE_DAO)
    Classes = ClassesService()
    FIREBASE_CLIENT.create_character(Classes.get_class(1))