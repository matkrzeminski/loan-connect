from sqlalchemy import create_engine, orm

engine = create_engine("sqlite:///:memory", echo=True)

TestSessionLocal = orm.scoped_session(orm.sessionmaker(bind=engine))
