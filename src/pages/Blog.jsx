import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Blog() {
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
      tag: 'Engineering'
    },
    {
      slug: 'the-death-of-manual-data-entry',
      title: 'The death of manual data entry: CRM sync strategies',
      date: 'Sep 15, 2026',
      readTime: '8 min read',
      tag: 'Strategy'
    }
  ];

  return (
    <main style={{ paddingTop: 'calc(var(--nav-h) + 60px)' }}>
      <section style={{ paddingBottom: '80px' }}>
        <div className="container">
          <div className="reveal">
            <span className="section-label">Engineering Notes</span>
            <h1 style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', marginBottom: '24px' }}>
              Writing from the <span style={{ color: 'var(--text-3)' }}>terminal.</span>
            </h1>
          </div>
        </div>
      </section>

      <section style={{ paddingBottom: '120px' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
            {articles.map((a, i) => (
              <Link key={a.slug} to={`/blog/${a.slug}`} className="reveal" style={{ 
                display: 'block', textDecoration: 'none', borderBottom: '1px solid var(--border)', 
                paddingBottom: '48px', transitionDelay: `${i * 100}ms`
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>{a.tag}</span>
                  <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--border)' }}></span>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-3)' }}>{a.date}</span>
                  <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--border)' }}></span>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-3)' }}>{a.readTime}</span>
                </div>
                <h2 style={{ fontSize: '2rem', color: 'var(--text-main)', marginBottom: '16px', transition: 'var(--t-fast)' }}>{a.title}</h2>
                <div style={{ color: 'var(--text-2)', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.95rem' }}>
                  Read Transmission <span style={{ color: 'var(--accent)' }}>→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
