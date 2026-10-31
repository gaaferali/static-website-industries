import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { SERVICES_DATA, AI_SERVICES_DATA } from '../data/servicesData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [aiDropdown, setAiDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeHash, setActiveHash] = useState('');

  const location = useLocation();
  const navigate = useNavigate();
  const servicesRef = useRef<HTMLDivElement>(null);
  const aiRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setServicesDropdown(false);
    setAiDropdown(false);
    setActiveHash(window.location.hash);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesDropdown(false);
      }
      if (aiRef.current && !aiRef.current.contains(e.target as Node)) {
        setAiDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Determine active menu item cleanly
  const getActiveTab = () => {
    const path = location.pathname;
    const hash = location.hash || activeHash;

    if (path === '/contact') return 'contact';
    if (path === '/ai-services' || (path.startsWith('/services/') && path.includes('ai-'))) return 'ai-services';
    if (hash === '#about') return 'about';
    if (hash === '#services' || (path.startsWith('/services/') && !path.includes('ai-'))) return 'services';
    if (path === '/') return 'home';
    return '';
  };

  const activeTab = getActiveTab();

  const handleServicesHeaderClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setServicesDropdown(false);
    if (location.pathname !== '/') {
      navigate('/#services');
    } else {
      const el = document.getElementById('services');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      window.location.hash = '#services';
      setActiveHash('#services');
    }
  };

  const handleAiHeaderClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setAiDropdown(false);
    navigate('/ai-services');
  };

  const handleAboutClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/#about');
    } else {
      const el = document.getElementById('about');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      window.location.hash = '#about';
      setActiveHash('#about');
    }
  };

  return (
    <>
      <header className={`floating-header ${scrolled ? 'header-scrolled' : ''}`}>
        <div className="container header-container">
          
          {/* Floating White Pill Navbar */}
          <nav className="navbar-pill">
            
            {/* Company Logo Icon + Name on Left */}
            <Link to="/" className="pill-brand">
              <div className="brand-icon-box">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.2">
                  <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-2.82 1.18V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                </svg>
              </div>
              <span className="brand-text">IronCore</span>
            </Link>

            {/* Desktop Nav Links */}
            <div className="nav-menu">
              
              <Link 
                to="/" 
                className={`nav-link ${activeTab === 'home' ? 'active' : ''}`}
                onClick={() => setActiveHash('')}
              >
                HOME
              </Link>

              <a 
                href="/#about" 
                onClick={handleAboutClick}
                className={`nav-link ${activeTab === 'about' ? 'active' : ''}`}
              >
                ABOUT US
              </a>

              {/* SERVICES DROPDOWN */}
              <div 
                ref={servicesRef} 
                className="dropdown-wrapper"
                onMouseEnter={() => setServicesDropdown(true)}
                onMouseLeave={() => setServicesDropdown(false)}
              >
                <a 
                  href="/#services" 
                  onClick={handleServicesHeaderClick}
                  className={`nav-link dropdown-toggle ${activeTab === 'services' ? 'active' : ''}`}
                >
                  SERVICES
                </a>

                {servicesDropdown && (
                  <div className="dropdown-menu">
                    <div className="dropdown-header">INDUSTRIAL SERVICES</div>
                    {SERVICES_DATA.map(s => (
                      <Link key={s.id} to={`/services/${s.id}`} className="dropdown-item">
                        <span className="item-title">{s.title}</span>
                        <span className="item-sub">{s.subtitle}</span>
                      </Link>
                    ))}
                    <a href="/#services" onClick={handleServicesHeaderClick} className="dropdown-footer-link">
                      View All Core Services Component →
                    </a>
                  </div>
                )}
              </div>

              <Link 
                to="/contact" 
                className={`nav-link ${activeTab === 'contact' ? 'active' : ''}`}
              >
                CONTACT US
              </Link>

              {/* AI SERVICES DROPDOWN */}
              <div 
                ref={aiRef} 
                className="dropdown-wrapper"
                onMouseEnter={() => setAiDropdown(true)}
                onMouseLeave={() => setAiDropdown(false)}
              >
                <a 
                  href="/ai-services" 
                  onClick={handleAiHeaderClick}
                  className={`nav-link dropdown-toggle ${activeTab === 'ai-services' ? 'active' : ''}`}
                >
                  AI SERVICES
                </a>

                {aiDropdown && (
                  <div className="dropdown-menu">
                    <div className="dropdown-header">AI INDUSTRIAL PLATFORMS</div>
                    {AI_SERVICES_DATA.map(ai => (
                      <Link key={ai.id} to={`/services/${ai.id}`} className="dropdown-item ai-item">
                        <div className="item-main">
                          <span className="item-title">{ai.title}</span>
                          <span className="item-sub">{ai.subtitle}</span>
                        </div>
                        <span className="ai-badge-sm">{ai.badge}</span>
                      </Link>
                    ))}
                    <Link to="/ai-services" onClick={() => setAiDropdown(false)} className="dropdown-footer-link">
                      Explore AI Control Room Hub →
                    </Link>
                  </div>
                )}
              </div>

            </div>

            {/* Right Search Action Pill */}
            <div className="nav-right-action">
              <div className="figma-search-pill">
                <input 
                  type="text" 
                  placeholder="Search..." 
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className="figma-search-input"
                />
                <button className="figma-search-btn" aria-label="Search">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.5">
                    <circle cx="11" cy="11" r="8"/>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                  </svg>
                </button>
              </div>

              {/* Mobile Hamburger Button */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="hamburger-btn"
                aria-label="Toggle Navigation Menu"
              >
                <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
                <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
                <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
              </button>
            </div>

          </nav>
        </div>
      </header>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="mobile-drawer">
          <div className="mobile-menu-content">
            <Link to="/" className="mobile-link" onClick={() => setMenuOpen(false)}>HOME</Link>
            <a href="/#about" className="mobile-link" onClick={(e) => { handleAboutClick(e); setMenuOpen(false); }}>ABOUT US</a>
            
            <div className="mobile-section">
              <div className="mobile-sec-title">SERVICES</div>
              <a href="/#services" className="mobile-sublink ai-sublink-bold" onClick={(e) => { handleServicesHeaderClick(e); setMenuOpen(false); }}>
                → All Services Component
              </a>
              {SERVICES_DATA.map(s => (
                <Link key={s.id} to={`/services/${s.id}`} className="mobile-sublink" onClick={() => setMenuOpen(false)}>
                  • {s.title}
                </Link>
              ))}
            </div>

            <div className="mobile-section">
              <div className="mobile-sec-title">AI SERVICES</div>
              <Link to="/ai-services" className="mobile-sublink ai-sublink-bold" onClick={() => setMenuOpen(false)}>
                → AI Control Room Hub Component
              </Link>
              {AI_SERVICES_DATA.map(ai => (
                <Link key={ai.id} to={`/services/${ai.id}`} className="mobile-sublink ai-sublink" onClick={() => setMenuOpen(false)}>
                  ⚡ {ai.title}
                </Link>
              ))}
            </div>

            <Link to="/contact" className="btn btn-primary w-full text-center" onClick={() => setMenuOpen(false)}>
              CONTACT US
            </Link>
          </div>
        </div>
      )}

      <style>{`
        .floating-header {
          position: fixed;
          top: 1.25rem;
          left: 0;
          right: 0;
          z-index: 1000;
          transition: all 0.3s ease;
        }

        .header-scrolled {
          top: 0.75rem;
        }

        .header-container {
          display: flex;
          justify-content: center;
        }

        .navbar-pill {
          background: rgba(255,255,255,0.96);
          border-radius: 14px;
          padding: 0.45rem 1rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          max-width: 1160px;
          box-shadow: 0 8px 24px rgba(6,26,46,0.12);
          border: 1px solid rgba(6,26,46,0.06);
        }

        /* Company Logo Badge + Brand Name on Left */
        .pill-brand {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          text-decoration: none;
        }

        .brand-icon-box {
          width: 38px;
          height: 38px;
          border-radius: 8px;
          background: linear-gradient(180deg,#061A2E,#0B253E);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 6px 18px rgba(6, 26, 46, 0.12);
          transition: transform 0.16s, background-color 0.16s;
        }

        .pill-brand:hover .brand-icon-box {
          transform: translateY(-2px);
        }

        .brand-text {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1rem;
          color: #061A2E;
          letter-spacing: -0.01em;
        }

        .nav-menu {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .nav-link {
          font-family: var(--font-heading);
          font-size: 0.95rem;
          font-weight: 700;
          color: #243447;
          text-transform: none;
          letter-spacing: 0.01em;
          text-decoration: none;
          transition: color 0.16s ease, transform 0.16s ease;
          display: inline-flex;
          align-items: center;
          padding: 0.35rem 0.1rem;
          position: relative;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          bottom: -6px;
          height: 2px;
          background: transparent;
          transition: background 0.16s;
          border-radius: 2px;
        }

        .nav-link:hover { color: #D98B32; transform: translateY(-2px); }
        .nav-link.active { color: #D98B32; }
        .nav-link.active::after { background: #D98B32; }

        .dropdown-wrapper {
          position: relative;
        }

        .dropdown-toggle {
          cursor: pointer;
        }

        .dropdown-menu {
          position: absolute;
          top: calc(100% + 0.6rem);
          left: 50%;
          transform: translateX(-50%);
          background: #FFFFFF;
          border: 1px solid rgba(6,26,46,0.06);
          border-radius: 10px;
          padding: 0.6rem;
          width: 360px;
          box-shadow: 0 12px 30px rgba(6, 26, 46, 0.12);
          z-index: 1050;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          animation: dropFade 0.18s ease;
        }

        .dropdown-menu::before {
          content: '';
          position: absolute;
          top: -20px;
          left: 0;
          right: 0;
          height: 20px;
          background: transparent;
        }

        @keyframes dropFade {
          from { opacity: 0; transform: translate(-50%, -8px); }
          to { opacity: 1; transform: translate(-50%, 0); }
        }

        .dropdown-header {
          font-family: var(--font-heading);
          font-size: 0.72rem;
          font-weight: 800;
          color: #D98B32;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin-bottom: 0.35rem;
        }

        .dropdown-item {
          padding: 0.6rem 0.8rem;
          border-radius: 8px;
          text-decoration: none;
          display: flex;
          flex-direction: column;
          transition: background 0.12s, transform 0.12s;
          background: transparent;
        }

        .dropdown-item:hover { background: rgba(6,26,46,0.02); transform: translateY(-2px); }

        .item-title {
          font-size: 0.92rem;
          font-weight: 700;
          color: #061A2E;
        }

        .item-sub {
          font-size: 0.78rem;
          color: #607080;
        }

        .dropdown-footer-link {
          font-family: var(--font-heading);
          font-size: 0.78rem;
          font-weight: 700;
          color: #D98B32;
          margin-top: 0.4rem;
          padding-top: 0.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          text-decoration: none;
        }

        .ai-item {
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
        }

        .ai-badge-sm {
          font-size: 0.65rem;
          font-weight: 700;
          color: #D98B32;
          background: rgba(217, 139, 50, 0.15);
          padding: 0.15rem 0.4rem;
          border-radius: 4px;
        }

        .nav-right-action {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .figma-search-pill {
          display: flex;
          align-items: center;
          background: #F6F8FA;
          border: 1px solid rgba(6,26,46,0.06);
          border-radius: 9999px;
          padding: 0.35rem 0.5rem 0.35rem 0.9rem;
          width: 180px;
          transition: all 0.18s ease;
        }

        .figma-search-pill:focus-within { box-shadow: 0 6px 18px rgba(6,26,46,0.08); width: 230px; }

        .figma-search-input {
          background: transparent;
          border: none;
          color: #243447;
          font-size: 0.9rem;
          font-weight: 500;
          width: 100%;
          outline: none;
        }

        .figma-search-input::placeholder { color: #98A4AE; }

        .figma-search-btn {
          background: #061A2E;
          border: none;
          color: #D98B32;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 30px;
          height: 30px;
          border-radius: 8px;
          transition: transform 0.14s;
        }

        .figma-search-btn:hover { transform: translateY(-2px); }

        .hamburger-btn {
          display: none;
          background: #061A2E;
          border: none;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          cursor: pointer;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 4px;
        }

        .hamburger-btn .bar {
          width: 16px;
          height: 2px;
          background: #FFFFFF;
          border-radius: 2px;
        }

        .mobile-drawer {
          position: fixed;
          top: 5rem;
          left: 1rem;
          right: 1rem;
          z-index: 999;
          background: #061A2E;
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 16px;
          padding: 1.5rem;
          box-shadow: 0 20px 50px rgba(6, 26, 46, 0.5);
        }

        .mobile-menu-content {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .mobile-link {
          font-family: var(--font-heading);
          font-size: 1.1rem;
          font-weight: 800;
          color: #FFFFFF;
          text-decoration: none;
        }

        .mobile-section {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding-top: 0.75rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .mobile-sec-title {
          font-size: 0.7rem;
          font-weight: 800;
          color: #D98B32;
          letter-spacing: 0.1em;
        }

        .mobile-sublink {
          font-size: 0.9rem;
          color: #E8EDF1;
          text-decoration: none;
          padding-left: 0.5rem;
        }

        .ai-sublink { color: #D98B32; }
        .ai-sublink-bold { color: #D98B32; font-weight: 700; }

        @media (max-width: 900px) {
          .nav-menu { display: none; }
          .hamburger-btn { display: flex; }
          .figma-search-pill { display: none; }
          .navbar-pill { padding: 0.6rem 1rem; }
        }
      `}</style>
    </>
  );
}
