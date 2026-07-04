import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Box, Cpu, Database, Network, ShieldCheck, Zap } from 'lucide-react';

/* ============================================================
   TILT EFFECT HOOK
   ============================================================ */
function useTilt(active = true) {
  const ref = useRef(null);
  
  useEffect(() => {
    if (!active || !ref.current) return;
    
    const el = ref.current;
    const handleMouseMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = ((y - centerY) / centerY) * -10;
      const rotateY = ((x - centerX) / centerX) * 10;
      
      el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    };
    
    const handleMouseLeave = () => {
      el.style.transform = `perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)`;
    };
    
    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [active]);
  
  return ref;
}

/* ============================================================
   PREMIUM HERO COMPONENT
   ============================================================ */
function PremiumHero() {
  const tiltRef = useTilt(true);

  return (
    <section className="hero">
      <div className="hero-radial" aria-hidden="true" />
      <div className="container hero-inner">
        
        {/* Left Content */}
        <div className="hero-content reveal visible">
          <div className="hero-label" style={{ animation: 'float-3d 6s infinite' }}>
            <span className="hero-label-dot" style={{ background: 'var(--accent)', boxShadow: '0 0 10px var(--accent)' }}></span>
            SYS.CORE // V3.0
          </div>
          
          <h1 className="hero-title" style={{ fontSize: 'clamp(3.5rem, 7vw, 5.5rem)', lineHeight: 1.05 }}>
            Automate <br/>
            The <span className="hero-title-accent">Invisible.</span>
          </h1>
          
          <p className="hero-desc" style={{ color: 'var(--text-2)', fontSize: '1.2rem', maxWidth: '540px' }}>
            We engineer high-performance AI systems and digital workflows that 
            eliminate bottlenecks and scale your operations quietly in the background.
          </p>
          
          <div className="hero-ctas" style={{ marginTop: '48px' }}>
            <Link to="/contact" className="btn btn-primary" style={{ padding: '0 32px', height: '56px', fontSize: '1.05rem' }}>
              Start a Project
              <ArrowRight size={18} />
            </Link>
            <Link to="/portfolio" className="btn btn-outline" style={{ padding: '0 32px', height: '56px', fontSize: '1.05rem' }}>
              View Case Studies
            </Link>
          </div>
        </div>

        {/* Right Visual - Abstract Data Pipeline */}
        <div className="hero-visual reveal visible" style={{ transitionDelay: '200ms' }}>
          <div 
            ref={tiltRef}
            className="hero-data-panel glass-panel"
            style={{ 
              position: 'relative', width: '100%', height: '480px', 
              display: 'flex', flexDirection: 'column', padding: '32px',
              transition: 'transform 0.1s ease-out'
            }}
          >
            <div className="panel-header">
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent)' }}></span>
                WORKFLOW ENGINE
              </span>
              <span style={{ color: 'var(--green)' }}>● ONLINE</span>
            </div>

            <div className="panel-nodes" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              
              {/* Node 1 */}
              <div className="node-row" style={{ transform: 'translateZ(20px)' }}>
                <div className="node-icon active"><Network size={20} /></div>
                <div className="node-info">
                  <div className="node-title">API Gateway</div>
                  <div className="node-desc" style={{ color: 'var(--text-3)' }}>Receiving webhook payloads...</div>
                </div>
                <div className="node-status">SYNCED</div>
              </div>

              {/* Connecting Line */}
              <div style={{ height: '32px', width: '2px', background: 'var(--border)', margin: '0 0 0 35px', position: 'relative' }}>
                <div style={{ 
                  position: 'absolute', top: 0, left: '-2px', width: '6px', height: '6px', 
                  background: 'var(--accent)', borderRadius: '50%',
                  animation: 'travelDown 2s infinite'
                }}></div>
              </div>

              {/* Node 2 */}
              <div className="node-row" style={{ transform: 'translateZ(30px)', borderColor: 'var(--accent)', background: 'rgba(255,149,0,0.03)' }}>
                <div className="node-icon" style={{ borderColor: 'var(--accent)', color: 'var(--accent)' }}><Cpu size={20} /></div>
                <div className="node-info">
                  <div className="node-title" style={{ color: 'var(--text-main)' }}>LLM Processing</div>
                  <div className="node-desc" style={{ color: 'var(--text-3)' }}>Extracting entities & intent</div>
                </div>
                <div className="node-status" style={{ background: 'rgba(255,149,0,0.1)', color: 'var(--accent)' }}>ACTIVE</div>
              </div>

              {/* Connecting Line */}
              <div style={{ height: '32px', width: '2px', background: 'var(--border)', margin: '0 0 0 35px', position: 'relative' }}>
                <div style={{ 
                  position: 'absolute', top: 0, left: '-2px', width: '6px', height: '6px', 
                  background: 'var(--accent)', borderRadius: '50%',
                  animation: 'travelDown 2s infinite 1s'
                }}></div>
              </div>

              {/* Node 3 */}
              <div className="node-row" style={{ transform: 'translateZ(20px)' }}>
                <div className="node-icon"><Database size={20} /></div>
                <div className="node-info">
                  <div className="node-title">CRM Integration</div>
                  <div className="node-desc" style={{ color: 'var(--text-3)' }}>Updating client records</div>
                </div>
                <div className="node-status" style={{ background: 'rgba(255,255,255,0.05)', color: 'var(--text-2)' }}>IDLE</div>
              </div>

            </div>
          </div>
          
          <style>{`
            @keyframes travelDown {
              0% { top: 0; opacity: 1; }
              100% { top: 32px; opacity: 0; }
            }
          `}</style>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   BENTO SERVICE CARD
   ============================================================ */
function ServiceCard({ icon: Icon, title, desc, tags, delay = 0 }) {
  const tiltRef = useTilt(true);
  
  return (
    <div 
      ref={tiltRef}
      className="bento-card reveal" 
      style={{ transitionDelay: `${delay}ms`, transformStyle: 'preserve-3d' }}
    >
      <div className="bento-icon" style={{ transform: 'translateZ(20px)' }}>
        <Icon size={24} />
      </div>
      <h3 className="bento-title" style={{ transform: 'translateZ(15px)' }}>{title}</h3>
      <p style={{ color: 'var(--text-2)', transform: 'translateZ(10px)' }}>{desc}</p>
      <div className="bento-tags" style={{ transform: 'translateZ(5px)' }}>
        {tags.map(t => <span key={t} className="bento-tag">{t}</span>)}
      </div>
    </div>
  );
}

/* ============================================================
   HOME PAGE
   ============================================================ */
export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) e.target.classList.add('visible');
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    const els = document.querySelectorAll('.reveal:not(.visible)');
    els.forEach(el => observer.observe(el));
    return () => els.forEach(el => observer.unobserve(el));
  }, []);

  const services = [
    {
      icon: Network,
      title: 'Workflow Orchestration',
      desc: 'Complex API integrations connecting your isolated tools into a single automated pipeline.',
      tags: ['n8n', 'Make', 'Webhooks', 'REST APIs']
    },
    {
      icon: Cpu,
      title: 'Applied AI Systems',
      desc: 'LLM integrations that process data, answer queries, and make decisions within your workflow.',
      tags: ['OpenAI', 'Claude', 'LangChain', 'RAG']
    },
    {
      icon: Database,
      title: 'Data & CRM Sync',
      desc: 'Bi-directional synchronization ensuring your source of truth is always accurate instantly.',
      tags: ['HubSpot', 'Salesforce', 'Airtable', 'SQL']
    },
    {
      icon: ShieldCheck,
      title: 'Custom Engineering',
      desc: 'Bespoke web applications and internal tools built when off-the-shelf software fails.',
      tags: ['React', 'Node.js', 'Python', 'Next.js']
    }
  ];

  return (
    <main>
      <PremiumHero />

      {/* Philosophy / Statement */}
      <section style={{ padding: '120px 0', borderTop: '1px solid var(--border)', background: 'var(--bg-darker)' }}>
        <div className="container">
          <div className="reveal" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <span className="section-label" style={{ justifyContent: 'center' }}>The Studio Philosophy</span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.2, marginBottom: '32px' }}>
              We build systems that work <br/>
              so your people don't have to.
            </h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-2)' }}>
              AutoEra isn't an agency wrapping templates in new branding. We are an engineering 
              studio architecting bespoke, logic-first automation systems. We look at your 
              operational bottlenecks and build the exact invisible machinery needed to clear them.
            </p>
          </div>
        </div>
      </section>

      {/* Services Matrix */}
      <section style={{ padding: '120px 0' }}>
        <div className="container">
          <div className="reveal">
            <span className="section-label">01 / CAPABILITIES</span>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Tech Matrix</h2>
            <div style={{ height: '1px', width: '100%', background: 'linear-gradient(90deg, var(--border), transparent)', marginBottom: '48px' }}></div>
          </div>
          
          <div className="bento-grid">
            {services.map((s, i) => (
              <ServiceCard key={s.title} {...s} delay={i * 100} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '120px 0', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div className="glass-panel reveal" style={{ padding: '80px 40px', textAlign: 'center', borderColor: 'var(--border-accent)' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '24px' }}>Ready to scale your operations?</h2>
            <p style={{ color: 'var(--text-2)', maxWidth: '500px', margin: '0 auto 40px', fontSize: '1.1rem' }}>
              Let's map out your current workflows and architect the exact systems you need to automate them.
            </p>
            <Link to="/contact" className="btn btn-primary" style={{ padding: '0 32px', height: '56px', fontSize: '1.05rem' }}>
              Initiate Project
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
