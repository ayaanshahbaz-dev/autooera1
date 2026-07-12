import { useRef, useEffect, useState } from 'react';
import { ArrowRight, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { gsap, ScrollTrigger } from '../utils/gsap';

// NOTE: This ngrok URL is temporary for development. 
// UPDATE THIS before moving to production!
const WEBHOOK_URL = "https://engraved-humongous-backboned.ngrok-free.dev/webhook/strategycall";

function BookingForm() {
  const [formData, setFormData] = useState({ name: '', email: '', preferredDate: '', preferredTime: '' });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState('');
  const shouldReduceMotion = useReducedMotion();

  // date validation: don't allow past dates
  const today = new Date().toISOString().split('T')[0];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          submittedAt: new Date().toISOString()
        })
      });

      if (!response.ok) throw new Error('Failed to submit');
      
      setStatus('success');
      setFormData({ name: '', email: '', preferredDate: '', preferredTime: '' });
    } catch (err) {
      console.error(err);
      setStatus('error');
      setErrorMessage('Something went wrong — please try again or email us directly.');
    }
  };

  const inputClasses = "w-full bg-[#16161d] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-text-tertiary focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all";

  return (
    <motion.form 
      onSubmit={handleSubmit}
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
      whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="w-full max-w-[600px] mt-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-[24px] p-6 sm:p-8 shadow-[0_8px_32px_rgba(0,0,0,0.3)] relative z-20"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        <div className="flex flex-col gap-1.5 text-left">
          <label className="text-[13px] font-bold text-text-secondary uppercase tracking-wider ml-1">Name</label>
          <input 
            type="text" 
            required
            value={formData.name}
            onChange={e => setFormData({...formData, name: e.target.value})}
            className={inputClasses}
            placeholder="John Doe"
          />
        </div>
        <div className="flex flex-col gap-1.5 text-left">
          <label className="text-[13px] font-bold text-text-secondary uppercase tracking-wider ml-1">Email</label>
          <input 
            type="email" 
            required
            value={formData.email}
            onChange={e => setFormData({...formData, email: e.target.value})}
            className={inputClasses}
            placeholder="john@company.com"
          />
        </div>
        <div className="flex flex-col gap-1.5 text-left">
          <label className="text-[13px] font-bold text-text-secondary uppercase tracking-wider ml-1">Preferred Date</label>
          <input 
            type="date" 
            required
            min={today}
            value={formData.preferredDate}
            onChange={e => setFormData({...formData, preferredDate: e.target.value})}
            className={inputClasses + " [color-scheme:dark]"}
          />
        </div>
        <div className="flex flex-col gap-1.5 text-left">
          <label className="text-[13px] font-bold text-text-secondary uppercase tracking-wider ml-1">Preferred Time</label>
          <input 
            type="time" 
            required
            value={formData.preferredTime}
            onChange={e => setFormData({...formData, preferredTime: e.target.value})}
            className={inputClasses + " [color-scheme:dark]"}
          />
        </div>
      </div>

      {status === 'error' && (
        <div className="mb-5 p-4 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center gap-3 text-red-400 text-sm text-left">
          <AlertCircle size={18} className="shrink-0" />
          <p>{errorMessage}</p>
        </div>
      )}

      {status === 'success' && (
        <div className="mb-5 p-4 rounded-xl bg-[#39D98A]/10 border border-[#39D98A]/20 flex items-center gap-3 text-[#39D98A] text-sm text-left">
          <CheckCircle2 size={18} className="shrink-0" />
          <p>Thanks! We'll confirm your call time shortly.</p>
        </div>
      )}

      <motion.button 
        type="submit"
        disabled={status === 'loading'}
        whileHover={shouldReduceMotion || status === 'loading' ? {} : { scale: 1.02 }}
        whileTap={shouldReduceMotion || status === 'loading' ? {} : { scale: 0.98 }}
        className="w-full h-[56px] flex items-center justify-center gap-2 rounded-xl font-bold text-[1rem] bg-gradient-to-b from-[#FFB340] to-[#FF9500] text-[#1a0f00] hover:from-[#FFC366] hover:to-[#FF9500] smooth-transition shadow-[0_0_24px_rgba(255,149,0,0.35),inset_0_1px_1px_rgba(255,255,255,0.4)] disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? (
          <><Loader2 size={18} className="animate-spin" /> Booking...</>
        ) : (
          <>Book Strategy Call <ArrowRight size={18} /></>
        )}
      </motion.button>
    </motion.form>
  );
}


export default function Footer() {
  const ctaRef = useRef(null);
  const footerRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();
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
        <div className="cta-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(255,149,0,0.08)_0%,transparent_60%)] pointer-events-none" />
        
        <div className="container max-w-[900px] flex flex-col items-center text-center px-4 relative z-10 final-cta-content">
          <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] text-white font-heading font-bold tracking-tight leading-[1.05] mb-6">
            Ready to stop duct-taping your operations <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB340] to-[#FF9500]">together?</span>
          </h2>
          
          <p className="text-[1.1rem] md:text-[1.2rem] text-text-secondary leading-relaxed mb-12 max-w-[640px]">
            Book a free strategy call. We'll map your current tools, find the bottlenecks, and show you exactly what a custom AI system could look like for your business.
          </p>

          <BookingForm />
        </div>
      </section>

      {/* FOOTER */}
      <footer ref={footerRef} className="w-full border-t border-white/5 pt-20 pb-10 flex flex-col items-center">
        <div className="container max-w-[1200px] px-4">
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-12 mb-20">
            
            {/* Col 1: Logo */}
            <div className="flex flex-col gap-6">
              <a href="#" aria-label="AutoEra Engineering Studio">
                <svg viewBox="0 0 176 38" fill="none" className="h-7 w-auto" aria-hidden="true">
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
                <a href="#systems" className="text-[0.95rem] text-text-secondary hover:text-accent smooth-transition">Systems</a>
                <a href="#process" className="text-[0.95rem] text-text-secondary hover:text-accent smooth-transition">Process</a>
                <a href="#projects" className="text-[0.95rem] text-text-secondary hover:text-accent smooth-transition">Real Projects</a>
                <a href="#pricing" className="text-[0.95rem] text-text-secondary hover:text-accent smooth-transition">Pricing</a>
                <a href="#faq" className="text-[0.95rem] text-text-secondary hover:text-accent smooth-transition">FAQ</a>
              </nav>
            </div>

            {/* Col 3: Connect */}
            <div className="flex flex-col">
              <h4 className="text-sm font-bold mb-6 text-text-primary uppercase tracking-wider">Connect</h4>
              <nav className="flex flex-col gap-4 mb-6">
                <a href="mailto:hello.autoera@gmail.com" className="text-[0.95rem] text-text-secondary hover:text-accent smooth-transition">hello.autoera@gmail.com</a>
                <a href="#cta" className="text-[0.95rem] text-text-secondary hover:text-accent smooth-transition">Book a Call</a>
              </nav>
              
              <h4 className="text-[0.75rem] font-bold mb-4 text-text-primary uppercase tracking-wider">Socials</h4>
              <div className="flex items-center gap-4">
                <a href="https://www.linkedin.com/company/autoera-automation" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent smooth-transition" aria-label="LinkedIn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
                {/* Future socials can be added here seamlessly */}
              </div>
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
