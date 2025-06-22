"use client";

import { useSearchParams } from "next/navigation";
import useYoutubePlayer from "../../hooks/useYoutubePlayer";
import { useEffect, useCallback } from "react";

const FAST_API_ENDPOINT = "http://localhost:8002/api/video-events";

interface PlayerState {
  is_ready: boolean;
  current_time: number;
  video_title: string;
  video_state_label: string;
  video_state_value: number;
}

const WatchPage: React.FC = () => {
  const searchParams = useSearchParams();
  const { v: videoId, t: startTime } = Object.fromEntries(searchParams);
  const elementId = "video-player";
  const actualStartTime = startTime ? parseInt(startTime) : 0;
  const playerState = useYoutubePlayer(videoId, elementId, actualStartTime);

  const updateBackend = useCallback(
    async (currentPlayerState: PlayerState) => {
      const headers = {
        "Content-Type": "application/json",
      };

      const backendData = {
        ...currentPlayerState,
        video_id: videoId,
        video_data: {
          title: currentPlayerState.video_title,
        },
      };

      const response = await fetch(FAST_API_ENDPOINT, {
        method: "POST",
        headers,
        body: JSON.stringify(backendData),
      });

      console.log(`response`, response);

      if (!response.ok) {
        console.log(`something went wrong. response:`, response);
      }
    },
    [videoId]
  );

  useEffect(() => {
    if (!playerState.is_ready) return;
    if (playerState.video_state_label === "CUED") return;
    updateBackend(playerState);
  }, [playerState, updateBackend]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg overflow-hidden">
        <div id="video-container" className="relative w-full pt-[56.25%]">
          <div
            id={elementId}
            className="absolute top-0 left-0 w-full h-full"
          ></div>
        </div>
      </div>
      <h1 className="mt-4 text-xl font-semibold text-gray-800">
        Is ready: {playerState.is_ready ? "✅ Yes" : "❌ No"}
      </h1>
    </div>
  );
};

export default WatchPage;
