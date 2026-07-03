import { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Phone, Users, Calendar, Database,
  Settings, MessageSquare, BookOpen, Zap, Plus,
  CheckCircle, Activity, Layers
} from 'lucide-react';

/* ============================================================
   COUNTER HOOK
   ============================================================ */
function useAnimatedCounter(target, duration = 1800) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = Date.now();
          const tick = () => {
            const elapsed = Date.now() - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(tick);
            else setValue(target);
          };
          requestAnimationFrame(tick);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return [value, ref];
}

/* ============================================================
   LIVE DASHBOARD COMPONENT
   ============================================================ */
const ACTIVITY_TEMPLATES = [
  { text: 'Lead qualified', detail: 'Marcus K.', type: 'lead' },
  { text: 'Appointment booked', detail: 'Dental Suite', type: 'cal' },
  { text: 'CRM record synced', detail: 'Pipedrive', type: 'crm' },
  { text: 'Support resolved', detail: 'Ticket #4821', type: 'support' },
  { text: 'Workflow triggered', detail: 'Pipeline step', type: 'flow' },
  { text: 'Knowledge query', detail: 'Internal docs', type: 'kb' },
  { text: 'Lead qualified', detail: 'Sarah L.', type: 'lead' },
  { text: 'Call handled', detail: 'AI Receptionist', type: 'phone' },
  { text: 'Email responded', detail: 'Inbound form', type: 'lead' },
  { text: 'Appointment rescheduled', detail: 'Auto-confirmed', type: 'cal' },
];

function timeAgo(seconds) {
  if (seconds < 5) return 'just now';
  if (seconds < 60) return `${seconds}s ago`;
  return `${Math.floor(seconds / 60)}m ago`;
}

