import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Portfolio() {
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

  const projects = [
    {
      id: 'dental-ai-receptionist',
      title: 'AI-Powered Dental Clinic Receptionist',
      client: 'HealthSmile Clinics',
      tags: ['Voice AI', 'n8n', 'Calendar Sync'],
      metric: '+34% Bookings'
    },
    {
      id: 'real-estate-lead-routing',
      title: 'Multi-Channel Lead Routing System',
      client: 'UrbanEstates Group',
      tags: ['API Integration', 'CRM Automation', 'Lead Scoring'],
      metric: '4m Avg Response'
    },
    {
      id: 'b2b-support-agent',
      title: 'B2B Technical Support Desk Automation',
      client: 'SaaS Platform X',
      tags: ['LLM', 'Vector DB', 'Zendesk API'],
      metric: '73% Auto-resolution'
    }
  ];

  return (
    <main style={{ paddingTop: 'calc(var(--nav-h) + 60px)' }}>
      <section style={{ paddingBottom: '80px' }}>
        <div className="container">
          <div className="reveal">
            <span className="section-label">Case Studies</span>
            <h1 style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', marginBottom: '24px' }}>
              Proof of concept. <br/><span style={{ color: 'var(--text-3)' }}>Proof of execution.</span>
            </h1>
          </div>
        </div>
      </section>

      <section style={{ paddingBottom: '120px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '32px' }}>
            {projects.map((p, i) => (
              <Link key={p.id} to={`/portfolio/${p.id}`} className="glass-panel reveal" style={{ 
                display: 'flex', flexDirection: 'column', padding: '40px', transitionDelay: `${i * 100}ms`,
                textDecoration: 'none', position: 'relative', overflow: 'hidden', group: 'true'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
                  <span style={{ color: 'var(--accent)', fontFamily: 'Outfit', fontWeight: 600, fontSize: '0.9rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                    {p.client}
                  </span>
                  <div style={{ padding: '6px 12px', background: 'rgba(74, 222, 128, 0.1)', color: 'var(--green)', borderRadius: 'var(--r-pill)', fontSize: '0.8rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--green)', boxShadow: '0 0 8px rgba(74,222,128,0.5)' }}></div>
                    {p.metric}
                  </div>
                </div>
                
                <h2 style={{ fontSize: '2rem', marginBottom: '24px', transition: 'var(--t-fast)' }} className="group-hover">{p.title}</h2>
                
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: 'auto' }}>
                  {p.tags.map(t => (
                    <span key={t} style={{ fontSize: '0.8rem', color: 'var(--text-3)', border: '1px solid var(--border)', padding: '4px 10px', borderRadius: 'var(--r-sm)' }}>{t}</span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
