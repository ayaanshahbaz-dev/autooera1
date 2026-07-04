import { useEffect } from 'react';
import { ArrowRight, Database, Network, MessageSquare, Briefcase } from 'lucide-react';

export default function Solutions() {
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

  return (
    <main style={{ paddingTop: 'calc(var(--nav-h) + 80px)', paddingBottom: '120px' }}>
      <div className="container">
        
        <div className="reveal" style={{ marginBottom: '80px' }}>
          <span className="tech-label">SYSTEM_ARCHITECTURE</span>
          <h1 style={{ marginBottom: '24px' }}>Systems We Engineer</h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-2)', maxWidth: '700px' }}>
            We don't sell generic services. We engineer complete business systems designed to solve specific operational bottlenecks.
          </p>
        </div>

        {/* FLAGSHIP SYSTEM */}
        <div className="eng-panel reveal" style={{ padding: '0', marginBottom: '80px', border: '1px solid var(--accent)', boxShadow: '0 0 40px rgba(0,229,255,0.05)' }}>
          <div style={{ padding: '60px', borderBottom: '1px solid var(--border)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
              <div style={{ width: '12px', height: '12px', background: 'var(--accent)', borderRadius: '50%', boxShadow: '0 0 10px var(--accent-glow)' }}></div>
              <span style={{ fontFamily: 'SF Mono, monospace', fontSize: '0.85rem', color: 'var(--accent)' }}>FLAGSHIP_SYSTEM // 01</span>
            </div>
            
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '32px' }}>AI Lead Management System</h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px' }}>
              <div>
                <h3 style={{ fontSize: '1.1rem', color: 'var(--text-main)', marginBottom: '12px' }}>What problem does this solve?</h3>
                <p style={{ color: 'var(--text-2)', fontSize: '0.95rem' }}>Lost leads due to slow response times, fragmented communication across SMS/Email, and manual data entry failing to update the CRM.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.1rem', color: 'var(--text-main)', marginBottom: '12px' }}>Who is it for?</h3>
                <p style={{ color: 'var(--text-2)', fontSize: '0.95rem' }}>High-volume service businesses (Real Estate, Healthcare, Law Firms, Agencies) where speed to lead dictates revenue.</p>
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            <div style={{ padding: '40px', borderRight: '1px solid var(--border)' }}>
              <h3 style={{ fontSize: '1.1rem', color: 'var(--text-main)', marginBottom: '24px' }}>How does it work?</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {['Lead Capture (Webhook/API)', 'AI Qualification (Intent & Extraction)', 'CRM Integration (Bi-directional)', 'Automated Nurture (Email/SMS)', 'Sales Dashboard (Real-time)'].map((step, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'var(--accent-dim)', border: '1px solid var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem', color: 'var(--accent)' }}>{i+1}</div>
                    <span style={{ color: 'var(--text-2)', fontSize: '0.95rem' }}>{step}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ padding: '40px', background: 'rgba(0,229,255,0.02)' }}>
              <h3 style={{ fontSize: '1.1rem', color: 'var(--accent)', marginBottom: '24px' }}>Business Outcome</h3>
              <ul style={{ color: 'var(--text-2)', fontSize: '0.95rem', display: 'flex', flexDirection: 'column', gap: '16px', listStyleType: 'none', padding: 0 }}>
                <li><strong style={{ color: 'var(--text-main)' }}>Zero Lead Leakage:</strong> Every inquiry is captured and stored instantly.</li>
                <li><strong style={{ color: 'var(--text-main)' }}>Sub-minute Response:</strong> AI qualifies the lead via natural language while your team sleeps.</li>
                <li><strong style={{ color: 'var(--text-main)' }}>Clean Data:</strong> The CRM is updated autonomously without human data-entry errors.</li>
              </ul>
              <button className="btn btn-outline" style={{ marginTop: '32px', borderColor: 'var(--accent)', color: 'var(--accent)' }}>
                View Engineering Case Study <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* SUPPORTING SYSTEMS */}
        <h2 className="reveal" style={{ marginBottom: '40px', fontSize: '2rem' }}>Supporting Systems</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
          
          {/* Sys 02 */}
          <div className="eng-panel reveal" style={{ padding: '40px' }}>
            <MessageSquare size={24} style={{ color: 'var(--accent)', marginBottom: '24px' }} />
            <h3 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>AI Customer Communication</h3>
            <p style={{ color: 'var(--text-2)', fontSize: '0.95rem', marginBottom: '24px' }}>
              Centralize all customer communication with AI while enabling seamless human collaboration across WhatsApp, Email, and Support Tickets.
            </p>
            <div style={{ marginBottom: '24px' }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-3)', textTransform: 'uppercase', marginBottom: '8px' }}>Business Outcome</div>
              <div style={{ color: 'var(--text-main)', fontSize: '0.95rem' }}>Unified inbox, 80% reduction in first-response time, seamless AI-to-human handoff.</div>
            </div>
          </div>

          {/* Sys 03 */}
          <div className="eng-panel reveal" style={{ padding: '40px', transitionDelay: '100ms' }}>
            <Briefcase size={24} style={{ color: 'var(--accent)', marginBottom: '24px' }} />
            <h3 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>Business Operations Platform</h3>
            <p style={{ color: 'var(--text-2)', fontSize: '0.95rem', marginBottom: '24px' }}>
              A custom, central operating system for managing daily business operations, replacing disconnected spreadsheets.
            </p>
            <div style={{ marginBottom: '24px' }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-3)', textTransform: 'uppercase', marginBottom: '8px' }}>Business Outcome</div>
              <div style={{ color: 'var(--text-main)', fontSize: '0.95rem' }}>Centralized source of truth, automated reporting, role-based access control.</div>
            </div>
          </div>

          {/* Sys 04 */}
          <div className="eng-panel reveal" style={{ padding: '40px', transitionDelay: '200ms' }}>
            <Network size={24} style={{ color: 'var(--accent)', marginBottom: '24px' }} />
            <h3 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>Document & Workflow Parsing</h3>
            <p style={{ color: 'var(--text-2)', fontSize: '0.95rem', marginBottom: '24px' }}>
              Automatically process unstructured business documents (Invoices, POs, Claims) and trigger intelligent approval chains.
            </p>
            <div style={{ marginBottom: '24px' }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-3)', textTransform: 'uppercase', marginBottom: '8px' }}>Business Outcome</div>
              <div style={{ color: 'var(--text-main)', fontSize: '0.95rem' }}>Eliminate manual extraction, enforce strict compliance workflows, searchable archives.</div>
            </div>
          </div>

        </div>

      </div>
    </main>
  );
}
