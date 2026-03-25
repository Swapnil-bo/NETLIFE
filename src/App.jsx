import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Netflix-style top bar */}
      <nav className="px-8 py-4 flex items-center justify-between">
        <h1 className="text-red-600 text-3xl font-black tracking-wider">NETLIFE</h1>
        <span className="text-gray-400 text-sm">Your Life. Dramatized.</span>
      </nav>

      {/* Hero Section */}
      <div className="relative flex flex-col items-center justify-center text-center px-4 py-24">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-90 z-0" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="text-red-500 uppercase tracking-widest text-sm font-semibold mb-4">
            Netflix Original Series
          </p>
          <h2 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            Your Life as a
            <span className="text-red-600"> Netflix Series</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-xl mx-auto">
            Enter a few details about your life. We'll turn it into a full Netflix show — title, cast, episodes, trailer and all.
          </p>
          <button className="bg-red-600 hover:bg-red-700 transition-colors text-white font-bold text-lg px-10 py-4 rounded">
            🎬 Create My Show
          </button>
          <p className="text-gray-600 text-xs mt-4">Powered by local AI · No data leaves your device</p>
        </div>
      </div>
    </div>
  )
}

export default App