import { Link } from 'react-router-dom';
import { COMPANY_INFO } from '../../data/services';
import './HeroSection.css';

export default function HeroSection() {
  return (
    <section className="hero-container">
      {/* Background Image & Overlay */}
      <div className="hero-bg-overlay">
        <img 
          src="/images/hero_bg.png" 
          alt="IronCore Industrial Factory Floor" 
          className="hero-bg-img"
        />
        <div className="hero-gradient"></div>
        <div className="hero-grid-pattern"></div>
      </div>

      <div className="container hero-content">
        <div className="hero-text-block">
          <div className="section-tag hero-tag">
            <span className="hero-tag-dot"></span>
            LEADING INDUSTRIAL MANUFACTURING & ENGINEERING
          </div>

          <h1 className="hero-title">
            Building Industry. <br />
            <span className="text-gradient">Powering Progress.</span>
          </h1>

          <p className="hero-description">
            {COMPANY_INFO.aboutLead}
          </p>
          <p className="hero-body-text">
            {COMPANY_INFO.aboutBody}
          </p>

          <div className="hero-cta-group">
            <a href="#services" className="btn btn-primary hero-btn">
              <span>EXPLORE SERVICES</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="12" y1="5" x2="12" y2="19"/>
                <polyline points="19 12 12 19 5 12"/>
              </svg>
            </a>

            <Link to="/contact" className="btn btn-secondary hero-btn">
              <span>REQUEST A QUOTE</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </Link>

            <Link to="/ai-service" className="hero-ai-pill">
              <span className="ai-chip-sm">AI</span>
              <span>Explore AI Telemetry Operations →</span>
            </Link>
          </div>
        </div>

        {/* Hero Quick Statistics Bar */}
        <div className="hero-stats-bar glass-card">
          {COMPANY_INFO.stats.map((stat, idx) => (
            <div key={idx} className="stat-item">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
