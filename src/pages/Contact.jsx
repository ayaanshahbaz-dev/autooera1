import { useState, useEffect } from 'react';
import { ArrowRight, Check } from 'lucide-react';

const systems = [
  'AI Receptionist',
  'Lead Response System',
  'Customer Support System',
  'Internal Knowledge Base',
  'CRM & Workflow Automation',
  'Custom AI Software',
  "I'm not sure yet",
];

export default function Contact() {
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '',
    company: '', system: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
      }),
      { threshold: 0.08 }
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
    // In production, connect to your form endpoint / Calendly / CRM
    setSubmitted(true);
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <div className="contact-inner">
            {/* Left — Info */}
            <div className="contact-info reveal">
              <span className="section-label">Get in touch</span>
              <h1>Let's talk about your operations.</h1>
              <p>
                Book a 30-minute discovery call. We'll review your current workflow,
                identify the bottlenecks worth automating, and give you an honest
                technical assessment — no sales pitch.
              </p>

              <div className="contact-details">
                <div className="contact-detail">
                  <div className="contact-detail-label">Email</div>
                  <div className="contact-detail-value">
                    <a href="mailto:hello@autoera.io" style={{ color: 'var(--text)', transition: 'color 140ms' }}>
                      hello@autoera.io
                    </a>
                  </div>
                </div>

                <div className="contact-detail">
                  <div className="contact-detail-label">Response time</div>
                  <div className="contact-detail-value">Within 24 hours</div>
                </div>

                <div className="contact-detail">
                  <div className="contact-detail-label">What to expect</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 8 }}>
                    {[
                      'A real engineer reviews your submission',
                      'Discovery call within 2 business days',
                      'Honest scope assessment, no obligation',
                    ].map(item => (
                      <div key={item} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                        <Check size={15} style={{ stroke: 'var(--accent)', fill: 'none', flexShrink: 0, marginTop: 3 }} />
                        <span style={{ fontSize: '0.875rem', color: 'var(--text-2)', lineHeight: 1.6 }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right — Form */}
            <div className="reveal" style={{ transitionDelay: '120ms' }}>
              {submitted ? (
                <div
                  className="contact-form-wrapper"
                  style={{ textAlign: 'center', padding: '72px 44px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}
                >
                  <div style={{
                    width: 56, height: 56,
                    background: 'var(--green-dim)',
                    border: '1px solid rgba(34,197,94,0.3)',
                    borderRadius: '50%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Check size={24} style={{ stroke: 'var(--green)', fill: 'none' }} />
                  </div>
                  <h2 style={{ fontSize: '1.4rem', fontWeight: 800, letterSpacing: '-0.03em' }}>We got your message.</h2>
                  <p style={{ color: 'var(--text-2)', fontSize: '0.9rem', lineHeight: 1.75, maxWidth: 360 }}>
                    A member of our team will review your submission and reach out within 24 hours
                    to schedule your discovery call.
                  </p>
                </div>
              ) : (
                <div className="contact-form-wrapper">
                  <h2 style={{ fontSize: '1.2rem', fontWeight: 700, letterSpacing: '-0.025em', marginBottom: 8 }}>
                    Tell us about your business
                  </h2>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-3)', marginBottom: 32, lineHeight: 1.65 }}>
                    The more context you provide, the more useful our first call will be.
                  </p>

                  <form className="contact-form" onSubmit={handleSubmit} noValidate>
                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label" htmlFor="firstName">First name</label>
                        <input
                          className="form-input"
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={form.firstName}
                          onChange={handle}
                          placeholder="Alex"
                          required
                          autoComplete="given-name"
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label" htmlFor="lastName">Last name</label>
                        <input
                          className="form-input"
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={form.lastName}
                          onChange={handle}
                          placeholder="Johnson"
                          required
                          autoComplete="family-name"
                        />
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label" htmlFor="email">Work email</label>
                        <input
                          className="form-input"
                          type="email"
                          id="email"
                          name="email"
                          value={form.email}
                          onChange={handle}
                          placeholder="alex@company.com"
                          required
                          autoComplete="email"
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label" htmlFor="company">Company</label>
                        <input
                          className="form-input"
                          type="text"
                          id="company"
                          name="company"
                          value={form.company}
                          onChange={handle}
                          placeholder="Acme Inc."
                          autoComplete="organization"
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="system">Which system are you interested in?</label>
                      <select
                        className="form-select"
                        id="system"
                        name="system"
                        value={form.system}
                        onChange={handle}
                      >
                        <option value="">Select a system...</option>
                        {systems.map(s => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="message">
                        Describe the operational problem you want to solve
                      </label>
                      <textarea
                        className="form-textarea"
                        id="message"
                        name="message"
                        value={form.message}
                        onChange={handle}
                        placeholder="What's happening today that's costing you time or revenue? What does your current process look like?"
                        required
                        rows={5}
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary form-submit"
                      id="contact-submit"
                    >
                      Send Message
                      <ArrowRight size={16} />
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
