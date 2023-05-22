from datetime import datetime, timedelta

from app.auth.auth import REFRESH_TOKEN_EXPIRE_DAYS
from app.schemas.user import User
from freezegun import freeze_time


def test_create_user(client) -> None:
    response = client.post(
        "/api/v1/users",
        json={
            "email": "test@test.com",
            "password": "password",
        },
    )
    user = User(**response.json())
    assert response.status_code == 201
    assert user.email == "test@test.com"


def test_create_user_already_exists(client, user) -> None:
    existing_user = user()
    response = client.post(
        "/api/v1/users", json={"email": existing_user.email, "password": "password"}
    )
    assert response.status_code == 400
    assert "Invalid email." in response.json()["detail"]


def test_login_for_access_token(client, user) -> None:
    existing_user = user(password="password")
    response = client.post(
        "/api/v1/token",
        json={
            "email": existing_user.email,
            "password": "password",
        },
    )
    assert response.status_code == 200
    assert "access_token" in response.json()
    assert "refresh_token" in response.json()
    assert "bearer" in response.json()["token_type"]


def test_refresh_token(client, user) -> None:
    existing_user = user(password="password")
    response = client.post(
        "/api/v1/token",
        json={"email": existing_user.email, "password": "password"},
    )
    assert response.status_code == 200
    assert "refresh_token" in response.json()
    refresh_token = response.json().get("refresh_token")
    response = client.post(
        "/api/v1/token/refresh", json={"refresh_token": refresh_token}
    )
    assert response.status_code == 200
    assert "access_token" in response.json()
    assert "bearer" in response.json()["token_type"]


def test_login_invalid_credentials(client) -> None:
    response = client.post(
        "/api/v1/token",
        json={
            "email": "test@test.com",
            "password": "password",
        },
    )
    assert response.status_code == 401
    assert "Incorrect email or password." in response.json()["detail"]


def test_invalid_refresh_token(client) -> None:
    response = client.post(
        "/api/v1/token/refresh",
        json={
            "refresh_token": "invalid",
        },
    )
    assert response.status_code == 401
    assert "Could not validate credentials" in response.json()["detail"]


def test_refresh_token_expired(client, user) -> None:
    existing_user = user(password="password")
    response = client.post(
        "/api/v1/token", json={"email": existing_user.email, "password": "password"}
    )
    assert response.status_code == 200
    assert "refresh_token" in response.json()
    refresh_token = response.json().get("refresh_token")
    with freeze_time(
        datetime.utcnow() + timedelta(days=REFRESH_TOKEN_EXPIRE_DAYS, seconds=1)
    ):
        response = client.post(
            "/api/v1/token/refresh", json={"refresh_token": refresh_token}
        )
        assert response.status_code == 401
        assert "Could not validate credentials" in response.json()["detail"]
