import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_INFO, SERVICES_DATA } from '../data/servicesData';

export default function Footer() {
  return (
    <footer style={{ background: 'var(--navy)', color: 'var(--text-white-dim)', paddingTop: '4rem', paddingBottom: '2rem' }}>
      <div className="container">
        {/* Top Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2.5rem',
          paddingBottom: '3rem',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
        }}>
          {/* Brand Column */}
          <div>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1rem' }}>
              <div style={{ width: 36, height: 36, borderRadius: 6, background: 'var(--blue)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2">
                  <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-2.82 1.18V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
                </svg>
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.05rem', color: '#fff', letterSpacing: '0.04em' }}>IRONCORE</div>
                <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '0.56rem', color: 'var(--blue)', letterSpacing: '0.22em' }}>INDUSTRIES</div>
              </div>
            </Link>
            <p style={{ fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              {COMPANY_INFO.tagline}<br />
              Industrial manufacturing, heavy fabrication & AI-driven operations.
            </p>
            {/* Socials */}
            <div style={{ display: 'flex', gap: '0.6rem' }}>
              {[
                { label: 'LinkedIn', path: 'M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm-5 14h-2v-6h2v6zm-1-7a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm5 7h-2v-3.5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5V17h-2v-6h2v1.08C13.36 11.4 14.12 11 15 11c1.66 0 3 1.34 3 3V17z' },
                { label: 'X', path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
              ].map(s => (
                <a key={s.label} href="#" aria-label={s.label} style={{
                  width: 34, height: 34, borderRadius: '50%',
                  border: '1px solid rgba(255,255,255,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'rgba(255,255,255,0.6)',
                  transition: 'all 0.2s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'var(--blue)'; e.currentTarget.style.borderColor = 'var(--blue)'; e.currentTarget.style.color = '#fff'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; e.currentTarget.style.color = 'rgba(255,255,255,0.6)'; }}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d={s.path} /></svg>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 style={footerHeadingStyle}>Navigation</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {[
                { label: 'Home', to: '/' },
                { label: 'About Us', to: '/#about' },
                { label: 'Services', to: '/#services' },
                { label: 'Contact Us', to: '/contact' },
                { label: 'AI Service', to: '/ai-service' },
              ].map(l => (
                <li key={l.to}>
                  {l.to.startsWith('/#') ? (
                    <a href={l.to} style={footerLinkStyle}>{l.label}</a>
                  ) : (
                    <Link to={l.to} style={footerLinkStyle}>{l.label}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 style={footerHeadingStyle}>Our Services</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {SERVICES_DATA.map(s => (
                <li key={s.id}>
                  <Link to={s.isAI ? '/ai-service' : `/services/${s.id}`} style={footerLinkStyle}>{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={footerHeadingStyle}>Contact Us</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {[
                { icon: 'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z', text: COMPANY_INFO.contact.phone },
                { icon: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22,6 12,13 2,6', text: COMPANY_INFO.contact.email },
                { icon: 'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z M15,10a3,3 0 1,1-6,0a3,3 0 0,1 6,0z', text: COMPANY_INFO.contact.address },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', fontSize: '0.86rem' }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="2" style={{ flexShrink: 0, marginTop: 2 }}>
                    <path d={item.icon} />
                  </svg>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          marginTop: '2rem',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem',
          fontSize: '0.83rem',
        }}>
          <span>© 2026 IronCore Industries. All Rights Reserved.</span>
          <div style={{ display: 'flex', gap: '1.25rem' }}>
            {['Privacy Policy', 'Terms of Service', 'ISO Certificates'].map(t => (
              <a key={t} href="#" style={{ ...footerLinkStyle }}>{t}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

const footerHeadingStyle: React.CSSProperties = {
  fontFamily: 'var(--font-heading)',
  fontSize: '0.95rem',
  fontWeight: 700,
  color: '#fff',
  marginBottom: '1.1rem',
  paddingBottom: '0.5rem',
  borderBottom: '2px solid var(--blue)',
  display: 'inline-block',
};

const footerLinkStyle: React.CSSProperties = {
  fontSize: '0.88rem',
  color: 'rgba(255,255,255,0.65)',
  transition: 'color 0.2s',
  display: 'block',
};
