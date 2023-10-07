import firebase_admin
from firebase_admin import credentials, firestore
from google.cloud.firestore_v1.base_document import DocumentSnapshot
from google.cloud.firestore_v1.base_query import FieldFilter
from google.cloud.firestore_v1.client import Client
from google.cloud.firestore_v1.watch import Watch
from typing import Dict, Callable


class FirestoreDAO:
    """
    A Data Access Object (DAO) for Firebase Firestore interactions.

    This class encapsulates Firestore interactions, including initialization,
    data manipulation, and resource cleanup.
    """

    def __init__(self, credentials_path: str) -> None:
        self.credentials_path = credentials_path
        self.firebase_app = None
        self.firestore_client = None

    def _initialize_client(self) -> None:
        if self.firebase_app is None:
            creds = credentials.Certificate(self.credentials_path)
            self.firebase_app = firebase_admin.initialize_app(creds)

        if self.firestore_client is None:
            self.firestore_client = firestore.client()

    def close_app(self) -> None:
        if self.firebase_app:
            firebase_admin.delete_app(self.firebase_app)

    def get_client(self) -> Client:
        if self.firestore_client is None:
            self._initialize_client()
        return self.firestore_client

    def add(self, collection_path: str, data: Dict) -> DocumentSnapshot:
        db = self.get_client()
        doc_ref = db.collection(collection_path).document()
        doc_ref.create(data)
        return doc_ref.get()

    def read(self, collection_path: str, document_id: str) -> DocumentSnapshot | None:
        db = self.get_client()
        doc_ref = db.collection(collection_path).document(document_id)
        doc = doc_ref.get()
        if doc.exists:
            return doc
        else:
            return None

    def update(self, collection_path: str, document_id: str, data: Dict) -> DocumentSnapshot:
        db = self.get_client()
        doc_ref = db.collection(collection_path).document(document_id)
        doc_ref.update(data)
        return doc_ref.get()

    def delete(self, collection_path: str, document_id: str) -> None:
        db = self.get_client()
        doc_ref = db.collection(collection_path).document(document_id)
        doc_ref.delete()

    def subscribe_to_collection(self, collection_path: str, callback: Callable):
        db = self.get_client()
        collection_watch = db.collection(collection_path).on_snapshot(callback)
        return collection_watch


if __name__ == "__main__":
    pass