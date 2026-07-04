import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Insights() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
      }),
      { threshold: 0.1 }
    );
    const els = document.querySelectorAll('.reveal');
    els.forEach(el => observer.observe(el));
    return () => els.forEach(el => observer.unobserve(el));
  }, []);

  const articles = [
    {
      slug: 'why-n8n-beats-zapier-for-enterprise',
      title: 'Why we use n8n over Zapier for production-grade automation',
      date: 'Oct 12, 2026',
      readTime: '6 min read',
      tag: 'Architecture'
    },
    {
      slug: 'structuring-llm-outputs-json',
      title: 'Forcing LLMs to output reliable JSON for API webhooks',
      date: 'Sep 28, 2026',
      readTime: '4 min read',
      tag: 'AI Engineering'
    },
    {
      slug: 'the-death-of-manual-data-entry',
      title: 'The death of manual data entry: CRM sync strategies',
      date: 'Sep 15, 2026',
      readTime: '8 min read',
      tag: 'System Design'
    }
  ];

  return (
    <main style={{ paddingTop: 'calc(var(--nav-h) + 80px)', paddingBottom: '120px' }}>
      <section style={{ paddingBottom: '80px' }}>
        <div className="container">
          <div className="reveal">
            <span className="tech-label">PUBLIC_LOGS</span>
            <h1 style={{ marginBottom: '24px' }}>Engineering Notes</h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-2)', maxWidth: '600px' }}>
              We open-source our architecture decisions, backend scaling strategies, and automation build logs.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="container" style={{ maxWidth: '800px', margin: '0' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {articles.map((a, i) => (
              <Link key={a.slug} to={`/insights/${a.slug}`} className="eng-panel reveal" style={{ 
                display: 'block', textDecoration: 'none', padding: '40px', transitionDelay: `${i * 100}ms`
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.05em', fontFamily: 'SF Mono, monospace' }}>{a.tag}</span>
                  <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--border)' }}></span>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-3)' }}>{a.date}</span>
                </div>
                <h2 style={{ fontSize: '1.5rem', color: 'var(--text-main)', marginBottom: '24px', transition: 'var(--t-fast)' }}>{a.title}</h2>
                <div style={{ color: 'var(--text-2)', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem' }}>
                  Read Transmission <ArrowRight size={14} style={{ color: 'var(--accent)' }} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
