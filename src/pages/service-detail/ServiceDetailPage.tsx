import { useParams, Navigate } from 'react-router-dom';
import { ALL_SERVICES, COMPANY_INFO } from '../../data/services';
import ContactForm from '../../components/forms/ContactForm';
import './ServiceDetailPage.css';

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
    </div>
  );
}
