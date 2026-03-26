import { useState } from 'react'

const FIELDS = [
  {
    id: 'name',
    label: 'Your Name',
    type: 'input',
    placeholder: 'e.g. Swapnil Hazra',
    hint: 'The protagonist of this story.',
    icon: '◈',
  },
  {
    id: 'job',
    label: 'What Do You Do?',
    type: 'input',
    placeholder: 'e.g. AI Engineer building the future',
    hint: "Your character's world and obsession.",
    icon: '◉',
  },
  {
    id: 'city',
    label: 'Your City',
    type: 'input',
    placeholder: 'e.g. Chennai, India',
    hint: 'Every great show has a setting.',
    icon: '◎',
  },
  {
    id: 'quirk',
    label: 'Your Biggest Quirk or Trait',
    type: 'input',
    placeholder: 'e.g. Debugs code at 3am, talks to AI like a friend',
    hint: 'Your flaw makes you watchable.',
    icon: '◇',
  },
  {
    id: 'drama',
    label: 'One Dramatic Life Moment',
    type: 'textarea',
    placeholder: 'e.g. Quit a stable job to go all-in on AI with no safety net...',
    hint: 'This becomes your Season 1 inciting incident.',
    icon: '◆',
  },
]

function InputForm({ onSubmit }) {
  const [fields, setFields] = useState({
    name: '', job: '', city: '', quirk: '', drama: ''
  })
  const [errors, setErrors]   = useState({})
  const [focused, setFocused] = useState(null)
  const [active, setActive]   = useState(null)

  const handleChange = (e) => {
    setFields(prev => ({ ...prev, [e.target.id]: e.target.value }))
    setErrors(prev => ({ ...prev, [e.target.id]: '' }))
  }

  const validate = () => {
    const e = {}
    if (!fields.name.trim())  e.name  = 'Every show needs a protagonist.'
    if (!fields.job.trim())   e.job   = "What's your character's world?"
    if (!fields.city.trim())  e.city  = 'Every story needs a setting.'
    if (!fields.quirk.trim()) e.quirk = 'Your flaw makes the show interesting.'
    if (!fields.drama.trim()) e.drama = 'No drama? No show.'
    return e
  }

  const handleSubmit = () => {
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    onSubmit(fields)
  }

  const filled = Object.values(fields).filter(Boolean).length
  const total  = FIELDS.length

  return (
    <div className="if-overlay">
      <div className="if-backdrop" onClick={() => window.location.reload()} />

      <div className="if-panel">

        {/* Side accent */}
        <div className="if-side-accent" />

        {/* Header */}
        <div className="if-header">
          <div className="if-header-top">
            <div className="if-header-left">
              <p className="if-eyebrow">
                <span className="if-eyebrow-dot" />
                Casting Now
              </p>
              <h2 className="if-title">Your Life.<br />Your Story.</h2>
            </div>
            <div className="if-header-right">
              <div className="if-progress-ring">
                <svg viewBox="0 0 48 48" className="if-ring-svg">
                  <circle cx="24" cy="24" r="20" className="if-ring-bg" />
                  <circle
                    cx="24" cy="24" r="20"
                    className="if-ring-fill"
                    style={{
                      strokeDasharray: `${(filled / total) * 125.6} 125.6`
                    }}
                  />
                </svg>
                <span className="if-ring-count">{filled}/{total}</span>
              </div>
            </div>
          </div>
          <p className="if-subtitle">
            The more dramatic the details, the better the series.
          </p>
        </div>

        {/* Divider */}
        <div className="if-divider">
          <span className="if-divider-line" />
          <span className="if-divider-text">Scene Details</span>
          <span className="if-divider-line" />
        </div>

        {/* Fields */}
        <div className="if-fields">
          {FIELDS.map((f, i) => {
            const isFocused = focused === f.id
            const hasValue  = !!fields[f.id]
            const hasError  = !!errors[f.id]
            const isActive  = active === f.id

            return (
              <div
                key={f.id}
                className={`if-field ${isFocused ? 'if-field-focused' : ''} ${hasError ? 'if-field-error' : ''} ${hasValue ? 'if-field-filled' : ''}`}
                style={{ animationDelay: `${i * 0.07}s` }}
              >
                <div className="if-field-header">
                  <div className="if-field-label-row">
                    <span className="if-field-icon">{f.icon}</span>
                    <label className="if-field-label" htmlFor={f.id}>
                      {f.label}
                    </label>
                  </div>
                  {hasValue && !hasError && (
                    <span className="if-field-check">✓</span>
                  )}
                </div>

                {f.type === 'textarea' ? (
                  <textarea
                    id={f.id}
                    className="if-input if-textarea"
                    placeholder={f.placeholder}
                    value={fields[f.id]}
                    rows={3}
                    onChange={handleChange}
                    onFocus={() => { setFocused(f.id); setActive(f.id) }}
                    onBlur={() => setFocused(null)}
                  />
                ) : (
                  <input
                    id={f.id}
                    type="text"
                    className="if-input"
                    placeholder={f.placeholder}
                    value={fields[f.id]}
                    onChange={handleChange}
                    onFocus={() => { setFocused(f.id); setActive(f.id) }}
                    onBlur={() => setFocused(null)}
                  />
                )}

                <div className="if-field-footer">
                  {hasError
                    ? <span className="if-error">⚠ {errors[f.id]}</span>
                    : <span className={`if-hint ${isFocused ? 'if-hint-visible' : ''}`}>{f.hint}</span>
                  }
                  {f.type === 'textarea' && (
                    <span className="if-char-count">{fields[f.id].length}</span>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* Footer actions */}
        <div className="if-actions">
          <button className="if-submit" onClick={handleSubmit}>
            <span className="if-submit-icon">▶</span>
            <span className="if-submit-text">Generate My Series</span>
            <span className="if-submit-shine" />
          </button>
          <button className="if-cancel" onClick={() => window.location.reload()}>
            ✕ Cancel
          </button>
        </div>

        {/* Bottom tag */}
        <p className="if-bottom-tag">
          🔒 Runs locally · Mistral 7B · No data leaves your device
        </p>

      </div>
    </div>
  )
}

export default InputForm