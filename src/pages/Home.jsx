import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Database, Server, Workflow, Zap, Layers, Network, Lock, FileCode2 } from 'lucide-react';

/* ============================================================
   INTERACTIVE SYSTEM SHOWCASE (AUTOERA SIGNATURE)
   ============================================================ */
function SystemShowcase() {
  const [activeNode, setActiveNode] = useState(0);
  const nodes = [
    { label: 'Ingestion Layer', icon: Network, desc: 'Webhooks intercept payload instantly.' },
    { label: 'AI Validation', icon: Zap, desc: 'LLM extracts core data requirements.' },
    { label: 'Data Persistence', icon: Database, desc: 'Transaction written to PostgreSQL.' },
    { label: 'Event Dispatch', icon: Workflow, desc: 'Sockets push update to client UI.' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNode((prev) => (prev + 1) % nodes.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [nodes.length]);

  return (
    <div className="eng-panel" style={{ padding: '40px', marginTop: '40px', position: 'relative' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '40px' }}>
        <span className="tech-label" style={{ margin: 0 }}>LIVE_TOPOLOGY</span>
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
                padding: '24px', 
                background: isActive ? 'var(--accent-dim)' : 'var(--bg-dark)',
                border: `1px solid ${isActive ? 'var(--accent)' : 'var(--border)'}`,
                borderRadius: 'var(--r-md)',
                minWidth: '220px',
                transition: 'all 0.3s ease'
              }}>
                <div style={{ color: isActive ? 'var(--accent)' : 'var(--text-3)', marginBottom: '16px' }}>
                  <Icon size={24} />
                </div>
                <div style={{ color: isActive ? 'var(--text-main)' : 'var(--text-2)', fontWeight: 500, fontSize: '0.95rem', marginBottom: '8px' }}>
                  {node.label}
                </div>
                <div style={{ color: 'var(--text-3)', fontSize: '0.85rem', height: '40px', opacity: isActive ? 1 : 0, transition: 'opacity 0.3s' }}>
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
            <span style={{ display: 'inline-block', fontSize: '1.1rem', color: 'var(--text-2)', marginBottom: '16px' }}>Software Systems for Growing Businesses</span>
            <h1 style={{ maxWidth: '950px', marginBottom: '32px' }}>
              We engineer software systems around your business, not the other way around.
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'var(--text-2)', maxWidth: '650px', marginBottom: '48px', lineHeight: 1.8 }}>
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

      {/* ================= ENGINEERING CAPABILITIES ================= */}
      <section style={{ padding: '80px 0', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', background: 'var(--bg-surface)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px' }}>
            <div className="reveal">
              <Layers size={32} style={{ color: 'var(--text-main)', marginBottom: '16px' }} />
              <div style={{ fontSize: '1.25rem', fontWeight: 500, color: 'var(--text-main)', marginBottom: '8px' }}>Architecture First</div>
              <div style={{ color: 'var(--text-2)', fontSize: '0.95rem' }}>We map schemas and API routes before writing a single line of code.</div>
            </div>
            <div className="reveal" style={{ transitionDelay: '100ms' }}>
              <Server size={32} style={{ color: 'var(--text-main)', marginBottom: '16px' }} />
              <div style={{ fontSize: '1.25rem', fontWeight: 500, color: 'var(--text-main)', marginBottom: '8px' }}>Scalable by Design</div>
              <div style={{ color: 'var(--text-2)', fontSize: '0.95rem' }}>Stateless microservices built to handle concurrent enterprise loads.</div>
            </div>
            <div className="reveal" style={{ transitionDelay: '200ms' }}>
              <Network size={32} style={{ color: 'var(--text-main)', marginBottom: '16px' }} />
              <div style={{ fontSize: '1.25rem', fontWeight: 500, color: 'var(--text-main)', marginBottom: '8px' }}>API Driven</div>
              <div style={{ color: 'var(--text-2)', fontSize: '0.95rem' }}>Decoupled backends allowing seamless integration with any platform.</div>
            </div>
            <div className="reveal" style={{ transitionDelay: '300ms' }}>
              <Lock size={32} style={{ color: 'var(--text-main)', marginBottom: '16px' }} />
              <div style={{ fontSize: '1.25rem', fontWeight: 500, color: 'var(--text-main)', marginBottom: '8px' }}>Security Focused</div>
              <div style={{ color: 'var(--text-2)', fontSize: '0.95rem' }}>Strict RBAC, encrypted payloads, and secure data handling.</div>
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

    </main>
  );
}
