import { useRef, useEffect } from 'react';
import { Clock, Zap, Smartphone, Link, UserX, BarChart3 } from 'lucide-react';
import { gsap, ScrollTrigger } from '../utils/gsap';


export default function Capabilities() {
  const sectionRef = useRef(null);

  const capabilities = [
    {
      id: 1,
      icon: Clock,
      stat: '24/7',
      label: 'Always Answering',
      desc: 'AURA never sleeps, never puts a lead on hold, never misses an after-hours inquiry.'
    },
    {
      id: 2,
      icon: Zap,
      stat: 'Instant',
      label: 'Response Time',
      desc: 'Leads get a reply in seconds, not whenever someone checks their inbox.'
    },
    {
      id: 3,
      icon: Smartphone,
      stat: '100%',
      label: 'Mobile Ready',
      desc: 'Every system we build works perfectly on any device, out of the box.'
    },
    {
      id: 4,
      icon: Link,
      stat: 'One',
      label: 'Connected System',
      desc: 'Your website, AI, calendar, and CRM all talk to each other — no manual syncing.'
    },
    {
      id: 5,
      icon: UserX, // Or just User
      stat: 'Zero',
      label: 'Manual Data Entry',
      desc: 'Every lead, every booking, every follow-up — captured and logged automatically.'
    },
    {
      id: 6,
      icon: BarChart3,
      stat: 'Full',
      label: 'Visibility',
      desc: 'Know exactly where every lead stands, in real time, from one dashboard.'
    }
  ];

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (!prefersReducedMotion) {
      const ctx = gsap.context(() => {
        
        // Cards Stagger
        const cards = gsap.utils.toArray('.capability-card');
        gsap.fromTo(cards,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: 'cubic-bezier(0.16, 1, 0.3, 1)',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 75%'
            }
          }
        );

        // Stats pop animation
        const stats = gsap.utils.toArray('.capability-stat');
        gsap.fromTo(stats,
          { scale: 0.8, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            stagger: 0.1,
            ease: 'back.out(1.5)',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 75%'
            },
            delay: 0.2 // Slightly after cards start
          }
        );

      }, sectionRef);

      return () => ctx.revert();
    }
  }, []);

  return (
    <section 
      id="capabilities" 
      ref={sectionRef}
      className="py-32 bg-bg-primary relative overflow-hidden flex flex-col items-center"
    >
      <div className="container max-w-[1200px] flex flex-col items-center px-4">
        
        {/* Section Header */}
        <div className="text-center max-w-[800px] mx-auto mb-16 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_var(--color-accent-glow)]" />
            <span className="text-[0.65rem] font-bold text-accent tracking-widest uppercase">CAPABILITY</span>
          </div>

          <h2 className="text-[clamp(2.5rem,4.5vw,3.5rem)] mb-6 text-white font-heading font-bold tracking-tight leading-[1.1]">
            What A System Like This <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB340] to-[#FF9500]">Actually Does</span>
          </h2>
          
          <p className="text-[1.05rem] text-text-secondary max-w-[640px] leading-relaxed mx-auto">
            This isn't a performance report — it's what AURA is engineered to do, from day one.
          </p>
        </div>

        {/* 2x3 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {capabilities.map((cap) => {
            const Icon = cap.icon;
            return (
              <div 
                key={cap.id} 
                className="capability-card glass-card w-full p-8 flex flex-col items-center text-center group smooth-transition hover:border-accent/30 hover:shadow-[0_10px_40px_rgba(255,149,0,0.06)]"
              >
                
                {/* Icon Wrapper */}
                <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-accent/20 smooth-transition">
                  <Icon size={22} className="text-accent" />
                </div>

                {/* Big Stat */}
                <div className="capability-stat text-[2.5rem] leading-none font-heading font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#FFB340] to-[#FF9500] mb-3">
                  {cap.stat}
                </div>

                {/* Label */}
                <h3 className="text-[1.1rem] font-bold text-text-primary mb-3">
                  {cap.label}
                </h3>

                {/* Description */}
                <p className="text-[0.85rem] text-text-secondary leading-relaxed">
                  {cap.desc}
                </p>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
