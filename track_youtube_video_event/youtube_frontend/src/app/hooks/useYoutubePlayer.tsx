"use client";

import { useEffect, useState, useRef, useCallback } from "react";

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
          autoplay: number;
          controls: number;
          disablekb: number;
          fs: number;
          rel: number;
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
      title: string;
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
  }

  interface PlayerEvent {
    target: {
      player: YTPlayer;
    };
  }
}

const useYoutubePlayer = (videoId: string, elementId?: string) => {
  const playerElementId = elementId || "video-player";
  const playerRef = useRef<YTPlayer | null>(null);
  const [playerState, setPlayerState] = useState({
    isReady: false,
    currentTime: 0,
  });

  useEffect(() => {
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = () => {
      const videoOptions = {
        height: "390",
        width: "640",
        videoId: videoId,
        playerVars: {
          autoplay: 1,
          controls: 0,
          disablekb: 1,
          fs: 0,
          rel: 0,
        },
        events: {
          onReady: handleOnReady,
          onStateChange: handleOnStateChange,
        },
      };

      playerRef.current = new window.YT.Player(playerElementId, videoOptions);
    };
  }, [videoId, playerElementId]);

  const handleOnReady = useCallback((event: PlayerEvent) => {
    setPlayerState({ ...playerState, isReady: true });
    console.log(event);
  }, []);

  const handleOnStateChange = useCallback((event: PlayerEvent) => {
    const YTPlayerStateObj = window.YT.PlayerState;
    const videoData = playerRef.current?.getVideoData();
    const currentTime = playerRef.current?.getCurrentTime();
    console.log(currentTime);

    // Log the video data for debugging
    if (videoData) {
      console.log("Video Data:", videoData);
    }

    console.log("Player Event:", event);
    console.log("Player State:", YTPlayerStateObj);
  }, []);

  return playerState;
};
export default useYoutubePlayer;
