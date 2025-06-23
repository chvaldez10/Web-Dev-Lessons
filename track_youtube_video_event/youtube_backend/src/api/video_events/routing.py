from pydantic import BaseModel
from fastapi import APIRouter, Request
from typing import Optional

router = APIRouter()

class VideoPlayerState(BaseModel):
    is_ready: bool
    video_id: str
    video_title: str
    current_time: float
    video_state_label: str
    video_state_value: int
    
@router.post("/")
def create_video_event(request: Request, payload: VideoPlayerState):
    data = payload.model_dump()
    headers = request.headers
    referer = headers.get("referer")
    print(referer)
    print(payload)
    return payload

@router.get("/")
def get_video_event(payload: VideoPlayerState):
    data = payload.model_dump()
    print(data)
    return {"message": "Hello, World!"}