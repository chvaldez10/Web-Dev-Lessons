"use client";

import extractYouTubeInfo from "@/lib/extractYouTubeInfo";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function YouTubeUrlForm() {
  const router = useRouter();
  const [url, setUrl] = useState<string>("");
  const [videoData, setVideoData] = useState({
    videoId: "",
    time: "",
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!videoData.videoId) {
      alert("Please enter a valid YouTube URL");
    } else {
      router.push(`/watch?v=${videoData.videoId}&t=${videoData.time}`);
    }
  };

  const handleUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const changedUrl = event.target.value ? event.target.value : "";
    setUrl(changedUrl);
    const { videoId, time } = extractYouTubeInfo(changedUrl);
    setVideoData({
      videoId: videoId || "",
      time: time ? time.toString() : "0",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="w-full">
        <div className="relative w-full">
          <div className="flex items-center w-full rounded-xl border-2 border-gray-200 hover:border-red-500 focus-within:border-red-500 transition-all duration-200 bg-white">
            <input
              id="url"
              name="url"
              onChange={handleUrlChange}
              value={url}
              type="text"
              required
              placeholder="Paste your YouTube URL here..."
              className="block w-full py-4 px-6 text-lg text-gray-900 placeholder:text-gray-400 focus:outline-none rounded-xl"
            />
            <button
              type="submit"
              className="absolute right-2 bg-red-600 hover:bg-red-700 text-white font-semibold py-2.5 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg"
            >
              Play
            </button>
          </div>
          {videoData.videoId && (
            <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200 text-sm text-gray-600">
              <p>Video ID: {videoData.videoId}</p>
              <p>Start Time: {videoData.time}s</p>
            </div>
          )}
        </div>
      </div>
    </form>
  );
}
