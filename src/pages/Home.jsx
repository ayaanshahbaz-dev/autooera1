import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { User, Brain, Database, Settings, BarChart, LineChart, Users, ShieldCheck, Layers, Network, Lock, ArrowRight, Zap, FileCode2, Code, Plus } from 'lucide-react';

/* ============================================================
   INTERACTIVE SYSTEM SHOWCASE (THE HERO DIAGRAM)
   ============================================================ */
function SystemShowcase() {
  const nodes = [
    { label: 'Lead\nCapture', icon: User },
    { label: 'AI\nQualification', icon: Brain },
    { label: 'CRM\nSync', icon: Database },
    { label: 'Automation\nEngine', icon: Settings },
    { label: 'Dashboard\n& Reports', icon: BarChart },
    { label: 'Analytics\n& Insights', icon: LineChart },
    { label: 'Your\nTeam', icon: Users }
  ];

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '400px' }}>
      
      {/* Background Glowing Grid (Optional extra flair) */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(0,229,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,0.05) 1px, transparent 1px)', backgroundSize: '40px 40px', maskImage: 'radial-gradient(circle at center, black, transparent 70%)', zIndex: 0, pointerEvents: 'none' }}></div>

      {/* The Central Glowing Line */}
      <div style={{ position: 'absolute', left: '10%', right: '10%', height: '2px', background: 'var(--accent)', zIndex: 1, boxShadow: '0 0 15px var(--accent-glow)' }}></div>

      {/* The Dotted Bounding Box (Enclosing middle 5 nodes) */}
      <div style={{ 
        position: 'absolute', 
        left: '20%', 
        right: '20%', 
        top: '20%', 
        bottom: '20%', 
        border: '1px dashed rgba(0, 229, 255, 0.4)', 
        borderRadius: 'var(--r-lg)', 
        zIndex: 0,
        backgroundColor: 'rgba(0, 229, 255, 0.02)'
      }}>
        {/* SYSTEMS LIVE Badge */}
        <div style={{ position: 'absolute', top: '-14px', right: '40px', background: '#050505', border: '1px solid rgba(0,229,255,0.2)', padding: '4px 12px', borderRadius: 'var(--r-pill)', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.7rem', color: 'var(--text-main)', letterSpacing: '0.05em' }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--status-online)', boxShadow: '0 0 8px var(--status-online)' }}></span> SYSTEMS LIVE
        </div>
        {/* DATA FLOW ACTIVE Badge */}
        <div style={{ position: 'absolute', bottom: '-14px', left: '50%', transform: 'translateX(-50%)', background: '#050505', border: '1px solid rgba(0,229,255,0.2)', padding: '4px 12px', borderRadius: 'var(--r-pill)', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.7rem', color: 'var(--text-main)', letterSpacing: '0.05em' }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent)', boxShadow: '0 0 8px var(--accent)' }}></span> DATA FLOW ACTIVE
        </div>
      </div>

      {/* The Nodes */}
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', position: 'relative', zIndex: 2 }}>
        {nodes.map((node, i) => {
          const Icon = node.icon;
          return (
            <div key={node.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
              <div className="hero-node">
                <Icon size={28} style={{ color: 'var(--accent)' }} />
              </div>
              <div style={{ color: 'var(--text-2)', fontSize: '0.75rem', textAlign: 'center', whiteSpace: 'pre-line', lineHeight: 1.4 }}>
                {node.label}
              </div>
            </div>
          );
        })}
      </div>

      {/* Moving Data Packets */}
      <div style={{ position: 'absolute', left: '10%', right: '10%', height: '2px', zIndex: 3, pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', top: '-2px', left: 0, width: '6px', height: '6px', borderRadius: '50%', background: '#fff', boxShadow: '0 0 10px 2px var(--accent)', animation: 'dataFlow 3s linear infinite' }}></div>
        <div style={{ position: 'absolute', top: '-2px', left: 0, width: '6px', height: '6px', borderRadius: '50%', background: '#fff', boxShadow: '0 0 10px 2px var(--accent)', animation: 'dataFlow 3s linear infinite 1.5s' }}></div>
      </div>
      <style>{`
        @keyframes dataFlow {
          0% { left: 0; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
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
      
      {/* ================= HERO ================= */}
      <section style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', paddingTop: 'calc(var(--nav-h) + 40px)', paddingBottom: '80px', position: 'relative', overflow: 'hidden' }}>
        
        {/* Subtle background glow */}
        <div style={{ position: 'absolute', top: '50%', right: '-10%', width: '800px', height: '800px', background: 'radial-gradient(circle, rgba(0,229,255,0.03) 0%, transparent 70%)', transform: 'translateY(-50%)', pointerEvents: 'none', zIndex: 0 }}></div>

        <div className="container" style={{ maxWidth: '1400px', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '60px', alignItems: 'center' }}>
            
            {/* Left Column: Text */}
            <div className="reveal">
              <span style={{ display: 'inline-block', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.05em', color: 'var(--accent)', marginBottom: '24px', textTransform: 'uppercase' }}>Software Systems for Growing Businesses</span>
              <h1 style={{ marginBottom: '32px', fontSize: 'clamp(3rem, 5vw, 4.5rem)', lineHeight: 1.1 }}>
                We engineer <span style={{ color: 'var(--accent)' }}>software systems</span> around your business, not the other way around.
              </h1>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-2)', maxWidth: '550px', marginBottom: '48px', lineHeight: 1.6 }}>
                Custom platforms, intelligent automation, and reliable infrastructure that scale with your business and drive real operational impact.
              </p>
              
              <div style={{ display: 'flex', gap: '16px' }}>
                <Link to="/solutions" className="btn btn-primary" style={{ background: 'var(--accent)', color: '#000', padding: '0 32px', height: '48px', fontWeight: 600 }}>
                  Explore Our Systems <ArrowRight size={16} />
                </Link>
                <Link to="/work" className="btn btn-outline" style={{ padding: '0 32px', height: '48px' }}>
                  View Engineering Case Studies
                </Link>
              </div>
            </div>

            {/* Right Column: Interactive Diagram */}
            <div className="reveal" style={{ transitionDelay: '200ms', height: '100%', width: '100%' }}>
              <SystemShowcase />
            </div>

          </div>
        </div>
      </section>

      {/* ================= ENGINEERING CAPABILITIES ================= */}
      <section style={{ padding: '0 0 60px 0' }}>
        <div className="container" style={{ maxWidth: '1400px' }}>
          <div className="eng-panel reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', background: '#0a0a0a', border: '1px solid #1a1a1a', borderRadius: 'var(--r-md)' }}>
            
            <div style={{ padding: '32px', display: 'flex', gap: '20px', borderRight: '1px solid #1a1a1a' }}>
              <ShieldCheck size={32} style={{ color: 'var(--accent)', flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '8px' }}>Architecture First</div>
                <div style={{ color: 'var(--text-3)', fontSize: '0.85rem', lineHeight: 1.5 }}>We design scalable, maintainable systems with a strong foundation.</div>
              </div>
            </div>

            <div style={{ padding: '32px', display: 'flex', gap: '20px', borderRight: '1px solid #1a1a1a' }}>
              <Layers size={32} style={{ color: 'var(--accent)', flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '8px' }}>Scalable by Design</div>
                <div style={{ color: 'var(--text-3)', fontSize: '0.85rem', lineHeight: 1.5 }}>Built to grow with your business without performance bottlenecks.</div>
              </div>
            </div>

            <div style={{ padding: '32px', display: 'flex', gap: '20px', borderRight: '1px solid #1a1a1a' }}>
              <Code size={32} style={{ color: 'var(--accent)', flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '8px' }}>API Driven</div>
                <div style={{ color: 'var(--text-3)', fontSize: '0.85rem', lineHeight: 1.5 }}>Seamless integrations and extensible system architecture.</div>
              </div>
            </div>

            <div style={{ padding: '32px', display: 'flex', gap: '20px' }}>
              <Lock size={32} style={{ color: 'var(--accent)', flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '8px' }}>Security Focused</div>
                <div style={{ color: 'var(--text-3)', fontSize: '0.85rem', lineHeight: 1.5 }}>Security by design, data protection, and enterprise-grade standards.</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= LIVE SYSTEM STATUS ================= */}
      <section style={{ padding: '0 0 60px 0' }}>
        <div className="container" style={{ maxWidth: '1400px' }}>
          
          <div className="eng-panel reveal" style={{ transitionDelay: '100ms', background: '#0a0a0a', border: '1px solid #1a1a1a', padding: '32px' }}>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <BarChart size={24} style={{ color: 'var(--accent)' }} />
                <div>
                  <h2 style={{ fontSize: '1.2rem', margin: 0, color: 'var(--text-main)' }}>AutoEra Systems</h2>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-3)' }}>Live Development Status</div>
                </div>
              </div>
              <Link to="/demo" className="btn btn-outline" style={{ fontSize: '0.85rem', height: '36px', borderColor: '#1a1a1a' }}>View All Systems <ArrowRight size={14} style={{ marginLeft: '8px' }} /></Link>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '16px' }}>
              
              <div className="status-card">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.9rem', color: 'var(--text-main)', fontWeight: 500 }}>
                    <Network size={16} style={{ color: 'var(--status-online)' }} /> HealthSmile Voice Node
                  </div>
                  <span style={{ fontSize: '0.7rem', padding: '2px 8px', background: '#222', borderRadius: '4px', color: 'var(--text-2)', fontFamily: 'SF Mono, monospace' }}>v1.2.0</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.85rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--status-online)' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--status-online)' }}></span> Stable
                  </div>
                  <span style={{ color: 'var(--text-3)' }}>Production</span>
                </div>
              </div>

              <div className="status-card">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.9rem', color: 'var(--text-main)', fontWeight: 500 }}>
                    <Zap size={16} style={{ color: 'var(--logo-orange)' }} /> AI Lead Management
                  </div>
                  <span style={{ fontSize: '0.7rem', padding: '2px 8px', background: '#222', borderRadius: '4px', color: 'var(--text-2)', fontFamily: 'SF Mono, monospace' }}>v0.3.0</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.85rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--logo-orange)' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--logo-orange)' }}></span> In Development
                  </div>
                  <span style={{ color: 'var(--text-3)' }}>Building</span>
                </div>
              </div>

              <div className="status-card">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.9rem', color: 'var(--text-main)', fontWeight: 500 }}>
                    <Network size={16} style={{ color: 'var(--accent)' }} /> Customer Communication
                  </div>
                  <span style={{ fontSize: '0.7rem', padding: '2px 8px', background: '#222', borderRadius: '4px', color: 'var(--text-2)', fontFamily: 'SF Mono, monospace' }}>v0.1.0</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.85rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent)' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent)' }}></span> Planning
                  </div>
                  <span style={{ color: 'var(--text-3)' }}>Architecture</span>
                </div>
              </div>

              <div className="status-card">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.9rem', color: 'var(--text-main)', fontWeight: 500 }}>
                    <Layers size={16} style={{ color: '#8b5cf6' }} /> Operations Platform
                  </div>
                  <span style={{ fontSize: '0.7rem', padding: '2px 8px', background: '#222', borderRadius: '4px', color: 'var(--text-2)', fontFamily: 'SF Mono, monospace' }}>v0.1.0</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.85rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#8b5cf6' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#8b5cf6' }}></span> Research
                  </div>
                  <span style={{ color: 'var(--text-3)' }}>Discovery</span>
                </div>
              </div>

              <div className="status-card">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.9rem', color: 'var(--text-main)', fontWeight: 500 }}>
                    <FileCode2 size={16} style={{ color: 'var(--accent)' }} /> Document Processing
                  </div>
                  <span style={{ fontSize: '0.7rem', padding: '2px 8px', background: '#222', borderRadius: '4px', color: 'var(--text-2)', fontFamily: 'SF Mono, monospace' }}>v0.0.1</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.85rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent)' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent)' }}></span> Planning
                  </div>
                  <span style={{ color: 'var(--text-3)' }}>Backlog</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ================= TECH LOGOS ================= */}
      <section style={{ padding: '60px 0', borderTop: '1px solid var(--border)' }}>
        <div className="container" style={{ maxWidth: '1400px', textAlign: 'center' }}>
          <div style={{ fontSize: '0.8rem', letterSpacing: '0.1em', color: 'var(--text-3)', textTransform: 'uppercase', marginBottom: '40px' }}>
            Trusted by businesses building the future
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '60px', flexWrap: 'wrap', opacity: 0.6 }}>
            {['PostgreSQL', 'Django', 'React', 'Docker', 'AWS', 'n8n'].map(tech => (
              <div key={tech} style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--text-2)', cursor: 'default', transition: 'var(--t-fast)' }} onMouseEnter={(e) => {e.target.style.color = 'var(--text-main)'; e.target.style.transform = 'scale(1.05)'}} onMouseLeave={(e) => {e.target.style.color = 'var(--text-2)'; e.target.style.transform = 'none'}}>{tech}</div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section style={{ padding: '80px 0', borderTop: '1px solid var(--border)', background: 'var(--bg-dark)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '16px' }}>Engineering FAQ</h2>
            <p style={{ color: 'var(--text-2)', fontSize: '1.1rem' }}>Technical details about how we architect and deploy our systems.</p>
          </div>
          
          <div className="reveal" style={{ transitionDelay: '100ms' }}>
            {[
              { q: 'How do your integrations work?', a: 'We build decentralized middleware, typically using Python/FastAPI or n8n hosted on our secure instances. We do not rely on fragile Zapier connections. Every integration operates via strict API contracts and webhooks, ensuring robust error handling and exponential retry logic.' },
              { q: 'Is the architecture scalable?', a: 'Yes. By default, our backend services are stateless and containerized via Docker. We use PostgreSQL as our primary data store, allowing us to vertically and horizontally scale the database independently of the application layer.' },
              { q: 'Can modules be customized?', a: 'Absolutely. We do not sell boxed SaaS products. The systems listed in our portfolio are foundational architectural patterns. When we deploy them for your business, the business logic, UI, and data schemas are entirely customized to your operations.' },
              { q: 'Do you provide the source code?', a: 'Yes. Upon final deployment, you receive full ownership of the system, including the complete codebase, Dockerfiles, environment configurations, and extensive technical documentation. You are not locked into our studio forever.' },
              { q: 'Can this connect with my existing legacy systems?', a: 'If your legacy system has a REST API, SOAP interface, or even just direct database access, we can connect to it. If it has none of those, we can often engineer custom scraper-based or file-drop integrations to bridge the gap.' }
            ].map((faq, i) => (
              <div key={i} className="faq-item" onClick={(e) => e.currentTarget.classList.toggle('active')}>
                <div className="faq-question">
                  {faq.q}
                  <Plus size={20} className="faq-icon" />
                </div>
                <div className="faq-answer">{faq.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section style={{ padding: '120px 0', background: '#050505', borderTop: '1px solid var(--border)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="reveal" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <span style={{ display: 'inline-block', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.1em', color: 'var(--accent)', marginBottom: '24px', textTransform: 'uppercase' }}>Ready to scale?</span>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '32px', lineHeight: 1.1 }}>
              Stop adapting your business to generic software.
            </h2>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-2)', marginBottom: '48px', lineHeight: 1.6 }}>
              Let's map your current operations and engineer a custom system that eliminates bottlenecks and drives autonomous growth.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
              <Link to="/contact" className="btn btn-primary" style={{ background: 'var(--accent)', color: '#000', padding: '0 40px', height: '56px', fontSize: '1.1rem', fontWeight: 600 }}>
                Book Discovery Call <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
