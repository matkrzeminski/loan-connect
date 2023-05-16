from app.utils.create_db_url import create_db_url
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base

engine = create_engine(create_db_url(), echo=True)
Base = declarative_base()
