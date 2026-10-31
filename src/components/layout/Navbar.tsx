import { useEffect, useRef, useState, type MouseEvent as ReactMouseEvent } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { SERVICES_DATA, AI_SERVICES_DATA } from '../../data/services';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [aiDropdown, setAiDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

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
    const hash = location.hash;

    if (path === '/contact') return 'contact';
    if (path === '/ai-services' || (path.startsWith('/services/') && path.includes('ai-'))) return 'ai-services';
    if (hash === '#about') return 'about';
    if (hash === '#services' || (path.startsWith('/services/') && !path.includes('ai-'))) return 'services';
    if (path === '/') return 'home';
    return '';
  };

  const activeTab = getActiveTab();

  const closeNavigation = () => {
    setMenuOpen(false);
    setServicesDropdown(false);
    setAiDropdown(false);
  };

  const handleServicesHeaderClick = (e: ReactMouseEvent) => {
    e.preventDefault();
    closeNavigation();
    if (location.pathname !== '/') {
      navigate('/#services');
    } else {
      const el = document.getElementById('services');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      window.location.hash = '#services';
    }
  };

  const handleAiHeaderClick = (e: ReactMouseEvent) => {
    e.preventDefault();
    closeNavigation();
    navigate('/ai-services');
  };

  const handleAboutClick = (e: ReactMouseEvent) => {
    e.preventDefault();
    closeNavigation();
    if (location.pathname !== '/') {
      navigate('/#about');
    } else {
      const el = document.getElementById('about');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      window.location.hash = '#about';
    }
  };

  return (
    <>
      <header className={`floating-header ${scrolled ? 'header-scrolled' : ''}`}>
        <div className="container header-container">
          
          {/* Floating White Pill Navbar */}
          <nav className="navbar-pill">
            
            {/* Company Logo Icon + Name on Left */}
            <Link to="/" className="pill-brand" onClick={closeNavigation}>
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
                onClick={closeNavigation}
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
                      <Link key={s.id} to={`/services/${s.id}`} className="dropdown-item" onClick={closeNavigation}>
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
                onClick={closeNavigation}
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
                      <Link key={ai.id} to={`/services/${ai.id}`} className="dropdown-item ai-item" onClick={closeNavigation}>
                        <div className="item-main">
                          <span className="item-title">{ai.title}</span>
                          <span className="item-sub">{ai.subtitle}</span>
                        </div>
                        <span className="ai-badge-sm">{ai.badge}</span>
                      </Link>
                    ))}
                    <Link to="/ai-services" onClick={closeNavigation} className="dropdown-footer-link">
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
    </>
  );
}
