import { useState } from 'react';
import ContactForm from '../components/ContactForm';

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: "What CAD file formats do you accept for custom manufacturing quotes?",
      a: "We accept standard STEP (.stp, .step), IGES (.igs), SolidWorks (.sldprt, .sldasm), DXF/DWG for plate cutting, and native Parasolid files. PDF drawings with tolerance callouts are also appreciated."
    },
    {
      q: "What is your typical lead time for precision machining & fabrication?",
      a: "Standard prototype & small-batch production ranges from 5 to 10 business days. Accelerated 48-hour turnarounds are available for critical industrial emergency repairs upon request."
    },
    {
      q: "Do you supply raw material mill test reports (MTRs)?",
      a: "Yes. All steel, stainless, titanium, and alloy raw materials sourced by IronCore come with certified Mill Test Reports (MTRs) and full heat number traceability meeting ISO 9001 compliance."
    },
    {
      q: "Can your AI telemetry sensors be retrofitted onto existing older machinery?",
      a: "Absolutely. Our AI edge telemetry nodes utilize non-invasive magnetic vibration sensors and industrial SCADA/Modbus gateways that mount easily onto any legacy pump, motor, or gearbox without machine downtime."
    }
  ];

  return (
    <div className="app-container-wrapper">
      
      {/* Compact Rounded Hero Banner */}
      <section className="page-hero-banner hero-compact-banner">
        <img 
          src="/images/service_engineering.png" 
          alt="Contact IronCore Industries" 
          className="page-hero-bg" 
        />
        <div className="page-hero-overlay"></div>

        <div className="page-hero-content">
          <div className="hero-tag-chip">GLOBAL HEADQUARTERS</div>
          <h1 className="page-hero-title">Contact IronCore Industries</h1>
          <p className="page-hero-sub">
            Get in touch with our engineering team, request project quotes, or schedule a facility tour.
          </p>
        </div>
      </section>

      {/* Main Contact Form Floating Card */}
      <section className="floating-dark-card">
        <ContactForm dark />
      </section>

      {/* Technical FAQ Floating Card */}
      <section className="floating-section-card">
        <div className="text-center mb-4">
          <span className="section-tag-amber">FREQUENTLY ASKED QUESTIONS</span>
          <h2 className="section-title-dark">Client & Technical Procurement FAQ</h2>
        </div>

        <div className="faq-list">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className={`faq-item ${openFaq === i ? 'faq-open' : ''}`}
              onClick={() => setOpenFaq(openFaq === i ? null : i)}
            >
              <div className="faq-question">
                <h3>{faq.q}</h3>
                <span className="faq-toggle">{openFaq === i ? '−' : '+'}</span>
              </div>
              {openFaq === i && (
                <div className="faq-answer">
                  <p>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <style>{`
        .mb-4 { margin-bottom: 1.5rem; }

        .faq-list {
          max-width: 840px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .faq-item {
          background: #E8EDF1;
          border: 1px solid #DDE4EA;
          border-radius: 10px;
          padding: 1.25rem 1.5rem;
          cursor: pointer;
          transition: var(--transition);
        }

        .faq-item:hover {
          border-color: #D98B32;
        }

        .faq-question {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
        }

        .faq-question h3 {
          font-size: 1.05rem;
          color: #061A2E;
          font-weight: 800;
        }

        .faq-toggle {
          font-size: 1.4rem;
          color: #D98B32;
          font-weight: 900;
        }

        .faq-answer {
          margin-top: 0.85rem;
          padding-top: 0.85rem;
          border-top: 1px solid #DDE4EA;
          font-size: 0.92rem;
          color: #3A4B5A;
          line-height: 1.6;
        }
      `}</style>
    </div>
  );
}
