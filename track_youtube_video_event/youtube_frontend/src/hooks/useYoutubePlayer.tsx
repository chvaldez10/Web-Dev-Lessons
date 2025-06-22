"use client";

/// <reference path="../../types/youtube.d.ts" />

import { useEffect, useState, useRef, useCallback } from "react";

interface PlayerState {
  is_ready: boolean;
  current_time: number;
  video_title: string;
  video_state_label: string;
  video_state_value: number;
}

function getKeyByValue(object: Record<string, number>, value: number) {
  return Object.keys(object).find((key) => object[key] === value);
}

const useYoutubePlayer = (
  videoId: string,
  elementId?: string,
  startTime: number = 200,
  interval: number = 1000
) => {
  const playerElementId = elementId || "video-player";
  const playerRef = useRef<YTPlayer | null>(null);
  const [playerState, setPlayerState] = useState<PlayerState>({
    is_ready: false,
    current_time: 0,
    video_title: "",
    video_state_label: "",
    video_state_value: -10,
  });

  const handleOnStateChange = useCallback(() => {
    // Only run on client side
    if (typeof window === "undefined" || !window.YT) return;

    const YTPlayerStateObj = window.YT.PlayerState;
    const playerInfo = playerRef.current?.playerInfo;
    const videoData = playerRef.current?.getVideoData();
    const currentTimeSeconds = playerRef.current?.getCurrentTime() ?? 0;
    const videoStateValue = playerInfo?.playerState ?? -1;
    const videoStateLabel = getKeyByValue(YTPlayerStateObj, videoStateValue);

    setPlayerState((prevState) => ({
      ...prevState,
      video_title: videoData?.title || "",
      current_time: currentTimeSeconds,
      video_state_label: videoStateLabel || "",
      video_state_value: videoStateValue,
    }));
  }, []);

  const handleOnReady = useCallback(() => {
    setPlayerState((prevState) => ({ ...prevState, is_ready: true }));
    handleOnStateChange();
  }, [handleOnStateChange]);

  // Load the YouTube IFrame API and embed the player
  useEffect(() => {
    const tag = document.createElement("script");
    const firstScriptTag = document.getElementsByTagName("script")[0];
    tag.src = "https://www.youtube.com/iframe_api";
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = () => {
      const videoOptions = {
        height: "390",
        width: "640",
        videoId: videoId,
        playerVars: {
          playsinline: 1,
          start: startTime,
        },
        events: {
          onReady: handleOnReady,
          onStateChange: handleOnStateChange,
        },
      };

      playerRef.current = new window.YT.Player(playerElementId, videoOptions);
    };
  }, [videoId, startTime, handleOnReady, handleOnStateChange, playerElementId]);

  useEffect(() => {
    if (playerRef.current) {
      const intervalId = setInterval(() => {
        handleOnStateChange();
      }, interval);
      return () => clearInterval(intervalId);
    }
  }, [handleOnStateChange, interval]);

  return playerState;
};
export default useYoutubePlayer;
