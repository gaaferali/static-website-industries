import { useParams, Navigate } from 'react-router-dom';
import { ALL_SERVICES, COMPANY_INFO } from '../data/servicesData';
import ContactForm from '../components/ContactForm';

export default function ServiceDetailPage() {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = ALL_SERVICES.find(s => s.id === serviceId);
  if (!service) return <Navigate to="/" replace />;

  return (
    <div className="app-container-wrapper">
      
      {/* Compact Rounded Hero Header */}
      <section className="page-hero-banner hero-compact-banner">
        <img 
          src={service.image} 
          alt={service.title} 
          className="page-hero-bg" 
        />
        <div className="page-hero-overlay"></div>

        <div className="page-hero-content">
          <div className="hero-tag-chip">{service.badge}</div>
          <h1 className="page-hero-title">{service.title}</h1>
          <p className="page-hero-sub">{service.subtitle}</p>
        </div>
      </section>

      {/* Main Content Card */}
      <section className="floating-section-card">
        <div className="detail-grid">
          
          {/* Left Column */}
          <div>
            <div className="detail-img-wrapper">
              <img src={service.image} alt={service.title} className="detail-img" />
            </div>

            <h2 className="detail-section-title">Operational Overview</h2>
            <p className="detail-paragraph">{service.fullDesc}</p>
            <p className="detail-paragraph-sub">{service.shortDesc}</p>

            <h3 className="detail-subheading">Technical Capabilities</h3>
            <div className="capabilities-grid">
              {service.capabilities.map((cap, i) => (
                <div key={i} className="capability-card">
                  <span className="cap-icon">✓</span>
                  <span>{cap}</span>
                </div>
              ))}
            </div>

            <h3 className="detail-subheading">Technical Specifications</h3>
            <div className="specs-table-card">
              {service.specifications.map((spec, i) => (
                <div key={i} className="specs-row">
                  <span className="spec-label">{spec.label}</span>
                  <span className="spec-value">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="detail-sidebar">
            <div className="sidebar-box">
              <h4 className="sidebar-title">Industries Served</h4>
              <ul className="sidebar-list">
                {service.industriesServed.map((ind, i) => (
                  <li key={i}>
                    <span className="sidebar-dot">•</span> {ind}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rfq-callout-box">
              <h4 className="rfq-title">Need Custom Specs?</h4>
              <p className="rfq-desc">
                Submit CAD files or tolerance specs and our engineering team will respond within 24 hours.
              </p>
              <div className="direct-desk-box">
                <span className="desk-lbl">Direct Engineering Desk</span>
                <span className="desk-val">{COMPANY_INFO.contact.phone}</span>
              </div>
              <a href="#quote-form-section" className="btn btn-primary w-full text-center">
                Request a Quote →
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Inquiry Form Section */}
      <section id="quote-form-section" className="floating-dark-card">
        <div className="text-center mb-4">
          <span className="section-tag-amber">ENGINEERING INQUIRY</span>
          <h2 className="section-title-light">Request a Quote for {service.title}</h2>
        </div>
        <ContactForm dark />
      </section>

      <style>{`
        .mb-4 { margin-bottom: 1.5rem; }

        .detail-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 3rem;
          align-items: start;
        }

        .detail-img-wrapper {
          height: 320px;
          border-radius: 12px;
          overflow: hidden;
          margin-bottom: 2rem;
        }

        .detail-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .detail-section-title {
          font-size: 1.6rem;
          font-weight: 800;
          color: #061A2E;
          margin-bottom: 0.75rem;
        }

        .detail-paragraph {
          font-size: 1rem;
          color: #3A4B5A;
          line-height: 1.7;
          margin-bottom: 1rem;
        }

        .detail-paragraph-sub {
          font-size: 0.92rem;
          color: #607080;
          line-height: 1.6;
          margin-bottom: 2.25rem;
        }

        .detail-subheading {
          font-size: 1.25rem;
          font-weight: 800;
          color: #061A2E;
          margin-bottom: 1.1rem;
        }

        .capabilities-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-bottom: 2.25rem;
        }

        .capability-card {
          display: flex;
          align-items: flex-start;
          gap: 0.65rem;
          padding: 0.9rem 1rem;
          background: #E8EDF1;
          border: 1px solid #DDE4EA;
          border-radius: 8px;
          font-size: 0.88rem;
          color: #061A2E;
          font-weight: 600;
        }

        .cap-icon {
          color: #D98B32;
          font-weight: 900;
        }

        .specs-table-card {
          border: 1px solid #DDE4EA;
          border-radius: 10px;
          overflow: hidden;
          background: #E8EDF1;
        }

        .specs-row {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          padding: 0.85rem 1.25rem;
          border-bottom: 1px solid #DDE4EA;
          font-size: 0.88rem;
        }

        .specs-row:last-child {
          border-bottom: none;
        }

        .spec-label {
          color: #607080;
          font-weight: 600;
        }

        .spec-value {
          color: #061A2E;
          font-weight: 700;
        }

        .detail-sidebar {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          position: sticky;
          top: 6rem;
        }

        .sidebar-box {
          background: #E8EDF1;
          border: 1px solid #DDE4EA;
          border-radius: 12px;
          padding: 1.5rem;
        }

        .sidebar-title {
          font-family: var(--font-heading);
          font-size: 0.95rem;
          font-weight: 800;
          color: #061A2E;
          margin-bottom: 0.85rem;
          padding-bottom: 0.4rem;
          border-bottom: 2px solid #D98B32;
          display: inline-block;
        }

        .sidebar-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .sidebar-list li {
          font-size: 0.88rem;
          color: #3A4B5A;
          font-weight: 600;
        }

        .sidebar-dot { color: #D98B32; font-weight: 900; }

        .rfq-callout-box {
          background: #061A2E;
          color: #FFFFFF;
          border-radius: 12px;
          padding: 1.75rem;
        }

        .rfq-title {
          font-size: 1.1rem;
          font-weight: 800;
          color: #FFFFFF;
          margin-bottom: 0.4rem;
        }

        .rfq-desc {
          font-size: 0.86rem;
          color: #607080;
          margin-bottom: 1.25rem;
          line-height: 1.5;
        }

        .direct-desk-box {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 8px;
          padding: 0.85rem;
          margin-bottom: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }

        .desk-lbl {
          font-family: var(--font-heading);
          font-size: 0.68rem;
          font-weight: 800;
          color: #D98B32;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .desk-val {
          font-size: 0.98rem;
          font-weight: 800;
          color: #FFFFFF;
        }

        @media (max-width: 992px) {
          .detail-grid {
            grid-template-columns: 1fr;
          }
          .capabilities-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
