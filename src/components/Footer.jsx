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
                  fontWeight="800" fontSize="28"
                  fill="#FFFFFF" letterSpacing="-1"
                >Auto</text>
                <path
                  d="M82 5 L73 20.5 H78.5 L71.5 33 L81.5 18 H76 L82 5Z"
                  fill="#FF9500"
                  strokeLinejoin="round"
                />
                <text
                  x="89" y="28"
                  fontFamily="'Outfit', sans-serif"
                  fontWeight="800" fontSize="28"
                  fill="#FFFFFF" letterSpacing="-1"
                >Era</text>
              </svg>
            </Link>
            <p className="footer-brand-tagline">
              We engineer AI systems that become part of how businesses operate.
            </p>
          </div>

          {/* Systems */}
          <div className="footer-col">
            <h4>Systems</h4>
            <nav className="footer-links" aria-label="Systems navigation">
              <Link to="/services#ai-receptionist" className="footer-link">AI Receptionist</Link>
              <Link to="/services#lead-response" className="footer-link">Lead Response</Link>
              <Link to="/services#customer-support" className="footer-link">Customer Support</Link>
              <Link to="/services#knowledge-base" className="footer-link">Knowledge Base</Link>
              <Link to="/services#crm-automation" className="footer-link">CRM Automation</Link>
              <Link to="/services#custom-ai" className="footer-link">Custom AI Software</Link>
            </nav>
          </div>

          {/* Company */}
          <div className="footer-col">
            <h4>Company</h4>
            <nav className="footer-links" aria-label="Company navigation">
              <Link to="/about" className="footer-link">About</Link>
              <Link to="/contact" className="footer-link">Contact</Link>
              <Link to="/contact" className="footer-link">Book a Call</Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h4>Connect</h4>
            <nav className="footer-links" aria-label="Connect navigation">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                LinkedIn
              </a>
              <a
                href="mailto:hello@autoera.io"
                className="footer-link"
              >
                hello@autoera.io
              </a>
            </nav>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p className="footer-copy">
            © {year} AutoEra. All rights reserved.
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
