"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    onYouTubeIframeAPIReady: () => void;
    YT: {
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
          // Optionally add events if you use them
        }
      ) => void;
    };
  }
}

const useYoutubePlayer = (videoId: string, elementId?: string) => {
  const playerElementId = elementId || "video-player";

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
        // events: {
        //   onReady: (event: YT.PlayerEvent) => {
        //     console.log(event);
        //   },
        // },
      };

      new window.YT.Player(playerElementId, videoOptions);
    };
  }, [videoId]);
  return "";
};
export default useYoutubePlayer;
