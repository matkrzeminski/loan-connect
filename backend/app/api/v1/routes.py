from app.auth.auth import authenticate_user, create_token, verify_token
from app.db import models
from app.db.config import get_db
from app.schemas.auth import (
    AccessToken,
    OAuth2PasswordRequestFormEmail,
    RefreshToken,
    RefreshTokenIn,
)
from app.schemas.user import User, UserCreate
from app.utils.password import _hash as hash_password
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

router = APIRouter()


@router.post("/users", status_code=status.HTTP_201_CREATED, tags=["users"])
async def create_user(user: UserCreate, db: Session = Depends(get_db)) -> User:
    if db.query(models.User).filter(models.User.email == user.email).first():
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST, detail="Invalid email."
        )

    password = hash_password(user.password)
    user.password = password
    new_user = models.User(**user.dict())
    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    return new_user


@router.post("/token", tags=["auth"])
async def login_for_access_token(
    form_data: OAuth2PasswordRequestFormEmail, db: Session = Depends(get_db)
) -> RefreshToken:
    user = authenticate_user(form_data.email, form_data.password, db)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect email or password.",
            headers={"WWW-Authenticate": "Bearer"},
        )
    access_token = create_token(data={"sub": user.email})
    refresh_token = create_token(data={"sub": user.email}, _type="refresh")
    return RefreshToken(access_token=access_token, refresh_token=refresh_token)


@router.post("/token/refresh", tags=["auth"])
async def refresh_token(
    refresh_token: RefreshTokenIn, db: Session = Depends(get_db)
) -> AccessToken:
    user = verify_token(refresh_token.refresh_token, db)
    access_token = create_token(data={"sub": user.email})
    return AccessToken(access_token=access_token)
