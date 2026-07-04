import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const links = [
    { name: 'Solutions', path: '/solutions' },
    { name: 'Engineering', path: '/engineering' },
    { name: 'Work', path: '/work' },
    { name: 'Studio', path: '/studio' },
    { name: 'Demo Center', path: '/demo' },
  ];

  return (
    <>
      <nav className={`nav ${scrolled ? 'scrolled' : ''}`} role="navigation">
        <div className="container nav-inner">
          <Link to="/" className="nav-logo" aria-label="AutoEra Engineering Studio">
            <svg
              viewBox="0 0 176 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ height: '24px', width: 'auto' }}
            >
              <text x="0" y="28" fontFamily="'Inter', sans-serif" fontWeight="700" fontSize="32" fill="#FFFFFF" letterSpacing="-1">Auto</text>
              <path d="M86 4 L76 21 H82 L74 36 L86 19 H80 L86 4Z" fill="var(--logo-orange)" strokeLinejoin="round" />
              <text x="94" y="28" fontFamily="'Inter', sans-serif" fontWeight="700" fontSize="32" fill="#FFFFFF" letterSpacing="-1">Era</text>
            </svg>
          </Link>

          <div className="nav-links">
            {links.map(({ name, path }) => (
              <NavLink
                key={name}
                to={path}
                className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
              >
                {name}
              </NavLink>
            ))}
          </div>

          <div className="nav-right">
            <Link to="/contact" className="btn btn-primary" style={{ display: 'none' }}>
              Contact
            </Link>
            <Link to="/contact" className="btn btn-outline" style={{ fontSize: '0.85rem' }}>
              Book Discovery Call
            </Link>

            <button
              className="nav-hamburger"
              style={{ display: 'block' }}
              onClick={() => setMobileOpen(o => !o)}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <style>{`@media (min-width: 768px) { .nav-hamburger { display: none !important; } }`}</style>
          </div>
        </div>
      </nav>

      <div className="nav-drawer" style={{
        position: 'fixed', top: 'var(--nav-h)', left: 0, right: 0, bottom: 0,
        background: 'var(--bg-dark)', padding: '24px', display: 'flex',
        flexDirection: 'column', gap: '24px', transform: mobileOpen ? 'translateY(0)' : 'translateY(-100%)',
        opacity: mobileOpen ? 1 : 0, transition: 'var(--t-smooth)', zIndex: 90, pointerEvents: mobileOpen ? 'all' : 'none'
      }}>
        {links.map(({ name, path }) => (
          <NavLink key={name} to={path} style={{ fontSize: '1.2rem', color: 'var(--text-main)', textDecoration: 'none', fontWeight: 500 }}>
            {name}
          </NavLink>
        ))}
        <div style={{ height: '1px', background: 'var(--border)', margin: '10px 0' }}></div>
        <Link to="/contact" className="btn btn-primary" style={{ justifyContent: 'center' }}>
          Book Discovery Call
        </Link>
      </div>
    </>
  );
}
