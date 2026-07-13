import { useRef, useEffect } from 'react';
import { ArrowRight, CircleDashed, CheckCircle2, ChevronRight } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { gsap, ScrollTrigger } from '../utils/gsap';


export default function Projects() {
  const sectionRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  const projects = [
    // Top 2 Large Cards
    {
      id: 1,
      category: 'INTERNAL KNOWLEDGE ASSISTANT · RAG · MCP',
      title: 'AURA',
      desc: 'RAG-powered Internal Knowledge Assistant and Sales Qualification Agent built for AutoEra. Uses Retrieval-Augmented Generation to pull accurate context, MCP Integrations to connect live business data, then qualifies leads and books discovery calls automatically.',
      tags: ['RAG', 'MCP Integrations', 'n8n', 'OpenRouter', 'Google Calendar'],
      status: 'Production',
      gradient: 'from-[#FF9500] to-[#E65C00]',
      size: 'large'
    },
    {
      id: 2,
      category: 'FULL-STACK AI CHAT PLATFORM',
      title: 'Convoo',
      desc: 'AI chat platform with Django backend, RESTful APIs, authentication, and streaming responses.',
      tags: ['Django', 'Full-Stack', 'REST API'],
      status: 'Built',
      gradient: 'from-[#FFB340] to-[#FF9500]',
      size: 'large'
    },
    // Bottom 5 Smaller Cards
    {
      id: 3,
      category: 'WHATSAPP · n8n · CRM',
      title: 'AI Dental Clinic Receptionist',
      desc: 'Automates patient inquiries, appointment scheduling, and reminders through WhatsApp and AI.',
      tags: ['WhatsApp', 'n8n', 'CRM'],
      status: 'Concept',
      gradient: 'from-[#E67E22] to-[#D35400]',
      size: 'small'
    },
    {
      id: 4,
      category: 'CRM AUTOMATION',
      title: 'Automated CRM Lead Pipeline',
      desc: 'CRM Automation pipeline that captures omni-channel leads via the AI Lead Management System, cleans data, and updates CRM stages with zero manual input.',
      tags: ['n8n', 'CRM Automation', 'Webhooks'],
      status: 'Built',
      gradient: 'from-[#F39C12] to-[#E67E22]',
      size: 'small'
    },
    {
      id: 5,
      category: 'DATA ENRICHMENT · EMAIL',
      title: 'AI Cold Email & Lead Generation',
      desc: 'Automates lead collection, enrichment, and hyper-personalized cold outreach.',
      tags: ['n8n', 'Data Enrichment', 'Email API'],
      status: 'Built',
      gradient: 'from-[#FFCA28] to-[#FFA000]',
      size: 'small'
    },
    {
      id: 6,
      category: 'CUSTOMER SUPPORT AI AGENT',
      title: 'AI Customer Support Automation',
      desc: 'Customer Support AI Agent that processes inbound queries via webhook, generates contextual AI responses, and routes complex tickets to the right team automatically.',
      tags: ['n8n', 'OpenAI', 'Workflow Automation'],
      status: 'Built',
      gradient: 'from-[#FFD54F] to-[#FF8F00]',
      size: 'small'
    },
    {
      id: 7,
      category: 'SOCIAL MEDIA · GEN AI',
      title: 'AI Content & Social Scheduler',
      desc: 'Generates daily captions and hashtags via AI, pushing them directly to scheduling pipelines.',
      tags: ['n8n', 'Social APIs', 'GenAI'],
      status: 'Built',
      gradient: 'from-[#FF8A65] to-[#E64A19]',
      size: 'small'
    }
  ];

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (!prefersReducedMotion) {
      const ctx = gsap.context(() => {
        
        const cards = gsap.utils.toArray('.project-card');
        
        gsap.fromTo(cards,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 75%'
            }
          }
        );

      }, sectionRef);

      return () => ctx.revert();
    }
  }, []);

  const topProjects = projects.filter(p => p.size === 'large');
  const bottomProjects = projects.filter(p => p.size === 'small');

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="py-32 bg-bg-primary relative overflow-hidden flex flex-col items-center border-t border-white/5"
    >
      <div className="container max-w-[1200px] flex flex-col items-center px-4">
        
        {/* Section Header */}
        <div className="text-center max-w-[800px] mx-auto mb-16 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_var(--color-accent-glow)]" />
            <span className="text-[0.65rem] font-bold text-accent tracking-widest uppercase">REAL PROJECTS</span>
          </div>

          <h2 className="text-[clamp(2.5rem,4.5vw,3.5rem)] mb-6 text-white font-heading font-bold tracking-tight leading-[1.1]">
            Systems I've Actually <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB340] to-[#FF9500]">Built</span>
          </h2>
          
          <p className="text-[1.05rem] text-text-secondary max-w-[640px] leading-relaxed mx-auto">
            Not mockups. Not concepts on a slide. Real AI systems, engineered and running.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="w-full flex flex-col gap-6">
          
          {/* Top Row (2 Large Cards) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
            {topProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* Bottom Rows (5 Small Cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {bottomProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          
        </div>

        {/* CTA Button */}
        <div className="mt-20 flex justify-center w-full">
          <motion.a 
            href="#cases" 
            whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
            className="inline-flex items-center justify-center gap-2 h-[52px] px-9 rounded-lg font-bold text-[0.95rem] bg-gradient-to-b from-[#FFB340] to-[#FF9500] text-black hover:from-[#FFC366] hover:to-[#FF9500] smooth-transition shadow-[0_0_24px_rgba(255,149,0,0.35),inset_0_1px_1px_rgba(255,255,255,0.4)] hover:shadow-[0_0_32px_rgba(255,149,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.4)]"
          >
            View Case Studies <ArrowRight size={16} />
          </motion.a>
        </div>

      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  const isConcept = project.status === 'Concept';
  
  return (
    <div className="project-card glass-card w-full rounded-2xl overflow-hidden flex flex-col group hover:scale-[1.02] hover:border-accent/30 hover:shadow-[0_10px_40px_rgba(255,149,0,0.08)] smooth-transition">
      
      {/* Thumbnail (Browser Mockup) */}
      <div className={`w-full h-[200px] md:h-[240px] bg-gradient-to-br ${project.gradient} relative overflow-hidden flex flex-col p-4 md:p-6`}>
        {/* Browser Dots */}
        <div className="flex gap-1.5 mb-4 opacity-50 mix-blend-overlay">
          <div className="w-2.5 h-2.5 rounded-full bg-white/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/70" />
        </div>
        
        {/* Mock Content Bars */}
        <div className="w-full max-w-[80%] h-4 rounded-full bg-white/20 mix-blend-overlay mb-3" />
        <div className="w-full max-w-[60%] h-4 rounded-full bg-white/20 mix-blend-overlay mb-8" />
        
        <div className="flex gap-3">
          <div className="w-1/3 h-16 rounded-xl bg-white/20 mix-blend-overlay" />
          <div className="w-1/3 h-16 rounded-xl bg-white/20 mix-blend-overlay" />
          <div className="w-1/3 h-16 rounded-xl bg-white/20 mix-blend-overlay" />
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6 flex flex-col flex-1 bg-[#0c0c11]">
        
        {/* Top Meta: Category & Status */}
        <div className="flex items-center justify-between mb-4">
          <div className="text-[0.65rem] font-bold text-accent tracking-widest uppercase">
            {project.category}
          </div>
          <div className={`flex items-center gap-1.5 text-[0.65rem] font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${isConcept ? 'bg-white/5 border-white/10 text-text-tertiary' : 'bg-accent/10 border-accent/20 text-accent'}`}>
            {isConcept ? <CircleDashed size={10} /> : <CheckCircle2 size={10} />}
            {project.status}
          </div>
        </div>

        {/* Title & Desc */}
        <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        <p className="text-[0.85rem] text-text-secondary leading-relaxed mb-6 flex-1">
          {project.desc}
        </p>

        {/* Feature Tags */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map((tag, idx) => (
            <span key={idx} className="text-[0.7rem] bg-white/5 border border-white/10 text-text-secondary px-2.5 py-1 rounded-md">
              {tag}
            </span>
          ))}
        </div>

      </div>
    </div>
  );
}
