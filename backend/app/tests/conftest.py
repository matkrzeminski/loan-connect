from typing import Any, Callable, Dict

import pytest
from app.db.config import get_db
from app.db.models import Base, User
from app.main import app
from app.tests.db import TestSessionLocal, engine
from app.tests.factories import UserFactory
from fastapi.testclient import TestClient


@pytest.fixture()
def session() -> TestSessionLocal:
    Base.metadata.drop_all(bind=engine)
    Base.metadata.create_all(bind=engine)
    db = TestSessionLocal()
    try:
        yield db
    finally:
        db.close()


@pytest.fixture()
def client(session: TestSessionLocal) -> TestClient:
    def _get_db():
        try:
            yield session
        finally:
            session.close()

    app.dependency_overrides[get_db] = _get_db
    yield TestClient(app)


@pytest.fixture(autouse=True)
def cleanup():
    yield
    TestSessionLocal.remove()
    engine.dispose()


@pytest.fixture()
def user() -> Callable[[Dict[str, Any]], User]:
    def _create_user(**kwargs):
        return UserFactory(**kwargs)

    return _create_user
