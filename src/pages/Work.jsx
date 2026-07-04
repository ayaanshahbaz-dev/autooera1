import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, FileCode2, Database, Network } from 'lucide-react';

export default function Work() {
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
      title: 'HealthSmile Voice Intake Node',
      client: 'HealthSmile Clinics',
      problem: '30% missed call rate during peak hours; manual data entry errors into patient CRM.',
      outcome: 'Zero missed calls; +34% automated booking rate; synchronous CRM updates.',
      tech: ['Voice API', 'FastAPI', 'PostgreSQL', 'n8n'],
      arch: 'Voice Webhook → LLM Intent Router → API Gateway → Practice Management CRM.'
    },
    {
      id: 'urban-estates-routing',
      title: 'UrbanEstates Lead Engine',
      client: 'UrbanEstates Group',
      problem: 'Fragmented lead sources causing a 4-hour average response time, leaking high-value prospects.',
      outcome: 'Lead ingestion centralized; 4-minute average AI response time; intelligent agent routing.',
      tech: ['React', 'Node.js', 'Redis', 'Twilio'],
      arch: 'Multi-channel Ingest → Central Event Bus → Scoring Algorithm → SMS/Email Dispatch.'
    }
  ];

  return (
    <main style={{ paddingTop: 'calc(var(--nav-h) + 80px)', paddingBottom: '120px' }}>
      <div className="container">
        
        <div className="reveal" style={{ marginBottom: '80px' }}>
          <span className="tech-label">DEPLOYED_SYSTEMS</span>
          <h1 style={{ marginBottom: '24px' }}>Engineering Case Studies</h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-2)', maxWidth: '700px' }}>
            We do not sell abstract ideas. We deploy working software. Review our engineering decisions, architectures, and the business outcomes they produced.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          {projects.map((p, i) => (
            <div key={p.id} className="eng-panel reveal" style={{ transitionDelay: `${i*100}ms` }}>
              <div style={{ padding: '32px', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <FileCode2 style={{ color: 'var(--text-3)' }} size={24} />
                  <h2 style={{ fontSize: '1.5rem', margin: 0, color: 'var(--text-main)' }}>{p.title}</h2>
                  <span style={{ padding: '4px 8px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border)', borderRadius: '4px', fontSize: '0.75rem', fontFamily: 'SF Mono, monospace', color: 'var(--text-3)' }}>{p.client}</span>
                </div>
                <div style={{ display: 'flex', gap: '8px' }}>
                  {p.tech.map(t => (
                    <span key={t} style={{ fontSize: '0.75rem', color: 'var(--accent)', border: '1px solid var(--border-accent)', padding: '4px 10px', borderRadius: 'var(--r-pill)' }}>{t}</span>
                  ))}
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', background: 'var(--bg-dark)' }}>
                <div style={{ padding: '32px', borderRight: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
                  <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--text-3)', marginBottom: '12px', letterSpacing: '0.05em' }}>Business Problem</div>
                  <p style={{ color: 'var(--text-2)', fontSize: '0.95rem' }}>{p.problem}</p>
                </div>
                <div style={{ padding: '32px', borderBottom: '1px solid var(--border)' }}>
                  <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--text-3)', marginBottom: '12px', letterSpacing: '0.05em' }}>Engineered Outcome</div>
                  <p style={{ color: 'var(--text-main)', fontSize: '0.95rem' }}>{p.outcome}</p>
                </div>
              </div>

              <div style={{ padding: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'var(--bg-surface)' }}>
                <div>
                  <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--text-3)', marginBottom: '12px', letterSpacing: '0.05em' }}>Architecture Preview</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-2)', fontFamily: 'SF Mono, monospace', fontSize: '0.85rem' }}>
                    <Network size={16} style={{ color: 'var(--accent)' }} />
                    {p.arch}
                  </div>
                </div>
                <Link to={`/work/${p.id}`} className="btn btn-primary">
                  Read Engineering Case Study <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}
