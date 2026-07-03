import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Zap, MessageSquare, BookOpen, Settings, Layers } from 'lucide-react';

const services = [
  {
    id: 'ai-receptionist',
    num: '01',
    icon: Phone,
    title: 'AI Receptionist',
    summary: 'Answers every inbound call, 24 hours a day, 7 days a week.',
    desc: 'We engineer a voice AI system that handles your inbound call volume without requiring staff to be available. The system greets callers, answers common questions, qualifies leads, books appointments, and routes calls based on logic you define. It sounds professional, responds accurately, and never drops a call.',
    features: [
      {
        title: '24/7 inbound call handling',
        desc: 'Every call is answered — after hours, weekends, and during peak volume spikes.',
      },
      {
        title: 'Lead qualification',
        desc: 'The system asks the right questions to determine caller intent and quality before routing.',
      },
      {
        title: 'Appointment booking',
        desc: 'Integrates directly with your calendar system to book, confirm, and reschedule appointments.',
      },
      {
        title: 'Intelligent call routing',
        desc: 'Routes callers to the right team member or department based on conversation logic.',
      },
    ],
    tags: ['Voice AI', 'Call Routing', 'Appointment Booking', 'CRM Integration', 'Calendar Sync'],
  },
  {
    id: 'lead-response',
    num: '02',
    icon: Zap,
    title: 'Lead Response System',
    summary: 'Instant, intelligent response to every inbound lead.',
    desc: 'We build multi-channel lead response systems that respond to prospects within seconds — across web forms, inbound calls, social messages, and email. The system qualifies leads against your criteria, scores them, and routes qualified prospects to your team with full context already attached.',
    features: [
      {
        title: 'Multi-channel response',
        desc: 'Responds to leads from web forms, calls, emails, SMS, and social — from a single system.',
      },
      {
        title: 'Qualification logic',
        desc: 'Asks the right questions to determine fit before routing to your sales team.',
      },
      {
        title: 'CRM handoff',
        desc: 'Creates or updates CRM records automatically with conversation context and lead score.',
      },
      {
        title: 'Follow-up sequences',
        desc: 'Automated follow-up over 24–72 hours for leads that don\'t respond immediately.',
      },
    ],
    tags: ['Multi-channel', 'Lead Scoring', 'CRM Sync', 'Follow-up Automation', 'Pipeline Integration'],
  },
  {
    id: 'customer-support',
    num: '03',
    icon: MessageSquare,
    title: 'Customer Support System',
    summary: 'Resolve routine requests automatically. Escalate complex issues intelligently.',
    desc: 'We build AI support systems trained on your documentation, past tickets, and internal knowledge. The system handles the requests your team handles repeatedly — password resets, account questions, billing inquiries, how-to requests — and escalates anything requiring human judgement with full conversation context.',
    features: [
      {
        title: 'Knowledge-trained AI',
        desc: 'Trained on your help docs, past tickets, and SOPs for accurate, on-brand responses.',
      },
      {
        title: 'Helpdesk integration',
        desc: 'Plugs into your existing helpdesk (Intercom, Zendesk, Freshdesk) — no migration needed.',
      },
      {
        title: 'Smart escalation',
        desc: 'When escalation is needed, it goes to the right person with full conversation context.',
      },
      {
        title: 'Continuous improvement',
        desc: 'System performance is monitored and knowledge base is updated as your product evolves.',
      },
    ],
    tags: ['Ticket Automation', 'Helpdesk Integration', 'Knowledge Base', 'Escalation Logic', 'NLP'],
  },
  {
    id: 'knowledge-base',
    num: '04',
    icon: BookOpen,
    title: 'Internal Knowledge Base',
    summary: 'Your processes, SOPs, and documentation — searchable and accessible.',
    desc: 'We build internal AI knowledge systems that make your business knowledge retrievable. Instead of searching through Notion, Google Drive, and email threads, your team asks a question in plain language and gets an accurate answer with a source reference. Onboarding becomes faster. Expertise becomes institutional.',
    features: [
      {
        title: 'Document ingestion',
        desc: 'Connects to your existing documents: Notion, Google Drive, Confluence, PDFs, and more.',
      },
      {
        title: 'Semantic search',
        desc: 'Find information by meaning, not just keywords. Ask questions, get relevant answers.',
      },
      {
        title: 'Source attribution',
        desc: 'Every answer comes with a link to the source document so your team can verify.',
      },
      {
        title: 'Slack or web interface',
        desc: 'Deployed as a Slack bot, internal web tool, or embedded in your existing dashboard.',
      },
    ],
    tags: ['Document AI', 'Semantic Search', 'Vector Database', 'Slack Integration', 'Access Control'],
  },
  {
    id: 'crm-automation',
    num: '05',
    icon: Settings,
    title: 'CRM & Workflow Automation',
    summary: 'Connect your tools. Automate the steps between them.',
    desc: 'We engineer cross-system workflows that eliminate the manual steps your team does between tools. When a deal reaches a certain stage in your CRM, a project is created automatically. When a payment is processed, a record updates. When a form is submitted, five things happen in sequence — without anyone clicking anything.',
    features: [
      {
        title: 'API integration architecture',
        desc: 'We connect your CRM, calendar, billing, email, and other tools via their APIs.',
      },
      {
        title: 'Trigger-based workflows',
        desc: 'Actions happen automatically in response to events — form submissions, deal stage changes, payments, and more.',
      },
      {
        title: 'Bi-directional data sync',
        desc: 'Data stays consistent across systems without manual intervention or reconciliation.',
      },
      {
        title: 'Error handling and monitoring',
        desc: 'Failed syncs are caught, logged, and flagged — not silently dropped.',
      },
    ],
    tags: ['API Integration', 'Data Sync', 'Workflow Logic', 'CRM', 'No-code / Custom'],
  },
  {
    id: 'custom-ai',
    num: '06',
    icon: Layers,
    title: 'Custom AI Software',
    summary: 'Purpose-built AI applications for specific operational challenges.',
    desc: 'Some operational problems don\'t fit a template. We engineer custom AI software for the challenges that are specific to your industry, your process, or your business model. This includes LLM-powered internal tools, AI-assisted workflows, classification systems, document processing pipelines, and prediction systems tied to your data.',
    features: [
      {
        title: 'LLM-powered applications',
        desc: 'Custom interfaces and workflows built around GPT-4, Claude, or open-source models.',
      },
      {
        title: 'Document processing',
        desc: 'Extract, classify, and structure data from unstructured documents at scale.',
      },
      {
        title: 'Custom training and fine-tuning',
        desc: 'Adapt foundation models to your specific domain, terminology, and output format.',
      },
      {
        title: 'Full-stack delivery',
        desc: 'Frontend, backend, infrastructure, and integrations — built and deployed end to end.',
      },
    ],
    tags: ['LLM Engineering', 'Custom Development', 'Fine-tuning', 'Infrastructure', 'RAG'],
  },
];

