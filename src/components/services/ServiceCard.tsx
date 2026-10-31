import { Link } from 'react-router-dom';
import type { ServiceItem } from '../../data/services';
import './ServiceCard.css';

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
    </div>
  );
}