function LiveDashboard() {
  const [calls, setCalls] = useState(142);
  const [leads, setLeads] = useState(47);
  const [appointments, setAppointments] = useState(23);
  const [activities, setActivities] = useState([
    { id: 1, text: 'Lead qualified', detail: 'Marcus K.', time: 2, isNew: false },
    { id: 2, text: 'Appointment booked', detail: 'Dental Suite', time: 8, isNew: false },
    { id: 3, text: 'CRM record synced', detail: 'Pipedrive', time: 15, isNew: false },
    { id: 4, text: 'Support resolved', detail: 'Ticket #4821', time: 31, isNew: false },
  ]);
  const nextId = useRef(5);
  const tickRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      tickRef.current += 3;
      const t = tickRef.current;

      // Age existing activities
      setActivities(prev =>
        prev.map(a => ({ ...a, time: a.time + 3, isNew: false })).slice(0, 4)
      );

      // Occasionally add new activity + bump counters
      if (t % 3 === 0) {
        const tpl = ACTIVITY_TEMPLATES[Math.floor(Math.random() * ACTIVITY_TEMPLATES.length)];
        setActivities(prev => [
          { ...tpl, id: nextId.current++, time: 0, isNew: true },
          ...prev.slice(0, 3).map(a => ({ ...a, isNew: false }))
        ]);
        if (Math.random() > 0.4) setCalls(c => c + 1);
        if (Math.random() > 0.6) setLeads(c => c + 1);
        if (Math.random() > 0.75) setAppointments(c => c + 1);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-dashboard" role="presentation" aria-label="Live operations dashboard">
      {/* Header */}
      <div className="dash-header">
        <span className="dash-title">AutoEra Ops Center</span>
        <span className="dash-live">
          <span className="live-dot" />
          Live
        </span>
      </div>

      {/* System Status */}
      <div className="dash-systems">
        {[
          'AI Receptionist', 'Lead Pipeline', 'Workflow Engine',
          'CRM Sync', 'Support System', 'Knowledge Base',
        ].map(sys => (
          <div key={sys} className="dash-system">
            <span className="sys-dot" />
            {sys}
          </div>
        ))}
      </div>

      {/* Stats */}
      <div className="dash-stats">
        <div className="dash-stat">
          <div className="dash-stat-value">{calls}</div>
          <div className="dash-stat-label">Calls Today</div>
          <div className="dash-stat-sub">Receptionist</div>
          <div className="dash-stat-bar">
            <div className="dash-stat-bar-fill orange" style={{ width: '88%' }} />
          </div>
        </div>
        <div className="dash-stat">
          <div className="dash-stat-value">{leads}</div>
          <div className="dash-stat-label">Leads Qualified</div>
          <div className="dash-stat-sub">Pipeline</div>
          <div className="dash-stat-bar">
            <div className="dash-stat-bar-fill green" style={{ width: '73%' }} />
          </div>
        </div>
        <div className="dash-stat">
          <div className="dash-stat-value">{appointments}</div>
          <div className="dash-stat-label">Booked Today</div>
          <div className="dash-stat-sub">Calendar</div>
          <div className="dash-stat-bar">
            <div className="dash-stat-bar-fill blue" style={{ width: '60%' }} />
          </div>
        </div>
      </div>

      {/* Workflow Engine */}
      <div className="dash-workflow">
        <div className="dash-section-label">Workflow Engine</div>
        <svg
          className="dash-workflow-track"
          viewBox="0 0 480 52"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Node boxes */}
          <rect x="0"   y="12" width="80" height="28" rx="6" fill="rgba(255,149,0,0.1)"  stroke="rgba(255,149,0,0.3)"  strokeWidth="1"/>
          <rect x="134" y="12" width="80" height="28" rx="6" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
          <rect x="268" y="12" width="80" height="28" rx="6" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
          <rect x="400" y="12" width="80" height="28" rx="6" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>

          {/* Connector lines */}
          <line x1="80"  y1="26" x2="134" y2="26" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="4 3"/>
          <line x1="214" y1="26" x2="268" y2="26" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="4 3"/>
          <line x1="348" y1="26" x2="400" y2="26" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="4 3"/>

          {/* Animated travel dots */}
          <circle cx="80" cy="26" r="3.5" fill="#FF9500" className="flow-dot-1"/>
          <circle cx="214" cy="26" r="3.5" fill="#FF9500" className="flow-dot-2"/>
          <circle cx="348" cy="26" r="3.5" fill="#FF9500" className="flow-dot-3"/>

          {/* Labels */}
          <text x="40"  y="30" textAnchor="middle" fontSize="8.5" fill="#FF9500"              fontFamily="JetBrains Mono, monospace" letterSpacing="0.5">INTAKE</text>
          <text x="174" y="30" textAnchor="middle" fontSize="8.5" fill="rgba(255,255,255,0.5)" fontFamily="JetBrains Mono, monospace" letterSpacing="0.5">QUALIFY</text>
          <text x="308" y="30" textAnchor="middle" fontSize="8.5" fill="rgba(255,255,255,0.5)" fontFamily="JetBrains Mono, monospace" letterSpacing="0.5">CRM SYNC</text>
          <text x="440" y="30" textAnchor="middle" fontSize="8.5" fill="rgba(255,255,255,0.5)" fontFamily="JetBrains Mono, monospace" letterSpacing="0.5">BOOK</text>
        </svg>
      </div>

      {/* Activity Feed */}
      <div className="dash-activity">
        <div className="dash-section-label">Live Activity</div>
        {activities.map(a => (
          <div key={a.id} className={`dash-activity-item${a.isNew ? ' new' : ''}`}>
            <span className="dash-act-dot" />
            <span className="dash-act-text">
              {a.text}
              <span style={{ color: 'var(--text-3)' }}> · {a.detail}</span>
            </span>
            <span className="dash-act-time">{timeAgo(a.time)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ============================================================
   PROBLEMS DATA
   ============================================================ */
const problems = [
  {
    n: '01',
    title: 'Missed calls, missed revenue',
    desc: 'Every unanswered call during busy hours or after close is a prospect who called a competitor next.',
  },
  {
    n: '02',
    title: 'Slow lead response',
    desc: 'Prospects contact whoever responds first. A 4-hour follow-up delay costs you deals before you knew they existed.',
  },
  {
    n: '03',
    title: 'Manual data entry',
    desc: 'Your team spends hours each week updating CRMs, copying between spreadsheets, and re-entering the same information.',
  },
  {
    n: '04',
    title: 'Disconnected tools',
    desc: 'Your CRM, calendar, billing, and email platform don\'t share data. The gaps are filled with manual effort.',
  },
  {
    n: '05',
    title: 'Knowledge trapped in people',
    desc: 'Processes, answers, and SOPs live in people\'s heads. Onboarding new staff takes months, not days.',
  },
  {
    n: '06',
    title: 'Repetitive support overhead',
    desc: 'A significant portion of support volume asks the same questions your documentation already answers.',
  },
];

/* ============================================================
   SOLUTIONS DATA
   ============================================================ */
const solutions = [
  {
    id: 'ai-receptionist',
    icon: Phone,
    title: 'AI Receptionist',
    desc: 'Answers every inbound call 24/7. Qualifies leads, books appointments, and routes calls — without adding headcount.',
    tags: ['Voice AI', 'Call Routing', 'Appointment Booking'],
  },
  {
    id: 'lead-response',
    icon: Zap,
    title: 'Lead Response System',
    desc: 'Instant, intelligent response to every lead across web forms, calls, and messages. Qualifies and routes to your team.',
    tags: ['Multi-channel', 'Lead Scoring', 'CRM Sync'],
  },
  {
    id: 'customer-support',
    icon: MessageSquare,
    title: 'Customer Support System',
    desc: 'Resolves routine requests automatically. Escalates complex issues with full conversation context already attached.',
    tags: ['Ticket Automation', 'Escalation Logic', 'Helpdesk Integration'],
  },
  {
    id: 'knowledge-base',
    icon: BookOpen,
    title: 'Internal Knowledge Base',
    desc: 'Your SOPs, processes, and documentation — searchable and retrievable by any team member via natural language.',
    tags: ['Document AI', 'Semantic Search', 'Onboarding'],
  },
  {
    id: 'crm-automation',
    icon: Settings,
    title: 'CRM & Workflow Automation',
    desc: 'Connect your tools, automate your pipeline, and eliminate the manual steps that live between systems.',
    tags: ['API Integration', 'Data Sync', 'Pipeline Logic'],
  },
  {
    id: 'custom-ai',
    icon: Layers,
    title: 'Custom AI Software',
    desc: 'Purpose-built AI applications for operational challenges specific to your business. Engineered end to end.',
    tags: ['LLM Engineering', 'Custom Development', 'Infrastructure'],
  },
];

/* ============================================================
   FAQ DATA
   ============================================================ */
const faqs = [
  {
    q: 'How long does it take to deploy a system?',
    a: 'Most systems are live within 7–21 business days, depending on integration complexity and the number of tools involved. We scope this clearly in the discovery phase so there are no surprises.',
  },
  {
    q: 'Does our team need to be technical to manage it?',
    a: 'No. We build systems your team can use without understanding what\'s running underneath. If something needs adjustment, you contact us — not a developer.',
  },
  {
    q: 'How do you integrate with our existing tools?',
    a: 'We connect to your existing CRM, calendar, phone system, helpdesk, and software stack via APIs and native integrations. We assess your current setup during discovery and map the integration architecture before we build.',
  },
  {
    q: 'What happens when something breaks or needs updating?',
    a: 'Every system we deploy includes monitoring, alerting, and a defined maintenance process. When something needs updating — a prompt, a workflow step, an integration — we handle it.',
  },
  {
    q: 'Do you use off-the-shelf automation tools, or do you build custom?',
    a: 'We evaluate each system individually. Sometimes the right tool is a no-code platform; sometimes it\'s custom-engineered infrastructure. We choose based on what gives your business the most reliable, maintainable outcome — not what\'s easiest for us.',
  },
  {
    q: 'What does the discovery call actually cover?',
    a: 'We review your current operations, identify where time and money are being lost, scope what can be automated and how, and give you an honest technical assessment. No sales pitch. Just a clear picture of what\'s possible and what it would take.',
  },
  {
    q: 'Can you connect multiple tools into a single workflow?',
    a: 'Yes. Most of our projects involve connecting 4–10 systems — CRM, calendar, phone, email, billing, Slack, and more — into a unified workflow. Cross-tool orchestration is one of our core strengths.',
  },
  {
    q: 'How do we know if AI is actually the right solution?',
    a: 'We\'ll tell you if it\'s not. Some operational problems are solved better with a cleaner process, not an AI system. We\'re engineers first. If a simpler fix delivers better results, that\'s what we\'ll recommend.',
  },
];

/* ============================================================
   HOME PAGE
   ============================================================ */
export default function Home() {
  const [openFaq, setOpenFaq] = useState(null);

  // Scroll-triggered reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) e.target.classList.add('visible');
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    const els = document.querySelectorAll('.reveal');
    els.forEach(el => observer.observe(el));
    return () => els.forEach(el => observer.unobserve(el));
  }, []);

  // Process timeline scroll animation
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('process-section');
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const fill = document.getElementById('proc-line-fill');
      const steps = document.querySelectorAll('.process-step');

      if (rect.top < window.innerHeight && rect.bottom > 0) {
        const scrolled = window.innerHeight * 0.55 - rect.top;
        const pct = Math.max(0, Math.min(100, (scrolled / rect.height) * 100));
        if (fill) fill.style.height = `${pct}%`;
        steps.forEach(step => {
          const top = step.getBoundingClientRect().top;
          if (top < window.innerHeight * 0.62) step.classList.add('active');
        });
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Trust bar counters
  const [trustSystems, trustRef1]     = useAnimatedCounter(12);
  const [trustUptime, trustRef2]       = useAnimatedCounter(99);
  const [trustHoursSaved, trustRef3]   = useAnimatedCounter(480);

  const toggleFaq = useCallback(i => {
    setOpenFaq(prev => (prev === i ? null : i));
  }, []);

  return (
    <>
      {/* =====================================================
          HERO
          ===================================================== */}
      <section className="hero" aria-label="Hero">
        <div className="hero-bg" aria-hidden="true" />
        <div className="hero-radial" aria-hidden="true" />
        <div className="container hero-inner">
          {/* Left */}
          <div className="hero-content reveal">
            <div className="hero-label">
              <span className="hero-label-dot" aria-hidden="true" />
              AI Engineering Studio
            </div>

            <h1 className="hero-title">
              AI Automation<br />
              Systems for <span className="hero-title-accent">Growing</span><br />
              Businesses.
            </h1>

            <p className="hero-desc">
              We engineer AI systems that answer calls, respond to leads, automate
              operations and become part of how your business runs.
            </p>

            <div className="hero-ctas">
              <Link to="/contact" className="btn btn-primary" id="hero-cta-primary">
                Book a Discovery Call
                <ArrowRight size={16} />
              </Link>
              <Link to="/services" className="btn btn-ghost" id="hero-cta-secondary">
                Explore Systems
              </Link>
            </div>
          </div>

          {/* Right — Live Dashboard */}
          <div className="hero-visual reveal" style={{ transitionDelay: '160ms' }}>
            <LiveDashboard />
          </div>
        </div>
      </section>

      {/* =====================================================
          TRUST BAR
          ===================================================== */}
      <section className="trust" aria-label="Trust indicators">
        <div className="container">
          <div className="trust-inner">
            <span className="trust-label">Deployed across growing businesses</span>
            <div className="trust-divider" aria-hidden="true" />
            <div className="trust-stats">
              <div className="trust-stat" ref={trustRef1}>
                <span className="trust-stat-value">{trustSystems}+</span>
                <span className="trust-stat-label">Systems deployed</span>
              </div>
              <div className="trust-stat" ref={trustRef2}>
                <span className="trust-stat-value">{trustUptime}.9%</span>
                <span className="trust-stat-label">Uptime SLA</span>
              </div>
              <div className="trust-stat" ref={trustRef3}>
                <span className="trust-stat-value">{trustHoursSaved}+</span>
                <span className="trust-stat-label">Hours saved per month</span>
              </div>
              <div className="trust-stat">
                <span className="trust-stat-value">48hr</span>
                <span className="trust-stat-label">Avg. time to deploy</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROBLEMS
          ===================================================== */}
      <section className="problems" aria-labelledby="problems-heading">
        <div className="container">
          <div className="problems-header reveal">
            <span className="section-label">The cost of manual operations</span>
            <h2 id="problems-heading">
              Your team is spending time on work<br />
              that shouldn't require humans.
            </h2>
            <p>
              Every hour spent on repetitive, manual tasks is an hour not spent on the work that
              actually grows your business. These problems compound quietly until they become expensive.
            </p>
          </div>

          <div className="problems-grid">
            {problems.map((p, i) => (
              <div
                key={p.n}
                className="problem-card reveal"
                style={{ transitionDelay: `${(i % 3) * 80}ms` }}
              >
                <div className="problem-number">{p.n}</div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          SOLUTIONS
          ===================================================== */}
      <section className="solutions" id="systems" aria-labelledby="solutions-heading">
        <div className="container">
          <div className="solutions-header reveal">
            <div>
              <span className="section-label">What we engineer</span>
              <h2 id="solutions-heading">
                Systems built around<br />business outcomes.
              </h2>
            </div>
            <Link to="/services" className="btn btn-ghost">
              View All Systems
            </Link>
          </div>

          <div className="solutions-grid">
            {solutions.map((s, i) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.id}
                  className="solution-card reveal"
                  id={s.id}
                  style={{ transitionDelay: `${(i % 3) * 80}ms` }}
                >
                  <div className="solution-card-icon">
                    <Icon />
                  </div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <div className="solution-tags">
                    {s.tags.map(t => (
                      <span key={t} className="solution-tag">{t}</span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          ENGINEERING PROCESS
          ===================================================== */}
      <section className="process" id="process-section" aria-labelledby="process-heading">
        <div className="container process-inner">
          <div className="process-label-col reveal">
            <span className="section-label">How we work</span>
            <h2 id="process-heading">Engineering process,<br />not project chaos.</h2>
            <p>
              We follow a structured delivery cycle that keeps timelines predictable,
              integration risk low, and outcomes measurable from day one.
            </p>
          </div>

          <div className="process-steps">
            <div className="process-line">
              <div className="process-line-fill" id="proc-line-fill" />
            </div>

            {[
              {
                phase: 'Phase 01',
                title: 'Discovery & Scoping',
                desc: 'We audit your current operations, identify automation opportunities, and scope the system architecture. You get a clear picture of what will be built and why before we write a line of code.',
              },
              {
                phase: 'Phase 02',
                title: 'System Design & Integration Mapping',
                desc: 'We design the workflow logic, data models, and integration architecture. Every API endpoint, trigger, and handoff is mapped before development starts.',
              },
              {
                phase: 'Phase 03',
                title: 'Build & Test',
                desc: 'We build the system against the design spec. Edge cases are tested, failure scenarios handled, and performance validated in a staging environment before anything goes live.',
              },
              {
                phase: 'Phase 04',
                title: 'Deploy, Monitor & Maintain',
                desc: 'We deploy to production with full monitoring in place. Alerts, logging, and performance tracking are set up from day one. Ongoing maintenance is included.',
              },
            ].map(step => (
              <div key={step.phase} className="process-step">
                <div className="process-step-node">
                  <div className="process-step-dot" />
                </div>
                <div className="process-step-content">
                  <div className="process-step-num">{step.phase}</div>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY AUTOERA
          ===================================================== */}
      <section className="why" aria-labelledby="why-heading">
        <div className="container why-inner">
          <div className="why-text reveal">
            <span className="section-label">Our philosophy</span>
            <h2 id="why-heading">
              We are engineers.<br />
              Not marketers.
            </h2>
            <p>
              We don't sell AI. We engineer operational infrastructure. The difference is that
              our systems are built to solve specific problems, not to demonstrate what AI can do.
            </p>
            <p>
              Every AutoEra system is measured against one standard: does it remove a bottleneck,
              save meaningful time, or increase revenue? If it doesn't, we don't build it.
            </p>
          </div>

          <div className="why-points reveal" style={{ transitionDelay: '120ms' }}>
            {[
              {
                n: '01',
                title: 'Outcomes, not outputs',
                desc: 'We measure success by what changes in your business — call volume handled, leads responded to, hours your team gets back. Not by what we delivered.',
              },
              {
                n: '02',
                title: 'Engineering discipline',
                desc: 'Clean architecture, documented systems, and maintainable logic are standard. We build things that keep working long after launch.',
              },
              {
                n: '03',
                title: 'Honest assessment',
                desc: 'If a simpler solution will work better, we\'ll say so. We earn trust by being direct, not by adding scope.',
              },
            ].map(pt => (
              <div key={pt.n} className="why-point">
                <div className="why-point-num">{pt.n}</div>
                <div>
                  <h4>{pt.title}</h4>
                  <p>{pt.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          FEATURED SYSTEMS
          ===================================================== */}
      <section className="systems-showcase" aria-labelledby="systems-heading">
        <div className="container">
          <div className="systems-showcase-header reveal">
            <div>
              <span className="section-label">Systems in production</span>
              <h2 id="systems-heading">
                Built for real operations.
              </h2>
            </div>
            <Link to="/contact" className="btn btn-ghost">
              Discuss Your System
            </Link>
          </div>

          <div className="systems-list">
            {/* System 1 */}
            <div className="system-card reveal">
              <div className="system-card-body">
                <div className="system-card-meta">
                  <span className="system-card-tag">AI Receptionist</span>
                  <span className="system-card-industry">Healthcare / Dental</span>
                </div>
                <h3>24/7 Inbound Call System<br />for a Multi-Location Practice</h3>
                <p className="system-card-problem">
                  30% of inbound calls went unanswered during peak hours. Patients who couldn't
                  reach the front desk rescheduled — or didn't. Staff spent half their shift
                  returning voicemails and re-booking appointments manually.
                </p>
                <div className="system-metrics">
                  <div className="system-metric">
                    <div className="system-metric-value">0%</div>
                    <div className="system-metric-label">Missed calls</div>
                  </div>
                  <div className="system-metric">
                    <div className="system-metric-value">+31%</div>
                    <div className="system-metric-label">Appointments booked</div>
                  </div>
                  <div className="system-metric">
                    <div className="system-metric-value">4.8hr</div>
                    <div className="system-metric-label">Staff time saved / day</div>
                  </div>
                </div>
              </div>
              <div className="system-card-visual" aria-hidden="true">
                <div className="system-visual-rings" />
                <div className="system-visual-icon">
                  <Phone />
                </div>
              </div>
            </div>

            {/* System 2 */}
            <div className="system-card reveal" style={{ transitionDelay: '80ms' }}>
              <div className="system-card-body">
                <div className="system-card-meta">
                  <span className="system-card-tag">Lead Response System</span>
                  <span className="system-card-industry">Real Estate</span>
                </div>
                <h3>Instant Lead Qualification<br />Across 6 Inbound Channels</h3>
                <p className="system-card-problem">
                  Leads from property portals, social ads, and web forms took 3–6 hours to
                  receive a response. By the time the team followed up, prospects had already
                  spoken to two other agents. Response speed was the bottleneck.
                </p>
                <div className="system-metrics">
                  <div className="system-metric">
                    <div className="system-metric-value">4 min</div>
                    <div className="system-metric-label">Avg. response time</div>
                  </div>
                  <div className="system-metric">
                    <div className="system-metric-value">+34%</div>
                    <div className="system-metric-label">Lead-to-showing rate</div>
                  </div>
                  <div className="system-metric">
                    <div className="system-metric-value">180</div>
                    <div className="system-metric-label">Leads auto-qualified / mo</div>
                  </div>
                </div>
              </div>
              <div className="system-card-visual" aria-hidden="true">
                <div className="system-visual-rings" />
                <div className="system-visual-icon">
                  <Users />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CASE STUDIES
          ===================================================== */}
      <section className="work" aria-labelledby="work-heading">
        <div className="container">
          <div className="work-header reveal">
            <div>
              <span className="section-label">Detailed outcomes</span>
              <h2 id="work-heading">Case Studies</h2>
            </div>
            <Link to="/contact" className="btn btn-ghost">
              Discuss a Similar Project
            </Link>
          </div>

          <div className="work-cards">
            {/* Case 1 */}
            <div className="work-card reveal">
              <div className="work-card-body">
                <span className="work-card-tag">CRM & Workflow Automation</span>
                <h3>Eliminating 40hrs/wk of Manual<br />Data Entry for a SaaS Company</h3>
                <div className="work-grid">
                  <div className="work-detail">
                    <h4>Problem</h4>
                    <p>Sales and ops teams spent 40+ hours per week moving data between a CRM, billing platform, and project management tool. Nothing was connected.</p>
                  </div>
                  <div className="work-detail">
                    <h4>System built</h4>
                    <p>Automated bi-directional sync between HubSpot, Stripe, and Notion — triggered by deal stage changes, subscription events, and project milestones.</p>
                  </div>
                  <div className="work-detail">
                    <h4>Stack</h4>
                    <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.78rem', color: 'var(--text-3)' }}>
                      Node.js · HubSpot API · Stripe Webhooks · Notion API
                    </p>
                  </div>
                  <div className="work-detail">
                    <h4>Outcome</h4>
                    <p className="work-outcome">38hrs/wk recovered. 99.7% sync accuracy. Zero manual intervention.</p>
                  </div>
                </div>
              </div>
              <div className="work-card-visual" aria-hidden="true">
                <div className="work-metric">
                  <div className="work-metric-value">38hr</div>
                  <div className="work-metric-label">Recovered weekly</div>
                </div>
                <div className="work-metric-divider" />
                <div className="work-metric">
                  <div className="work-metric-value">99.7%</div>
                  <div className="work-metric-label">Sync accuracy</div>
                </div>
              </div>
            </div>

            {/* Case 2 */}
            <div className="work-card reveal" style={{ transitionDelay: '80ms' }}>
              <div className="work-card-body">
                <span className="work-card-tag">Customer Support System</span>
                <h3>AI Support System Handling 73%<br />of Tickets Without Human Escalation</h3>
                <div className="work-grid">
                  <div className="work-detail">
                    <h4>Problem</h4>
                    <p>A 3-person support team was drowning in repetitive tickets — password resets, billing questions, account access — with a 14-hour average response time.</p>
                  </div>
                  <div className="work-detail">
                    <h4>System built</h4>
                    <p>AI support agent trained on product documentation, past tickets, and internal SOPs. Integrated with Intercom. Escalates with full context when needed.</p>
                  </div>
                  <div className="work-detail">
                    <h4>Stack</h4>
                    <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.78rem', color: 'var(--text-3)' }}>
                      OpenAI · Pinecone · Intercom API · Internal Knowledge Base
                    </p>
                  </div>
                  <div className="work-detail">
                    <h4>Outcome</h4>
                    <p className="work-outcome">73% auto-resolved. Avg. response time: 14hr → 4 min. Team now handles only complex issues.</p>
                  </div>
                </div>
              </div>
              <div className="work-card-visual" aria-hidden="true">
                <div className="work-metric">
                  <div className="work-metric-value">73%</div>
                  <div className="work-metric-label">Auto-resolved</div>
                </div>
                <div className="work-metric-divider" />
                <div className="work-metric">
                  <div className="work-metric-value">4 min</div>
                  <div className="work-metric-label">Avg. response time</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FAQ
          ===================================================== */}
      <section className="faq" aria-labelledby="faq-heading">
        <div className="container">
          <div className="faq-inner">
            <div className="faq-intro reveal">
              <span className="section-label">Common questions</span>
              <h2 id="faq-heading">What to expect<br />when working with us.</h2>
              <p>
                Straight answers to the questions we hear most often in discovery calls.
              </p>
            </div>

            <div className="faq-list reveal" style={{ transitionDelay: '100ms' }}>
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className={`faq-item ${openFaq === i ? 'open' : ''}`}
                  id={`faq-item-${i}`}
                >
                  <button
                    className="faq-question"
                    onClick={() => toggleFaq(i)}
                    aria-expanded={openFaq === i}
                    aria-controls={`faq-answer-${i}`}
                    id={`faq-btn-${i}`}
                  >
                    <span className="faq-question-text">{faq.q}</span>
                    <span className="faq-question-icon" aria-hidden="true">
                      <Plus size={14} />
                    </span>
                  </button>
                  <div
                    className="faq-answer"
                    id={`faq-answer-${i}`}
                    role="region"
                    aria-labelledby={`faq-btn-${i}`}
                  >
                    <div className="faq-answer-inner">
                      <p>{faq.a}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
          ===================================================== */}
      <section className="final-cta" aria-labelledby="cta-heading">
        <div className="container">
          <div className="final-cta-inner reveal">
            <span className="section-label" style={{ justifyContent: 'center' }}>Ready to start</span>
            <h2 id="cta-heading">
              Less bottlenecks.<br />
              Faster operations.<br />
              Systems that run.
            </h2>
            <p>
              Book a 30-minute discovery call. We'll review your operations, identify where
              time is being lost, and give you an honest picture of what we can build.
            </p>
            <div className="final-cta-actions">
              <Link to="/contact" className="btn btn-primary" id="footer-cta-primary" style={{ height: '52px', padding: '0 28px', fontSize: '0.95rem' }}>
                Book a Discovery Call
                <ArrowRight size={17} />
              </Link>
              <Link to="/services" className="btn btn-ghost" id="footer-cta-secondary" style={{ height: '52px', padding: '0 28px', fontSize: '0.95rem' }}>
                Explore Systems
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
