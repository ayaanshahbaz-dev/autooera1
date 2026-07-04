import { useState, useEffect } from 'react';
import { ArrowRight, Check, Send } from 'lucide-react';

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

  const handle = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Connect to your CRM, Formspree, or n8n webhook here
    setSubmitted(true);
  };

  return (
    <main style={{ paddingTop: 'calc(var(--nav-h) + 60px)', paddingBottom: '120px' }}>
      <div className="container">
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '60px' }}>
          
          {/* Left Info Column */}
          <div className="reveal" style={{ maxWidth: '500px' }}>
            <span className="section-label">Initiate System</span>
            <h1 style={{ fontSize: 'clamp(3rem, 6vw, 4rem)', marginBottom: '24px', lineHeight: 1.1 }}>
              Start your <br/><span style={{ color: 'var(--text-3)' }}>assessment.</span>
            </h1>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-2)', marginBottom: '48px', lineHeight: 1.8 }}>
              Fill out the project scope matrix below. An engineer will review your operational bottlenecks and respond within 24 hours to schedule a discovery call.
            </p>

            <div style={{ padding: '24px', background: 'rgba(255,255,255,0.02)', borderLeft: '2px solid var(--accent)', borderRadius: '4px' }}>
              <h3 style={{ fontSize: '1rem', marginBottom: '12px', color: 'var(--text-main)' }}>Direct Comms</h3>
              <p style={{ color: 'var(--text-3)', fontSize: '0.9rem', marginBottom: '8px' }}>
                For immediate technical inquiries or partnership requests:
              </p>
              <a href="mailto:sys.admin@autoera.io" style={{ color: 'var(--accent)', fontWeight: 600, fontSize: '0.95rem' }}>
                sys.admin@autoera.io
              </a>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="reveal" style={{ transitionDelay: '200ms' }}>
            {submitted ? (
              <div className="glass-panel" style={{ padding: '60px 40px', textAlign: 'center', borderColor: 'var(--green)', boxShadow: '0 0 30px rgba(74, 222, 128, 0.1)' }}>
                <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(74,222,128,0.1)', color: 'var(--green)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
                  <Check size={32} />
                </div>
                <h2 style={{ fontSize: '2rem', marginBottom: '16px' }}>Payload Received</h2>
                <p style={{ color: 'var(--text-2)' }}>
                  Your project scope has been transmitted securely. An engineer will be in touch within 24 hours.
                </p>
              </div>
            ) : (
              <div className="glass-panel" style={{ padding: '40px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px', borderBottom: '1px solid var(--border)', paddingBottom: '16px' }}>
                  <span style={{ fontFamily: 'Outfit', fontWeight: 600, fontSize: '0.9rem', letterSpacing: '0.05em' }}>PROJECT_DATA_ENTRY</span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-3)' }}>SECURE // ENCRYPTED</span>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Identifier (Name)</label>
                      <input className="form-input" name="name" value={form.name} onChange={handle} required placeholder="John Doe" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Transmission Vector (Email)</label>
                      <input className="form-input" type="email" name="email" value={form.email} onChange={handle} required placeholder="john@company.com" />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Organization</label>
                      <input className="form-input" name="company" value={form.company} onChange={handle} placeholder="Acme Corp" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Deployment Timeline</label>
                      <select className="form-select" name="timeline" value={form.timeline} onChange={handle} required>
                        <option value="" disabled>Select phase...</option>
                        <option value="immediate">Immediate (Next 14 Days)</option>
                        <option value="soon">Short Term (1-2 Months)</option>
                        <option value="planning">Planning (Q3/Q4)</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Operational Bottleneck (Scope)</label>
                    <textarea 
                      className="form-textarea" 
                      name="message" 
                      value={form.message} 
                      onChange={handle} 
                      required 
                      rows={5}
                      placeholder="Describe the manual processes costing you time, or the system integration you require..."
                    />
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ width: '100%', height: '56px', fontSize: '1.05rem', marginTop: '16px' }}>
                    <Send size={18} style={{ marginRight: '8px' }} />
                    Transmit Scope Data
                  </button>
                </form>
              </div>
            )}
          </div>

        </div>
      </div>
      
      {/* Required for side-by-side on desktop */}
      <style>{`
        @media (min-width: 900px) {
          .container > div {
            grid-template-columns: 1fr 1.2fr !important;
          }
        }
      `}</style>
    </main>
  );
}
