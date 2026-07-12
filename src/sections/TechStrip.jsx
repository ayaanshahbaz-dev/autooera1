import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '../utils/gsap';


export default function TechStrip() {
  const sectionRef = useRef(null);

  const tools = [
    'n8n', 'OpenRouter', 'Supabase', 'Google Calendar', 'Twilio', 'OpenAI',
    'Python', 'React', 'PostgreSQL', 'Docker', 'FastAPI', 'Make', 'Gemini', 'Redis'
  ];

  // We duplicate the list to create the seamless infinite scroll effect
  const marqueeItems = [...tools, ...tools, ...tools];

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (!prefersReducedMotion) {
      gsap.fromTo(sectionRef.current, 
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8, 
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 90%',
          }
        }
      );
    }
  }, []);

  return (
    <section 
      id="tech-stack" 
      ref={sectionRef}
      className="py-12 bg-bg-elevated border-y border-white/5 overflow-hidden"
    >
      <div className="container max-w-[1300px]">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
          
          <h2 className="text-[0.8rem] uppercase tracking-widest text-text-tertiary whitespace-nowrap shrink-0">
            The tools behind our systems
          </h2>

          <div className="relative flex-1 w-full overflow-hidden mask-edges">
            <div className="flex w-max animate-[marquee_40s_linear_infinite] hover:[animation-play-state:paused]">
              {marqueeItems.map((tool, i) => (
                <div 
                  key={i} 
                  className="px-6 text-[0.95rem] font-medium text-text-secondary hover:text-text-primary transition-colors cursor-default"
                >
                  {tool}
                  <span className="mx-12 text-white/10 select-none">•</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      <style>{`
        .mask-edges {
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-100% / 3)); }
        }
      `}</style>
    </section>
  );
}
