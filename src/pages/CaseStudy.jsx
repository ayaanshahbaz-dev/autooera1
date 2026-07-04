import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Server, Database, Cpu, CheckCircle2, PlayCircle } from 'lucide-react';

export default function CaseStudy() {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <main style={{ paddingTop: 'calc(var(--nav-h) + 40px)', paddingBottom: '120px' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        
        <Link to="/work" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--text-3)', fontSize: '0.9rem', marginBottom: '60px', transition: 'var(--t-fast)', textDecoration: 'none' }}>
          <ArrowLeft size={16} /> Return to Repositories
        </Link>
        
        {/* Document Header */}
        <header style={{ marginBottom: '80px' }}>
          <div style={{ display: 'flex', gap: '12px', marginBottom: '24px' }}>
            <span className="tech-label" style={{ margin: 0 }}>SYS_ID: {id}</span>
            <span className="tech-label" style={{ margin: 0, background: 'rgba(0, 229, 255, 0.1)', color: 'var(--accent)', borderColor: 'var(--border-accent)' }}>STATUS: DEPLOYED</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '24px', lineHeight: 1.1 }}>
            HealthSmile Voice Intake Node
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-2)', maxWidth: '700px' }}>
            An autonomous Voice API integration routing inbound patient calls directly into PostgreSQL and Practice Management software.
          </p>
        </header>

        {/* The Engineering Document */}
        <div style={{ display: 'grid', gap: '80px' }}>

          <section>
            <div className="eng-panel" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '400px', background: 'var(--bg-surface)' }}>
              <div style={{ textAlign: 'center', color: 'var(--text-3)' }}>
                <PlayCircle size={48} style={{ margin: '0 auto 16px', color: 'var(--text-2)' }} />
                <div>Architecture Walkthrough Video Placeholder</div>
                <div style={{ fontSize: '0.85rem', marginTop: '8px' }}>[Demonstrates system flow and backend logs]</div>
              </div>
            </div>
          </section>
          
          <section>
            <h2 style={{ fontSize: '1.5rem', borderBottom: '1px solid var(--border)', paddingBottom: '16px', marginBottom: '24px' }}>1.0 Overview & Problem</h2>
            <div style={{ color: 'var(--text-2)', fontSize: '1.05rem', lineHeight: 1.8 }}>
              <p style={{ marginBottom: '16px' }}>The client, a high-volume dental clinic network, was experiencing a 30% missed call rate during peak morning hours. Human receptionists could not simultaneously check-in physical patients and manage the inbound call queue.</p>
              <p>Missed calls translated directly to lost revenue. Existing "answering services" lacked the ability to read internal calendars or write to the secure patient database.</p>
            </div>
          </section>

          <section>
            <h2 style={{ fontSize: '1.5rem', borderBottom: '1px solid var(--border)', paddingBottom: '16px', marginBottom: '24px' }}>2.0 Operational Business Impact</h2>
            <div className="eng-panel" style={{ padding: '32px', background: 'var(--bg-dark)', borderLeft: '4px solid var(--accent)' }}>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-main)', margin: 0, lineHeight: 1.6 }}>
                Reduced manual patient intake dependencies by automating initial voice routing, resulting in the elimination of queue overflow and synchronously updating the practice management CRM without human data-entry.
              </p>
            </div>
          </section>

          <section>
            <h2 style={{ fontSize: '1.5rem', borderBottom: '1px solid var(--border)', paddingBottom: '16px', marginBottom: '24px' }}>3.0 Inside This System</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
              {[
                '12 API Endpoints', 'Role Based Access Control', 'Webhook Interceptor',
                'AI Intent Processing Layer', 'Asynchronous Task Queue', 'Secure Audit Logs'
              ].map(item => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-2)', fontSize: '0.95rem' }}>
                  <CheckCircle2 size={16} style={{ color: 'var(--accent)' }} />
                  {item}
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 style={{ fontSize: '1.5rem', borderBottom: '1px solid var(--border)', paddingBottom: '16px', marginBottom: '24px' }}>4.0 Engineered Architecture</h2>
            <div className="eng-panel" style={{ padding: '40px', background: 'var(--bg-dark)' }}>
              <div style={{ fontFamily: 'SF Mono, monospace', fontSize: '0.85rem', color: 'var(--text-main)', lineHeight: 2 }}>
                <div>[Inbound PSTN] → (Twilio Voice API Webhook)</div>
                <div style={{ color: 'var(--accent)', marginLeft: '40px' }}>↓</div>
                <div style={{ marginLeft: '40px' }}>[FastAPI Gateway] ←→ (OpenAI Realtime API for Intent)</div>
                <div style={{ color: 'var(--accent)', marginLeft: '40px' }}>↓</div>
                <div style={{ marginLeft: '40px' }}>[Decision Engine]</div>
                <div style={{ marginLeft: '80px', color: 'var(--text-3)' }}>├─ If Intent == 'Book': Query Database(availability)</div>
                <div style={{ marginLeft: '80px', color: 'var(--text-3)' }}>├─ If Intent == 'Medical': Route to human triage</div>
                <div style={{ marginLeft: '80px', color: 'var(--text-3)' }}>└─ If Intent == 'Cancel': Mutate Database(status='cancelled')</div>
                <div style={{ color: 'var(--accent)', marginLeft: '40px' }}>↓</div>
                <div style={{ marginLeft: '40px' }}>[Event Bus] → (SMS Confirmation & CRM Sync)</div>
              </div>
            </div>
          </section>

          <section>
            <h2 style={{ fontSize: '1.5rem', borderBottom: '1px solid var(--border)', paddingBottom: '16px', marginBottom: '24px' }}>5.0 System Components (Built With)</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
              <div className="eng-panel" style={{ padding: '24px' }}>
                <Server size={20} style={{ color: 'var(--text-main)', marginBottom: '16px' }} />
                <h3 style={{ fontSize: '1.1rem', marginBottom: '12px' }}>Backend & Infrastructure</h3>
                <ul style={{ listStyleType: 'none', color: 'var(--text-2)', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <li>FastAPI</li>
                  <li>Docker</li>
                  <li>Nginx Proxy</li>
                </ul>
              </div>
              <div className="eng-panel" style={{ padding: '24px' }}>
                <Database size={20} style={{ color: 'var(--text-main)', marginBottom: '16px' }} />
                <h3 style={{ fontSize: '1.1rem', marginBottom: '12px' }}>Data Layer</h3>
                <ul style={{ listStyleType: 'none', color: 'var(--text-2)', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <li>PostgreSQL</li>
                  <li>Redis (Session Locks)</li>
                </ul>
              </div>
              <div className="eng-panel" style={{ padding: '24px' }}>
                <Cpu size={20} style={{ color: 'var(--text-main)', marginBottom: '16px' }} />
                <h3 style={{ fontSize: '1.1rem', marginBottom: '12px' }}>Intelligence</h3>
                <ul style={{ listStyleType: 'none', color: 'var(--text-2)', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <li>OpenAI GPT-4o Realtime</li>
                  <li>LangChain Tools</li>
                </ul>
              </div>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}
