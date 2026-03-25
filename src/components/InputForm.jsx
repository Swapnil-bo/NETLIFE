import { useState } from 'react'

function InputForm({ onSubmit }) {
  const [fields, setFields] = useState({
    name: '', job: '', city: '', quirk: '', drama: ''
  })
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    setFields(prev => ({ ...prev, [e.target.id]: e.target.value }))
    setErrors(prev => ({ ...prev, [e.target.id]: '' }))
  }

  const validate = () => {
    const newErrors = {}
    if (!fields.name.trim())  newErrors.name  = 'Every show needs a protagonist.'
    if (!fields.job.trim())   newErrors.job   = 'What\'s your character\'s world?'
    if (!fields.city.trim())  newErrors.city  = 'Every story needs a setting.'
    if (!fields.quirk.trim()) newErrors.quirk = 'Your flaw makes the show interesting.'
    if (!fields.drama.trim()) newErrors.drama = 'No drama? No show.'
    return newErrors
  }

  const handleSubmit = () => {
    const newErrors = validate()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    onSubmit(fields)
  }

  return (
    <div className="form-overlay">
      <div className="form-container">
        <div className="form-header">
          <p className="form-eyebrow">● CASTING NOW</p>
          <h2 className="form-title">Tell Us Your Story</h2>
          <p className="form-subtitle">The more dramatic, the better.</p>
        </div>

        <div className="form-fields">
          {[
            { id: 'name',  label: 'Your Name',                    placeholder: 'e.g. Swapnil Hazra' },
            { id: 'job',   label: 'What Do You Do?',              placeholder: 'e.g. AI Engineer building the future' },
            { id: 'city',  label: 'Your City',                    placeholder: 'e.g. Chennai, India' },
            { id: 'quirk', label: 'Your Biggest Quirk or Trait',  placeholder: 'e.g. Debugs code at 3am, talks to AI like a friend' },
          ].map(({ id, label, placeholder }) => (
            <div className="field-group" key={id}>
              <label className="field-label">{label}</label>
              <input
                className={`field-input ${errors[id] ? 'field-error' : ''}`}
                type="text"
                id={id}
                placeholder={placeholder}
                value={fields[id]}
                onChange={handleChange}
              />
              {errors[id] && <span className="error-msg">{errors[id]}</span>}
            </div>
          ))}

          <div className="field-group">
            <label className="field-label">One Dramatic Life Moment</label>
            <textarea
              className={`field-input field-textarea ${errors.drama ? 'field-error' : ''}`}
              id="drama"
              placeholder="e.g. Quit a stable job to go all-in on AI with no safety net"
              rows={3}
              value={fields.drama}
              onChange={handleChange}
            />
            {errors.drama && <span className="error-msg">{errors.drama}</span>}
          </div>
        </div>

        <div className="form-actions">
          <button className="cta-primary" onClick={handleSubmit}>
            <span className="cta-icon">▶</span>
            Generate My Series
          </button>
          <button className="form-cancel" onClick={() => window.location.reload()}>
            ✕ Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

export default InputForm