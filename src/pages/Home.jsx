import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Database, Server, Workflow, Lock, Zap, FileCode2 } from 'lucide-react';

/* ============================================================
   INTERACTIVE SYSTEM SHOWCASE (THE "WOW" SECTION)
   ============================================================ */
function SystemShowcase() {
  const [activeNode, setActiveNode] = useState(0);
  const nodes = [
    { label: 'Lead Capture', icon: Workflow, desc: 'Webhooks intercept payload from ad platforms instantly.' },
    { label: 'AI Qualification', icon: Zap, desc: 'LLM evaluates intent and extracts core requirements.' },
    { label: 'CRM Sync', icon: Database, desc: 'Bi-directional update to PostgreSQL & HubSpot.' },
    { label: 'Operations Dashboard', icon: Server, desc: 'Real-time WebSocket event pushes to sales team.' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNode((prev) => (prev + 1) % nodes.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [nodes.length]);

  return (
    <div className="eng-panel" style={{ padding: '40px', marginTop: '60px', position: 'relative' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '40px' }}>
        <span className="tech-label" style={{ margin: 0 }}>SYS_TOPOLOGY</span>
        <span style={{ fontSize: '0.8rem', color: 'var(--text-3)', fontFamily: 'SF Mono, monospace' }}>LATENCY: 14ms</span>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', alignItems: 'center' }}>
        {nodes.map((node, i) => {
          const isActive = i === activeNode;
          const isPast = i < activeNode;
          const Icon = node.icon;
          
          return (
            <div key={node.label} style={{ display: 'flex', alignItems: 'center', flex: '1 1 auto' }}>
              <div style={{ 
                padding: '20px', 
                background: isActive ? 'var(--accent-dim)' : 'rgba(255,255,255,0.02)',
                border: `1px solid ${isActive ? 'var(--accent)' : 'var(--border)'}`,
                borderRadius: 'var(--r-md)',
                minWidth: '200px',
                transition: 'all 0.3s ease'
              }}>
                <div style={{ color: isActive ? 'var(--accent)' : 'var(--text-3)', marginBottom: '12px' }}>
                  <Icon size={24} />
                </div>
                <div style={{ color: isActive ? 'var(--text-main)' : 'var(--text-2)', fontWeight: 500, fontSize: '0.9rem', marginBottom: '8px' }}>
                  {node.label}
                </div>
                <div style={{ color: 'var(--text-3)', fontSize: '0.8rem', height: '40px', opacity: isActive ? 1 : 0, transition: 'opacity 0.3s' }}>
                  {node.desc}
                </div>
              </div>

              {i < nodes.length - 1 && (
                <div style={{ 
                  flex: 1, height: '2px', minWidth: '40px',
                  background: isPast || isActive ? 'var(--accent)' : 'var(--border)',
                  position: 'relative', margin: '0 10px',
                  transition: 'background 0.3s ease'
                }}>
                  {isActive && (
                    <div style={{
                      position: 'absolute', top: '-3px', left: 0,
                      width: '8px', height: '8px', borderRadius: '50%',
                      background: 'var(--text-main)',
                      boxShadow: '0 0 10px var(--accent)',
                      animation: 'moveRight 2.5s linear infinite'
                    }} />
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
      <style>{`
        @keyframes moveRight {
          0% { left: 0; opacity: 1; }
          90% { left: 100%; opacity: 1; }
          100% { left: 100%; opacity: 0; }
        }
      `}</style>
    </div>
  );
}

/* ============================================================
   HOMEPAGE
   ============================================================ */
export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
      }),
      { threshold: 0.1 }
    );
    const els = document.querySelectorAll('.reveal:not(.visible)');
    els.forEach(el => observer.observe(el));
    return () => els.forEach(el => observer.unobserve(el));
  }, []);

  return (
    <main>
      <div className="blueprint-grid" />
      
      {/* ================= HERO ================= */}
      <section style={{ paddingTop: 'calc(var(--nav-h) + 120px)', paddingBottom: '80px' }}>
        <div className="container">
          <div className="reveal">
            <span className="tech-label">AUTOERA ENGINEERING STUDIO</span>
            <h1 style={{ maxWidth: '900px', marginBottom: '32px' }}>
              We engineer software systems around your business, not the other way around.
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-2)', maxWidth: '600px', marginBottom: '48px', lineHeight: 1.8 }}>
              We don't build generic chatbots. We architect mission-critical infrastructure, custom software, and intelligent pipelines that scale your operations autonomously.
            </p>
            
            <div style={{ display: 'flex', gap: '16px' }}>
              <Link to="/contact" className="btn btn-primary" style={{ padding: '0 32px', height: '48px' }}>
                Book Discovery Call
              </Link>
              <Link to="/solutions" className="btn btn-outline" style={{ padding: '0 32px', height: '48px' }}>
                Explore Systems
              </Link>
            </div>
          </div>

          <div className="reveal" style={{ transitionDelay: '200ms' }}>
            <SystemShowcase />
          </div>
        </div>
      </section>

      {/* ================= METRICS ================= */}
      <section style={{ padding: '80px 0', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', background: 'var(--bg-surface)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px' }}>
            <div className="reveal">
              <div style={{ fontSize: '3rem', fontWeight: 600, color: 'var(--text-main)', letterSpacing: '-0.05em' }}>99.9%</div>
              <div style={{ color: 'var(--text-3)', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '0.05em' }}>System Availability</div>
            </div>
            <div className="reveal" style={{ transitionDelay: '100ms' }}>
              <div style={{ fontSize: '3rem', fontWeight: 600, color: 'var(--text-main)', letterSpacing: '-0.05em' }}>&lt;2 sec</div>
              <div style={{ color: 'var(--text-3)', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '0.05em' }}>Average Response</div>
            </div>
            <div className="reveal" style={{ transitionDelay: '200ms' }}>
              <div style={{ fontSize: '3rem', fontWeight: 600, color: 'var(--text-main)', letterSpacing: '-0.05em' }}>40+</div>
              <div style={{ color: 'var(--text-3)', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '0.05em' }}>Supported Integrations</div>
            </div>
            <div className="reveal" style={{ transitionDelay: '300ms' }}>
              <div style={{ fontSize: '3rem', fontWeight: 600, color: 'var(--accent)', letterSpacing: '-0.05em' }}>Ready</div>
              <div style={{ color: 'var(--text-3)', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '0.05em' }}>Enterprise Architecture</div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= THE PAIN / SOLUTION ================= */}
      <section style={{ padding: '120px 0' }}>
        <div className="container">
          <div className="reveal" style={{ maxWidth: '800px', marginBottom: '80px' }}>
            <h2 style={{ marginBottom: '32px' }}>Most businesses are held together by spreadsheets and manual data entry.</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', color: 'var(--text-2)', fontSize: '1.1rem' }}>
              <p>Lost leads in overflowing inboxes.</p>
              <p>Disconnected CRMs that require manual syncing.</p>
              <p>Fragmented operations spread across 10 different generic SaaS tools.</p>
              <p style={{ color: 'var(--accent)', marginTop: '24px', fontWeight: 500 }}>
                We engineer the systems that permanently solve these problems.
              </p>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2px', background: 'var(--border)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', background: 'var(--bg-dark)' }}>
              <div style={{ padding: '32px', color: 'var(--text-3)', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '0.05em' }}>Traditional Software</div>
              <div style={{ padding: '32px', color: 'var(--accent)', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '0.05em' }}>AutoEra Engineering</div>
            </div>
            
            {[
              ['Generic tools forcing you to adapt', 'Custom systems adapting to your business'],
              ['Manual work and data entry', 'Intelligent workflows and background tasks'],
              ['Multiple disconnected subscriptions', 'Unified platforms owning the data layer'],
              ['Reactive support tickets', 'Proactive automation and alerting']
            ].map((row, i) => (
              <div key={i} className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', background: 'var(--bg-dark)', transitionDelay: `${i*50}ms` }}>
                <div style={{ padding: '32px', color: 'var(--text-2)', borderRight: '1px solid var(--border)' }}>{row[0]}</div>
                <div style={{ padding: '32px', color: 'var(--text-main)', fontWeight: 500 }}>{row[1]}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ENGINEERING PRINCIPLES ================= */}
      <section style={{ padding: '120px 0', borderTop: '1px solid var(--border)', background: 'rgba(255,255,255,0.01)' }}>
        <div className="container">
          <div className="reveal" style={{ marginBottom: '60px' }}>
            <span className="tech-label">INFRASTRUCTURE</span>
            <h2>Engineering Trust.</h2>
            <p style={{ color: 'var(--text-2)', maxWidth: '600px', marginTop: '16px' }}>
              We build systems that handle mission-critical data. That requires strict adherence to software engineering fundamentals.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {[
              { icon: Lock, title: 'Security by Design', desc: 'Strict RBAC, encrypted payloads, and secure credential vaults.' },
              { icon: Server, title: 'Scalable Architecture', desc: 'Dockerized microservices ready to scale vertically or horizontally.' },
              { icon: FileCode2, title: 'Clean Documentation', desc: 'Comprehensive API documentation so you are never locked out of your own system.' }
            ].map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="eng-panel reveal" style={{ padding: '32px', transitionDelay: `${i*100}ms` }}>
                  <Icon size={24} style={{ color: 'var(--accent)', marginBottom: '24px' }} />
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '12px' }}>{feature.title}</h3>
                  <p style={{ color: 'var(--text-2)', fontSize: '0.95rem' }}>{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </main>
  );
}
