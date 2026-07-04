import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Box, Phone, MessageSquare, BookOpen, Layers, Settings } from 'lucide-react';

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
      
      const rotateX = ((y - centerY) / centerY) * -5;
      const rotateY = ((x - centerX) / centerX) * 5;
      
      el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`;
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

export default function Services() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
      }),
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    const els = document.querySelectorAll('.reveal');
    els.forEach(el => observer.observe(el));
    return () => els.forEach(el => observer.unobserve(el));
  }, []);

  const systems = [
    {
      id: 'ai-receptionist',
      num: '01',
      icon: Phone,
      title: 'Voice AI Receptionist',
      desc: 'An intelligent voice agent that handles inbound calls 24/7. It qualifies leads, books appointments directly into your calendar, and routes complex calls based on your specific logic.',
      tech: ['Voice APIs', 'LLM Routing', 'Calendar Integrations']
    },
    {
      id: 'support-automation',
      num: '02',
      icon: MessageSquare,
      title: 'Intelligent Support Desk',
      desc: 'An automated support pipeline that resolves routine tickets instantly using your internal knowledge base, escalating only edge cases to human agents with full conversation context.',
      tech: ['Helpdesk APIs', 'Vector DB', 'Semantic Search']
    },
    {
      id: 'data-sync',
      num: '03',
      icon: Settings,
      title: 'Cross-Platform Workflows',
      desc: 'Complex n8n or custom API workflows that eliminate manual data entry. When a lead is captured, five things happen perfectly in sequence across your CRM, Slack, and billing software.',
      tech: ['n8n', 'Webhooks', 'REST/GraphQL']
    },
    {
      id: 'custom-agents',
      num: '04',
      icon: Layers,
      title: 'Bespoke Internal Tools',
      desc: 'Purpose-built applications engineered for your unique operational bottlenecks. We build what templates cannot, giving you proprietary infrastructure.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'LangChain']
    }
  ];

  return (
    <main style={{ paddingTop: 'calc(var(--nav-h) + 60px)' }}>
      {/* Hero */}
      <section style={{ paddingBottom: '80px' }}>
        <div className="container">
          <div className="reveal">
            <span className="section-label">Capabilities</span>
            <h1 style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', marginBottom: '24px' }}>
              Systems we engineer.
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-2)', maxWidth: '600px' }}>
              We don't sell chatbots. We architect structural automation systems that become the 
              invisible backbone of your business operations.
            </p>
          </div>
        </div>
      </section>

      {/* Deep Dive Grid */}
      <section style={{ paddingBottom: '120px' }}>
        <div className="container">
          <div style={{ display: 'grid', gap: '40px', gridTemplateColumns: '1fr' }}>
            {systems.map((sys, i) => {
              const Icon = sys.icon;
              const tiltRef = useTilt(true);
              return (
                <div 
                  key={sys.id}
                  ref={tiltRef}
                  className="glass-panel reveal" 
                  style={{ 
                    padding: '48px', 
                    display: 'grid', 
                    gap: '32px',
                    gridTemplateColumns: 'auto 1fr',
                    alignItems: 'start',
                    transitionDelay: `${(i % 2) * 100}ms`
                  }}
                >
                  <div style={{ 
                    width: '64px', height: '64px', 
                    background: 'rgba(255,255,255,0.03)', 
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--r-md)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--accent)'
                  }}>
                    <Icon size={28} />
                  </div>
                  
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                      <span style={{ fontFamily: 'Outfit', color: 'var(--accent)', fontWeight: 600 }}>{sys.num}</span>
                      <h2 style={{ fontSize: '1.8rem' }}>{sys.title}</h2>
                    </div>
                    <p style={{ fontSize: '1.1rem', color: 'var(--text-2)', marginBottom: '24px', maxWidth: '700px' }}>
                      {sys.desc}
                    </p>
                    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                      {sys.tech.map(t => (
                        <span key={t} style={{ 
                          fontSize: '0.8rem', padding: '6px 12px', 
                          background: 'var(--bg-darker)', border: '1px solid var(--border)',
                          borderRadius: 'var(--r-sm)', color: 'var(--text-3)'
                        }}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
