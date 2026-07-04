import { useEffect } from 'react';
import { GitPullRequest, TestTube, FileCode2, Activity, ShieldAlert, Cpu, Layers, Server } from 'lucide-react';

export default function Engineering() {
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

  const standards = [
    { icon: GitPullRequest, title: 'Code Review & Version Control', desc: 'Strict peer review processes and Git workflows ensure no rogue code enters production.' },
    { icon: TestTube, title: 'Automated Testing', desc: 'Unit and integration tests run on every commit to verify systemic integrity before deployment.' },
    { icon: FileCode2, title: 'Comprehensive Documentation', desc: 'We document schemas, API routes, and deployment steps so your internal team is never locked out.' },
    { icon: Activity, title: 'Logging & Monitoring', desc: 'Real-time telemetry and error tracking. We know if a webhook fails before you do.' }
  ];

  const principles = [
    { title: 'API First', desc: 'Every feature is built as an API endpoint first, decoupling the backend from the frontend presentation layer.' },
    { title: 'Modular Design', desc: 'Systems are broken into isolated micro-services. A failure in the email router does not crash the database.' },
    { title: 'Scalable Infrastructure', desc: 'Stateless server design allows us to horizontally scale containerized instances under heavy load.' },
    { title: 'Security by Design', desc: 'Role-based access control, encrypted payloads, and strict CORS policies are implemented at day zero, not as an afterthought.' }
  ];

  return (
    <main style={{ paddingTop: 'calc(var(--nav-h) + 80px)', paddingBottom: '120px' }}>
      <div className="container">
        
        {/* Header */}
        <div className="reveal" style={{ maxWidth: '800px', marginBottom: '100px' }}>
          <span className="tech-label">AUTOERA CORE</span>
          <h1 style={{ marginBottom: '24px' }}>Engineering Standards</h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-2)' }}>
            We do not compromise on technical fundamentals. Mission-critical business operations require production-grade software engineering, rigorous testing, and strict architectural discipline.
          </p>
        </div>

        {/* Standards Grid */}
        <section style={{ marginBottom: '120px' }}>
          <h2 className="reveal" style={{ fontSize: '1.5rem', marginBottom: '40px', color: 'var(--text-main)', borderBottom: '1px solid var(--border)', paddingBottom: '16px' }}>Development Protocol</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
            {standards.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={s.title} className="eng-panel reveal" style={{ padding: '32px', transitionDelay: `${i*100}ms` }}>
                  <Icon size={20} style={{ color: 'var(--accent)', marginBottom: '16px' }} />
                  <h3 style={{ fontSize: '1.1rem', marginBottom: '12px' }}>{s.title}</h3>
                  <p style={{ color: 'var(--text-2)', fontSize: '0.95rem' }}>{s.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Architecture Principles */}
        <section style={{ marginBottom: '120px' }}>
          <h2 className="reveal" style={{ fontSize: '1.5rem', marginBottom: '40px', color: 'var(--text-main)', borderBottom: '1px solid var(--border)', paddingBottom: '16px' }}>Architecture Principles</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
            {principles.map((p, i) => (
              <div key={p.title} className="reveal" style={{ transitionDelay: `${i*100}ms` }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                  <div style={{ width: '8px', height: '8px', background: 'var(--accent)' }}></div>
                  <h3 style={{ fontSize: '1.2rem', margin: 0 }}>{p.title}</h3>
                </div>
                <p style={{ color: 'var(--text-2)', fontSize: '1rem', paddingLeft: '20px', borderLeft: '1px solid var(--border)' }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Technology Stack */}
        <section>
          <h2 className="reveal" style={{ fontSize: '1.5rem', marginBottom: '40px', color: 'var(--text-main)', borderBottom: '1px solid var(--border)', paddingBottom: '16px' }}>Technology Stack (Production)</h2>
          
          <div className="eng-panel reveal" style={{ overflow: 'hidden' }}>
            {[
              { tech: 'React / Next.js', reason: 'Modern, component-based frontend architecture for highly interactive user interfaces.' },
              { tech: 'Django / FastAPI', reason: 'Reliable backend engineering, strict data validation, and asynchronous API handling.' },
              { tech: 'PostgreSQL', reason: 'Production-ready, battle-tested relational database ensuring ACID compliance.' },
              { tech: 'Docker', reason: 'Consistent deployments. Code runs the exact same way on the server as it does locally.' },
              { tech: 'n8n', reason: 'Enterprise-grade workflow orchestration layer allowing precise JSON payload manipulation.' }
            ].map((t, i) => (
              <div key={t.tech} style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', padding: '24px 32px', borderBottom: i !== 4 ? '1px solid var(--border)' : 'none', background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.01)' }}>
                <div style={{ fontFamily: 'SF Mono, monospace', color: 'var(--text-main)', fontWeight: 500 }}>{t.tech}</div>
                <div style={{ color: 'var(--text-2)', fontSize: '0.95rem' }}>{t.reason}</div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}
