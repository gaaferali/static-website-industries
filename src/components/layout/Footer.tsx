import { Link } from 'react-router-dom';
import { COMPANY_INFO, SERVICES_DATA } from '../../data/services';
import './Footer.css';

const socialLinks = [
  {
    label: 'LinkedIn',
    path: 'M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm-5 14h-2v-6h2v6zm-1-7a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm5 7h-2v-3.5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5V17h-2v-6h2v1.08C13.36 11.4 14.12 11 15 11c1.66 0 3 1.34 3 3V17z',
  },
  {
    label: 'X',
    path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z',
  },
];

const navigationLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/#about' },
  { label: 'Services', to: '/#services' },
  { label: 'Contact Us', to: '/contact' },
  { label: 'AI Service', to: '/ai-service' },
];

const contactItems = [
  {
    icon: 'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z',
    text: COMPANY_INFO.contact.phone,
  },
  {
    icon: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22,6 12,13 2,6',
    text: COMPANY_INFO.contact.email,
  },
  {
    icon: 'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z M15,10a3,3 0 1,1-6,0a3,3 0 0,1 6,0z',
    text: COMPANY_INFO.contact.address,
  },
];

const legalLinks = ['Privacy Policy', 'Terms of Service', 'ISO Certificates'];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link to="/" className="footer-brand-link">
              <div className="footer-brand-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2">
                  <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-2.82 1.18V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                </svg>
              </div>
              <div>
                <div className="footer-brand-name">IRONCORE</div>
                <div className="footer-brand-subtitle">INDUSTRIES</div>
              </div>
            </Link>

            <p className="footer-summary">
              {COMPANY_INFO.tagline}<br />
              Industrial manufacturing, heavy fabrication & AI-driven operations.
            </p>

            <div className="footer-social-links">
              {socialLinks.map((social) => (
                <a key={social.label} href="#" aria-label={social.label} className="footer-social-link">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="footer-heading">Navigation</h4>
            <ul className="footer-list">
              {navigationLinks.map((link) => (
                <li key={link.to}>
                  {link.to.startsWith('/#') ? (
                    <a href={link.to} className="footer-link">{link.label}</a>
                  ) : (
                    <Link to={link.to} className="footer-link">{link.label}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="footer-heading">Our Services</h4>
            <ul className="footer-list">
              {SERVICES_DATA.map((service) => (
                <li key={service.id}>
                  <Link to={`/services/${service.id}`} className="footer-link">{service.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="footer-heading">Contact Us</h4>
            <div className="footer-contact-list">
              {contactItems.map((item) => (
                <div key={item.text} className="footer-contact-item">
                  <svg className="footer-contact-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="2">
                    <path d={item.icon} />
                  </svg>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 IronCore Industries. All Rights Reserved.</span>
          <div className="footer-legal-links">
            {legalLinks.map((label) => (
              <a key={label} href="#" className="footer-link">{label}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
