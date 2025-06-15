import YouTubeUrlForm from "@/components/YoutubeURLForm";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="flex flex-col items-center justify-center flex-1 w-full max-w-2xl px-4 py-12">
        <div className="mb-12 transform hover:scale-105 transition-transform duration-300">
          <div className="flex items-center space-x-3">
            <h1 className="text-7xl font-extrabold text-center bg-red-600 rounded-lg p-4 shadow-lg">
              <span className="text-white">YouTube</span>
            </h1>
            <h1 className="text-7xl font-extrabold text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600">
                Player
              </span>
            </h1>
          </div>
        </div>
        <main className="w-full bg-white rounded-2xl shadow-xl p-8 transform hover:shadow-2xl transition-shadow duration-300">
          <YouTubeUrlForm />
        </main>
      </div>
    </div>
  );
}
