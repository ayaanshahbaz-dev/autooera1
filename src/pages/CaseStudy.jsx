import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function CaseStudy() {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <main style={{ paddingTop: 'calc(var(--nav-h) + 40px)', paddingBottom: '120px' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <Link to="/portfolio" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--text-3)', fontSize: '0.9rem', marginBottom: '40px', transition: 'var(--t-fast)' }}>
          <ArrowLeft size={16} /> Back to Systems
        </Link>
        
        <div style={{ marginBottom: '60px' }}>
          <span style={{ color: 'var(--accent)', fontFamily: 'Outfit', fontWeight: 600, fontSize: '0.9rem', letterSpacing: '0.05em', textTransform: 'uppercase', display: 'block', marginBottom: '16px' }}>
            System Blueprint — {id}
          </span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', marginBottom: '24px', lineHeight: 1.1 }}>
            Automating Patient Intake for Healthcare Providers
          </h1>
          <div style={{ display: 'flex', gap: '24px', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '24px 0', marginTop: '40px' }}>
            <div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-3)', textTransform: 'uppercase', marginBottom: '4px' }}>Client</div>
              <div style={{ color: 'var(--text-main)', fontWeight: 500 }}>HealthSmile Clinics</div>
            </div>
            <div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-3)', textTransform: 'uppercase', marginBottom: '4px' }}>Timeline</div>
              <div style={{ color: 'var(--text-main)', fontWeight: 500 }}>14 Days</div>
            </div>
            <div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-3)', textTransform: 'uppercase', marginBottom: '4px' }}>Core Tech</div>
              <div style={{ color: 'var(--text-main)', fontWeight: 500 }}>n8n, Voice API</div>
            </div>
          </div>
        </div>

        <div style={{ color: 'var(--text-2)', fontSize: '1.1rem', lineHeight: 1.8 }}>
          <h2 style={{ fontSize: '1.8rem', color: 'var(--text-main)', marginBottom: '16px', marginTop: '48px' }}>The Bottleneck</h2>
          <p style={{ marginBottom: '24px' }}>
            The clinic was receiving 300+ inbound calls a week. Front desk staff were overwhelmed, resulting in a 30% missed call rate during peak hours. Every missed call was a potential patient going to a competitor.
          </p>

          <h2 style={{ fontSize: '1.8rem', color: 'var(--text-main)', marginBottom: '16px', marginTop: '48px' }}>The Architecture</h2>
          <p style={{ marginBottom: '24px' }}>
            We engineered a voice-native AI agent integrated directly with their PBX system and practice management software.
          </p>
          <ul style={{ listStyleType: 'square', paddingLeft: '24px', marginBottom: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <li><strong>Intake Logic:</strong> The agent greets the caller, assesses if they are a new or returning patient, and asks qualifying questions.</li>
            <li><strong>Calendar Sync:</strong> Queries the clinic's availability via API and books the appointment directly.</li>
            <li><strong>Webhook Triggers:</strong> On booking, an n8n workflow triggers SMS confirmations to the patient and updates the internal CRM.</li>
          </ul>

          <h2 style={{ fontSize: '1.8rem', color: 'var(--text-main)', marginBottom: '16px', marginTop: '48px' }}>The Outcome</h2>
          <div className="glass-panel" style={{ padding: '32px', marginTop: '24px', display: 'flex', justifyContent: 'space-around', textAlign: 'center' }}>
            <div>
              <div style={{ fontSize: '2.5rem', color: 'var(--green)', fontFamily: 'Outfit', fontWeight: 700 }}>0%</div>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-3)', textTransform: 'uppercase' }}>Missed Calls</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', color: 'var(--text-main)', fontFamily: 'Outfit', fontWeight: 700 }}>+34%</div>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-3)', textTransform: 'uppercase' }}>Booking Rate</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', color: 'var(--text-main)', fontFamily: 'Outfit', fontWeight: 700 }}>45h</div>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-3)', textTransform: 'uppercase' }}>Saved Monthly</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
