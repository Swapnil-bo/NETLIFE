function InputForm({ onSubmit }) {
    return (
      <div className="form-overlay">
        <div className="form-container">
          {/* Header */}
          <div className="form-header">
            <p className="form-eyebrow">● CASTING NOW</p>
            <h2 className="form-title">Tell Us Your Story</h2>
            <p className="form-subtitle">The more dramatic, the better.</p>
          </div>
  
          {/* Fields */}
          <div className="form-fields">
            <div className="field-group">
              <label className="field-label">Your Name</label>
              <input
                className="field-input"
                type="text"
                placeholder="e.g. Swapnil Hazra"
                id="name"
              />
            </div>
  
            <div className="field-group">
              <label className="field-label">What Do You Do?</label>
              <input
                className="field-input"
                type="text"
                placeholder="e.g. AI Engineer building the future"
                id="job"
              />
            </div>
  
            <div className="field-group">
              <label className="field-label">Your City</label>
              <input
                className="field-input"
                type="text"
                placeholder="e.g. Chennai, India"
                id="city"
              />
            </div>
  
            <div className="field-group">
              <label className="field-label">Your Biggest Quirk or Trait</label>
              <input
                className="field-input"
                type="text"
                placeholder="e.g. Debugs code at 3am, talks to AI like a friend"
                id="quirk"
              />
            </div>
  
            <div className="field-group">
              <label className="field-label">One Dramatic Life Moment</label>
              <textarea
                className="field-input field-textarea"
                placeholder="e.g. Quit a stable job to go all-in on AI projects with no safety net"
                id="drama"
                rows={3}
              />
            </div>
          </div>
  
          {/* Actions */}
          <div className="form-actions">
            <button className="cta-primary" onClick={onSubmit}>
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