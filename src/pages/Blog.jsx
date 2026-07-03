import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Blog() {
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
            <span className="section-label">Engineering notes</span>
            <h1>Writing from the field.</h1>
            <p>
              Technical insights, system architecture decisions, and operational
              observations from building AI systems in production.
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 0', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div className="reveal" style={{ maxWidth: 600 }}>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.75, color: 'var(--text-2)', marginBottom: 32 }}>
              Content coming soon. In the meantime, if you have specific questions
              about AI system architecture, integration patterns, or operational
              automation — bring them to the discovery call.
            </p>
            <Link to="/contact" className="btn btn-ghost" id="blog-cta" style={{ height: 50, padding: '0 24px' }}>
              Book a Discovery Call
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
