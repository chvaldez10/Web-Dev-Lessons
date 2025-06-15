declare global {
  interface Window {
    onYouTubeIframeAPIReady: () => void;
    YT: YT;
  }
  interface YT {
    Player: new (
      elementId: string,
      options: {
        height: string;
        width: string;
        videoId: string;
        playerVars: {
          playsinline: number;
          start: number;
        };
        events: {
          onReady: (event: PlayerEvent) => void;
          onStateChange: (event: PlayerEvent) => void;
        };
      }
    ) => YTPlayer;
    PlayerState: {
      UNSTARTED: number;
      ENDED: number;
      PLAYING: number;
      PAUSED: number;
      BUFFERING: number;
      CUED: number;
    };
  }

  interface YTPlayer {
    getVideoData: () => {
      video_id: string;
      author: string;
      video_title: string;
      video_quality: string;
      video_quality_features: string[];
    };
    playVideo: () => void;
    pauseVideo: () => void;
    stopVideo: () => void;
    seekTo: (seconds: number, allowSeekAhead?: boolean) => void;
    getPlayerState: () => number;
    getCurrentTime: () => number;
    getDuration: () => number;
    playerInfo: {
      video_id: string;
      author: string;
      title: string;
      playerState: number;
    };
  }

  interface PlayerEvent {
    target: {
      player: YTPlayer;
    };
  }
}

export {};
