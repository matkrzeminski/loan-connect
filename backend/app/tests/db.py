from app.utils.create_db_url import create_db_url
from sqlalchemy import create_engine, orm

engine = create_engine(create_db_url())

TestSessionLocal = orm.scoped_session(orm.sessionmaker(bind=engine))
