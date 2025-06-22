from pydantic import BaseModel
from fastapi import APIRouter

router = APIRouter()

class YoutubeVideoData(BaseModel):
    title: str

class VideoPlayerState(BaseModel):
    is_ready: bool
    video_id: str
    video_data: YoutubeVideoData
    current_time: float | int
    video_state_label: str
    video_state_value: int
    
@router.post("/")
def create_video_event(payload: VideoPlayerState):
    data = payload.model_dump()
    print(payload)
    return payload

@router.get("/")
def get_video_event(payload: VideoPlayerState):
    data = payload.model_dump()
    print(data)
    return {"message": "Hello, World!"}