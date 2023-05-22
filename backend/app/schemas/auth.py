from pydantic import BaseModel, EmailStr


class AccessToken(BaseModel):
    access_token: str
    token_type: str = "bearer"


class RefreshToken(AccessToken):
    refresh_token: str


class RefreshTokenIn(BaseModel):
    refresh_token: str


class TokenData(BaseModel):
    email: EmailStr | None = None


class OAuth2PasswordRequestFormEmail(BaseModel):
    email: EmailStr
    password: str
