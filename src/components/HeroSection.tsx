import { Link } from 'react-router-dom';
import { COMPANY_INFO } from '../data/servicesData';

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

      <style>{`
        .hero-container {
          position: relative;
          min-height: 92vh;
          padding-top: 130px;
          padding-bottom: 4rem;
          display: flex;
          align-items: center;
          overflow: hidden;
          background: #060911;
        }

        .hero-bg-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 1;
        }

        .hero-bg-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          opacity: 0.35;
          filter: brightness(0.8) contrast(1.1);
        }

        .hero-gradient {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(180deg, 
            rgba(6, 9, 17, 0.7) 0%, 
            rgba(6, 9, 17, 0.85) 60%, 
            #060911 100%
          );
        }

        .hero-grid-pattern {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: radial-gradient(rgba(249, 115, 22, 0.12) 1px, transparent 1px);
          background-size: 32px 32px;
          opacity: 0.5;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          gap: 3.5rem;
        }

        .hero-text-block {
          max-width: 820px;
        }

        .hero-tag {
          background: rgba(249, 115, 22, 0.15);
          border-color: rgba(249, 115, 22, 0.4);
          margin-bottom: 1.25rem;
        }

        .hero-tag-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--accent-orange);
          display: inline-block;
          box-shadow: 0 0 8px var(--accent-orange);
        }

        .hero-title {
          font-size: 3.75rem;
          font-weight: 800;
          letter-spacing: -0.03em;
          color: #FFFFFF;
          line-height: 1.1;
          margin-bottom: 1.25rem;
        }

        @media (max-width: 992px) {
          .hero-title {
            font-size: 2.85rem;
          }
        }

        @media (max-width: 576px) {
          .hero-title {
            font-size: 2.15rem;
          }
        }

        .text-gradient {
          background: linear-gradient(135deg, #F97316 0%, #FF8C38 50%, #EF4444 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-description {
          font-size: 1.25rem;
          font-weight: 500;
          color: #E2E8F0;
          margin-bottom: 0.75rem;
          line-height: 1.4;
        }

        .hero-body-text {
          font-size: 1rem;
          color: #94A3B8;
          margin-bottom: 2rem;
          max-width: 760px;
          line-height: 1.6;
        }

        .hero-cta-group {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .hero-btn {
          padding: 0.95rem 2rem;
          font-size: 0.9rem;
        }

        .hero-ai-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.6rem 1rem;
          background: rgba(2, 132, 199, 0.12);
          border: 1px solid rgba(56, 189, 248, 0.3);
          border-radius: var(--radius-full);
          color: #38BDF8;
          font-size: 0.85rem;
          font-weight: 600;
          transition: var(--transition-fast);
        }

        .hero-ai-pill:hover {
          background: rgba(2, 132, 199, 0.25);
          border-color: rgba(56, 189, 248, 0.6);
          transform: translateY(-2px);
        }

        .ai-chip-sm {
          background: #0284C7;
          color: #FFFFFF;
          font-size: 0.65rem;
          font-weight: 800;
          padding: 0.1rem 0.4rem;
          border-radius: 4px;
        }

        /* Stats Bar */
        .hero-stats-bar {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          padding: 1.75rem;
          background: rgba(11, 17, 32, 0.85);
          border-color: rgba(255, 255, 255, 0.12);
        }

        @media (max-width: 992px) {
          .hero-stats-bar {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }
        }

        @media (max-width: 576px) {
          .hero-stats-bar {
            grid-template-columns: 1fr;
            gap: 1.25rem;
          }
        }

        .stat-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 0 1rem;
          border-right: 1px solid rgba(255, 255, 255, 0.08);
        }

        .stat-item:last-child {
          border-right: none;
        }

        @media (max-width: 992px) {
          .stat-item {
            border-right: none;
          }
        }

        .stat-value {
          font-family: var(--font-heading);
          font-size: 2.25rem;
          font-weight: 800;
          color: var(--accent-orange);
          line-height: 1.1;
        }

        .stat-label {
          font-size: 0.82rem;
          color: #94A3B8;
          margin-top: 0.25rem;
          font-weight: 500;
        }
      `}</style>
    </section>
  );
}
