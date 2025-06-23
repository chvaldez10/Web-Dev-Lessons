# external imports
from fastapi import APIRouter, Request, Depends
from sqlmodel import Session

# local imports
from .models import YouTubePlayerState
from api.db.session import get_session

router = APIRouter()

@router.post("/")
def create_video_event(request: Request, payload: YouTubePlayerState, session: Session = Depends(get_session)):
    data = payload.model_dump()
    headers = request.headers
    referer = headers.get("referer")
    print(referer)
    print(payload)
    return payload
