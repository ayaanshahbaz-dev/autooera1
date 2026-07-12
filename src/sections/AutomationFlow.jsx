import { useRef, useEffect } from 'react';
import { 
  Globe, MessageSquare, BrainCircuit, Network, 
  Calendar, CalendarCheck, Database, UserCheck 
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AutomationFlow() {
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);

  const steps = [
    { id: 1, title: 'Visitor Lands on Website', desc: 'AURA greets them instantly via chat widget.', icon: Globe, color: '#407BFF' },
    { id: 2, title: 'Visitor Asks a Question', desc: "AURA answers using AutoEra's knowledge base.", icon: MessageSquare, color: '#00E5FF' },
    { id: 3, title: 'AURA Qualifies the Lead', desc: 'Understands their business, goals, and challenges.', icon: BrainCircuit, color: '#8A2BE2' },
    { id: 4, title: 'AURA Recommends a System', desc: 'Matches them to the right AI solution based on what they actually need.', icon: Network, color: '#27C93F' },
    { id: 5, title: 'Calendar Check', desc: 'AURA checks real-time Google Calendar availability.', icon: Calendar, color: '#FFBD2E' },
    { id: 6, title: 'Call Gets Booked', desc: 'Qualified lead books a discovery call directly, no back-and-forth.', icon: CalendarCheck, color: '#FF3366' },
    { id: 7, title: 'Lead Info Stored', desc: 'Details saved automatically for follow-up.', icon: Database, color: '#407BFF' },
    { id: 8, title: 'Founder Follows Up', desc: 'You show up to the call already knowing their business.', icon: UserCheck, color: '#00E5FF' }
  ];

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (!prefersReducedMotion) {
      const ctx = gsap.context(() => {
        // Section heading animation
        gsap.fromTo('.flow-heading', 
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

        // Center line drawing animation
        gsap.fromTo('.timeline-line-fill',
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: 'none',
            transformOrigin: 'top center',
            scrollTrigger: {
              trigger: timelineRef.current,
              start: 'top 50%',
              end: 'bottom 70%',
              scrub: true
            }
          }
        );

        // Batch-optimized step animations (1 watcher instead of 8)
        const allSteps = gsap.utils.toArray('.timeline-step');
        // Pre-set initial states
        allSteps.forEach(step => {
          gsap.set(step.querySelector('.step-circle'), { scale: 0, opacity: 0 });
          gsap.set(step.querySelector('.step-card'), { opacity: 0 });
        });

        ScrollTrigger.batch('.timeline-step', {
          start: 'top 85%',
          onEnter: (batch) => {
            batch.forEach(step => {
              const index = allSteps.indexOf(step);
              const isLeft = index % 2 === 0;
              const circle = step.querySelector('.step-circle');
              const card = step.querySelector('.step-card');
              
              const tl = gsap.timeline();
              tl.to(circle, { scale: 1, opacity: 1, duration: 0.4, ease: 'back.out(1.5)' })
                .fromTo(card,
                  { x: isLeft ? -40 : 40, opacity: 0 },
                  { x: 0, opacity: 1, duration: 0.5, ease: 'cubic-bezier(0.16, 1, 0.3, 1)' },
                  '-=0.2'
                );
            });
          },
          once: true
        });

      }, sectionRef);

      return () => ctx.revert();
    }
  }, []);

  return (
    <section 
      id="automation-flow" 
      ref={sectionRef}
      className="py-32 bg-bg-primary border-t border-white/5 relative overflow-hidden flex flex-col items-center"
    >
      <div className="container max-w-[1000px] flex flex-col items-center px-4">
        
        {/* Section Header */}
        <div className="flow-heading text-center max-w-[800px] mx-auto mb-20 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] shadow-[0_0_8px_rgba(0,229,255,0.4)]" />
            <span className="text-[0.65rem] font-bold text-[#00E5FF] tracking-widest uppercase">HOW IT WORKS TOGETHER</span>
          </div>

          <h2 className="text-[clamp(2.5rem,4.5vw,3.5rem)] mb-6 text-white font-heading font-bold tracking-tight leading-[1.1]">
            Your Complete Business<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#407BFF] to-[#00E5FF]">Automation Flow</span>
          </h2>
          
          <p className="text-[1rem] text-text-secondary max-w-[640px] leading-relaxed mx-auto">
            See how every piece connects — from first visit to closed deal — all automated, all tracked, all managed.
          </p>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative w-full flex flex-col gap-6 md:gap-0 mt-8">
          
          {/* Center Line (Desktop) */}
          <div className="absolute left-[24px] md:left-1/2 top-4 bottom-4 w-[1px] -translate-x-1/2 bg-white/5 hidden md:block">
            <div className="timeline-line-fill w-full h-full bg-white/20" />
          </div>

          {/* Mobile Center Line (Left aligned) */}
          <div className="absolute left-[24px] top-4 bottom-4 w-[1px] -translate-x-1/2 bg-white/5 md:hidden">
            <div className="timeline-line-fill w-full h-full bg-white/20" />
          </div>

          {steps.map((step, index) => {
            const isEven = index % 2 === 0; // true = left side, false = right side
            const Icon = step.icon;

            return (
              <div key={step.id} className="timeline-step relative w-full flex md:justify-center mb-10 md:mb-6">
                
                {/* Center Number Circle */}
                <div 
                  className="step-circle absolute left-[24px] md:left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full font-bold text-[0.8rem] flex items-center justify-center shadow-lg z-20 text-white"
                  style={{ backgroundColor: step.color, boxShadow: `0 0 20px ${step.color}30` }}
                >
                  {step.id}
                </div>

                <div className="w-full flex md:justify-between items-center relative pl-[60px] md:pl-0">
                  
                  {/* Left Spacer / Card */}
                  <div className={`w-full md:w-[calc(50%-60px)] flex ${isEven ? 'md:justify-end' : 'md:justify-start hidden md:flex'}`}>
                    {isEven && (
                      <div className="step-card bg-[#121217] border border-white/5 rounded-2xl w-full max-w-[460px] flex flex-row items-center justify-between p-5 px-6 group hover:border-white/10 transition-all duration-300">
                        <div className="flex flex-col gap-1 pr-5 md:text-right text-left flex-1">
                          <h3 className="font-bold text-text-primary text-[1.05rem]">{step.title}</h3>
                          <p className="text-[0.8rem] text-text-secondary leading-relaxed">{step.desc}</p>
                        </div>
                        <div 
                          className="w-12 h-12 rounded-xl border flex items-center justify-center shrink-0 transition-all duration-300" 
                          style={{ color: step.color, backgroundColor: `${step.color}15`, borderColor: `${step.color}30` }}
                        >
                          <Icon size={20} />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Right Spacer / Card */}
                  <div className={`w-full md:w-[calc(50%-60px)] flex ${!isEven ? 'md:justify-start' : 'md:justify-end hidden md:flex'}`}>
                    {!isEven && (
                      <div className="step-card bg-[#121217] border border-white/5 rounded-2xl w-full max-w-[460px] flex flex-row items-center justify-between p-5 px-6 group hover:border-white/10 transition-all duration-300">
                        <div 
                          className="w-12 h-12 rounded-xl border flex items-center justify-center shrink-0 transition-all duration-300" 
                          style={{ color: step.color, backgroundColor: `${step.color}15`, borderColor: `${step.color}30` }}
                        >
                          <Icon size={20} />
                        </div>
                        <div className="flex flex-col gap-1 pl-5 flex-1">
                          <h3 className="font-bold text-text-primary text-[1.05rem]">{step.title}</h3>
                          <p className="text-[0.8rem] text-text-secondary leading-relaxed">{step.desc}</p>
                        </div>
                      </div>
                    )}
                  </div>
                  
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
