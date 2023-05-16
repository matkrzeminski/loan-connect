import os


def create_db_url():
    user = os.environ.get("DB_USER")
    password = os.environ.get("DB_PASSWORD")
    host = os.environ.get("DB_HOST")
    port = os.environ.get("DB_PORT")
    db = os.environ.get("DB_NAME")
    return f"postgresql+psycopg2://{user}:{password}@{host}:{port}/{db}"
