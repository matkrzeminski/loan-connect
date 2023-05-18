from app.schemas.user import User


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
