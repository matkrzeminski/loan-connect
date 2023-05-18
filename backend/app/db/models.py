from app.db.config import Base
from app.db.mixins import IdMixin, TimeStampMixin
from sqlalchemy import Boolean, Column, String


class User(IdMixin, TimeStampMixin):
    __tablename__ = "users"
    email = Column(String, unique=True, index=True)
    password = Column(String, nullable=False)
    is_active = Column(Boolean, default=True)
