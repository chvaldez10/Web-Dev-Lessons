from pydantic import BaseModel
from fastapi import APIRouter, Request
from sqlmodel import SQLModel, Field
from typing import Optional

from .models import YouTubeVideoWatchEvent, YouTubePlayerState

router = APIRouter()

@router.post("/")
def create_video_event(request: Request, payload: YouTubePlayerState):
    data = payload.model_dump()
    headers = request.headers
    referer = headers.get("referer")
    print(referer)
    print(payload)
    return payload
