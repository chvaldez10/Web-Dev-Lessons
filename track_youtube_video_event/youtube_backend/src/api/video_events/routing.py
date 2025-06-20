from pydantic import BaseModel
from fastapi import APIRouter

router = APIRouter()

class YoutubeVideoData(BaseModel):
    title: str

class VideoPlayerState(BaseModel):
    isReady: bool
    videoData: YoutubeVideoData
    currentTime:int
    videoStateLabel: str
    videoStateValue: str
    
@router.post("/")
def create_video_event(payload: VideoPlayerState):
    data = payload.model_dump()
    print(payload)
    return payload

@router.get("/")
def get_video_event():
    return {"message": "Hello, World!"}