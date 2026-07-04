import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Map, Zap, Database, Hammer, LineChart } from 'lucide-react';

export default function Studio() {
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

  const workflow = [
    { icon: Search, title: 'Understand the Business', desc: 'We do not start with code. We start by understanding your unit economics, your team structure, and how you currently make money.' },
    { icon: Map, title: 'Map Existing Processes', desc: 'Every manual data entry point, every spreadsheet, every Slack message is mapped into a systemic topology.' },
    { icon: Zap, title: 'Identify Bottlenecks', desc: 'We locate the specific nodes in your operation that are causing latency, leaking leads, or costing human hours.' },
    { icon: Database, title: 'Design the Architecture', desc: 'We design the database schemas, the API routes, and the automation logic required to bypass the bottleneck.' },
    { icon: Hammer, title: 'Engineer the Solution', desc: 'We write the code, deploy the containers, and build the infrastructure.' },
    { icon: LineChart, title: 'Measure Outcomes', desc: 'Deployment is not the end. We measure system uptime, latency reduction, and revenue impact.' }
  ];

  return (
    <main style={{ paddingTop: 'calc(var(--nav-h) + 80px)', paddingBottom: '120px' }}>
      <div className="container">
        
        {/* Core Philosophy */}
        <section style={{ marginBottom: '160px', maxWidth: '900px' }}>
          <span className="tech-label reveal">THE STUDIO</span>
          <h1 className="reveal" style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', marginBottom: '40px', lineHeight: 1.1 }}>
            We believe businesses deserve software engineered around the way they actually operate.
          </h1>
          <div className="reveal" style={{ fontSize: '1.2rem', color: 'var(--text-2)', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <p>
              The enterprise software industry is broken. Companies are forced to buy generic SaaS tools and bend their operations to fit the software's limitations. 
            </p>
            <p>
              AutoEra was founded on a simple engineering principle: <strong style={{ color: 'var(--text-main)' }}>Technology should adapt to the business, not force the business to adapt to the technology.</strong>
            </p>
            <p>
              We are an engineering studio. We look at your business, find the operational bottlenecks, and write the custom logic to permanently eliminate them. We build the infrastructure that runs your company while you sleep.
            </p>
          </div>
        </section>

        {/* How We Think */}
        <section>
          <div className="reveal" style={{ marginBottom: '60px' }}>
            <span className="tech-label">PROCESS_TOPOLOGY</span>
            <h2 style={{ fontSize: '2.5rem' }}>Our Engineering Mindset</h2>
            <p style={{ color: 'var(--text-2)', marginTop: '16px', fontSize: '1.1rem' }}>Our methodology for transforming chaotic operations into reliable systems.</p>
          </div>

          <div style={{ position: 'relative' }}>
            {/* Connecting Line */}
            <div style={{ position: 'absolute', top: 0, bottom: 0, left: '24px', width: '2px', background: 'var(--border)' }}></div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
              {workflow.map((step, i) => {
                const Icon = step.icon;
                return (
                  <div key={step.title} className="reveal" style={{ display: 'flex', gap: '32px', alignItems: 'flex-start', position: 'relative', transitionDelay: `${i*100}ms` }}>
                    <div style={{ width: '50px', height: '50px', background: 'var(--bg-dark)', border: '2px solid var(--accent)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)', zIndex: 1, boxShadow: '0 0 15px var(--accent-dim)' }}>
                      <Icon size={20} />
                    </div>
                    <div style={{ paddingTop: '8px', maxWidth: '600px' }}>
                      <h3 style={{ fontSize: '1.25rem', marginBottom: '8px', color: 'var(--text-main)' }}>{step.title}</h3>
                      <p style={{ color: 'var(--text-2)', fontSize: '1rem', lineHeight: 1.6 }}>{step.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
