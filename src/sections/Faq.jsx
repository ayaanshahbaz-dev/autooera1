import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap, ScrollTrigger } from '../utils/gsap';


const faqs = [
  {
    q: "What kinds of AI agents does AutoEra build?",
    a: "AutoEra engineers several specific types of AI agents: an AI Lead Management System that captures and qualifies prospects automatically; a Customer Support AI Agent that handles inbound queries and ticket routing; a Sales Qualification Agent that scores leads and books discovery calls; an Internal Knowledge Assistant powered by RAG that answers team questions from your own documents; and an AI Voice Agent for inbound call routing and outbound qualification. Each is built as production-grade software, not no-code templates."
  },
  {
    q: "What does an AI engineering studio do?",
    a: "An AI engineering studio designs and builds custom artificial intelligence systems and automations for businesses. AutoEra specifically engineers AI receptionists, AI Lead Management Systems, Customer Support AI Agents, and intelligent operational infrastructure."
  },
  {
    q: "How is AutoEra different from an automation agency?",
    a: "AutoEra is an engineering studio that builds robust, scalable software systems rather than relying on fragile no-code pipes. We deliver custom API middleware, Dockerized microservices, and dedicated databases that you fully own."
  },
  {
    q: "What AI models does AutoEra use?",
    a: "AutoEra uses models from OpenAI, Anthropic, Google Gemini, and open-source alternatives depending on the specific business requirement. We integrate these models with vector databases for Retrieval-Augmented Generation (RAG) to ensure accuracy, and connect them to live business systems via Model Context Protocol (MCP) Integrations for real-time data access."
  },
  {
    q: "Can AutoEra integrate AI with my existing business systems?",
    a: "Yes, AutoEra can integrate custom AI systems with your existing software as long as there is a REST API, SOAP interface, or direct database access. We engineer custom middleware bridges to connect legacy platforms securely."
  },
  {
    q: "Who owns the code when working with AutoEra?",
    a: "You receive full ownership of the source code upon final deployment. AutoEra provides the complete codebase, Dockerfiles, environment configurations, and technical documentation to ensure no vendor lock-in."
  },
  {
    q: "How long does it take AutoEra to build a custom AI system?",
    a: "It typically takes AutoEra 6 to 12 weeks to build and deploy a foundational AI system, depending on the project scope. We deliver functional milestones every two weeks during the engineering process."
  },
  {
    q: "How much does a custom AI system from AutoEra cost?",
    a: "The cost of a custom AI system depends entirely on the technical complexity and scope of the project. Every project is scoped individually during a discovery call."
  },
  {
    q: "Where is AutoEra located and do they work internationally?",
    a: "AutoEra operates globally and works with businesses internationally. We currently have active projects with clients based in Austin, Manchester, and Sydney."
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
      className="faq-item glass-card rounded-[16px] overflow-hidden group smooth-transition [&_summary::-webkit-details-marker]:hidden"
      open={isOpen || isRendering}
      onClick={(e) => {
        e.preventDefault(); // Stop native immediate toggle
        onToggle();
      }}
    >
      <summary className="list-none flex items-center justify-between p-6 cursor-pointer select-none outline-none">
        <h3 className={`font-bold pr-8 smooth-transition ${isOpen ? 'text-accent' : 'text-text-primary group-hover:text-accent'}`}>
          {faq.q}
        </h3>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 smooth-transition ${isOpen ? 'bg-accent/20 border-accent/30' : 'bg-white/5 border border-white/10 group-hover:border-accent/30'}`}>
          <ChevronDown 
            size={16} 
            className={`smooth-transition ${isOpen ? 'rotate-180 text-accent' : 'text-text-secondary group-hover:text-accent'}`} 
            aria-hidden="true"
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
