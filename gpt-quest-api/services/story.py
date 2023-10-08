from utils.openai_client import OpenAIClient, get_openai_client
from utils.firebase_client import FirebaseClient
from utils.firestore_dao import FirestoreDAO


class StoryService:

    def __init__(self, openai_client: OpenAIClient, firebase_client: FirebaseClient):
        self.openai_client = openai_client
        self.firebase_client = firebase_client

    def initialize_story(self, character_id: str):
        pass

    def take_action(self):
        pass


def get_story_service():
    openai_client = get_openai_client()
    firestore_dao = FirestoreDAO("firebase_creds.json")
    firebase_client = FirebaseClient(firestore_dao)
    return StoryService(openai_client, firebase_client)


if __name__ == '__main__':
    pass
