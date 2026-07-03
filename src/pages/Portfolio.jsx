import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Portfolio() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
      }),
      { threshold: 0.08 }
    );
    const els = document.querySelectorAll('.reveal');
    els.forEach(el => observer.observe(el));
    return () => els.forEach(el => observer.unobserve(el));
  }, []);

  return (
    <div className="portfolio-page">
      <section className="page-hero" style={{ paddingTop: 'calc(var(--nav-h) + 80px)' }}>
        <div className="container">
          <div className="reveal">
            <span className="section-label">Our work</span>
            <h1>Systems in production.</h1>
            <p>
              A selection of the AI systems we've engineered for real businesses.
              Results are documented. Nothing is exaggerated.
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 0', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div className="reveal" style={{ maxWidth: 600 }}>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.75, color: 'var(--text-2)', marginBottom: 32 }}>
              Detailed case studies are available during our discovery call process.
              We share full system architecture, outcome metrics, and implementation
              timelines with prospective clients.
            </p>
            <Link to="/contact" className="btn btn-primary" id="portfolio-cta" style={{ height: 50, padding: '0 24px' }}>
              Book a Discovery Call
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
