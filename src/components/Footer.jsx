import { Link } from 'react-router-dom';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <Link to="/" aria-label="AutoEra — Home">
              <svg
                viewBox="0 0 176 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ height: '32px', width: 'auto' }}
                role="img"
                aria-label="AutoEra"
              >
                <text
                  x="0" y="28"
                  fontFamily="'Outfit', sans-serif"
                  fontWeight="800" fontSize="32"
                  fill="#FFFFFF" letterSpacing="-1"
                >Auto</text>
                <path
                  d="M86 4 L76 21 H82 L74 36 L86 19 H80 L86 4Z"
                  fill="#FF9500"
                  strokeLinejoin="round"
                />
                <text
                  x="94" y="28"
                  fontFamily="'Outfit', sans-serif"
                  fontWeight="800" fontSize="32"
                  fill="#FFFFFF" letterSpacing="-1"
                >Era</text>
              </svg>
            </Link>
            <p className="footer-brand-tagline">
              Engineering AI automation systems and digital workflows that scale.
            </p>
          </div>

          {/* Platform */}
          <div className="footer-col">
            <h4 style={{ color: 'var(--text-main)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Platform</h4>
            <nav className="footer-links" aria-label="Platform navigation">
              <Link to="/services" className="footer-link">Systems & Services</Link>
              <Link to="/portfolio" className="footer-link">Case Studies</Link>
              <Link to="/about" className="footer-link">About the Studio</Link>
              <Link to="/blog" className="footer-link">Engineering Notes</Link>
            </nav>
          </div>

          {/* Connect */}
          <div className="footer-col">
            <h4 style={{ color: 'var(--text-main)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Connect</h4>
            <nav className="footer-links" aria-label="Connect navigation">
              <Link to="/contact" className="footer-link">Start a Project</Link>
              <a href="mailto:hello@autoera.io" className="footer-link">hello@autoera.io</a>
              <a href="#" className="footer-link">LinkedIn</a>
              <a href="#" className="footer-link">Twitter / X</a>
            </nav>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p style={{ color: 'var(--text-3)' }}>
            © {year} AutoEra Engineering Studio. All rights reserved.
          </p>
          <div className="footer-status">
            <span className="footer-status-dot" />
            All systems operational
          </div>
        </div>
      </div>
    </footer>
  );
}
