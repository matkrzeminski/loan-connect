import factory.alchemy
from app.db.models import User
from app.tests.db import TestSessionLocal


class UserFactory(factory.alchemy.SQLAlchemyModelFactory):
    class Meta:
        model = User
        sqlalchemy_session = TestSessionLocal

    email = factory.Faker("email")
    password = factory.Faker("password")
