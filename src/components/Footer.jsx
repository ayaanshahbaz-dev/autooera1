import { Link } from 'react-router-dom';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        
        {/* Footer CTA */}
        <div style={{ padding: '80px 0', borderBottom: '1px solid var(--border)', marginBottom: '80px', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '24px' }}>Ready to engineer a better way to run your business?</h2>
          <Link to="/contact" className="btn btn-primary" style={{ height: '48px', padding: '0 32px' }}>
            Book a Discovery Call
          </Link>
        </div>

        <div className="footer-grid">
          {/* Brand */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <Link to="/" aria-label="AutoEra Engineering Studio">
              <svg viewBox="0 0 176 38" fill="none" style={{ height: '28px', width: 'auto' }}>
                <text x="0" y="28" fontFamily="'Inter', sans-serif" fontWeight="700" fontSize="32" fill="#FFFFFF" letterSpacing="-1">Auto</text>
                <path d="M86 4 L76 21 H82 L74 36 L86 19 H80 L86 4Z" fill="var(--logo-orange)" strokeLinejoin="round" />
                <text x="94" y="28" fontFamily="'Inter', sans-serif" fontWeight="700" fontSize="32" fill="#FFFFFF" letterSpacing="-1">Era</text>
              </svg>
            </Link>
            <p style={{ color: 'var(--text-2)', maxWidth: '280px', fontSize: '0.9rem' }}>
              Building software we're proud to put our name on.
            </p>
          </div>

          <div className="footer-col">
            <h4>Platform</h4>
            <nav className="footer-links">
              <Link to="/solutions" className="footer-link">Systems We Engineer</Link>
              <Link to="/engineering" className="footer-link">Engineering Standards</Link>
              <Link to="/work" className="footer-link">Engineering Case Studies</Link>
            </nav>
          </div>

          <div className="footer-col">
            <h4>Studio</h4>
            <nav className="footer-links">
              <Link to="/studio" className="footer-link">Our Philosophy</Link>
              <Link to="/insights" className="footer-link">Engineering Notes</Link>
              <Link to="/contact" className="footer-link">Contact</Link>
            </nav>
          </div>

          <div className="footer-col">
            <h4>Technologies</h4>
            <nav className="footer-links" style={{ fontFamily: 'SF Mono, monospace', fontSize: '0.8rem' }}>
              <span className="footer-link">Next.js / React</span>
              <span className="footer-link">Python / Django</span>
              <span className="footer-link">PostgreSQL</span>
              <span className="footer-link">Docker</span>
              <span className="footer-link">n8n</span>
            </nav>
          </div>
        </div>

        <div className="footer-bottom">
          <p style={{ color: 'var(--text-3)' }}>
            © {year} AutoEra Engineering Studio. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
            <div style={{ color: 'var(--text-3)', fontSize: '0.8rem', fontFamily: 'SF Mono, monospace' }}>Last Updated: July 2026</div>
            <div style={{ color: 'var(--text-3)', fontSize: '0.8rem', fontFamily: 'SF Mono, monospace' }}>Version: v2.1</div>
            <div className="footer-status" style={{ color: 'var(--accent)' }}>
              <span className="footer-status-dot" style={{ background: 'var(--accent)', boxShadow: '0 0 8px var(--accent-glow)' }} />
              Active Development
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
