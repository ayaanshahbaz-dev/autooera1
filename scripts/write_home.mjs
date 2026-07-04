import { writeFileSync } from 'fs';

const code = `import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  User, Brain, Database, Settings, BarChart, LineChart, Users,
  ShieldCheck, Layers, Network, Lock, ArrowRight, Zap, FileCode2,
  Code, Plus, CheckCircle2, Globe, Heart, Building2, Truck,
  ChevronRight, Activity, AlertCircle, Clock, RefreshCw
} from 'lucide-react';

/* ================================================================
   HERO SYSTEM DIAGRAM
   ================================================================ */
function SystemDiagram() {
  const [activeNode, setActiveNode] = useState(null);
  const nodes = [
    { id: 'capture',    label: 'Lead\\nCapture',        icon: User,      desc: 'All inbound leads captured automatically — no manual entry.' },
    { id: 'ai',         label: 'AI\\nQualification',    icon: Brain,     desc: 'AI scores and qualifies leads by industry, intent and budget.' },
    { id: 'crm',        label: 'CRM\\nSync',            icon: Database,  desc: 'Qualified leads synced to your CRM in real time.' },
    { id: 'automation', label: 'Automation\\nEngine',   icon: Settings,  desc: 'Workflows trigger follow-ups, tasks and notifications instantly.' },
    { id: 'dashboard',  label: 'Dashboard\\n& Reports', icon: BarChart,  desc: 'Real-time visibility into pipeline health and conversion rates.' },
    { id: 'analytics',  label: 'Analytics\\n& Insights',icon: LineChart, desc: 'AI-powered insights reveal bottlenecks and growth opportunities.' },
    { id: 'team',       label: 'Your\\nTeam',           icon: Users,     desc: 'Your team works from one unified platform, not ten tabs.' },
  ];

  return (
    <div style={{ position: 'relative', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px', padding: '20px 0' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(0,229,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,0.04) 1px, transparent 1px)', backgroundSize: '40px 40px', maskImage: 'radial-gradient(ellipse at center, black, transparent 75%)', pointerEvents: 'none' }} />
      <div style={{ display: 'flex', gap: '12px', zIndex: 2 }}>
        <div style={{ background: '#0a0a0a', border: '1px solid rgba(0,229,255,0.25)', padding: '6px 14px', borderRadius: '99px', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.72rem', color: 'var(--text-main)', letterSpacing: '0.05em' }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent)', boxShadow: '0 0 8px var(--accent)', animation: 'pulseDot 2s infinite' }} /> SYSTEMS LIVE
        </div>
        <div style={{ background: '#0a0a0a', border: '1px solid rgba(255,149,0,0.25)', padding: '6px 14px', borderRadius: '99px', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.72rem', color: 'var(--text-main)', letterSpacing: '0.05em' }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--logo-orange)' }} /> DATA FLOW ACTIVE
        </div>
      </div>

      <div style={{ position: 'relative', width: '100%', display: 'flex', alignItems: 'center' }}>
        <div style={{ position: 'absolute', left: '4%', right: '4%', height: '2px', background: 'linear-gradient(90deg, transparent, var(--accent), transparent)', boxShadow: '0 0 12px rgba(0,229,255,0.4)', zIndex: 0 }} />
        <div style={{ position: 'absolute', left: '4%', right: '4%', height: '2px', zIndex: 1, overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '-3px', width: '8px', height: '8px', borderRadius: '50%', background: '#fff', boxShadow: '0 0 12px 2px var(--accent)', animation: 'dataFlow 2.8s linear infinite' }} />
          <div style={{ position: 'absolute', top: '-3px', width: '8px', height: '8px', borderRadius: '50%', background: '#fff', boxShadow: '0 0 12px 2px var(--accent)', animation: 'dataFlow 2.8s linear infinite 1.4s' }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', position: 'relative', zIndex: 2, padding: '0 4%' }}>
          {nodes.map((node) => {
            const Icon = node.icon;
            const isActive = activeNode === node.id;
            return (
              <div key={node.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', cursor: 'pointer' }}
                onMouseEnter={() => setActiveNode(node.id)}
                onMouseLeave={() => setActiveNode(null)}
              >
                <div style={{ width: '58px', height: '72px', background: isActive ? 'rgba(0,229,255,0.1)' : '#060606', border: \`1px solid \${isActive ? 'rgba(0,229,255,0.8)' : 'rgba(0,229,255,0.25)'}\`, borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: isActive ? '0 0 25px rgba(0,229,255,0.25), inset 0 0 20px rgba(0,229,255,0.1)' : 'inset 0 0 20px rgba(0,229,255,0.04)', transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)', transform: isActive ? 'translateY(-6px) scale(1.08)' : 'none' }}>
                  <Icon size={24} style={{ color: isActive ? 'var(--accent)' : '#666', transition: 'color 0.3s ease' }} />
                </div>
                <div style={{ color: isActive ? 'var(--text-main)' : 'var(--text-3)', fontSize: '0.68rem', textAlign: 'center', whiteSpace: 'pre-line', lineHeight: 1.3, transition: 'color 0.3s ease' }}>
                  {node.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div style={{ minHeight: '52px', background: activeNode ? '#0d0d0d' : 'transparent', border: \`1px solid \${activeNode ? 'rgba(0,229,255,0.2)' : 'transparent'}\`, borderRadius: '8px', padding: '14px 24px', fontSize: '0.88rem', color: 'var(--text-2)', textAlign: 'center', transition: 'all 0.3s ease', maxWidth: '480px' }}>
        {activeNode ? nodes.find(n => n.id === activeNode)?.desc : <span style={{ color: 'var(--text-3)', fontSize: '0.78rem' }}>Hover a node to explore the system</span>}
      </div>
      <style>{\`
        @keyframes dataFlow { 0%{left:0;opacity:0} 5%{opacity:1} 95%{opacity:1} 100%{left:100%;opacity:0} }
        @keyframes pulseDot { 0%,100%{box-shadow:0 0 0 0 rgba(0,229,255,0.4)} 70%{box-shadow:0 0 0 6px rgba(0,229,255,0)} }
      \`}</style>
    </div>
  );
}

/* ================================================================
   INTERACTIVE ARCHITECTURE FLOW
   ================================================================ */
function ArchitectureFlow() {
  const [activeStep, setActiveStep] = useState(0);
  const steps = [
    { label: 'Website',      icon: Globe,     desc: 'A visitor lands on your site, fills a form or clicks a chat widget.', color: '#00E5FF' },
    { label: 'Lead Capture', icon: User,      desc: 'All lead data is captured and stored into a structured PostgreSQL database with full audit trails.', color: '#00E5FF' },
    { label: 'AI Engine',    icon: Brain,     desc: 'Our AI qualification layer scores the lead, detects intent, and routes it to the right pipeline stage.', color: '#a855f7' },
    { label: 'CRM Sync',     icon: Database,  desc: 'The scored lead is instantly pushed to your CRM with enriched fields and zero manual data entry.', color: '#00E5FF' },
    { label: 'Automation',   icon: Zap,       desc: 'Automated sequences trigger — follow-up emails, Slack notifications, and task assignments — within seconds.', color: '#FF9500' },
    { label: 'Dashboard',    icon: BarChart,  desc: 'Every conversion, drop-off and metric is visible in your real-time operations dashboard.', color: '#00E5FF' },
    { label: 'Reports',      icon: LineChart, desc: 'Weekly automated reports surface what is working, what is not, and what needs engineering attention.', color: '#00E5FF' },
    { label: 'Your Team',    icon: Users,     desc: 'Your team has a single platform for everything — no tool-switching, no duplicated work.', color: '#22c55e' },
  ];

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        {steps.map((step, i) => {
          const Icon = step.icon;
          const isActive = activeStep === i;
          return (
            <div key={i}>
              <div onClick={() => setActiveStep(i)} style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '14px 18px', borderRadius: '10px', background: isActive ? 'rgba(0,229,255,0.06)' : 'transparent', border: \`1px solid \${isActive ? 'rgba(0,229,255,0.25)' : 'transparent'}\`, cursor: 'pointer', transition: 'all 0.25s ease' }}>
                <div style={{ width: '38px', height: '38px', flexShrink: 0, borderRadius: '8px', background: isActive ? 'rgba(0,229,255,0.12)' : '#111', border: \`1px solid \${isActive ? 'rgba(0,229,255,0.4)' : '#222'}\`, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.25s ease' }}>
                  <Icon size={16} style={{ color: isActive ? step.color : '#555' }} />
                </div>
                <span style={{ fontWeight: isActive ? 600 : 400, color: isActive ? 'var(--text-main)' : 'var(--text-3)', fontSize: '0.95rem', transition: 'color 0.25s ease' }}>{step.label}</span>
                {isActive && <ChevronRight size={14} style={{ marginLeft: 'auto', color: 'var(--accent)' }} />}
              </div>
              {i < steps.length - 1 && <div style={{ marginLeft: '36px', width: '2px', height: '4px', background: '#1a1a1a' }} />}
            </div>
          );
        })}
      </div>
      <div style={{ background: 'linear-gradient(145deg, #0e0e0e, #050505)', border: '1px solid #1a1a1a', borderRadius: '16px', padding: '48px', minHeight: '280px', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-60px', right: '-60px', width: '200px', height: '200px', background: 'radial-gradient(circle, rgba(0,229,255,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
        {(() => { const step = steps[activeStep]; const Icon = step.icon; return (<>
          <div style={{ width: '52px', height: '52px', background: 'rgba(0,229,255,0.08)', border: '1px solid rgba(0,229,255,0.2)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}><Icon size={26} style={{ color: step.color }} /></div>
          <div style={{ fontFamily: "'SF Mono', monospace", fontSize: '0.68rem', color: 'var(--accent)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>STEP {activeStep + 1} / {steps.length}</div>
          <h3 style={{ fontSize: '1.7rem', marginBottom: '14px', color: 'var(--text-main)' }}>{step.label}</h3>
          <p style={{ color: 'var(--text-2)', lineHeight: 1.7, fontSize: '0.95rem' }}>{step.desc}</p>
        </>); })()}
      </div>
    </div>
  );
}

/* ================================================================
   HOMEPAGE
   ================================================================ */
export default function Home() {
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.08 }
    );
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const technologies = ['Django', 'Python', 'React', 'PostgreSQL', 'Docker', 'FastAPI', 'OpenAI', 'Gemini', 'n8n', 'Redis', 'AWS', 'Nginx'];

  const problems = [
    { icon: AlertCircle, text: 'Leads falling through the cracks' },
    { icon: RefreshCw,   text: 'Hours lost to manual, repetitive work' },
    { icon: Network,     text: 'Disconnected tools that do not talk to each other' },
    { icon: Clock,       text: 'Slow customer response times' },
    { icon: Activity,    text: 'No visibility into business operations' },
    { icon: FileCode2,   text: 'Paying for five tools when one system does everything' },
  ];

  const systems = [
    { name: 'AI Lead Management System', purpose: 'Capture. Qualify. Track. Convert.', industries: 'Healthcare · Real Estate · Finance · SaaS', solves: 'Eliminates manual lead tracking and slow follow-up by routing every lead through AI qualification and automated workflows.', modules: ['Lead Capture API', 'AI Scoring Engine', 'CRM Integration', 'Automated Follow-up', 'Analytics Dashboard'], accent: '#00E5FF', path: '/work' },
    { name: 'Customer Communication Platform', purpose: 'Respond. Resolve. Retain.', industries: 'Clinics · E-commerce · Agencies · Logistics', solves: 'Unifies WhatsApp, email, and SMS into a single intelligent inbox with AI-powered auto-responses and ticket routing.', modules: ['Omni-channel Inbox', 'AI Auto-Response', 'Ticket System', 'Escalation Rules', 'SLA Monitoring'], accent: '#a855f7', path: '/work' },
    { name: 'Business Operations Platform', purpose: 'Monitor. Automate. Scale.', industries: 'Startups · SMEs · Enterprises · Studios', solves: 'Gives operations managers a single dashboard covering inventory, tasks, HR, and financials with full automation between modules.', modules: ['Task Management', 'Inventory Tracking', 'HR Module', 'Finance Overview', 'API Integrations'], accent: '#FF9500', path: '/work' },
    { name: 'Document Intelligence System', purpose: 'Extract. Classify. Route.', industries: 'Legal · Healthcare · Insurance · Government', solves: 'Turns unstructured documents — PDFs, scans, emails — into structured data that flows directly into your business systems.', modules: ['OCR Pipeline', 'AI Classification', 'Data Extraction', 'Database Routing', 'Audit Trail'], accent: '#22c55e', path: '/work' },
  ];

  const comparison = [
    ['Multiple disconnected apps', 'One unified business system'],
    ['Manual data entry', 'Intelligent, automated workflows'],
    ['Generic off-the-shelf software', 'Engineered around your operations'],
    ['One-size-fits-all pricing', 'Scoped to your exact requirements'],
    ['You adapt to the software', 'The software adapts to your business'],
    ['Vendor lock-in', 'Full ownership of your codebase'],
  ];

  const process = [
    { step: '01', title: 'Discovery', desc: 'We map your current operations — tools, workflows, pain points, and goals.' },
    { step: '02', title: 'Business Analysis', desc: 'We identify bottlenecks, inefficiencies, and the highest-leverage automation opportunities.' },
    { step: '03', title: 'Architecture', desc: 'We design the system architecture — database schema, API contracts, and integration points.' },
    { step: '04', title: 'Design', desc: 'We create UI/UX prototypes and confirm the experience before a single line of code is written.' },
    { step: '05', title: 'Development', desc: 'We build in two-week sprints with daily progress updates and demo reviews.' },
    { step: '06', title: 'Testing', desc: 'Unit tests, integration tests, load tests, and security audits before any deployment.' },
    { step: '07', title: 'Deployment', desc: 'We deploy to your infrastructure — fully containerised, monitored, and documented.' },
    { step: '08', title: 'Optimisation', desc: 'Post-launch, we monitor performance metrics and continuously improve the system.' },
  ];

  const standards = [
    ['Security First',       'authentication, authorization, and encryption by default'],
    ['API First',            'every module exposes clean REST endpoints'],
    ['Modular Architecture', 'swap or extend any component independently'],
    ['Full Documentation',   'technical docs handed over at every milestone'],
    ['Scalability',          'designed to handle 10x your current load from day one'],
    ['Maintainability',      'code that future engineers can read and extend'],
    ['Performance',          'sub-200ms response times as an architectural requirement'],
    ['Monitoring',           'structured logging, health checks, and alerting from day one'],
  ];

  const industries = [
    { icon: Heart,     name: 'Healthcare',     pain: 'Patient no-shows, manual appointment booking, slow follow-up', system: 'AI Communication Platform', accent: '#ef4444' },
    { icon: Building2, name: 'Real Estate',    pain: 'Leads go cold before follow-up; agents waste time on unqualified inquiries', system: 'AI Lead Management System', accent: '#00E5FF' },
    { icon: Truck,     name: 'Logistics',      pain: 'Manual order tracking, missed delivery updates, disconnected driver comms', system: 'Business Operations Platform', accent: '#FF9500' },
    { icon: Globe,     name: 'SaaS & Agencies', pain: 'No visibility into client delivery, support tickets overwhelm the team', system: 'Customer Communication Platform', accent: '#a855f7' },
  ];

  const insights = [
    { slug: 'why-we-chose-django',      title: 'Why We Chose Django for Production Backend Engineering', date: 'Oct 12, 2026', read: '6 min', tag: 'Engineering' },
    { slug: 'designing-modular-apis',   title: 'Designing Modular APIs That Scale Without Breaking',    date: 'Oct 28, 2026', read: '8 min', tag: 'Architecture' },
    { slug: 'scaling-background-tasks', title: 'How We Scale Background Tasks in Production Systems',   date: 'Nov 5, 2026',  read: '5 min', tag: 'Performance' },
  ];

  const faqs = [
    { q: 'How do your integrations work?',          a: 'We build middleware using Python/FastAPI or n8n — hosted on secure infrastructure. Every integration uses strict API contracts and webhooks with retry logic. No fragile Zapier pipes.' },
    { q: 'Is the architecture scalable?',           a: 'Yes. Our backend services are stateless and containerised via Docker. PostgreSQL is our primary data store and scales independently from the application layer.' },
    { q: 'Do you provide the source code?',         a: 'Yes. Upon final deployment you receive full ownership — complete codebase, Dockerfiles, environment configs, and technical documentation. No lock-in.' },
    { q: 'Can it connect to our existing systems?', a: 'If your legacy system has a REST API, SOAP interface, or direct database access, we can connect to it. If not, we can engineer custom bridges.' },
    { q: 'How long does a system take to build?',   a: 'A foundational system typically takes 6-12 weeks depending on scope. We work in two-week sprints, so you see progress immediately, not at the end.' },
  ];

  return (
    <main>

      {/* HERO */}
      <section style={{ minHeight: '95vh', display: 'flex', alignItems: 'center', paddingTop: 'calc(var(--nav-h) + 56px)', paddingBottom: '80px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '30%', left: '50%', transform: 'translate(-50%,-50%)', width: '900px', height: '900px', background: 'radial-gradient(circle, rgba(0,229,255,0.04) 0%, transparent 65%)', pointerEvents: 'none', zIndex: 0 }} />
        <div style={{ position: 'absolute', bottom: 0, right: '-5%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(255,149,0,0.03) 0%, transparent 65%)', pointerEvents: 'none', zIndex: 0 }} />
        <div className="container" style={{ maxWidth: '1300px', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: '80px', alignItems: 'center' }}>
            <div className="reveal">
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(0,229,255,0.06)', border: '1px solid rgba(0,229,255,0.2)', borderRadius: '99px', padding: '6px 16px', marginBottom: '32px' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent)', boxShadow: '0 0 8px var(--accent)', animation: 'pulseDot 2s infinite' }} />
                <span style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--accent)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>AI Engineering Studio</span>
              </div>
              <h1 style={{ marginBottom: '28px', lineHeight: 1.05, letterSpacing: '-0.04em' }}>
                We engineer{' '}<span style={{ color: 'var(--accent)' }}>software systems</span>{' '}around your business.
              </h1>
              <p style={{ fontSize: '1.15rem', color: 'var(--text-2)', maxWidth: '520px', marginBottom: '48px', lineHeight: 1.65 }}>
                Custom platforms, intelligent automation, and reliable infrastructure that eliminate bottlenecks and drive real operational impact.
              </p>
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <Link to="/solutions" className="btn btn-primary hero-btn-primary" style={{ background: 'var(--accent)', color: '#000', padding: '0 36px', height: '52px', fontWeight: 700, fontSize: '0.95rem' }}>Explore Our Systems <ArrowRight size={16} /></Link>
                <Link to="/work" className="btn btn-outline hero-btn-outline" style={{ padding: '0 36px', height: '52px', fontSize: '0.95rem' }}>View Our Work</Link>
              </div>
            </div>
            <div className="reveal" style={{ transitionDelay: '180ms' }}><SystemDiagram /></div>
          </div>
        </div>
      </section>

      {/* 2. TRUSTED TECHNOLOGIES */}
      <section style={{ padding: '48px 0', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          <div style={{ fontSize: '0.72rem', letterSpacing: '0.12em', color: 'var(--text-3)', textTransform: 'uppercase', textAlign: 'center', marginBottom: '28px' }}>Technologies We Engineer With</div>
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '10px 36px' }}>
            {technologies.map(tech => (
              <span key={tech} style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-3)', letterSpacing: '-0.02em', cursor: 'default', transition: 'color 0.2s ease' }}
                onMouseEnter={e => e.target.style.color = 'var(--text-main)'}
                onMouseLeave={e => e.target.style.color = 'var(--text-3)'}
              >{tech}</span>
            ))}
          </div>
        </div>
      </section>

      {/* 3. BUSINESS PROBLEMS */}
      <section style={{ padding: '100px 0' }}>
        <div className="container" style={{ maxWidth: '1100px' }}>
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '64px' }}>
            <span className="tech-label">THE_PROBLEM</span>
            <h2 style={{ fontSize: 'clamp(2rem,4vw,3rem)', marginBottom: '16px', letterSpacing: '-0.04em' }}>Growing businesses don&apos;t need more software.</h2>
            <p style={{ color: 'var(--text-3)', fontSize: '1.2rem', fontStyle: 'italic' }}>They need better systems.</p>
          </div>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2px', background: '#111', borderRadius: '12px', overflow: 'hidden', transitionDelay: '80ms' }}>
            {problems.map(({ icon: Icon, text }, i) => (
              <div key={i} style={{ background: '#0a0a0a', padding: '32px 28px', display: 'flex', alignItems: 'flex-start', gap: '16px', transition: 'background 0.25s ease', cursor: 'default' }}
                onMouseEnter={e => e.currentTarget.style.background = '#111'}
                onMouseLeave={e => e.currentTarget.style.background = '#0a0a0a'}
              >
                <Icon size={20} style={{ color: '#ef4444', flexShrink: 0, marginTop: '2px' }} />
                <span style={{ color: 'var(--text-2)', fontSize: '0.95rem', lineHeight: 1.5 }}>{text}</span>
              </div>
            ))}
          </div>
          <div className="reveal" style={{ textAlign: 'center', marginTop: '48px', transitionDelay: '160ms' }}>
            <p style={{ fontSize: '1.15rem', color: 'var(--text-main)', fontWeight: 500 }}>AutoEra engineers systems that eliminate these bottlenecks.</p>
          </div>
        </div>
      </section>

      {/* 4. SYSTEMS WE ENGINEER */}
      <section style={{ padding: '100px 0', background: '#020202', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container" style={{ maxWidth: '1300px' }}>
          <div className="reveal" style={{ marginBottom: '60px' }}>
            <span className="tech-label">SYSTEMS_CATALOGUE</span>
            <h2 style={{ fontSize: 'clamp(2rem,4vw,3rem)', letterSpacing: '-0.04em' }}>Systems We Engineer</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
            {systems.map((sys, i) => (
              <div key={i} className="reveal eng-panel" style={{ padding: '40px', background: 'linear-gradient(145deg, #111 0%, #080808 100%)', border: '1px solid #1a1a1a', transitionDelay: \`\${i * 80}ms\`, position: 'relative', overflow: 'hidden', transition: 'all 0.3s ease' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = sys.accent + '50'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#1a1a1a'; e.currentTarget.style.transform = 'none'; }}
              >
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: \`linear-gradient(90deg, \${sys.accent}, transparent)\`, opacity: 0.7 }} />
                <h3 style={{ fontSize: '1.2rem', color: 'var(--text-main)', marginBottom: '8px', letterSpacing: '-0.02em' }}>{sys.name}</h3>
                <p style={{ color: sys.accent, fontSize: '0.95rem', fontWeight: 600, marginBottom: '16px' }}>{sys.purpose}</p>
                <p style={{ color: 'var(--text-3)', fontSize: '0.72rem', marginBottom: '14px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{sys.industries}</p>
                <p style={{ color: 'var(--text-2)', fontSize: '0.9rem', lineHeight: 1.65, marginBottom: '24px' }}>{sys.solves}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '28px' }}>
                  {sys.modules.map(m => (<span key={m} style={{ background: '#161616', border: '1px solid #242424', borderRadius: '6px', padding: '4px 10px', fontSize: '0.75rem', color: 'var(--text-3)', fontFamily: "'SF Mono', monospace" }}>{m}</span>))}
                </div>
                <Link to={sys.path} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: sys.accent, fontSize: '0.88rem', fontWeight: 600, transition: 'gap 0.2s ease' }}
                  onMouseEnter={e => e.currentTarget.style.gap = '14px'}
                  onMouseLeave={e => e.currentTarget.style.gap = '8px'}
                >View Architecture <ArrowRight size={14} /></Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. INTERACTIVE ARCHITECTURE */}
      <section style={{ padding: '100px 0' }}>
        <div className="container" style={{ maxWidth: '1100px' }}>
          <div className="reveal" style={{ marginBottom: '60px' }}>
            <span className="tech-label">SYSTEM_FLOW</span>
            <h2 style={{ fontSize: 'clamp(2rem,4vw,3rem)', marginBottom: '16px', letterSpacing: '-0.04em' }}>How a System Works</h2>
            <p style={{ color: 'var(--text-2)', fontSize: '1rem', maxWidth: '460px' }}>Click any stage to explore what happens at that point in the system.</p>
          </div>
          <div className="reveal" style={{ transitionDelay: '80ms' }}><ArchitectureFlow /></div>
        </div>
      </section>

      {/* 6. WHY AUTOERA */}
      <section style={{ padding: '100px 0', background: '#020202', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container" style={{ maxWidth: '960px' }}>
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span className="tech-label">COMPARISON</span>
            <h2 style={{ fontSize: 'clamp(2rem,4vw,3rem)', letterSpacing: '-0.04em' }}>Why AutoEra</h2>
          </div>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderRadius: '12px', overflow: 'hidden', border: '1px solid #1a1a1a', transitionDelay: '80ms' }}>
            <div style={{ background: '#111', padding: '18px 32px', borderBottom: '1px solid #1a1a1a', borderRight: '1px solid #1a1a1a' }}><span style={{ color: 'var(--text-3)', fontSize: '0.82rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Traditional Approach</span></div>
            <div style={{ background: 'rgba(0,229,255,0.04)', padding: '18px 32px', borderBottom: '1px solid rgba(0,229,255,0.15)' }}><span style={{ color: 'var(--accent)', fontSize: '0.82rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>AutoEra</span></div>
            {comparison.map(([before, after], i) => (<>
              <div key={\`b\${i}\`} style={{ background: '#0a0a0a', padding: '18px 32px', borderBottom: i < comparison.length-1 ? '1px solid #111' : 'none', borderRight: '1px solid #1a1a1a', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ color: '#333', fontSize: '0.8rem', flexShrink: 0 }}>✕</span>
                <span style={{ color: 'var(--text-3)', fontSize: '0.9rem' }}>{before}</span>
              </div>
              <div key={\`a\${i}\`} style={{ background: 'rgba(0,229,255,0.02)', padding: '18px 32px', borderBottom: i < comparison.length-1 ? '1px solid rgba(0,229,255,0.08)' : 'none', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <CheckCircle2 size={16} style={{ color: 'var(--accent)', flexShrink: 0 }} />
                <span style={{ color: 'var(--text-main)', fontSize: '0.9rem' }}>{after}</span>
              </div>
            </>))}
          </div>
        </div>
      </section>

      {/* 7. ENGINEERING PROCESS */}
      <section style={{ padding: '100px 0' }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          <div className="reveal" style={{ marginBottom: '60px' }}>
            <span className="tech-label">PROCESS</span>
            <h2 style={{ fontSize: 'clamp(2rem,4vw,3rem)', letterSpacing: '-0.04em' }}>How We Work</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
            {process.map((p, i) => (
              <div key={i} className="reveal eng-panel" style={{ padding: '28px', background: 'linear-gradient(145deg, #0e0e0e, #060606)', transitionDelay: \`\${i * 50}ms\`, transition: 'all 0.3s ease', cursor: 'default' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(0,229,255,0.2)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'none'; }}
              >
                <div style={{ fontFamily: "'SF Mono', monospace", fontSize: '0.68rem', color: 'var(--accent)', letterSpacing: '0.1em', marginBottom: '16px' }}>{p.step}</div>
                <h4 style={{ color: 'var(--text-main)', fontSize: '0.95rem', marginBottom: '10px', letterSpacing: '-0.01em' }}>{p.title}</h4>
                <p style={{ color: 'var(--text-3)', fontSize: '0.82rem', lineHeight: 1.6 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. ENGINEERING STANDARDS */}
      <section style={{ padding: '80px 0', background: '#020202', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container" style={{ maxWidth: '1100px' }}>
          <div className="reveal" style={{ marginBottom: '48px' }}>
            <span className="tech-label">STANDARDS</span>
            <h2 style={{ fontSize: 'clamp(1.8rem,3vw,2.5rem)', letterSpacing: '-0.04em' }}>Engineering Standards We Uphold</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
            {standards.map(([title, desc], i) => (
              <div key={i} className="reveal" style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', padding: '22px 0', borderBottom: i < standards.length-2 ? '1px solid #111' : 'none', paddingRight: i % 2 === 0 ? '48px' : '0', paddingLeft: i % 2 === 1 ? '48px' : '0', borderLeft: i % 2 === 1 ? '1px solid #111' : 'none', transitionDelay: \`\${i * 40}ms\` }}>
                <CheckCircle2 size={16} style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '3px' }} />
                <div><span style={{ color: 'var(--text-main)', fontWeight: 600, fontSize: '0.92rem' }}>{title}</span><span style={{ color: 'var(--text-3)', fontSize: '0.85rem' }}> — {desc}</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FEATURED CASE STUDY */}
      <section style={{ padding: '100px 0' }}>
        <div className="container" style={{ maxWidth: '1100px' }}>
          <div className="reveal" style={{ marginBottom: '48px' }}>
            <span className="tech-label">FEATURED_CASE_STUDY</span>
            <h2 style={{ fontSize: 'clamp(2rem,4vw,3rem)', letterSpacing: '-0.04em' }}>HealthSmile Voice Node</h2>
          </div>
          <div className="reveal eng-panel" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', overflow: 'hidden', background: 'linear-gradient(145deg, #0e0e0e, #060606)', transitionDelay: '80ms' }}>
            <div style={{ padding: '48px', borderRight: '1px solid var(--border)' }}>
              <div style={{ display: 'flex', gap: '8px', marginBottom: '28px', flexWrap: 'wrap' }}>
                {['Healthcare', 'AI', 'Automation', 'Production'].map(tag => (<span key={tag} style={{ background: '#111', border: '1px solid #222', padding: '3px 10px', borderRadius: '6px', fontSize: '0.72rem', color: 'var(--text-3)', fontFamily: "'SF Mono', monospace" }}>{tag}</span>))}
              </div>
              <p style={{ color: 'var(--text-3)', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>The Problem</p>
              <p style={{ color: 'var(--text-2)', fontSize: '0.92rem', lineHeight: 1.7, marginBottom: '24px' }}>A dental clinic was losing 35% of patient appointments to no-shows, and manual confirmation calls were consuming 3+ hours of staff time per day.</p>
              <p style={{ color: 'var(--text-3)', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>The System</p>
              <p style={{ color: 'var(--text-2)', fontSize: '0.92rem', lineHeight: 1.7, marginBottom: '28px' }}>We engineered an AI voice node that calls patients 48 hours before appointments, handles confirmations via natural language, and syncs results to the clinic management system.</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '32px' }}>
                {[['35%', 'Reduction in no-shows'], ['3hrs', 'Staff time saved daily'], ['v1.2.0', 'Current version'], ['Production', 'Live status']].map(([val, label]) => (
                  <div key={label}><div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-main)', letterSpacing: '-0.04em', marginBottom: '4px' }}>{val}</div><div style={{ fontSize: '0.78rem', color: 'var(--text-3)' }}>{label}</div></div>
                ))}
              </div>
              <Link to="/work" className="btn btn-outline" style={{ height: '42px', fontSize: '0.88rem' }}>Read Engineering Case Study <ArrowRight size={14} /></Link>
            </div>
            <div style={{ padding: '48px', background: 'rgba(0,229,255,0.02)' }}>
              <p style={{ color: 'var(--text-3)', fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '24px' }}>System Architecture</p>
              {['Patient DB', 'Appointment Trigger', 'Voice AI Engine', 'NLP Response Handler', 'Clinic Management API', 'Audit & Analytics'].map((layer, i) => (
                <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                  <div style={{ background: '#0f0f0f', border: '1px solid #1e1e1e', padding: '13px 18px', borderRadius: '8px', width: '100%', fontSize: '0.85rem', color: 'var(--text-main)', fontFamily: "'SF Mono', monospace", transition: 'border-color 0.2s ease', cursor: 'default' }}
                    onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(0,229,255,0.3)'}
                    onMouseLeave={e => e.currentTarget.style.borderColor = '#1e1e1e'}
                  >{layer}</div>
                  {i < 5 && <div style={{ width: '2px', height: '14px', background: 'linear-gradient(180deg, var(--accent), transparent)', marginLeft: '22px' }} />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 10. LIVE DEV DASHBOARD */}
      <section style={{ padding: '80px 0', background: '#020202', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container" style={{ maxWidth: '1100px' }}>
          <div className="reveal" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '36px', flexWrap: 'wrap', gap: '16px' }}>
            <div><span className="tech-label">LIVE_STATUS</span><h2 style={{ fontSize: 'clamp(1.8rem,3vw,2.5rem)', letterSpacing: '-0.04em' }}>Systems in Development</h2></div>
            <Link to="/demo" className="btn btn-outline" style={{ height: '38px', fontSize: '0.82rem', borderColor: '#222' }}>View Demo Center <ArrowRight size={13} /></Link>
          </div>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '14px', transitionDelay: '80ms' }}>
            {[
              { name: 'HealthSmile Voice Node', version: 'v1.2.0', status: 'Production', statusColor: 'var(--accent)', icon: Network },
              { name: 'AI Lead Management',     version: 'v0.3.0', status: 'Building',   statusColor: '#FF9500',       icon: Zap },
              { name: 'Customer Communication', version: 'v0.1.0', status: 'Planning',   statusColor: '#a855f7',       icon: Users },
              { name: 'Operations Platform',    version: 'v0.1.0', status: 'Research',   statusColor: '#a855f7',       icon: Layers },
              { name: 'Document Processing',    version: 'v0.0.1', status: 'Backlog',    statusColor: '#444',          icon: FileCode2 },
              { name: 'Analytics Engine',       version: 'v0.0.1', status: 'Backlog',    statusColor: '#444',          icon: BarChart },
            ].map(({ name, version, status, statusColor, icon: Icon }, i) => (
              <div key={i} className="status-card" style={{ padding: '22px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Icon size={14} style={{ color: statusColor }} />
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-main)', fontWeight: 500 }}>{name}</span>
                  </div>
                  <span style={{ fontFamily: "'SF Mono', monospace", fontSize: '0.66rem', background: '#1a1a1a', padding: '2px 8px', borderRadius: '4px', color: 'var(--text-3)' }}>{version}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: statusColor, boxShadow: status === 'Production' ? \`0 0 8px \${statusColor}\` : 'none' }} />
                  <span style={{ fontSize: '0.8rem', color: statusColor, fontWeight: 500 }}>{status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. INDUSTRIES */}
      <section style={{ padding: '100px 0' }}>
        <div className="container" style={{ maxWidth: '1100px' }}>
          <div className="reveal" style={{ marginBottom: '56px' }}>
            <span className="tech-label">INDUSTRIES</span>
            <h2 style={{ fontSize: 'clamp(2rem,4vw,3rem)', letterSpacing: '-0.04em' }}>Industries We Serve</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
            {industries.map(({ icon: Icon, name, pain, system, accent }, i) => (
              <div key={i} className="reveal eng-panel" style={{ padding: '36px', background: 'linear-gradient(145deg, #0e0e0e, #070707)', transitionDelay: \`\${i * 60}ms\`, transition: 'all 0.3s ease', cursor: 'default' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = accent + '40'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'none'; }}
              >
                <div style={{ width: '46px', height: '46px', background: accent + '12', border: \`1px solid \${accent}30\`, borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px' }}>
                  <Icon size={20} style={{ color: accent }} />
                </div>
                <h3 style={{ fontSize: '1.15rem', marginBottom: '10px', color: 'var(--text-main)' }}>{name}</h3>
                <p style={{ color: 'var(--text-3)', fontSize: '0.86rem', lineHeight: 1.6, marginBottom: '20px' }}>{pain}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontFamily: "'SF Mono', monospace", fontSize: '0.7rem', color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Recommended:</span>
                  <span style={{ color: accent, fontSize: '0.8rem', fontWeight: 600 }}>{system}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. INSIGHTS */}
      <section style={{ padding: '100px 0', background: '#020202', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container" style={{ maxWidth: '1100px' }}>
          <div className="reveal" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '52px', flexWrap: 'wrap', gap: '16px' }}>
            <div><span className="tech-label">ENGINEERING_NOTES</span><h2 style={{ fontSize: 'clamp(2rem,4vw,3rem)', letterSpacing: '-0.04em' }}>Latest Insights</h2></div>
            <Link to="/insights" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--accent)', fontSize: '0.88rem', fontWeight: 500 }}>All Articles <ArrowRight size={14} /></Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
            {insights.map((post, i) => (
              <Link key={i} to={\`/insights/\${post.slug}\`} className="reveal eng-panel" style={{ padding: '32px', background: 'linear-gradient(145deg, #0e0e0e, #070707)', display: 'block', textDecoration: 'none', transitionDelay: \`\${i * 80}ms\`, transition: 'all 0.3s ease' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(0,229,255,0.2)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'none'; }}
              >
                <div style={{ marginBottom: '18px' }}><span style={{ background: 'rgba(0,229,255,0.08)', border: '1px solid rgba(0,229,255,0.15)', padding: '3px 10px', borderRadius: '6px', fontSize: '0.7rem', color: 'var(--accent)', fontFamily: "'SF Mono', monospace" }}>{post.tag}</span></div>
                <h3 style={{ fontSize: '0.97rem', fontWeight: 600, color: 'var(--text-main)', lineHeight: 1.45, marginBottom: '18px', letterSpacing: '-0.01em' }}>{post.title}</h3>
                <div style={{ display: 'flex', gap: '16px', fontSize: '0.76rem', color: 'var(--text-3)' }}><span>{post.date}</span><span>{post.read}</span></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '100px 0' }}>
        <div className="container" style={{ maxWidth: '760px' }}>
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span className="tech-label">FAQ</span>
            <h2 style={{ fontSize: 'clamp(2rem,4vw,2.8rem)', letterSpacing: '-0.04em' }}>Engineering FAQ</h2>
          </div>
          <div className="reveal" style={{ transitionDelay: '80ms' }}>
            {faqs.map((faq, i) => (
              <div key={i} onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ borderBottom: '1px solid var(--border)', padding: '26px 0', cursor: 'pointer' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}>
                  <span style={{ fontSize: '1rem', fontWeight: 500, color: openFaq === i ? 'var(--accent)' : 'var(--text-main)', transition: 'color 0.2s ease' }}>{faq.q}</span>
                  <Plus size={18} style={{ color: 'var(--accent)', flexShrink: 0, transition: 'transform 0.3s ease', transform: openFaq === i ? 'rotate(45deg)' : 'none' }} />
                </div>
                {openFaq === i && (<p style={{ color: 'var(--text-2)', fontSize: '0.92rem', lineHeight: 1.7, marginTop: '14px', paddingRight: '28px' }}>{faq.a}</p>)}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13. FINAL CTA */}
      <section style={{ padding: '140px 0', background: '#020202', borderTop: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '700px', height: '700px', background: 'radial-gradient(circle, rgba(0,229,255,0.05) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <div className="reveal" style={{ maxWidth: '720px', margin: '0 auto' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(0,229,255,0.06)', border: '1px solid rgba(0,229,255,0.2)', borderRadius: '99px', padding: '6px 16px', marginBottom: '32px', fontSize: '0.78rem', color: 'var(--accent)', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent)', boxShadow: '0 0 8px var(--accent)' }} />
              Let&apos;s Build
            </span>
            <h2 style={{ fontSize: 'clamp(2.5rem,5vw,4.5rem)', marginBottom: '24px', lineHeight: 1.05, letterSpacing: '-0.05em' }}>
              Ready to engineer software<br />around your business?
            </h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-2)', marginBottom: '52px', lineHeight: 1.65 }}>
              We start with a discovery call to map your operations, identify bottlenecks, and confirm whether we&apos;re the right fit.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-primary hero-btn-primary" style={{ background: 'var(--accent)', color: '#000', padding: '0 48px', height: '58px', fontSize: '1rem', fontWeight: 700 }}>Book Discovery Call <ArrowRight size={18} /></Link>
              <Link to="/work" className="btn btn-outline hero-btn-outline" style={{ padding: '0 40px', height: '58px', fontSize: '1rem' }}>View Our Work</Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
`;

writeFileSync('d:/AutoEra/AutoEra Website V2/src/pages/Home.jsx', code, 'utf8');
console.log('✓ Home.jsx written successfully');
