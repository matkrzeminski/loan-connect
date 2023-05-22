import factory.alchemy
from app.db.models import User
from app.tests.db import TestSessionLocal
from app.utils.password import _hash


class UserFactory(factory.alchemy.SQLAlchemyModelFactory):
    class Meta:
        model = User
        sqlalchemy_session = TestSessionLocal

    email = factory.Faker("email")
    password = factory.Faker("password")

    @classmethod
    def _create(cls, model_class, *args, **kwargs):
        password = kwargs.pop("password", None)
        kwargs["password"] = _hash(password)
        user = super()._create(model_class, *args, **kwargs)
        cls._meta.sqlalchemy_session.commit()
        return user
