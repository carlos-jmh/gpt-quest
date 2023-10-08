import firebase_admin
from firebase_admin import credentials, firestore
from google.cloud.firestore_v1.base_document import DocumentSnapshot
from google.cloud.firestore_v1.client import Client
from google.cloud import firestore as FirestoreType
from typing import Dict, List


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

    def query(self, collection_path: str,
              order_by_field: str,
              descending: bool = True,
              limit: int = 1) -> List[DocumentSnapshot]:
        db = self.get_client()
        order_direction = FirestoreType.Query.DESCENDING if descending else FirestoreType.Query.ASCENDING
        query = db.collection(collection_path).order_by(order_by_field, direction=order_direction).limit(limit)
        documents = query.stream()
        return list(documents)

    def update(self, collection_path: str, document_id: str, data: Dict) -> DocumentSnapshot:
        db = self.get_client()
        doc_ref = db.collection(collection_path).document(document_id)
        doc_ref.update(data)
        return doc_ref.get()

    def delete(self, collection_path: str, document_id: str) -> None:
        db = self.get_client()
        doc_ref = db.collection(collection_path).document(document_id)
        doc_ref.delete()


if __name__ == "__main__":
    pass
