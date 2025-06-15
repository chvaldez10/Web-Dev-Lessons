"use client";

import { useSearchParams } from "next/navigation";
import useYoutubePlayer from "../../hooks/useYoutubePlayer";

const WatchPage: React.FC = () => {
  const searchParams = useSearchParams();
  const { v: videoId, t: startTime } = Object.fromEntries(searchParams);
  const elementId = "video-player";
  const actualStartTime = startTime ? parseInt(startTime) : 0;
  const playerState = useYoutubePlayer(videoId, elementId, actualStartTime);

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
