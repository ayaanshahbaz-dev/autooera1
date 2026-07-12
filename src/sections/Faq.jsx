import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    q: "What AI models do you use?",
    a: "We use OpenAI, Gemini, and open-source models via OpenRouter depending on the use case. For retrieval-augmented generation (RAG), we pair LLMs with a vector database so responses stay grounded in your actual business documentation, not generic guesses."
  },
  {
    q: "How do your integrations work?",
    a: "We build middleware using Python/FastAPI or n8n — hosted on secure infrastructure. Every integration uses strict API contracts and webhooks with retry logic. No fragile Zapier pipes."
  },
  {
    q: "Is the architecture scalable?",
    a: "Yes. Our backend services are stateless and containerised via Docker. PostgreSQL is our primary data store and scales independently from the application layer."
  },
  {
    q: "Can it connect to our existing systems?",
    a: "If your legacy system has a REST API, SOAP interface, or direct database access, we can connect to it. If not, we can engineer custom bridges."
  },
  {
    q: "Do you provide the source code?",
    a: "Yes. Upon final deployment you receive full ownership — complete codebase, Dockerfiles, environment configs, and technical documentation. No lock-in."
  },
  {
    q: "How long does a system take to build?",
    a: "A foundational system typically takes 6-12 weeks depending on scope. We work in two-week sprints, so you see progress immediately, not at the end."
  },
  {
    q: "What's the cost?",
    a: "See the Pricing section above — every project is scoped individually based on complexity, with final numbers confirmed on your discovery call."
  },
  {
    q: "Do you work with businesses outside the US?",
    a: "Yes. Our systems are location-agnostic. We currently work with businesses in Austin, Manchester, and Sydney."
  }
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0); // First item open by default
  const sectionRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!prefersReducedMotion) {
      const ctx = gsap.context(() => {
        const items = gsap.utils.toArray('.faq-item');
        gsap.fromTo(items,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.05,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%'
            }
          }
        );
      }, sectionRef);
      return () => ctx.revert();
    }
  }, []);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <section 
      id="faq" 
      ref={sectionRef}
      className="py-32 bg-bg-primary relative flex flex-col items-center"
    >
      {/* SEO JSON-LD injection */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      
      <div className="container px-4 flex flex-col items-center">
        
        {/* Section Header */}
        <div className="text-center max-w-[800px] mx-auto mb-16 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_var(--color-accent-glow)]" />
            <span className="text-[0.65rem] font-bold text-accent tracking-widest uppercase">FAQ</span>
          </div>

          <h2 className="text-[clamp(2.5rem,4.5vw,3.5rem)] mb-6 text-white font-heading font-bold tracking-tight leading-[1.1]">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB340] to-[#FF9500]">Questions</span>
          </h2>
          
          <p className="text-[1.05rem] text-text-secondary max-w-[640px] leading-relaxed mx-auto">
            Everything you need to know about working with us.
          </p>
        </div>

        {/* Accordion List */}
        <div className="w-full max-w-[760px] flex flex-col gap-4">
          {faqs.map((faq, idx) => (
            <AccordionItem 
              key={idx} 
              faq={faq} 
              isOpen={openIndex === idx} 
              onToggle={() => setOpenIndex(openIndex === idx ? -1 : idx)} 
            />
          ))}
        </div>

      </div>
    </section>
  );
}

function AccordionItem({ faq, isOpen, onToggle }) {
  const [isRendering, setIsRendering] = useState(isOpen);

  useEffect(() => {
    if (isOpen) setIsRendering(true);
  }, [isOpen]);

  const handleAnimationComplete = () => {
    if (!isOpen) setIsRendering(false);
  };

  // Determine reduced motion purely for animation duration
  const prefersReducedMotion = typeof window !== 'undefined' 
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
    : false;

  return (
    <details
      className="faq-item glass-card rounded-[16px] overflow-hidden group transition-colors duration-300 border border-white/5 hover:border-white/10 [&_summary::-webkit-details-marker]:hidden"
      open={isOpen || isRendering}
      onClick={(e) => {
        e.preventDefault(); // Stop native immediate toggle
        onToggle();
      }}
    >
      <summary className="list-none flex items-center justify-between p-6 cursor-pointer select-none outline-none">
        <h3 className={`font-bold pr-8 transition-colors duration-300 ${isOpen ? 'text-accent' : 'text-text-primary group-hover:text-accent'}`}>
          {faq.q}
        </h3>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen ? 'bg-accent/20 border-accent/30' : 'bg-white/5 border border-white/10 group-hover:border-accent/30'}`}>
          <ChevronDown 
            size={16} 
            className={`transition-transform duration-300 ${isOpen ? 'rotate-180 text-accent' : 'text-text-secondary group-hover:text-accent'}`} 
          />
        </div>
      </summary>
      
      <AnimatePresence initial={false} onExitComplete={handleAnimationComplete}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.3, ease: 'easeInOut' }}
          >
            <div className="px-6 pb-6 pt-2 text-[0.95rem] text-text-secondary leading-relaxed border-t border-white/5">
              {faq.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </details>
  );
}
