import { useState, useEffect } from 'react'

const MESSAGES = [
  "Bribing the writers' room...",
  "Casting your demons...",
  "Negotiating with Netflix lawyers...",
  "Dramatizing your life choices...",
  "Composing the theme song...",
  "Adding unnecessary plot twists...",
  "Greenlit. Producing your series...",
  "Almost ready for your premiere...",
]

function LoadingScreen() {
  const [msgIndex, setMsgIndex] = useState(0)
  const [fade, setFade] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false)
      setTimeout(() => {
        setMsgIndex(i => (i + 1) % MESSAGES.length)
        setFade(true)
      }, 400)
    }, 2200)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="loading-overlay">
      <div className="loading-inner">
        {/* Spinner */}
        <div className="loading-spinner">
          <div className="spinner-ring" />
          <span className="spinner-icon">🎬</span>
        </div>

        {/* Message */}
        <p className={`loading-msg ${fade ? 'msg-in' : 'msg-out'}`}>
          {MESSAGES[msgIndex]}
        </p>

        {/* Progress bar */}
        <div className="loading-bar">
          <div className="loading-bar-fill" />
        </div>

        <p className="loading-sub">
          Mistral 7B is writing your life story...
        </p>
      </div>
    </div>
  )
}

export default LoadingScreen