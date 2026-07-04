import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { ArrowRight, Menu, X } from 'lucide-react';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close drawer on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const links = [
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About',    path: '/about' },
    { name: 'Blog',     path: '/blog' },
  ];

  return (
    <>
      <nav className={`nav ${scrolled ? 'scrolled' : ''}`} role="navigation" aria-label="Main navigation">
        <div className="container nav-inner">
          {/* Logo */}
          <Link to="/" className="nav-logo" aria-label="AutoEra — Home">
            <svg
              className="nav-logo-svg"
              viewBox="0 0 176 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ height: '28px', width: 'auto' }}
              role="img"
              aria-label="AutoEra"
            >
              <text
                x="0"
                y="28"
                fontFamily="'Outfit', sans-serif"
                fontWeight="800"
                fontSize="32"
                fill="#FFFFFF"
                letterSpacing="-1"
              >
                Auto
              </text>
              {/* Lightning bolt mark */}
              <path
                d="M86 4 L76 21 H82 L74 36 L86 19 H80 L86 4Z"
                fill="#FF9500"
                strokeLinejoin="round"
              />
              <text
                x="94"
                y="28"
                fontFamily="'Outfit', sans-serif"
                fontWeight="800"
                fontSize="32"
                fill="#FFFFFF"
                letterSpacing="-1"
              >
                Era
              </text>
            </svg>
          </Link>

          {/* Desktop Links */}
          <div className="nav-links" role="menubar">
            {links.map(({ name, path }) => (
              <NavLink
                key={name}
                to={path}
                className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
                role="menuitem"
              >
                {name}
              </NavLink>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="nav-right">
            <Link to="/contact" className="btn btn-outline" style={{ display: 'none', height: '40px', padding: '0 20px', fontSize: '0.85rem' }}>
              Contact
            </Link>
            <Link to="/contact" className="btn btn-primary" style={{ height: '40px', padding: '0 20px', fontSize: '0.85rem' }}>
              Start Project
            </Link>

            {/* Hamburger */}
            <button
              className="nav-hamburger"
              onClick={() => setMobileOpen(o => !o)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div className={`nav-drawer ${mobileOpen ? 'open' : ''}`} aria-hidden={!mobileOpen}>
        <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {links.map(({ name, path }) => (
            <NavLink
              key={name}
              to={path}
              className="nav-link"
            >
              {name}
            </NavLink>
          ))}
          <div style={{ height: '1px', background: 'var(--border)', margin: '10px 0' }}></div>
          <Link
            to="/contact"
            className="btn btn-primary"
            style={{ justifyContent: 'center' }}
          >
            Start Project
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </>
  );
}
