from services.classes import ClassesService
from schemas.classes import ClassesSchema
from schemas.story_components import InitialStory
from schemas.story_components import NewEvent, Event
from utils.firestore_dao import FirestoreDAO
from typing import Any

CHARACTERS_COLLECTION = "characters"
STORIES_COLLECTION = "stories"


class FirebaseClient:
    """
    A service class for handling Firebase Firestore operations related to user connections.

    This class provides methods to connect users and manage user-related functionality.
    """

    def __init__(self, firebase_dao: FirestoreDAO) -> None:
        self.firebase_dao = firebase_dao

    # Create Character
    def create_character(self, character: ClassesSchema) -> dict[str, Any] | None:
        character_data = {"character_class": character.character_class.value, "health": character.health}
        created_character = self.firebase_dao.add(CHARACTERS_COLLECTION, character_data)
        created_character_dict = created_character.to_dict()
        created_character_dict.update({"id": created_character.id})
        return created_character_dict

    # Create InitialString
    def create_initial_string(self, initial_string: str) -> dict[str, Any] | None:
        initial_string_data = {"initial_string": initial_string}
        created_initial_string = self.firebase_dao.add(STORIES_COLLECTION, initial_string_data)
        return created_initial_string.to_dict()

    # Create InitialStory
    # def create_initial_story(self, character_id: str, initial_story: InitialStory, ItemInput: list) -> dict[
    #                                                                                                        InitialStory, Any] | None:
    #     # item_data = {"item_name" :item.item_name, "item_type": item.item_type, "item_data": item.item_summary}
    #     initial_story.items = ItemInput
    #     initial_story_data = {"introduction": initial_story.initial_story, "character_id": character_id,
    #                           "items": initial_story.items}
    #     created_initial_story = self.firebase_dao.add(STORIES_COLLECTION, initial_story_data)
    #     created_initial_story_dict = created_initial_story.to_dict()
    #     created_initial_story_dict.update({"id": created_initial_story.id})
    #     return created_initial_story_dict

    def create_initial_story(self, initial_story: InitialStory) -> InitialStory:
        initial_story_data = initial_story.model_dump()
        created_initial_story = self.firebase_dao.add(STORIES_COLLECTION, initial_story_data)
        created_initial_story_dict = created_initial_story.to_dict()
        created_initial_story_dict.update({"id": created_initial_story.id})
        print(created_initial_story_dict)
        return InitialStory(**created_initial_story_dict)

    # Create Story Action
    def add_event_to_story(self, story_id: str, new_event: Event) -> Event:
        event_data = new_event.model_dump()
        EVENT_COLLECTION = STORIES_COLLECTION + "/" + story_id + "/events"
        created_event_story = self.firebase_dao.add(EVENT_COLLECTION, event_data)
        created_event_story_dict = created_event_story.to_dict()
        created_event_story_dict.update({"id": created_event_story.id})
        return Event(**created_event_story_dict)

    def get_story(self, story_id: str) -> dict[str, Any]:
        story = self.firebase_dao.read(STORIES_COLLECTION, story_id)
        if story is None:
            raise Exception("Story does not exist")
        story_dict = story.to_dict()
        story_dict.update({"id": story.id})
        return story_dict

    def get_character(self, character_id: str) -> dict[str, Any]:
        character = self.firebase_dao.read(CHARACTERS_COLLECTION, character_id)
        if character is None:
            raise Exception("Character does not exist")
        character_dict = character.to_dict()
        character_dict.update({"id": character.id})
        return character_dict

    def get_events(self, story_id) -> list[dict[str, Any]]:
        events = self.firebase_dao.query(
            collection_path=STORIES_COLLECTION + "/" + story_id + "/events",
            order_by_field="iteration",
            descending=True,
            limit=1)

        events_dict = []
        for event in events:
            events_dict.append(event.to_dict())

        return events_dict

    """def add_items_to_story(self, storyid:str, new_item:Item) -> dict[Item, Any] | None:
        item_data = {"item_name": new_item.item_name, "item_type": new_item.item_type, "item_summary": new_item.item_summary}
        ITEM_COLLECTION = INITIAL_STORY_COLLECTION + "/" + storyid"""


if __name__ == "__main__":
    FIRESTORE_DAO = FirestoreDAO("firestore_creds.json")
    FIREBASE_CLIENT = FirebaseClient(FIRESTORE_DAO)
    Classes = ClassesService()
    FIREBASE_CLIENT.create_character(Classes.get_class(1))
