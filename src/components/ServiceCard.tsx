import { Link } from 'react-router-dom';
import type { ServiceItem } from '../data/servicesData';

interface ServiceCardProps {
  service: ServiceItem;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className={`service-card ${service.isAI ? 'featured-ai-card' : ''}`}>
      <div className="card-image-wrapper">
        <img src={service.image} alt={service.title} loading="lazy" />
        <span className={`card-badge ${service.isAI ? 'ai-badge' : ''}`}>
          {service.badge}
        </span>
      </div>

      <div className="card-body">
        <h3 className="card-title">{service.title}</h3>
        <p className="card-subtitle">{service.subtitle}</p>
        <p className="card-desc">{service.shortDesc}</p>

        <ul className="card-capabilities">
          {service.capabilities.slice(0, 3).map((cap, i) => (
            <li key={i}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              <span>{cap}</span>
            </li>
          ))}
        </ul>

        <div className="card-footer">
          <Link 
            to={service.isAI ? "/ai-service" : `/services/${service.id}`} 
            className={`btn ${service.isAI ? 'btn-accent-blue' : 'btn-secondary'} card-btn`}
          >
            <span>{service.isAI ? "EXPLORE AI PLATFORM" : "VIEW DETAILS & SPECS"}</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </Link>
        </div>
      </div>

      <style>{`
        .service-card {
          background: rgba(19, 29, 49, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: var(--radius-md);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: var(--transition-normal);
        }

        .service-card:hover {
          transform: translateY(-6px);
          border-color: rgba(249, 115, 22, 0.4);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
        }

        .featured-ai-card {
          border-color: rgba(56, 189, 248, 0.3);
          background: linear-gradient(160deg, rgba(11, 17, 32, 0.95), rgba(2, 132, 199, 0.15));
        }

        .featured-ai-card:hover {
          border-color: rgba(56, 189, 248, 0.7);
          box-shadow: 0 15px 35px rgba(2, 132, 199, 0.3);
        }

        .card-image-wrapper {
          position: relative;
          height: 220px;
          overflow: hidden;
        }

        .card-image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .service-card:hover .card-image-wrapper img {
          transform: scale(1.06);
        }

        .card-badge {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: rgba(6, 9, 17, 0.85);
          backdrop-filter: blur(8px);
          color: var(--accent-orange);
          border: 1px solid rgba(249, 115, 22, 0.4);
          font-size: 0.75rem;
          font-weight: 700;
          padding: 0.3rem 0.75rem;
          border-radius: var(--radius-full);
          text-transform: uppercase;
        }

        .ai-badge {
          color: #38BDF8;
          border-color: rgba(56, 189, 248, 0.5);
          box-shadow: 0 0 10px rgba(56, 189, 248, 0.4);
        }

        .card-body {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .card-title {
          font-size: 1.35rem;
          color: #FFFFFF;
          margin-bottom: 0.2rem;
        }

        .card-subtitle {
          font-size: 0.85rem;
          color: var(--accent-orange);
          font-weight: 600;
          margin-bottom: 0.75rem;
        }

        .featured-ai-card .card-subtitle {
          color: #38BDF8;
        }

        .card-desc {
          font-size: 0.9rem;
          color: #94A3B8;
          margin-bottom: 1.25rem;
          line-height: 1.5;
        }

        .card-capabilities {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
          margin-top: auto;
        }

        .card-capabilities li {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.85rem;
          color: #CBD5E1;
        }

        .card-capabilities svg {
          color: var(--accent-orange);
          flex-shrink: 0;
        }

        .featured-ai-card .card-capabilities svg {
          color: #38BDF8;
        }

        .card-footer {
          margin-top: 0.5rem;
        }

        .card-btn {
          width: 100%;
          font-size: 0.82rem;
          padding: 0.75rem;
          justify-content: space-between;
        }
      `}</style>
    </div>
  );
}
