import { useEffect, useRef } from 'react';
import { 
  Briefcase, FileText, Bot, Database, Zap, Plug, 
  MessageSquare, LayoutDashboard, Users, PhoneCall, ArrowRight 
} from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { gsap, ScrollTrigger } from '../utils/gsap';


export default function Systems() {
  const sectionRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  const services = [
//...
    // Top Row (Wide)
    {
      title: "AI Lead Management",
      desc: "Complete lead capture, scoring, and nurture pipelines that automatically engage prospects 24/7 without manual effort.",
      icon: Briefcase,
      iconColor: "text-[#FF9500]",
      iconBg: "bg-[#FF9500]/10",
      badge: "MOST POPULAR",
      badgeColor: "bg-[#FF9500]/10 text-[#FF9500]",
      colSpan: "lg:col-span-2"
    },
    {
      title: "Document Intelligence",
      desc: "Turn messy paperwork, PDFs, and emails into structured data. Automated extraction, routing, and CRM entry.",
      icon: FileText,
      iconColor: "text-[#8A2BE2]",
      iconBg: "bg-[#8A2BE2]/10",
      colSpan: "lg:col-span-2"
    },
    // Standard Grid
    {
      title: "AI Chatbots & Agents",
      desc: "Intelligent assistants that qualify leads, answer questions, and automate conversations.",
      icon: Bot,
      iconColor: "text-[#FF9500]",
      iconBg: "bg-[#FF9500]/10",
      badge: "AI POWERED",
      badgeColor: "bg-[#FF9500]/10 text-[#FF9500]",
    },
    {
      title: "CRM Architecture",
      desc: "Custom CRM builds with automated pipelines to manage your entire sales process.",
      icon: Database,
      iconColor: "text-[#FF5F56]",
      iconBg: "bg-[#FF5F56]/10",
    },
    {
      title: "Workflow Automation",
      desc: "Automated workflows connecting your tools, reducing manual work, and speeding up processes.",
      icon: Zap,
      iconColor: "text-[#27C93F]",
      iconBg: "bg-[#27C93F]/10",
    },
    {
      title: "API Integrations",
      desc: "Seamless connections between your legacy platforms and modern software.",
      icon: Plug,
      iconColor: "text-[#FFB340]",
      iconBg: "bg-[#FFB340]/10",
    },
    {
      title: "Omnichannel Comms",
      desc: "Unified inbox syncing SMS, Email, and social channels into one dashboard.",
      icon: MessageSquare,
      iconColor: "text-[#FF3366]",
      iconBg: "bg-[#FF3366]/10",
    },
    {
      title: "Operations Dashboards",
      desc: "Custom admin panels to track metrics, manage operations, and control systems.",
      icon: LayoutDashboard,
      iconColor: "text-[#9D4EDD]",
      iconBg: "bg-[#9D4EDD]/10",
    },
    {
      title: "Client Portals",
      desc: "Secure portals where clients can track projects, access resources, and upload files.",
      icon: Users,
      iconColor: "text-[#FFBD2E]",
      iconBg: "bg-[#FFBD2E]/10",
    },
    {
      title: "Voice AI Assistants",
      desc: "Human-sounding AI voice agents for inbound routing and outbound qualification.",
      icon: PhoneCall,
      iconColor: "text-[#FF9500]",
      iconBg: "bg-[#FF9500]/10",
    }
  ];

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (!prefersReducedMotion) {
      const ctx = gsap.context(() => {
        gsap.fromTo('.services-heading', 
          { opacity: 0, y: 30 },
          { 
            opacity: 1, 
            y: 0, 
            duration: 0.6, 
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%',
            }
          }
        );

        gsap.fromTo('.service-card', 
          { opacity: 0, y: 30 },
          { 
            opacity: 1, 
            y: 0, 
            duration: 0.5, 
            stagger: 0.05, 
            ease: 'power3.out',
            scrollTrigger: {
              trigger: '.services-grid',
              start: 'top 85%',
            }
          }
        );
      }, sectionRef);

      return () => ctx.revert();
    } else {
      gsap.set('.services-heading, .service-card', { opacity: 1, y: 0 });
    }
  }, []);

  return (
    <section 
      id="systems" 
      ref={sectionRef}
      className="py-32 bg-bg-primary border-y border-white/5 relative overflow-hidden flex flex-col items-center"
    >
      {/* Static Background Glow */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(255,149,0,0.08)_0%,transparent_70%)] blur-[100px]" />
      </div>

      <div className="container max-w-[1200px] flex flex-col items-center relative z-10">
        
        <div className="services-heading opacity-0 translate-y-8 text-center max-w-[800px] mx-auto mb-20 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="text-[0.65rem] font-bold text-text-tertiary tracking-widest uppercase">WHAT WE BUILD</span>
          </div>

          <h2 className="text-[clamp(2.5rem,5vw,3.5rem)] mb-6 text-white font-heading font-bold tracking-tight">
            Premium <span className="text-accent">Digital Systems</span> & Solutions
          </h2>
          
          <p className="text-[1.1rem] text-text-secondary max-w-[640px] leading-relaxed mx-auto">
            AutoEra engineers and deploys custom AI systems, workflow automations, and intelligent infrastructure designed to solve real operational bottlenecks for growing businesses.
          </p>
        </div>

        <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full mb-16">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div 
                key={i}
                className={`service-card opacity-0 translate-y-8 glass-card p-7 flex flex-col ${service.colSpan || ''}`}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-12 h-12 rounded-[14px] ${service.iconBg} flex items-center justify-center shrink-0`}>
                    <Icon size={22} className={service.iconColor} strokeWidth={1.5} aria-hidden="true" />
                  </div>
                  
                  <div className="flex flex-col items-start gap-1">
                    <h3 className="text-[1rem] font-bold text-text-primary leading-tight">
                      {service.title}
                    </h3>
                    {service.badge && (
                      <span className={`px-2 py-0.5 rounded text-[0.6rem] font-bold tracking-wider ${service.badgeColor}`}>
                        {service.badge}
                      </span>
                    )}
                  </div>
                </div>
                
                <p className="text-[0.85rem] text-text-secondary leading-relaxed">
                  {service.desc}
                </p>
              </div>
            );
          })}
        </div>
        
        <motion.a 
          href="#cta" 
          whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
          whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
          className="inline-flex items-center justify-center gap-2 h-[48px] px-8 rounded-lg font-bold text-[0.9rem] bg-[#FF9500] text-black hover:bg-[#FFB340] smooth-transition hover:shadow-[0_0_24px_rgba(255,149,0,0.4)] shadow-[0_0_10px_rgba(255,149,0,0.1)]"
        >
          Discuss Your Project <ArrowRight size={16} />
        </motion.a>

      </div>
    </section>
  );
}
