from app.db.config import Base
from sqlalchemy import Column, DateTime, Integer, func


class IdMixin(Base):
    __abstract__ = True
    id = Column(Integer, primary_key=True, index=True)


class TimeStampMixin(Base):
    __abstract__ = True
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())
