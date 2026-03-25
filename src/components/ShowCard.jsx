function ShowCard({ data, onReset }) {
    return (
      <div className="showcard-root">
  
        {/* Hero Banner */}
        <div className="showcard-banner">
          <div className="banner-overlay" />
          <div className="banner-content">
            <p className="banner-eyebrow">● NETFLIX ORIGINAL SERIES</p>
            <h1 className="banner-title">{data.show_title}</h1>
            <p className="banner-tagline">"{data.tagline}"</p>
  
            <div className="banner-meta">
              <span className="badge badge-red">{data.netflix_rating}</span>
              <span className="badge badge-outline">{data.genre}</span>
              <span className="badge badge-outline">Season 1</span>
            </div>
  
            <p className="banner-warnings">⚠ {data.content_warnings}</p>
  
            <div className="banner-actions">
              <button className="cta-primary" onClick={onReset}>
                <span className="cta-icon">▶</span>
                Create Another Show
              </button>
            </div>
          </div>
        </div>
  
      </div>
    )
  }
  
  export default ShowCard