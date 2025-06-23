from sqlmodel import SQLModel, Field
from datetime import datetime

class YouTubeVideoWatchEvent(SQLModel, table=True):
    id: int = Field(primary_key=True)
    is_ready: bool
    video_id: str = Field(index=True)
    video_title: str
    current_time: float
    video_state_label: str
    video_state_value: int

class YouTubePlayerState(SQLModel, table=True):
    is_ready: bool
    video_id: str = Field(index=True)
    video_title: str
    current_time: float
    video_state_label: str
    video_state_value: int