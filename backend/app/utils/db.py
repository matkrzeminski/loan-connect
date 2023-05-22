from app.db import models
from sqlalchemy.orm import Session


def get_user_by_email(email: str, db: Session) -> models.User:
    return db.query(models.User).filter(models.User.email == email).first()
