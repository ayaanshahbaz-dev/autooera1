import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Terminal, Cpu, ShieldCheck } from 'lucide-react';

export default function About() {
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
    <main style={{ paddingTop: 'calc(var(--nav-h) + 60px)' }}>
      {/* Hero */}
      <section style={{ paddingBottom: '80px' }}>
        <div className="container">
          <div className="reveal">
            <span className="section-label">The Studio</span>
            <h1 style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', marginBottom: '24px', lineHeight: 1 }}>
              Architecting the <br/><span style={{ color: 'var(--text-3)' }}>invisible backend</span> of modern business.
            </h1>
          </div>
        </div>
      </section>

      {/* Manifesto */}
      <section style={{ padding: '80px 0', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', background: 'rgba(255,255,255,0.01)' }}>
        <div className="container">
          <div className="reveal" style={{ maxWidth: '800px' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '32px' }}>The AI Industry is full of marketers pretending to be engineers.</h2>
            <div style={{ fontSize: '1.2rem', color: 'var(--text-2)', lineHeight: 1.8 }}>
              <p style={{ marginBottom: '24px' }}>
                Most "AI Automation Agencies" sell wrapped templates. They plug a chatbot into a website and call it a system. When it breaks, no one can explain why, because no one understands the architecture.
              </p>
              <p style={{ marginBottom: '24px' }}>
                AutoEra is an engineering studio. We look at a business, find the operational bottlenecks—the manual data entry, the missed calls, the slow response times—and we write the logic to eliminate them.
              </p>
              <p style={{ color: 'var(--text-main)' }}>
                We build the infrastructure that runs your business while you sleep.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section style={{ padding: '120px 0' }}>
        <div className="container">
          <div className="reveal" style={{ marginBottom: '60px' }}>
            <span className="section-label">Core Directives</span>
            <h2 style={{ fontSize: '2.5rem' }}>How we engineer.</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
            {[
              {
                icon: Terminal,
                title: 'Logic Before Code',
                desc: 'We map the entire workflow and data model before writing a single line or placing a single node.'
              },
              {
                icon: ShieldCheck,
                title: 'Production Resilience',
                desc: 'APIs fail. We build systems with robust error handling, fallbacks, and internal logging.'
              },
              {
                icon: Cpu,
                title: 'No Black Boxes',
                desc: 'You own your infrastructure. We document everything we build so your team isn\'t locked out.'
              }
            ].map((v, i) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="glass-panel reveal" style={{ padding: '40px', transitionDelay: `${i * 100}ms` }}>
                  <div style={{ color: 'var(--accent)', marginBottom: '24px' }}><Icon size={32} /></div>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>{v.title}</h3>
                  <p style={{ color: 'var(--text-2)' }}>{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '120px 0', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div className="reveal" style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '24px' }}>Stop running manual.</h2>
            <p style={{ color: 'var(--text-2)', fontSize: '1.1rem', marginBottom: '40px' }}>
              If your team is doing work that a machine could do, you are losing money. Let's fix that.
            </p>
            <Link to="/contact" className="btn btn-primary" style={{ padding: '0 32px', height: '56px', fontSize: '1.05rem' }}>
              Book an Assessment
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
