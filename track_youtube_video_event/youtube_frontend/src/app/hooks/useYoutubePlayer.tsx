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

const useYoutubePlayer = (videoId: string, elementId?: string) => {
  const playerElementId = elementId || "video-player";
  const playerRef = useRef<YTPlayer | null>(null);
  const [playerState, setPlayerState] = useState<PlayerState>({
    is_ready: false,
    current_time: 0,
    video_title: "",
    video_state_label: "",
    video_state_value: -1,
  });

  const handleOnStateChange = useCallback(() => {
    const YTPlayerStateObj = window.YT.PlayerState;
    const playerInfo = playerRef.current?.playerInfo;
    const videoData = playerRef.current?.getVideoData();
    const currentTimeSeconds = playerRef.current?.getCurrentTime() ?? 0;
    const currentStateValue = playerInfo?.playerState ?? -1;
    const videoStateLabel =
      currentStateValue !== -1
        ? getKeyByValue(YTPlayerStateObj, currentStateValue)
        : undefined;

    setPlayerState((prevState) => ({
      ...prevState,
      video_title: videoData?.video_title || "",
      current_time: currentTimeSeconds,
      video_state_label: videoStateLabel || "",
      video_state_value: currentStateValue,
    }));
  }, []);

  const handleOnReady = useCallback(() => {
    setPlayerState((prevState) => ({ ...prevState, isReady: true }));
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
  }, [videoId, handleOnReady, handleOnStateChange, playerElementId]);

  return playerState;
};
export default useYoutubePlayer;
