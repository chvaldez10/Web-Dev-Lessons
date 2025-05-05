"use client";

import { useSearchParams } from "next/navigation";
import useYoutubePlayer from "../hooks/useYoutubePlayer";

export default function WatchPage() {
  const searchParams = useSearchParams();
  const { v: videoId } = Object.fromEntries(searchParams);
  useYoutubePlayer(videoId);

  return (
    <div className="w-full h-full">
      <div id="video-container" className="relative w-full">
        <div className="relative w-full pt-[56.25%] ">
          <div
            id="video-player"
            className="absolute top-0 left-0 w-full h-full"
          ></div>
        </div>
      </div>
    </div>
  );
}
