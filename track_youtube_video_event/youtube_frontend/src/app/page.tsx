export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="text-center p-8">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Welcome to Our Platform
        </h1>
        <p className="text-xl text-white mb-8">
          Discover amazing content and start your journey today
        </p>
        <a
          href="http://localhost:3000/watch?v=EDnwWcFpObo"
          className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-lg"
        >
          Watch Video
        </a>
      </div>
    </div>
  );
}
