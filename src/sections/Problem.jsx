import { useEffect, useRef } from 'react';
import { AlertTriangle, Inbox, Clock, ArrowRight } from 'lucide-react';
import { gsap, ScrollTrigger } from '../utils/gsap';


export default function Problem() {
  const sectionRef = useRef(null);

  const problems = [
    {
      icon: AlertTriangle,
      iconColor: 'text-[#FFBD2E]',
      title: 'Your website looks good but does not convert',
      desc: 'Beautiful design without conversion strategy means visitors leave without taking action. You need a system, not just a website.'
    },
    {
      icon: Inbox,
      iconColor: 'text-[#FF5F56]',
      title: 'Your leads are scattered across forms, inboxes, and spreadsheets',
      desc: 'Without a centralized CRM, leads fall through the cracks. Important follow-ups get missed and revenue is lost.'
    },
    {
      icon: Clock,
      iconColor: 'text-accent',
      title: 'Your follow-up depends on manual work and gets delayed',
      desc: 'Manual processes slow everything down. Delayed responses mean lost opportunities and frustrated prospects.'
    }
  ];

  const flowSteps = ["Website", "CRM", "Automation", "AI", "Dashboard", "Follow-up System"];

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (!prefersReducedMotion) {
      const ctx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          }
        });

        tl.fromTo('.problem-heading', 
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }
        );

        tl.fromTo('.problem-card-ref', 
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out' },
          "-=0.2"
        );

        tl.fromTo('.solution-flow',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
          "-=0.1"
        );
      }, sectionRef);

      return () => ctx.revert();
    }
  }, []);

  return (
    <section 
      id="problem" 
      ref={sectionRef}
      className="py-32 bg-bg-primary relative overflow-hidden"
    >
      <div className="container max-w-[1200px] flex flex-col items-center">
        
        <div className="problem-heading text-center max-w-[800px] mx-auto mb-20 flex flex-col items-center">
          
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="text-[0.65rem] font-bold text-text-tertiary tracking-widest uppercase">WHY WE ARE DIFFERENT</span>
          </div>

          <h2 className="text-[clamp(2.2rem,4.5vw,3.5rem)] mb-6 text-white font-heading font-bold tracking-tight leading-[1.1]">
            We Do Not Just Build Websites. We Build <span className="text-accent">Business Systems</span>.
          </h2>
          
          <p className="text-[1.1rem] text-text-secondary max-w-[700px] leading-relaxed mx-auto">
            Most businesses have disconnected tools, slow follow-up, weak websites, messy CRMs, 
            and manual processes. We turn that into one connected digital system.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24 w-full">
          {problems.map((problem, i) => {
            const Icon = problem.icon;
            return (
              <div 
                key={i}
                className="problem-card-ref glass-card p-8 flex flex-col gap-5"
              >
                <div className="w-10 h-10 rounded-lg bg-white/[0.03] border border-white/5 flex items-center justify-center">
                  <Icon size={18} className={problem.iconColor} />
                </div>
                <div>
                  <h3 className="text-[1.15rem] font-bold text-text-primary mb-3 leading-snug">{problem.title}</h3>
                  <p className="text-[0.9rem] text-text-secondary leading-relaxed">{problem.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* The Solution Flow */}
        <div className="solution-flow w-full flex flex-col items-center">
          <div className="inline-flex items-center gap-2 text-[0.75rem] font-medium text-[#27C93F] mb-6">
            <span className="w-4 h-4 rounded-full bg-[#27C93F]/10 flex items-center justify-center"><ArrowRight size={10} /></span>
            The Solution
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4 w-full max-w-[900px]">
            {flowSteps.map((step, i) => (
              <div key={i} className="flex items-center gap-3 md:gap-4">
                <div className="px-5 py-2.5 rounded-lg bg-[#0A0A0A] border border-white/10 text-[0.85rem] font-bold text-text-secondary whitespace-nowrap shadow-sm">
                  {step}
                </div>
                {i < flowSteps.length - 1 && (
                  <ArrowRight size={14} className="text-white/20" />
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
