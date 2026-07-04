import { useEffect } from 'react';
import { PlayCircle, ShieldAlert, Zap, Network, LayoutTemplate } from 'lucide-react';

export default function Demo() {
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

  const demos = [
    {
      id: 'lead-management',
      title: 'AI Lead Management System',
      icon: Zap,
      status: 'In Development',
      statusColor: 'var(--logo-orange)',
      desc: 'Interactive simulation of the lead capture, AI qualification, and CRM sync pipeline.'
    },
    {
      id: 'customer-comm',
      title: 'Customer Communication Gateway',
      icon: Network,
      status: 'Planned',
      statusColor: 'var(--text-3)',
      desc: 'Live testing environment for the unified AI-to-human inbox routing system.'
    },
    {
      id: 'operations',
      title: 'Business Operations Platform',
      icon: LayoutTemplate,
      status: 'Planned',
      statusColor: 'var(--text-3)',
      desc: 'Explore the modular dashboard, RBAC architecture, and automated reporting engine.'
    },
    {
      id: 'document-processing',
      title: 'Document Processing Engine',
      icon: ShieldAlert,
      status: 'Planned',
      statusColor: 'var(--text-3)',
      desc: 'Upload dummy invoices and watch the AI extraction and verification logic run in real-time.'
    }
  ];

  return (
    <main style={{ paddingTop: 'calc(var(--nav-h) + 80px)', paddingBottom: '120px' }}>
      <div className="container">
        
        <div className="reveal" style={{ marginBottom: '80px', maxWidth: '800px' }}>
          <span className="tech-label">INTERACTIVE_ENVIRONMENTS</span>
          <h1 style={{ marginBottom: '24px' }}>Demo Center</h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-2)' }}>
            Documentation explains. Demonstration convinces. Launch interactive versions of our flagship systems below to experience the architecture in action.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
          {demos.map((demo, i) => {
            const Icon = demo.icon;
            const isPlanned = demo.status === 'Planned';
            return (
              <div key={demo.id} className="eng-panel reveal" style={{ padding: '40px', display: 'flex', flexDirection: 'column', transitionDelay: `${i*100}ms` }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
                  <Icon size={24} style={{ color: isPlanned ? 'var(--text-3)' : 'var(--text-main)' }} />
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', fontFamily: 'SF Mono, monospace', color: demo.statusColor }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: demo.statusColor }}></span>
                    {demo.status}
                  </div>
                </div>
                
                <h2 style={{ fontSize: '1.5rem', marginBottom: '16px', color: isPlanned ? 'var(--text-2)' : 'var(--text-main)' }}>{demo.title}</h2>
                <p style={{ color: 'var(--text-3)', fontSize: '0.95rem', marginBottom: '40px', flex: 1 }}>{demo.desc}</p>
                
                <button className={`btn ${isPlanned ? 'btn-ghost' : 'btn-outline'}`} disabled={isPlanned} style={{ width: '100%', borderColor: isPlanned ? 'transparent' : 'var(--border)', opacity: isPlanned ? 0.5 : 1, cursor: isPlanned ? 'not-allowed' : 'pointer' }}>
                  <PlayCircle size={16} style={{ marginRight: '8px' }} />
                  {isPlanned ? 'Environment Unavailable' : 'Launch Demo Environment'}
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </main>
  );
}