export default function Services() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
      }),
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    const els = document.querySelectorAll('.reveal');
    els.forEach(el => observer.observe(el));
    return () => els.forEach(el => observer.unobserve(el));
  }, []);

  return (
    <div className="services-page">
      {/* Hero */}
      <section className="services-hero">
        <div className="container">
          <div className="services-hero-inner reveal">
            <span className="section-label">Systems we engineer</span>
            <h1>AI systems built around<br />how your business operates.</h1>
            <p>
              Each system we build is engineered for a specific operational outcome.
              Not a chatbot. Not an automation template. A system that becomes
              part of how your business runs.
            </p>
          </div>
        </div>
      </section>

      {/* Full Service Cards */}
      <div className="services-full-grid">
        <div className="container">
          {services.map(service => {
            const Icon = service.icon;
            return (
              <article
                key={service.id}
                id={service.id}
                className="service-full-card reveal"
              >
                <div className="service-full-left">
                  <div className="service-full-num">{service.num}</div>
                  <div
                    style={{
                      width: 52, height: 52,
                      background: 'var(--accent-dim)',
                      border: '1px solid var(--border-accent)',
                      borderRadius: 'var(--r-md)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      marginBottom: 20,
                    }}
                  >
                    <Icon style={{ width: 22, height: 22, stroke: 'var(--accent)', fill: 'none', strokeWidth: 1.75 }} />
                  </div>
                  <h2>{service.title}</h2>
                  <p style={{ fontStyle: 'italic', color: 'var(--text-3)', marginBottom: 16 }}>
                    {service.summary}
                  </p>
                  <p>{service.desc}</p>
                  <div className="service-full-tags" style={{ marginTop: 24 }}>
                    {service.tags.map(t => (
                      <span key={t} className="solution-tag">{t}</span>
                    ))}
                  </div>
                </div>

                <div className="service-full-right">
                  <div className="service-full-features">
                    {service.features.map(f => (
                      <div key={f.title} className="service-full-feature">
                        <div className="service-full-feature-dot" />
                        <div>
                          <h4>{f.title}</h4>
                          <p>{f.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* CTA */}
      <section style={{ padding: '80px 0', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ maxWidth: 600, margin: '0 auto', textAlign: 'center' }} className="reveal">
            <span className="section-label" style={{ justifyContent: 'center' }}>Next step</span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', marginBottom: 16, fontWeight: 800, letterSpacing: '-0.03em' }}>
              Not sure which system fits?
            </h2>
            <p style={{ marginBottom: 32 }}>
              Book a discovery call. We'll review your operations and tell you exactly
              what to build — and what not to build.
            </p>
            <Link to="/contact" className="btn btn-primary" id="services-cta" style={{ height: 52, padding: '0 28px', fontSize: '0.95rem' }}>
              Book a Discovery Call
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
