import { useRef, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const ctaRef = useRef(null);
  const footerRef = useRef(null);
  const year = new Date().getFullYear();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (!prefersReducedMotion) {
      const ctx = gsap.context(() => {
        // CTA text animation
        gsap.fromTo('.final-cta-content',
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: ctaRef.current,
              start: 'top 80%'
            }
          }
        );

        // Gradient parallax
        gsap.to('.cta-glow', {
          y: 100,
          ease: 'none',
          scrollTrigger: {
            trigger: ctaRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
          }
        });

        // Footer fade in
        gsap.fromTo(footerRef.current,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: footerRef.current,
              start: 'top 95%'
            }
          }
        );

      });
      return () => ctx.revert();
    }
  }, []);

  return (
    <div className="bg-bg-primary flex flex-col items-center">
      
      {/* FINAL CTA SECTION */}
      <section 
        id="cta"
        ref={ctaRef}
        className="w-full py-40 relative overflow-hidden flex flex-col items-center"
      >
        {/* Parallax Glowing Orb */}
        <div className="cta-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(255,149,0,0.06)_0%,transparent_60%)] pointer-events-none" />
        
        <div className="container max-w-[900px] flex flex-col items-center text-center px-4 relative z-10 final-cta-content">
          <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] text-white font-heading font-bold tracking-tight leading-[1.05] mb-6">
            Ready to stop duct-taping your operations <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB340] to-[#FF9500]">together?</span>
          </h2>
          
          <p className="text-[1.1rem] md:text-[1.2rem] text-text-secondary leading-relaxed mb-12 max-w-[640px]">
            Book a free strategy call. We'll map your current tools, find the bottlenecks, and show you exactly what a custom AI system could look like for your business.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            {/* Primary Button */}
            <a 
              href="#cta" 
              className="inline-flex items-center justify-center gap-2 h-[56px] px-10 rounded-xl font-bold text-[1rem] bg-gradient-to-b from-[#FFB340] to-[#FF9500] text-black hover:from-[#FFC366] hover:to-[#FF9500] transition-colors shadow-[0_0_24px_rgba(255,149,0,0.35),inset_0_1px_1px_rgba(255,255,255,0.4)] hover:shadow-[0_0_32px_rgba(255,149,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.4)] w-full sm:w-auto"
            >
              Book a Free Strategy Call <ArrowRight size={18} />
            </a>
            
            {/* Secondary Button */}
            <a 
              href="#systems" 
              className="inline-flex items-center justify-center gap-2 h-[56px] px-10 rounded-xl font-medium text-[1rem] bg-white/5 backdrop-blur-md border border-white/10 text-text-primary hover:bg-white/10 transition-colors shadow-[0_4px_20px_rgba(0,0,0,0.2)] w-full sm:w-auto"
            >
              See What We Build
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer ref={footerRef} className="w-full border-t border-white/5 pt-20 pb-10 flex flex-col items-center">
        <div className="container max-w-[1200px] px-4">
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-12 mb-20">
            
            {/* Col 1: Logo */}
            <div className="flex flex-col gap-6">
              <a href="#" aria-label="AutoEra Engineering Studio">
                <svg viewBox="0 0 176 38" fill="none" className="h-7 w-auto">
                  <text x="0" y="28" className="font-sans font-bold text-[32px] tracking-tight fill-text-primary">Auto</text>
                  <path d="M86 4 L76 21 H82 L74 36 L86 19 H80 L86 4Z" fill="var(--accent)" strokeLinejoin="round" />
                  <text x="94" y="28" className="font-sans font-bold text-[32px] tracking-tight fill-text-primary">Era</text>
                </svg>
              </a>
              <p className="text-text-secondary text-[0.95rem] max-w-[280px] leading-relaxed">
                Building AI systems we're proud to put our name on.
              </p>
            </div>

            {/* Col 2: Explore */}
            <div className="flex flex-col">
              <h4 className="text-sm font-bold mb-6 text-text-primary uppercase tracking-wider">Explore</h4>
              <nav className="flex flex-col gap-4">
                <a href="#systems" className="text-[0.95rem] text-text-secondary hover:text-accent transition-colors">Systems</a>
                <a href="#process" className="text-[0.95rem] text-text-secondary hover:text-accent transition-colors">Process</a>
                <a href="#projects" className="text-[0.95rem] text-text-secondary hover:text-accent transition-colors">Real Projects</a>
                <a href="#pricing" className="text-[0.95rem] text-text-secondary hover:text-accent transition-colors">Pricing</a>
                <a href="#faq" className="text-[0.95rem] text-text-secondary hover:text-accent transition-colors">FAQ</a>
              </nav>
            </div>

            {/* Col 3: Connect */}
            <div className="flex flex-col">
              <h4 className="text-sm font-bold mb-6 text-text-primary uppercase tracking-wider">Connect</h4>
              <nav className="flex flex-col gap-4">
                <a href="mailto:engineering@autoera.site" className="text-[0.95rem] text-text-secondary hover:text-accent transition-colors">engineering@autoera.site</a>
                <a href="#cta" className="text-[0.95rem] text-text-secondary hover:text-accent transition-colors">Book a Call</a>
              </nav>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-white/5 text-xs">
            <p className="text-text-tertiary">
              © {year} AutoEra. All rights reserved.
            </p>
            
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
              <div className="text-text-tertiary font-mono">Last Updated: July 2026</div>
              <div className="flex items-center gap-2 text-accent font-mono bg-accent/5 px-3 py-1.5 rounded-full border border-accent/10">
                <span className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_var(--color-accent-glow)] animate-pulse" />
                Active Development
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
