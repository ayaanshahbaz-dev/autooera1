import { useRef, useEffect } from 'react';
import { Compass, PencilRuler, Zap, Rocket, ArrowRight } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { gsap, ScrollTrigger } from '../utils/gsap';


export default function Process() {
  const sectionRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  const steps = [
    {
      id: '01',
      title: 'Discovery Call',
      desc: 'We map your current operations, tools, and bottlenecks. No generic pitch — we understand your business before proposing anything.',
      icon: Compass
    },
    {
      id: '02',
      title: 'Design & Architecture',
      desc: 'We design the system: what AURA needs to know, what it automates, how it connects to your calendar, CRM, and tools.',
      icon: PencilRuler
    },
    {
      id: '03',
      title: 'Build & Automate',
      desc: 'We build the AI engine, connect n8n workflows, and wire up every integration — WhatsApp, email, calendar, your knowledge base.',
      icon: Zap
    },
    {
      id: '04',
      title: 'Launch & Optimize',
      desc: 'We deploy, test with real conversations, and refine based on how it actually performs — not a one-and-done handoff.',
      icon: Rocket
    }
  ];

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (!prefersReducedMotion) {
      const ctx = gsap.context(() => {
        
        // Line draw animation
        gsap.fromTo('.process-line-fill',
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 1.5,
            ease: 'power2.inOut',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 70%',
            }
          }
        );

        // Nodes stagger animation (single ScrollTrigger for all 4 nodes)
        const nodes = gsap.utils.toArray('.process-node');
        gsap.fromTo(nodes,
          { scale: 0, opacity: 0 },
          { 
            scale: 1, 
            opacity: 1, 
            duration: 0.5,
            stagger: 0.2,
            ease: 'back.out(1.5)',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 70%'
            }
          }
        );

        // Cards stagger animation (single ScrollTrigger for all 4 cards)
        const cards = gsap.utils.toArray('.process-card');
        gsap.fromTo(cards,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.2,
            delay: 0.15,
            ease: 'cubic-bezier(0.16, 1, 0.3, 1)',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 70%'
            }
          }
        );

      }, sectionRef);

      return () => ctx.revert();
    }
  }, []);

  return (
    <section 
      id="process" 
      ref={sectionRef}
      className="py-32 bg-bg-primary relative overflow-hidden flex flex-col items-center"
    >
      <div className="container max-w-[1200px] flex flex-col items-center px-4">
        
        {/* Section Header */}
        <div className="text-center max-w-[800px] mx-auto mb-20 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_var(--color-accent-glow)]" />
            <span className="text-[0.65rem] font-bold text-accent tracking-widest uppercase">OUR PROCESS</span>
          </div>

          <h2 className="text-[clamp(2.5rem,4.5vw,3.5rem)] mb-6 text-white font-heading font-bold tracking-tight leading-[1.1]">
            From Strategy To Launch In <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-[#FFB340]">Four Steps</span>
          </h2>
          
          <p className="text-[1.05rem] text-text-secondary max-w-[640px] leading-relaxed mx-auto">
            A proven process that turns your idea into a working AI system — not just a proposal.
          </p>
        </div>

        {/* Process Grid */}
        <div className="relative w-full mt-4">
          
          {/* Connecting Line (Desktop only) */}
          <div className="absolute top-[44px] left-[12.5%] right-[12.5%] h-px bg-white/10 hidden md:block z-0">
             <div className="process-line-fill w-full h-full bg-gradient-to-r from-transparent via-accent to-transparent origin-left" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="process-step group flex flex-col items-center">
                  
                  {/* Icon Node */}
                  <div className="process-node relative shrink-0 w-[88px] h-[88px] rounded-2xl bg-gradient-to-br from-[#FFB340] to-[#FF9500] flex items-center justify-center shadow-[0_0_30px_rgba(255,149,0,0.3)] mb-8 group-hover:scale-110 smooth-transition">
                    <Icon size={36} className="text-white" />
                    
                    {/* Number Badge */}
                    <div className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-[#121217] border border-white/10 flex items-center justify-center text-[0.7rem] font-bold text-white shadow-[0_4px_10px_rgba(0,0,0,0.5)]">
                      {step.id}
                    </div>
                  </div>

                  {/* Step Card */}
                  <div className="process-card glass-card w-full h-full p-6 relative overflow-hidden smooth-transition flex flex-col items-center text-center group-hover:bg-white/[0.05] group-hover:scale-[1.03] group-hover:shadow-[0_10px_40px_rgba(0,0,0,0.6)]">
                    <h3 className="text-text-primary font-bold text-[1.05rem] mb-3 group-hover:text-accent smooth-transition">{step.title}</h3>
                    <p className="text-[0.85rem] text-text-secondary leading-relaxed">{step.desc}</p>
                    <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#FFB340] to-[#FF9500] transform scale-x-0 group-hover:scale-x-100 smooth-transition origin-center" />
                  </div>
                  
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-20 flex justify-center w-full">
          <motion.a 
            href="#cta" 
            whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
            className="inline-flex items-center justify-center gap-2 h-[52px] px-9 rounded-lg font-bold text-[0.95rem] bg-gradient-to-b from-[#FFB340] to-[#FF9500] text-black hover:from-[#FFC366] hover:to-[#FF9500] smooth-transition shadow-[0_0_24px_rgba(255,149,0,0.35),inset_0_1px_1px_rgba(255,255,255,0.4)] hover:shadow-[0_0_32px_rgba(255,149,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.4)]"
          >
            Book a Free Strategy Call <ArrowRight size={16} />
          </motion.a>
        </div>

      </div>
    </section>
  );
}
