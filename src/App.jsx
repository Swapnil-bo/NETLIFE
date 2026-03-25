import { useState, useEffect } from 'react'
import './App.css'
import InputForm from './components/InputForm'
import LoadingScreen from './components/LoadingScreen'
import { generateShowConcept } from './utils/ollama'

const TITLES = ["Drama", "Thriller", "Dark Comedy", "Mystery", "Crime Saga"]

function App() {
  const [genre, setGenre] = useState(0)
  const [visible, setVisible] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [loading, setLoading] = useState(false)
  const [showData, setShowData] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setGenre(g => (g + 1) % TITLES.length)
        setVisible(true)
      }, 400)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const handleFormSubmit = async (fields) => {
    setShowForm(false)
    setLoading(true)
    setError(null)
    try {
      const data = await generateShowConcept(fields)
      setShowData(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleReset = () => {
    setShowData(null)
    setError(null)
    setShowForm(false)
  }

  return (
    <div className="netlife-root">
      <div className="grain" />
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="blob blob-3" />

      <nav className="nav">
        <div className="logo"><span className="logo-n">N</span>ETLIFE</div>
        <div className="nav-right">
          {showData
            ? <button className="nav-tag" style={{cursor:'pointer'}} onClick={handleReset}>← New Show</button>
            : <span className="nav-tag">★ ORIGINAL SERIES</span>
          }
        </div>
      </nav>

      {/* Error banner */}
      {error && (
        <div className="error-banner">
          <span>⚠ {error}</span>
          <button onClick={() => setError(null)}>✕</button>
        </div>
      )}

      {/* Hero — only show when no output yet */}
      {!showData && (
        <main className="hero">
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            NOW STREAMING YOUR LIFE
            <span className="eyebrow-dot" />
          </div>
          <h1 className="headline">
            <span className="headline-top">Your Life as a</span>
            <span className="headline-bottom">
              <span className="red-stroke">Netflix</span> Series
            </span>
          </h1>
          <div className="genre-ticker">
            A{" "}
            <span className={`genre-word ${visible ? 'genre-in' : 'genre-out'}`}>
              {TITLES[genre]}
            </span>
            {" "}in the making
          </div>
          <p className="description">
            Drop a few details about your life. Our local AI transforms it into<br />
            a full Netflix concept — title, cast, episode guide, trailer script.
          </p>
          <div className="cta-group">
            <button className="cta-primary" onClick={() => setShowForm(true)}>
              <span className="cta-icon">▶</span>
              Create My Show
            </button>
            <button className="cta-secondary">See an Example</button>
          </div>
          <div className="trust-bar">
            <span>🔒 Runs 100% locally</span>
            <span className="trust-divider">·</span>
            <span>⚡ Powered by Mistral 7B</span>
            <span className="trust-divider">·</span>
            <span>🎬 No data leaves your device</span>
          </div>
        </main>
      )}

      {/* Output placeholder — next step */}
      {showData && (
        <div style={{color:'#fff', padding:'60px', textAlign:'center'}}>
          <p style={{color:'var(--red)', fontFamily:'Bebas Neue', fontSize:'2rem'}}>
            ✅ SHOW GENERATED!
          </p>
          <pre style={{color:'#666', fontSize:'0.7rem', marginTop:'20px', textAlign:'left', maxWidth:'600px', margin:'20px auto', overflow:'auto'}}>
            {JSON.stringify(showData, null, 2).slice(0, 500)}...
          </pre>
        </div>
      )}

      <div className="filmstrip">
        {Array.from({length: 20}).map((_, i) => (
          <div key={i} className="film-hole" />
        ))}
      </div>

      {showForm && <InputForm onSubmit={handleFormSubmit} />}
      {loading && <LoadingScreen />}
    </div>
  )
}

export default App