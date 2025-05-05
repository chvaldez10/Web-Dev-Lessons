"use client";

import { useSearchParams } from "next/navigation";

export default function WatchPage() {
  const searchParams = useSearchParams();
  const { v: videoId } = Object.fromEntries(searchParams);
  console.log(videoId);
  if (!videoId) {
    return <div>No URL provided</div>;
  }

  return (
    <div>
      <h1>WatchPage</h1>

      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
}
