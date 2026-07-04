import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Server, Database, Code, Layout, Lock } from 'lucide-react';

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
            <span className="tech-label" style={{ margin: 0, background: 'rgba(74, 222, 128, 0.1)', color: 'var(--status-online)', borderColor: 'var(--status-online-glow)' }}>STATUS: DEPLOYED</span>
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
            <h2 style={{ fontSize: '1.5rem', borderBottom: '1px solid var(--border)', paddingBottom: '16px', marginBottom: '24px' }}>1.0 Overview & Problem</h2>
            <div style={{ color: 'var(--text-2)', fontSize: '1.05rem', lineHeight: 1.8 }}>
              <p style={{ marginBottom: '16px' }}>The client, a high-volume dental clinic network, was experiencing a 30% missed call rate during peak morning hours. Human receptionists could not simultaneously check-in physical patients and manage the inbound call queue.</p>
              <p>Missed calls translated directly to lost revenue. Existing "answering services" lacked the ability to read internal calendars or write to the secure patient database.</p>
            </div>
          </section>

          <section>
            <h2 style={{ fontSize: '1.5rem', borderBottom: '1px solid var(--border)', paddingBottom: '16px', marginBottom: '24px' }}>2.0 Engineered Architecture</h2>
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
                <div style={{ marginLeft: '40px' }}>[n8n Workflow] → (SMS Confirmation & CRM Sync)</div>
              </div>
            </div>
          </section>

          <section>
            <h2 style={{ fontSize: '1.5rem', borderBottom: '1px solid var(--border)', paddingBottom: '16px', marginBottom: '24px' }}>3.0 System Components (Built With)</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
              <div className="eng-panel" style={{ padding: '24px' }}>
                <Server size={20} style={{ color: 'var(--accent)', marginBottom: '16px' }} />
                <h3 style={{ fontSize: '1.1rem', marginBottom: '12px' }}>Backend & Routing</h3>
                <ul style={{ listStyleType: 'none', color: 'var(--text-2)', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <li>FastAPI (Python)</li>
                  <li>Twilio (Voice API)</li>
                  <li>Redis (Session State)</li>
                </ul>
              </div>
              <div className="eng-panel" style={{ padding: '24px' }}>
                <Database size={20} style={{ color: 'var(--accent)', marginBottom: '16px' }} />
                <h3 style={{ fontSize: '1.1rem', marginBottom: '12px' }}>Data Layer</h3>
                <ul style={{ listStyleType: 'none', color: 'var(--text-2)', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <li>PostgreSQL (ACID Compliant)</li>
                  <li>n8n (Workflow Sync)</li>
                </ul>
              </div>
              <div className="eng-panel" style={{ padding: '24px' }}>
                <Cpu size={20} style={{ color: 'var(--accent)', marginBottom: '16px' }} />
                <h3 style={{ fontSize: '1.1rem', marginBottom: '12px' }}>AI & Intelligence</h3>
                <ul style={{ listStyleType: 'none', color: 'var(--text-2)', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <li>OpenAI GPT-4o Realtime</li>
                  <li>LangChain (Tools execution)</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 style={{ fontSize: '1.5rem', borderBottom: '1px solid var(--border)', paddingBottom: '16px', marginBottom: '24px' }}>4.0 Engineering Challenges & Solutions</h2>
            <div style={{ color: 'var(--text-2)', fontSize: '1.05rem', lineHeight: 1.8 }}>
              <h3 style={{ fontSize: '1.2rem', color: 'var(--text-main)', marginBottom: '8px', marginTop: '24px' }}>Concurrency Locks</h3>
              <p style={{ marginBottom: '16px' }}><strong>Challenge:</strong> Multiple patients calling simultaneously could attempt to book the exact same time slot before the CRM synced.</p>
              <p><strong>Solution:</strong> We implemented Redis distributed locking on specific calendar slots during the API negotiation phase, ensuring absolute database integrity before the AI confirmed the booking to the patient.</p>
              
              <h3 style={{ fontSize: '1.2rem', color: 'var(--text-main)', marginBottom: '8px', marginTop: '24px' }}>Security & HIPAA</h3>
              <p style={{ marginBottom: '16px' }}><strong>Challenge:</strong> The AI node handles Protected Health Information (PHI).</p>
              <p><strong>Solution:</strong> Transcripts are wiped from volatile memory post-call. PII is scrubbed locally before any intent routing via LLM, and all database transactions occur within a VPC.</p>
            </div>
          </section>

          <section>
            <h2 style={{ fontSize: '1.5rem', borderBottom: '1px solid var(--border)', paddingBottom: '16px', marginBottom: '24px' }}>5.0 Business Outcome</h2>
            <div className="eng-panel" style={{ padding: '40px', display: 'flex', gap: '40px', background: 'var(--bg-surface)' }}>
              <div>
                <div style={{ fontSize: '3rem', fontWeight: 600, color: 'var(--status-online)', letterSpacing: '-0.05em', lineHeight: 1 }}>0%</div>
                <div style={{ color: 'var(--text-3)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: '8px' }}>Missed Calls</div>
              </div>
              <div>
                <div style={{ fontSize: '3rem', fontWeight: 600, color: 'var(--text-main)', letterSpacing: '-0.05em', lineHeight: 1 }}>+34%</div>
                <div style={{ color: 'var(--text-3)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: '8px' }}>Booking Rate</div>
              </div>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}
