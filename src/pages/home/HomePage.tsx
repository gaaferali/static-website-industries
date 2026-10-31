import { useNavigate, Link } from 'react-router-dom';
import { COMPANY_INFO, SERVICES_DATA, AI_SERVICES_DATA, INDUSTRIES } from '../../data/services';
import './HomePage.css';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="app-container-wrapper">
      
      {/* ─── 1. HERO BANNER (MATCHING DESKTOP-1 FIGMA EXACTLY) ────────────── */}
      <section className="page-hero-banner hero-figma-banner">
        <img 
          src="/images/hero_bg.png" 
          alt="IronCore Industrial Factory Floor" 
          className="page-hero-bg"
        />
        <div className="page-hero-overlay"></div>

        <div className="page-hero-content figma-hero-brand-block">
          {/* Overlaid Logo Badge + Title Matching Image Desktop-1 */}
          <div className="company-logo-badge">
            <div className="badge-gear-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.2">
                <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-2.82 1.18V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
              </svg>
              <span className="badge-subtext">COMPANY</span>
            </div>
          </div>

          <h1 className="page-hero-title figma-brand-heading">
            IronCore Industries
          </h1>
        </div>
      </section>


      {/* ─── 2. ABOUT US SECTION (MATCHING DESKTOP-1 EXACT COPY) ──────────── */}
      <section id="about" className="floating-section-card">
        <div className="floating-section-card-inner">
          <div className="about-label-tag">ABOUT US</div>

          <h2 className="about-main-headline">
            IronCore Industries delivers industrial manufacturing and engineering solutions designed for efficiency, reliability, and long-term performance.
            <br />
            <span className="about-secondary-text">
              We work with businesses, contractors, and industrial organizations to manufacture components, and support industrial projects from planning through production and delivery.
            </span>
          </h2>

          {/* 2-Column Focus & Deliver Grid */}
          <div className="about-two-col-grid">
            
            {/* Left Column */}
            <div className="about-left-card">
              <div className="about-img-frame">
                <img 
                  src="/images/service_engineering.png" 
                  alt="IronCore Industrial Engineering" 
                  className="about-card-img" 
                />
              </div>
              <p className="about-card-caption">
                We combine experience with innovation to create practical solutions for today's industrial challenges. From heavy steel fabrication and precision CNC turning to AI-driven predictive telemetry, our approach is built around trusted expertise, measurable results, and long-term partnerships.
              </p>
            </div>

            {/* Right Column */}
            <div className="about-right-cards">
              
              <div className="focus-card">
                <div className="card-mini-tag">OUR FOCUS</div>
                <h3 className="card-mini-title">Smarter decisions, stronger industrial output</h3>
                <p className="card-mini-desc">
                  We help manufacturers, contractors, and energy operators move from reactive maintenance to proactive, data-informed growth and continuous reliability.
                </p>
              </div>

              <div className="focus-card">
                <div className="card-mini-tag">WHAT WE DELIVER</div>
                <h3 className="card-mini-title">Practical, technology-driven industrial solutions</h3>
                <p className="card-mini-desc">
                  From custom CNC turning and heavy welding to multi-axis AI vibration sensors, our work is engineered to be dependable, measurable, and built to last.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>


      {/* ─── 3. AI INDUSTRIAL SERVICES (CLICKABLE COMPONENT CARDS) ───────── */}
      <section className="floating-dark-card">
        
        <div className="section-header-flex">
          <div>
            <span className="section-tag-amber">AI INDUSTRIAL SUITE</span>
            <h2 className="section-title-light">4 Specialized AI Solutions</h2>
          </div>
          <Link to="/ai-services" className="btn btn-outline">
            Explore Live AI Control Room →
          </Link>
        </div>

        <div className="ai-cards-grid">
          {AI_SERVICES_DATA.map((ai, index) => {
            const highlights = [
              { primary: "▲ +34.2% Yield Surge", secondary: "50kHz Edge ML Sensor Telemetry" },
              { primary: "⚡ 99.8% Defect Precision", secondary: "Sub-Millimeter Vision Inspection" },
              { primary: "⚡ Zero Unscheduled Downtime", secondary: "Autonomous SCADA Closed-Loop" },
              { primary: "🌱 -28.4% Peak Energy Cut", secondary: "Real-Time Industrial Carbon Index" }
            ];
            const item = highlights[index % highlights.length];

            return (
              <div 
                key={ai.id} 
                className="ai-service-card clickable-card"
                onClick={() => navigate(`/services/${ai.id}`)}
              >
                <div className="ai-card-badge">{ai.badge}</div>
                <h3 className="ai-card-title">{ai.title}</h3>
                <p className="ai-card-sub">{ai.subtitle}</p>
                <p className="ai-card-desc">{ai.shortDesc}</p>

                {/* Sleek High-Performance Tech Highlights Pill Bar */}
                <div className="ai-tech-highlight-box">
                  <div className="highlight-primary">{item.primary}</div>
                  <div className="highlight-secondary">{item.secondary}</div>
                </div>

                <span className="ai-card-link">
                  Explore Model Specs →
                </span>
              </div>
            );
          })}
        </div>

      </section>


      {/* ─── 4. CORE INDUSTRIAL SERVICES GRID (CLICKABLE COMPONENT CARDS) ── */}
      <section id="services" className="floating-section-card">
        <div className="floating-section-card-inner">
          <div className="section-header-flex">
            <div>
              <span className="section-tag-amber">CORE CAPABILITIES</span>
              <h2 className="section-title-dark">Industrial Manufacturing Services</h2>
            </div>
          </div>

          <div className="services-grid-4">
            {SERVICES_DATA.map((s) => (
              <div 
                key={s.id} 
                className="industrial-service-card clickable-card"
                onClick={() => navigate(`/services/${s.id}`)}
              >
                <div className="card-thumb-wrapper">
                  <img src={s.image} alt={s.title} className="card-thumb" />
                  <span className="card-badge-pill">{s.badge}</span>
                </div>
                <div className="card-body-content">
                  <h3 className="card-title-dark">{s.title}</h3>
                  <p className="card-sub-amber">{s.subtitle}</p>
                  <p className="card-desc-muted">{s.shortDesc}</p>
                  <span className="card-link-btn">
                    View Details & Specs →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ─── 5. SECTORS & CONTACT INQUIRY ──────────────────────────────────── */}
      <section className="floating-dark-card">
        <div className="sectors-grid">
          
          <div>
            <span className="section-tag-amber">SECTORS WE POWER</span>
            <h2 className="section-title-light">Engineering Solutions Built for High Tonnage Operations</h2>
            <p className="sectors-lead-text">
              Delivering high-precision CNC parts, heavy welded assemblies, and predictive telemetry across critical infrastructure.
            </p>
            
            <div className="sectors-list">
              {INDUSTRIES.map((ind, i) => (
                <div key={i} className="sector-item">
                  <span className="sector-num">0{i + 1}</span>
                  <div>
                    <h4 className="sector-title">{ind.title}</h4>
                    <p className="sector-desc">{ind.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="cta-inquiry-box">
            <h3 className="inquiry-title">Request Industrial Quote</h3>
            <p className="inquiry-sub">
              Submit CAD files or tolerance specs for rapid engineering review.
            </p>
            
            <div className="contact-info-list">
              <div className="info-row">
                <span className="info-label">PHONE</span>
                <span className="info-val">{COMPANY_INFO.contact.phone}</span>
              </div>
              <div className="info-row">
                <span className="info-label">EMAIL QUOTES</span>
                <span className="info-val">{COMPANY_INFO.contact.emailQuotes}</span>
              </div>
              <div className="info-row">
                <span className="info-label">PLANT HOURS</span>
                <span className="info-val">{COMPANY_INFO.contact.hours}</span>
              </div>
            </div>

            <Link to="/contact" className="btn btn-primary w-full text-center mt-4">
              Launch Full RFQ Form →
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
