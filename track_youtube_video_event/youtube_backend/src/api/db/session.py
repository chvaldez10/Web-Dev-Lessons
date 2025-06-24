import os
import sqlmodel
from sqlmodel import SQLModel, Session
import timescaledb
from timescaledb import create_engine

# Import models to ensure they are registered with SQLModel
from api.video_events.models import YouTubeVideoWatchEvent, YouTubePlayerState

DATABASE_URL = os.getenv("DATABASE_URL")
if not DATABASE_URL:
    raise ValueError("DATABASE_URL is not set")

engine = sqlmodel.create_engine(DATABASE_URL, timezone="UTC")

def init_db():
    SQLModel.metadata.create_all(engine)
    timescaledb.metadata.create_all(engine)

def get_session():
    with Session(engine) as session:
        yield session