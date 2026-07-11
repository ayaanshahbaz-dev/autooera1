import { useEffect, useRef } from 'react';
import { 
  Globe, Code, Box, Layers, Bot, Sparkles, Zap, 
  Workflow, CreditCard, Table, Database, Plug, Paintbrush, Cloud 
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function TechGrid() {
  const sectionRef = useRef(null);

  const tools = [
    { name: 'WordPress', icon: Globe },
    { name: 'Next.js', icon: Code },
    { name: 'React', icon: Box },
    { name: 'GoHighLevel', icon: Layers },
    { name: 'AI Agents', icon: Bot },
    { name: 'OpenAI', icon: Sparkles },
    { name: 'Zapier', icon: Zap },
    { name: 'Make', icon: Workflow },
    { name: 'Stripe', icon: CreditCard },
    { name: 'Airtable', icon: Table },
    { name: 'Supabase', icon: Database },
    { name: 'APIs', icon: Plug },
    { name: 'Framer', icon: Paintbrush },
    { name: 'Cloud', icon: Cloud },
  ];

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (!prefersReducedMotion) {
      const ctx = gsap.context(() => {
        gsap.fromTo('.tech-card', 
          { opacity: 0, scale: 0.9, y: 20 },
          { 
            opacity: 1, 
            scale: 1, 
            y: 0,
            duration: 0.5, 
            stagger: 0.03,
            ease: 'back.out(1.2)',
            scrollTrigger: {
              trigger: '.tech-grid',
              start: 'top 85%',
            }
          }
        );
      }, sectionRef);

      return () => ctx.revert();
    }
  }, []);

  return (
    <section 
      id="tech-stack" 
      ref={sectionRef}
      className="py-32 bg-bg-primary border-y border-white/5 relative overflow-hidden flex flex-col items-center text-center"
    >
      <div className="container max-w-[1200px] flex flex-col items-center">
        
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          <span className="text-[0.65rem] font-bold text-text-tertiary tracking-widest uppercase">OUR STACK</span>
        </div>

        <h2 className="text-[clamp(2.5rem,5vw,3.5rem)] mb-6 text-white font-heading tracking-tight font-bold">
          Systems We <span className="text-accent">Build With</span>
        </h2>
        
        <p className="text-[1.05rem] text-text-secondary max-w-[600px] mb-20 leading-relaxed">
          We use enterprise-grade tools and platforms to build systems that scale with your business.
        </p>

        <div className="tech-grid grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-4 w-full">
          {tools.map((tool, i) => {
            const Icon = tool.icon;
            return (
              <div 
                key={i} 
                className="tech-card bg-[#0f0f13] border border-white/5 rounded-2xl p-6 flex flex-col items-center justify-center gap-4 transition-all duration-300 hover:bg-[#15151a] hover:border-white/10 group cursor-default"
              >
                <div className="w-12 h-12 rounded-[14px] bg-white/[0.03] border border-white/5 flex items-center justify-center group-hover:scale-110 group-hover:bg-white/[0.05] transition-all duration-300">
                  <Icon size={20} className="text-text-secondary group-hover:text-accent transition-colors" strokeWidth={1.5} />
                </div>
                <span className="text-[0.75rem] font-bold text-text-secondary group-hover:text-text-primary transition-colors">
                  {tool.name}
                </span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
