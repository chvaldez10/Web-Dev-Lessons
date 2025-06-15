/**
 * Extracts the video ID and time from a YouTube URL
 * @param url - The YouTube URL to extract the video ID and time from
 * @returns An object with the video ID and time
 */
export default function extractYouTubeInfo(url: string) {
  // Extract video ID
  const videoIdMatch = url.match(/[?&]v=([^&]+)/);
  const videoId = videoIdMatch ? videoIdMatch[1] : null;

  // Extract time parameter (in seconds)
  const timeMatch = url.match(/[?&]t=(\d+)/);
  const time = timeMatch ? parseInt(timeMatch[1]) : 0;

  return {
    videoId,
    time,
  };
}
