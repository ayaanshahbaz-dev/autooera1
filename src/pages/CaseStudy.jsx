import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, PlayCircle, Network, Database, Server, Code, Layers, Activity } from 'lucide-react';

export default function CaseStudy() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('Overview');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const tabs = ['Overview', 'Architecture', 'Engineering'];

  return (
    <main style={{ paddingTop: 'calc(var(--nav-h) + 40px)', paddingBottom: '120px' }}>
      <div className="container" style={{ maxWidth: '1000px' }}>
        
        <Link to="/work" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--text-3)', fontSize: '0.9rem', marginBottom: '60px', transition: 'var(--t-fast)', textDecoration: 'none' }}>
          <ArrowLeft size={16} /> Return to Repositories
        </Link>
        
        {/* Document Header */}
        <header style={{ marginBottom: '40px' }}>
          <div style={{ display: 'flex', gap: '12px', marginBottom: '24px' }}>
            <span className="tech-label" style={{ margin: 0 }}>VERSION: v1.0</span>
            <span className="tech-label" style={{ margin: 0, background: 'rgba(0, 229, 255, 0.1)', color: 'var(--accent)', borderColor: 'var(--border-accent)' }}>STATUS: PRODUCTION</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '24px', lineHeight: 1.1 }}>
            HealthSmile Voice Intake Node
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-2)', maxWidth: '700px' }}>
            An autonomous Voice API integration routing inbound patient calls directly into PostgreSQL and Practice Management software.
          </p>
        </header>

        {/* Technical Specifications Fast Block */}
        <div className="eng-panel" style={{ padding: '24px', display: 'flex', flexWrap: 'wrap', gap: '32px', marginBottom: '40px', background: 'var(--bg-surface)' }}>
          <div><div style={{ fontSize: '0.75rem', color: 'var(--text-3)', textTransform: 'uppercase', marginBottom: '4px' }}>Architecture</div><div style={{ color: 'var(--text-main)' }}>Modular</div></div>
          <div><div style={{ fontSize: '0.75rem', color: 'var(--text-3)', textTransform: 'uppercase', marginBottom: '4px' }}>Backend</div><div style={{ color: 'var(--text-main)' }}>FastAPI</div></div>
          <div><div style={{ fontSize: '0.75rem', color: 'var(--text-3)', textTransform: 'uppercase', marginBottom: '4px' }}>Database</div><div style={{ color: 'var(--text-main)' }}>PostgreSQL</div></div>
          <div><div style={{ fontSize: '0.75rem', color: 'var(--text-3)', textTransform: 'uppercase', marginBottom: '4px' }}>Deployment</div><div style={{ color: 'var(--text-main)' }}>Docker / VPS</div></div>
          <div><div style={{ fontSize: '0.75rem', color: 'var(--text-3)', textTransform: 'uppercase', marginBottom: '4px' }}>Intelligence</div><div style={{ color: 'var(--text-main)' }}>OpenAI Realtime</div></div>
        </div>

        {/* Tab Navigation */}
        <div style={{ display: 'flex', gap: '8px', borderBottom: '1px solid var(--border)', marginBottom: '60px', overflowX: 'auto' }}>
          {tabs.map(tab => (
            <button 
              key={tab} 
              onClick={() => setActiveTab(tab)}
              style={{ 
                padding: '16px 24px', 
                color: activeTab === tab ? 'var(--text-main)' : 'var(--text-2)', 
                borderBottom: activeTab === tab ? '2px solid var(--accent)' : '2px solid transparent',
                fontSize: '1rem',
                fontWeight: activeTab === tab ? 500 : 400
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div style={{ minHeight: '500px' }}>
          
          {/* ===================== OVERVIEW TAB ===================== */}
          {activeTab === 'Overview' && (
            <div className="reveal" style={{ display: 'grid', gap: '80px' }}>
              
              <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
                <div>
                  <h2 style={{ fontSize: '1.2rem', marginBottom: '24px', color: 'var(--text-main)' }}>Engineering Skills Demonstrated</h2>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {['Voice AI Integration', 'API Gateway Design', 'RBAC Security', 'PostgreSQL DB Design', 'Asynchronous Task Queues', 'Docker Deployment'].map(skill => (
                      <div key={skill} style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-2)', fontSize: '0.95rem' }}>
                        <CheckCircle2 size={16} style={{ color: 'var(--accent)' }} /> {skill}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h2 style={{ fontSize: '1.2rem', marginBottom: '24px', color: 'var(--text-main)' }}>Operational Business Impact</h2>
                  <div className="eng-panel" style={{ padding: '24px', borderLeft: '2px solid var(--accent)' }}>
                    <p style={{ margin: 0, color: 'var(--text-2)', lineHeight: 1.6 }}>
                      Reduced manual patient intake dependencies by automating initial voice routing. This eliminated queue overflow during peak hours and synchronously updated the practice management CRM without requiring human data-entry.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <div className="eng-panel" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '400px', background: 'var(--bg-dark)' }}>
                  <div style={{ textAlign: 'center', color: 'var(--text-3)' }}>
                    <PlayCircle size={48} style={{ margin: '0 auto 16px', color: 'var(--text-2)' }} />
                    <div style={{ color: 'var(--text-main)' }}>Engineering Walkthrough Video</div>
                    <div style={{ fontSize: '0.85rem', marginTop: '8px' }}>[Planned for Phase 2]</div>
                  </div>
                </div>
              </section>

              <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
                <div>
                  <h2 style={{ fontSize: '1.2rem', marginBottom: '24px', color: 'var(--text-main)' }}>Build Journal</h2>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    {[
                      { date: 'July 4, 2026', step: 'Architecture Designed' },
                      { date: 'July 9, 2026', step: 'Backend & Routing Started' },
                      { date: 'July 18, 2026', step: 'AI Logic Completed' },
                      { date: 'August 1, 2026', step: 'Production Deployment' },
                    ].map(log => (
                      <div key={log.date} style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                        <div style={{ color: 'var(--text-3)', fontSize: '0.85rem', fontFamily: 'SF Mono, monospace', minWidth: '120px' }}>{log.date}</div>
                        <div style={{ color: 'var(--text-main)', fontSize: '0.95rem' }}>{log.step}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h2 style={{ fontSize: '1.2rem', marginBottom: '24px', color: 'var(--text-main)' }}>Future Extensions</h2>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                    {['Multi-language Support', 'Advanced Analytics Dashboard', 'SMS Failover Mode'].map(ext => (
                      <span key={ext} style={{ padding: '6px 16px', background: 'var(--bg-surface)', border: '1px solid var(--border)', borderRadius: 'var(--r-pill)', fontSize: '0.85rem', color: 'var(--text-2)' }}>{ext}</span>
                    ))}
                  </div>
                </div>
              </section>

            </div>
          )}

          {/* ===================== ARCHITECTURE TAB ===================== */}
          {activeTab === 'Architecture' && (
            <div className="reveal" style={{ display: 'grid', gap: '80px' }}>
              
              <section>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '24px' }}>System Architecture Preview</h2>
                <div className="eng-panel" style={{ padding: '40px', background: 'var(--bg-dark)' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontFamily: 'SF Mono, monospace', fontSize: '0.9rem', color: 'var(--text-main)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}><Network size={16} style={{ color: 'var(--accent)' }}/> Inbound Twilio PSTN Gateway</div>
                    <div style={{ marginLeft: '6px', borderLeft: '2px solid var(--border-accent)', paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}><Server size={16} style={{ color: 'var(--text-3)' }}/> FastAPI Core Router</div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}><Activity size={16} style={{ color: 'var(--text-3)' }}/> Realtime AI Intent Processor</div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}><Database size={16} style={{ color: 'var(--text-3)' }}/> PostgreSQL Mutation</div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}><Layers size={16} style={{ color: 'var(--text-3)' }}/> Background Webhook Dispatch (CRM)</div>
                  </div>
                </div>
              </section>

              <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
                <div>
                  <h2 style={{ fontSize: '1.2rem', marginBottom: '24px', color: 'var(--text-main)' }}>Inside This System</h2>
                  <div className="eng-panel" style={{ padding: '24px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    {['12 API Endpoints', 'RBAC Security', 'Webhook Interceptor', 'AI Intent Layer', 'Task Queue', 'Audit Logs'].map(item => (
                      <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-2)', fontSize: '0.85rem' }}>
                        <CheckCircle2 size={14} style={{ color: 'var(--accent)' }} /> {item}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h2 style={{ fontSize: '1.2rem', marginBottom: '24px', color: 'var(--text-main)' }}>Database Entities (Core)</h2>
                  <div className="eng-panel" style={{ padding: '24px', display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                    {['Patient', 'Appointment', 'Call_Log', 'Provider', 'Availability_Slot'].map(entity => (
                      <span key={entity} style={{ padding: '4px 12px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', fontSize: '0.85rem', fontFamily: 'SF Mono, monospace', color: 'var(--text-2)' }}>{entity}</span>
                    ))}
                  </div>
                </div>
              </section>

              <section>
                <h2 style={{ fontSize: '1.2rem', marginBottom: '24px', color: 'var(--text-main)' }}>API Documentation Overview</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px' }}>
                  <div className="eng-panel" style={{ padding: '24px' }}>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-3)', textTransform: 'uppercase', marginBottom: '8px' }}>Authentication</div>
                    <div style={{ color: 'var(--text-main)', fontWeight: 500 }}>JWT Bearer</div>
                  </div>
                  <div className="eng-panel" style={{ padding: '24px' }}>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-3)', textTransform: 'uppercase', marginBottom: '8px' }}>Architecture Style</div>
                    <div style={{ color: 'var(--text-main)', fontWeight: 500 }}>REST API</div>
                  </div>
                  <div className="eng-panel" style={{ padding: '24px' }}>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-3)', textTransform: 'uppercase', marginBottom: '8px' }}>Event Subscriptions</div>
                    <div style={{ color: 'var(--text-main)', fontWeight: 500 }}>Webhooks Supported</div>
                  </div>
                </div>
              </section>

            </div>
          )}

          {/* ===================== ENGINEERING TAB ===================== */}
          {activeTab === 'Engineering' && (
            <div className="reveal" style={{ display: 'grid', gap: '80px' }}>
              
              <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
                <div>
                  <h2 style={{ fontSize: '1.5rem', marginBottom: '24px' }}>System Health</h2>
                  <div className="eng-panel" style={{ padding: '0' }}>
                    {[
                      { comp: 'Authentication', status: 'Implemented', sColor: 'var(--status-online)' },
                      { comp: 'REST Endpoints', status: 'Implemented', sColor: 'var(--status-online)' },
                      { comp: 'Database Design', status: 'Implemented', sColor: 'var(--status-online)' },
                      { comp: 'AI Processing Layer', status: 'Under Engineering', sColor: 'var(--logo-orange)' },
                      { comp: 'Analytics Dashboard', status: 'Planned', sColor: 'var(--text-3)' }
                    ].map((item, i) => (
                      <div key={item.comp} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 24px', borderBottom: i !== 4 ? '1px solid var(--border)' : 'none' }}>
                        <span style={{ color: 'var(--text-main)', fontSize: '0.95rem' }}>{item.comp}</span>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', fontFamily: 'SF Mono, monospace', color: item.sColor }}>
                          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: item.sColor }}></span>
                          {item.status}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 style={{ fontSize: '1.5rem', marginBottom: '24px' }}>Reliability & Performance</h2>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    {[
                      { title: 'Error Handling', desc: 'Global exception catchers with Slack alerting.' },
                      { title: 'Retry Logic', desc: 'Exponential backoff for external API timeouts.' },
                      { title: 'Queue Processing', desc: 'Redis-backed Celery workers for heavy tasks.' },
                      { title: 'Monitoring', desc: 'Real-time telemetry and structured JSON logging.' }
                    ].map(r => (
                      <div key={r.title} className="eng-panel" style={{ padding: '20px 24px' }}>
                        <div style={{ color: 'var(--text-main)', fontWeight: 500, marginBottom: '8px' }}>{r.title}</div>
                        <div style={{ color: 'var(--text-2)', fontSize: '0.9rem' }}>{r.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <section>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '32px' }}>Engineering Decisions</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                  
                  <div className="eng-panel" style={{ padding: '32px' }}>
                    <h3 style={{ fontSize: '1.2rem', color: 'var(--accent)', marginBottom: '16px' }}>Why FastAPI over Django?</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: '100px 1fr', gap: '16px', marginBottom: '16px' }}>
                      <span style={{ color: 'var(--text-3)', fontSize: '0.85rem', textTransform: 'uppercase' }}>Context</span>
                      <span style={{ color: 'var(--text-2)', fontSize: '0.95rem' }}>This system requires bridging a low-latency WebRTC audio stream with LLM processing. Speed is the absolute priority.</span>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '100px 1fr', gap: '16px', marginBottom: '16px' }}>
                      <span style={{ color: 'var(--text-3)', fontSize: '0.85rem', textTransform: 'uppercase' }}>Tradeoffs</span>
                      <span style={{ color: 'var(--text-2)', fontSize: '0.95rem' }}>Django provides an incredible out-of-the-box admin panel and ORM, but carries heavier overhead for pure asynchronous API workloads.</span>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '100px 1fr', gap: '16px' }}>
                      <span style={{ color: 'var(--text-main)', fontSize: '0.85rem', textTransform: 'uppercase' }}>Result</span>
                      <span style={{ color: 'var(--text-main)', fontSize: '0.95rem' }}>Selected FastAPI for native async support, sub-millisecond routing, and automatic OpenAPI documentation generation.</span>
                    </div>
                  </div>

                </div>
              </section>

            </div>
          )}

        </div>
      </div>
    </main>
  );
}
