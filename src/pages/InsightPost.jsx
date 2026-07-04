import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function InsightPost() {
  const { slug } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  return (
    <main style={{ paddingTop: 'calc(var(--nav-h) + 40px)', paddingBottom: '120px' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        
        <Link to="/insights" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--text-3)', fontSize: '0.9rem', marginBottom: '40px', transition: 'var(--t-fast)' }}>
          <ArrowLeft size={16} /> Back to Logs
        </Link>
        
        <article>
          <header style={{ marginBottom: '60px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
              <span className="tech-label" style={{ margin: 0 }}>Architecture</span>
              <span style={{ fontSize: '0.9rem', color: 'var(--text-3)' }}>Oct 12, 2026</span>
            </div>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', marginBottom: '32px', lineHeight: 1.1 }}>
              Why we use n8n over Zapier for production-grade automation.
            </h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', borderTop: '1px solid var(--border)', paddingTop: '24px' }}>
              <div>
                <div style={{ color: 'var(--text-main)', fontWeight: 500, fontSize: '0.95rem' }}>AutoEra Engineering</div>
                <div style={{ color: 'var(--text-3)', fontSize: '0.85rem' }}>Infrastructure Team</div>
              </div>
            </div>
          </header>

          <div style={{ color: 'var(--text-2)', fontSize: '1.1rem', lineHeight: 1.8 }}>
            <p style={{ marginBottom: '24px' }}>
              When a client approaches us to automate their operations, they usually already have a Zapier account. They've built a few 2-step zaps—maybe a Facebook Lead ad to a Google Sheet. But when they try to build structural, multi-branch logic, the system breaks down.
            </p>
            <p style={{ marginBottom: '24px' }}>
              That's why our studio defaults to <strong>n8n</strong> for core automation infrastructure.
            </p>

            <h2 style={{ fontSize: '1.5rem', color: 'var(--text-main)', marginBottom: '16px', marginTop: '48px' }}>Logic Over Templates</h2>
            <p style={{ marginBottom: '24px' }}>
              Zapier is built for marketers. n8n is built for engineers. In n8n, you have full control over the JSON payloads passing between nodes. You aren't restricted to pre-mapped fields created by the app developer. If an API has an endpoint, you can hit it cleanly via HTTP Request nodes without waiting for an official integration.
            </p>

            <div className="eng-panel" style={{ padding: '24px', marginBottom: '24px', borderLeft: '2px solid var(--accent)', borderRadius: '4px' }}>
              <p style={{ margin: 0, fontStyle: 'italic', color: 'var(--text-main)' }}>
                "If your business relies on an automation to run, that automation needs error handling, branching logic, and logging. Basic Zaps do not provide this."
              </p>
            </div>

            <h2 style={{ fontSize: '1.5rem', color: 'var(--text-main)', marginBottom: '16px', marginTop: '48px' }}>Advanced Error Handling</h2>
            <p style={{ marginBottom: '24px' }}>
              In production, APIs fail. Webhooks drop. Rate limits are hit. If a zap fails, it stops. In an engineered n8n workflow, we build error trigger nodes that catch the failure, log it to a Slack channel with the exact error payload, and execute a fallback branch.
            </p>

          </div>
        </article>
      </div>
    </main>
  );
}
