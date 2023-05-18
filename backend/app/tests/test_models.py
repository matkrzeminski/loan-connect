from app.db.models import User
from app.utils.password import verify


def test_user_password_is_hashed(client, session) -> None:
    response = client.post(
        "/api/v1/users/", json={"email": "test@test.com", "password": "password"}
    ).json()
    user = session.query(User).filter(User.id == response["id"]).first()
    assert user.password != "password"
    assert verify("password", user.password)
