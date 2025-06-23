import os
import sqlmodel
from sqlmodel import SQLModel, Session

DATABASE_URL = os.getenv("DATABASE_URL")
if not DATABASE_URL:
    raise ValueError("DATABASE_URL is not set")

engine = sqlmodel.create_engine(DATABASE_URL)

def init_db():
    SQLModel.metadata.create_all(engine)

def get_session():
    with Session(engine) as session:
        yield session