# external imports
from fastapi import APIRouter, Request, Depends
from sqlmodel import Session

# local imports
from .models import YouTubePlayerState, YouTubeVideoWatchEvent
from api.db.session import get_session

router = APIRouter()

@router.post("/", response_model=YouTubeVideoWatchEvent)
def create_video_event(request: Request, payload: YouTubePlayerState, session: Session = Depends(get_session)):
    headers = request.headers
    referer = headers.get("referer")
    data = payload.model_dump()
    
    obj = YouTubeVideoWatchEvent(
        **data
    )
    obj.referer = referer
    
    session.add(obj)
    session.commit()
    session.refresh(obj)
    
    return obj