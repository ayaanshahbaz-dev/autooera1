import { useState, useEffect } from 'react';
import { Check, Send, PhoneCall, Code2, Rocket } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({
    name: '', email: '', company: '', timeline: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);

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

  const handle = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
  };

  const timeline = [
    { icon: PhoneCall, title: 'Discovery Call', desc: 'We map your existing operations.' },
    { icon: Code2, title: 'Architecture Proposal', desc: 'System design and resource scoping.' },
    { icon: Rocket, title: 'Development', desc: 'Iterative agile build.' },
    { icon: Check, title: 'Testing & Deployment', desc: 'Rigorous Q&A and final go-live.' },
    { icon: Send, title: 'Continuous Improvement', desc: 'Ongoing optimization and scaling support.' }
  ];

  return (
    <main style={{ paddingTop: 'calc(var(--nav-h) + 60px)', paddingBottom: '120px' }}>
      <div className="container">
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '60px' }}>
          
          {/* Left Info Column */}
          <div className="reveal" style={{ maxWidth: '500px' }}>
            <span className="tech-label">ENGAGEMENT</span>
            <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', marginBottom: '24px', lineHeight: 1.1 }}>
              Start an engineering project.
            </h1>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-2)', marginBottom: '48px', lineHeight: 1.8 }}>
              Submit your operational bottlenecks below. A lead engineer will review your data and schedule a systems mapping call within 24 hours.
            </p>

            <div style={{ marginBottom: '48px' }}>
              <h3 style={{ fontSize: '1rem', color: 'var(--text-main)', marginBottom: '24px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Deployment Timeline</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {timeline.map((step, i) => {
                  const Icon = step.icon;
                  return (
                    <div key={i} style={{ display: 'flex', gap: '16px' }}>
                      <div style={{ color: 'var(--accent)', marginTop: '4px' }}><Icon size={20} /></div>
                      <div>
                        <div style={{ color: 'var(--text-main)', fontWeight: 500, marginBottom: '4px' }}>{step.title}</div>
                        <div style={{ color: 'var(--text-3)', fontSize: '0.9rem' }}>{step.desc}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div style={{ padding: '24px', background: 'var(--bg-surface)', borderLeft: '2px solid var(--accent)', borderRadius: '4px' }}>
              <h3 style={{ fontSize: '1rem', marginBottom: '12px', color: 'var(--text-main)' }}>Direct Channel</h3>
              <a href="mailto:engineering@autoera.io" style={{ color: 'var(--text-2)', fontSize: '0.95rem' }}>
                engineering@autoera.io
              </a>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="reveal" style={{ transitionDelay: '200ms' }}>
            {submitted ? (
              <div className="eng-panel" style={{ padding: '60px 40px', textAlign: 'center', borderColor: 'var(--status-online)', boxShadow: '0 0 30px rgba(0, 229, 255, 0.1)' }}>
                <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(0,229,255,0.1)', color: 'var(--status-online)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
                  <Check size={32} />
                </div>
                <h2 style={{ fontSize: '2rem', marginBottom: '16px' }}>Payload Transmitted</h2>
                <p style={{ color: 'var(--text-2)' }}>
                  Your system requirements have been securely logged. We will contact you shortly.
                </p>
              </div>
            ) : (
              <div className="eng-panel" style={{ padding: '40px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px', borderBottom: '1px solid var(--border)', paddingBottom: '16px' }}>
                  <span style={{ fontFamily: 'SF Mono, monospace', fontWeight: 500, fontSize: '0.85rem', color: 'var(--accent)' }}>PROJECT_SCOPE_MATRIX</span>
                </div>

                <form onSubmit={handleSubmit}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '24px', marginBottom: '24px' }}>
                    
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-main)', marginBottom: '8px' }}>Lead Contact</label>
                        <input className="form-input" style={{ width: '100%', background: 'var(--bg-dark)', border: '1px solid var(--border)', padding: '12px', color: 'var(--text-main)', borderRadius: '4px' }} name="name" value={form.name} onChange={handle} required />
                      </div>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-main)', marginBottom: '8px' }}>Email Address</label>
                        <input className="form-input" type="email" style={{ width: '100%', background: 'var(--bg-dark)', border: '1px solid var(--border)', padding: '12px', color: 'var(--text-main)', borderRadius: '4px' }} name="email" value={form.email} onChange={handle} required />
                      </div>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-main)', marginBottom: '8px' }}>Organization</label>
                      <input className="form-input" style={{ width: '100%', background: 'var(--bg-dark)', border: '1px solid var(--border)', padding: '12px', color: 'var(--text-main)', borderRadius: '4px' }} name="company" value={form.company} onChange={handle} />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-main)', marginBottom: '8px' }}>Operational Bottleneck</label>
                      <textarea 
                        style={{ width: '100%', background: 'var(--bg-dark)', border: '1px solid var(--border)', padding: '12px', color: 'var(--text-main)', borderRadius: '4px', minHeight: '120px', fontFamily: 'inherit' }}
                        name="message" 
                        value={form.message} 
                        onChange={handle} 
                        required 
                        placeholder="Describe the processes that are currently failing or scaling poorly..."
                      />
                    </div>

                  </div>

                  <button type="submit" className="btn btn-primary" style={{ width: '100%', height: '48px', fontSize: '1rem', marginTop: '16px', background: 'var(--text-main)', color: 'var(--bg-dark)' }}>
                    <Send size={16} style={{ marginRight: '8px' }} />
                    Submit Requirements
                  </button>
                </form>
              </div>
            )}
          </div>

        </div>
      </div>
      
      <style>{`
        @media (min-width: 900px) {
          .container > div {
            grid-template-columns: 1fr 1.2fr !important;
          }
        }
        .form-input:focus, textarea:focus {
          outline: none;
          border-color: var(--accent) !important;
        }
      `}</style>
    </main>
  );
}
