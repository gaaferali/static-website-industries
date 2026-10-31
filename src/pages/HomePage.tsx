import { useNavigate, Link } from 'react-router-dom';
import { COMPANY_INFO, SERVICES_DATA, AI_SERVICES_DATA, INDUSTRIES } from '../data/servicesData';

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

      <style>{`
        /* Hero Banner Matching Image Desktop-1 */
        .hero-figma-banner {
          min-height: 380px;
          border-radius: 0 0 44px 44px;
          padding: 7rem 3rem 3rem 3rem;
          display: flex;
          align-items: center;
        }

        .figma-hero-brand-block {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        .company-logo-badge {
          display: inline-flex;
          align-items: center;
          background: #061A2E;
          border: 2px solid #D98B32;
          padding: 0.75rem 1.25rem;
          border-radius: 10px;
          box-shadow: 0 10px 30px rgba(6, 26, 46, 0.5);
        }

        .badge-gear-box {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }

        .badge-subtext {
          font-family: var(--font-heading);
          font-weight: 900;
          font-size: 0.85rem;
          color: #FFFFFF;
          letter-spacing: 0.14em;
        }

        .figma-brand-heading {
          font-size: clamp(2.2rem, 4.5vw, 3.8rem);
          font-weight: 900;
          color: #FFFFFF;
          margin-bottom: 0;
          letter-spacing: -0.02em;
          text-shadow: 0 4px 20px rgba(0,0,0,0.5);
        }

        /* About Us Formatting */
        .about-label-tag {
          font-family: var(--font-heading);
          font-size: 0.75rem;
          font-weight: 800;
          color: #607080;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          margin-bottom: 0.75rem;
        }

        .about-main-headline {
          font-size: clamp(1.25rem, 2.2vw, 1.65rem);
          font-weight: 900; /* make headline bolder */
          color: #061A2E;
          line-height: 1.45;
          max-width: 980px;
          margin-bottom: 2.5rem;
        }

        .about-secondary-text {
          color: #607080;
          font-weight: 800; /* bold the secondary lines */
        }

        .about-two-col-grid {
          display: grid;
          grid-template-columns: 1.3fr 1fr;
          gap: 2.25rem;
          align-items: start;
        }

        .about-left-card {
          background: #E8EDF1;
          border: 1px solid #DDE4EA;
          border-radius: 14px;
          padding: 1.25rem;
        }

        .about-img-frame {
          height: 240px;
          border-radius: 10px;
          overflow: hidden;
          margin-bottom: 1rem;
        }

        .about-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .about-card-caption {
          font-size: 0.88rem;
          color: #3A4B5A;
          line-height: 1.6;
          font-weight: 800; /* make body lines bold */
        }

        .about-right-cards {
          display: flex;
          flex-direction: column;
          gap: 1.1rem;
        }

        .focus-card {
          background: #E8EDF1;
          border: 1px solid #DDE4EA;
          border-left: 4px solid #D98B32;
          border-radius: 12px;
          padding: 1.35rem;
        }

        .card-mini-tag {
          font-family: var(--font-heading);
          font-size: 0.68rem;
          font-weight: 800;
          color: #D98B32;
          letter-spacing: 0.1em;
          margin-bottom: 0.35rem;
        }

        .card-mini-title {
          font-size: 1rem;
          font-weight: 800;
          color: #061A2E;
          margin-bottom: 0.35rem;
        }

        .card-mini-desc {
          font-size: 0.85rem;
          color: #607080;
          line-height: 1.5;
          font-weight: 700; /* stronger description weight */
        }

        /* Section Headers */
        .section-header-flex {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 2rem;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .section-tag-amber {
          font-family: var(--font-heading);
          font-size: 0.72rem;
          font-weight: 800;
          color: #D98B32;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          display: block;
          margin-bottom: 0.3rem;
        }

        .section-title-light {
          font-size: clamp(1.4rem, 2.5vw, 1.85rem);
          font-weight: 800;
          color: #FFFFFF;
        }

        .section-title-dark {
          font-size: clamp(1.4rem, 2.5vw, 1.85rem);
          font-weight: 800;
          color: #061A2E;
        }

        /* Clickable Cards */
        .clickable-card {
          cursor: pointer;
        }

        /* AI Cards Grid */
        .ai-cards-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.25rem;
        }

        .ai-service-card {
          background: #09233D;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-top: 3px solid #D98B32;
          border-radius: 12px;
          padding: 1.35rem;
          display: flex;
          flex-direction: column;
          transition: transform 0.25s, border-color 0.25s, box-shadow 0.25s;
        }

        .ai-service-card:hover {
          transform: translateY(-5px);
          border-color: #D98B32;
          box-shadow: 0 12px 28px rgba(6, 26, 46, 0.4);
        }

        .ai-card-badge {
          background: rgba(217, 139, 50, 0.15);
          color: #D98B32;
          font-family: var(--font-heading);
          font-size: 0.65rem;
          font-weight: 800;
          padding: 0.2rem 0.5rem;
          border-radius: 4px;
          align-self: flex-start;
          margin-bottom: 0.75rem;
        }

        .ai-card-title {
          font-size: 1.05rem;
          font-weight: 800;
          color: #FFFFFF;
          margin-bottom: 0.2rem;
        }

        .ai-card-sub {
          font-size: 0.75rem;
          color: #D98B32;
          font-weight: 700;
          margin-bottom: 0.65rem;
        }

        .ai-card-desc {
          font-size: 0.84rem;
          color: #607080;
          line-height: 1.5;
          margin-bottom: 1.1rem;
          flex: 1;
        }

        .ai-tech-highlight-box {
          background: rgba(6, 26, 46, 0.7);
          border: 1px solid rgba(217, 139, 50, 0.25);
          border-left: 3px solid #D98B32;
          border-radius: 8px;
          padding: 0.65rem 0.85rem;
          margin-bottom: 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }

        .highlight-primary {
          font-family: var(--font-heading);
          font-size: 0.82rem;
          font-weight: 900;
          color: #D98B32;
        }

        .highlight-secondary {
          font-size: 0.72rem;
          color: #607080;
          font-weight: 600;
        }

        .ai-card-link {
          font-family: var(--font-heading);
          font-size: 0.78rem;
          font-weight: 700;
          color: #D98B32;
          margin-top: auto;
        }

        /* Services Grid 4 */
        .services-grid-4 {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.25rem;
        }

        .industrial-service-card {
          background: #E8EDF1;
          border: 1px solid #DDE4EA;
          border-radius: 12px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: all 0.25s;
        }

        .industrial-service-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-md);
          border-color: #D98B32;
        }

        .card-thumb-wrapper {
          position: relative;
          height: 160px;
        }

        .card-thumb {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .card-badge-pill {
          position: absolute;
          top: 0.65rem;
          right: 0.65rem;
          background: #061A2E;
          color: #FFFFFF;
          font-family: var(--font-heading);
          font-size: 0.62rem;
          font-weight: 800;
          padding: 0.2rem 0.5rem;
          border-radius: 4px;
        }

        .card-body-content {
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .card-title-dark {
          font-size: 1.05rem;
          font-weight: 800;
          color: #061A2E;
          margin-bottom: 0.2rem;
        }

        .card-sub-amber {
          font-size: 0.75rem;
          color: #D98B32;
          font-weight: 700;
          margin-bottom: 0.55rem;
        }

        .card-desc-muted {
          font-size: 0.84rem;
          color: #607080;
          line-height: 1.48;
          margin-bottom: 1.1rem;
          flex: 1;
        }

        .card-link-btn {
          font-family: var(--font-heading);
          font-size: 0.8rem;
          font-weight: 700;
          color: #061A2E;
        }

        .industrial-service-card:hover .card-link-btn {
          color: #D98B32;
        }

        /* Sectors Grid */
        .sectors-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          gap: 2.5rem;
          align-items: start;
        }

        .sectors-lead-text {
          font-size: 0.92rem;
          color: #607080;
          margin-bottom: 1.75rem;
        }

        .sectors-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .sector-item {
          display: flex;
          gap: 1.1rem;
          padding: 1rem;
          background: #09233D;
          border-radius: 10px;
          border-left: 3px solid #D98B32;
        }

        .sector-num {
          font-family: var(--font-heading);
          font-size: 1.2rem;
          font-weight: 900;
          color: #D98B32;
        }

        .sector-title {
          font-size: 0.95rem;
          font-weight: 800;
          color: #FFFFFF;
          margin-bottom: 0.2rem;
        }

        .sector-desc {
          font-size: 0.84rem;
          color: #E8EDF1;
        }

        .cta-inquiry-box {
          background: #09233D;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 14px;
          padding: 1.75rem;
        }

        .inquiry-title {
          font-size: 1.2rem;
          font-weight: 800;
          color: #FFFFFF;
          margin-bottom: 0.35rem;
        }

        .inquiry-sub {
          font-size: 0.85rem;
          color: #607080;
          margin-bottom: 1.25rem;
        }

        .contact-info-list {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          margin-bottom: 1.25rem;
        }

        .info-row {
          display: flex;
          flex-direction: column;
          gap: 0.15rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          padding-bottom: 0.65rem;
        }

        .info-label {
          font-family: var(--font-heading);
          font-size: 0.65rem;
          font-weight: 800;
          color: #D98B32;
          letter-spacing: 0.1em;
        }

        .info-val {
          font-size: 0.86rem;
          color: #FFFFFF;
          font-weight: 600;
        }

        .mt-4 { margin-top: 1rem; }

        @media (max-width: 992px) {
          .ai-cards-grid, .services-grid-4 { grid-template-columns: repeat(2, 1fr); }
          .about-two-col-grid, .sectors-grid { grid-template-columns: 1fr; }
        }

        @media (max-width: 600px) {
          .ai-cards-grid, .services-grid-4 { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
}
