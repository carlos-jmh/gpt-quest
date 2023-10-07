import datetime

from firestore_dao import FirestoreDAO
from google.cloud.firestore_v1.watch import Watch
from typing import Dict, Callable, Any

USERS_COLLECTION = "users"
MESSAGES_COLLECTION = "messages"


class FirebaseClient:
    """
    A service class for handling Firebase Firestore operations related to user connections.

    This class provides methods to connect users and manage user-related functionality.
    """

    def __init__(self, firebase_dao: FirestoreDAO) -> None:
        self.firebase_dao = firebase_dao

    def create_user(self, username: str) -> dict[str, Any] | None:
        user_data = {"username": username}
        created_user = self.firebase_dao.add(USERS_COLLECTION, user_data)
        return created_user.to_dict()

    def create_message(self, message, from_user) -> dict[str, Any] | None:
        message_data = {
            "message": message,
            "from": from_user,
            "createdAt": datetime.datetime.now()
        }

        created_message = self.firebase_dao.add(MESSAGES_COLLECTION, message_data)
        return created_message.to_dict()

    def subscribe_to_messages(self, callback: Callable) -> Watch:
        subscription = self.firebase_dao.subscribe_to_collection(MESSAGES_COLLECTION, callback)
        return subscription


if __name__ == "__main__":
    pass