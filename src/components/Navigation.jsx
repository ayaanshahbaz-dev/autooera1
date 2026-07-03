import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { ArrowRight, Menu, X } from 'lucide-react';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close drawer on route change
  const closeMenu = () => setMobileOpen(false);

  const links = [
    { name: 'Services', path: '/services' },
    { name: 'About',    path: '/about' },
    { name: 'Contact',  path: '/contact' },
  ];

  return (
    <>
      <nav className={`nav ${scrolled ? 'scrolled' : ''}`} role="navigation" aria-label="Main navigation">
        <div className="container nav-inner">
          {/* Logo */}
          <Link to="/" className="nav-logo" onClick={closeMenu} aria-label="AutoEra — Home">
            <svg
              className="nav-logo-svg"
              viewBox="0 0 176 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="AutoEra"
            >
              <text
                x="0"
                y="28"
                fontFamily="'Outfit', sans-serif"
                fontWeight="800"
                fontSize="28"
                fill="#FFFFFF"
                letterSpacing="-1"
              >
                Auto
              </text>
              {/* Lightning bolt mark */}
              <path
                d="M82 5 L73 20.5 H78.5 L71.5 33 L81.5 18 H76 L82 5Z"
                fill="#FF9500"
                strokeLinejoin="round"
              />
              <text
                x="89"
                y="28"
                fontFamily="'Outfit', sans-serif"
                fontWeight="800"
                fontSize="28"
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
            <Link to="/contact" className="btn btn-primary" id="nav-cta">
              Book a Call
              <ArrowRight size={16} />
            </Link>

            {/* Hamburger */}
            <button
              className={`nav-hamburger ${mobileOpen ? 'open' : ''}`}
              onClick={() => setMobileOpen(o => !o)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div className={`nav-drawer ${mobileOpen ? 'open' : ''}`} aria-hidden={!mobileOpen}>
        {links.map(({ name, path }) => (
          <NavLink
            key={name}
            to={path}
            className="nav-link"
            onClick={closeMenu}
          >
            {name}
          </NavLink>
        ))}
        <Link
          to="/contact"
          className="btn btn-primary"
          onClick={closeMenu}
        >
          Book a Discovery Call
          <ArrowRight size={16} />
        </Link>
      </div>
    </>
  );
}
