"use client";

/// <reference path="../../types/youtube.d.ts" />

import { useEffect, useState, useRef, useCallback } from "react";
function getKeyByValue(object: Record<string, number>, value: number) {
  return Object.keys(object).find((key) => object[key] === value);
}

const useYoutubePlayer = (videoId: string, elementId?: string) => {
  const playerElementId = elementId || "video-player";
  const playerRef = useRef<YTPlayer | null>(null);
  const [playerState, setPlayerState] = useState({
    isReady: false,
    currentTime: 0,
    videoData: {
      title: "",
    },
    videoStateLabel: "",
    videoStateValue: -1,
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
    handleOnStateChange();
  }, []);

  const handleOnStateChange = useCallback(() => {
    const YTPlayerStateObj = window.YT.PlayerState;
    const playerInfo = playerRef.current?.playerInfo;
    const videoData = playerRef.current?.getVideoData();
    const currentTime = playerRef.current?.getCurrentTime();
    const currentStateValue = playerInfo?.playerState;
    const videoState =
      currentStateValue !== undefined
        ? getKeyByValue(YTPlayerStateObj, currentStateValue)
        : undefined;
    console.log(`currentTime: ${currentTime}`);
    console.log(`videoState: ${videoState}`);
    console.log(`currentStateValue: ${currentStateValue}`);

    // Log the video data for debugging
    if (videoData) {
      console.log("Video Data:", videoData);
    }

    setPlayerState((prevState) => ({
      ...prevState,
      videoData: videoData || prevState.videoData,
      currentTime: currentTime ?? prevState.currentTime,
      videoStateLabel: videoState || prevState.videoStateLabel,
      videoStateValue: currentStateValue ?? prevState.videoStateValue,
    }));

    console.log("Player Event:", event);
    console.log("Player State:", YTPlayerStateObj);
  }, []);

  return playerState;
};
export default useYoutubePlayer;
