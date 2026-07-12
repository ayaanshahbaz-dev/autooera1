import { useRef, useEffect } from 'react';
import { Check, Star, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Pricing() {
  const sectionRef = useRef(null);

  const tiers = [
    {
      id: 'starter',
      name: 'AI Starter System',
      desc: 'For businesses that need their first AI touchpoint — a chat assistant that qualifies and responds.',
      price: '$1,200', // PLACEHOLDER_PRICING
      features: [
        'AI chat widget (AURA-lite)',
        'Lead qualification via chat',
        'Calendar booking integration',
        'Basic knowledge base (up to 10 docs)',
        'Email notification on new leads',
        '2 weeks build + launch support'
      ],
      ctaText: 'Get Started',
      isPopular: false
    },
    {
      id: 'growth',
      name: 'Growth System',
      desc: 'For businesses ready to fully automate lead response, booking, and follow-up.',
      price: '$2,800', // PLACEHOLDER_PRICING
      features: [
        'Everything in AI Starter',
        'Full RAG-powered knowledge base',
        'WhatsApp + email automation',
        'CRM/Sheets integration',
        'n8n custom workflows',
        'Real-time calendar sync',
        '4 weeks build + launch support'
      ],
      ctaText: 'Get Started',
      isPopular: true
    },
    {
      id: 'custom',
      name: 'Custom Engineering',
      desc: "For businesses that need a fully custom AI system — dashboards, multi-channel automation, or something we haven't built yet.",
      price: 'Custom Quote',
      features: [
        'Everything in Growth System',
        'Custom admin dashboard',
        'Multi-agent AI workflows',
        'Database architecture',
        'Ongoing optimization retainer option'
      ],
      ctaText: 'Book a Call',
      isPopular: false
    }
  ];

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (!prefersReducedMotion) {
      const ctx = gsap.context(() => {
        
        const cards = gsap.utils.toArray('.pricing-card');
        
        // Ensure standard staggered fade-up
        gsap.fromTo(cards,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.15,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 75%'
            }
          }
        );

        // Subtle extra pop for the middle popular card
        const popularCard = document.querySelector('.pricing-card.is-popular');
        if (popularCard) {
          gsap.fromTo(popularCard,
            { scale: 0.95 },
            {
              scale: 1,
              duration: 0.6,
              ease: 'back.out(1.5)',
              scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 75%'
              },
              delay: 0.3 // Sync with its stagger index
            }
          );
        }

      }, sectionRef);

      return () => ctx.revert();
    }
  }, []);

  return (
    <section 
      id="pricing" 
      ref={sectionRef}
      className="py-32 bg-bg-primary relative overflow-hidden flex flex-col items-center"
    >
      <div className="container max-w-[1200px] flex flex-col items-center px-4">
        
        {/* Section Header */}
        <div className="text-center max-w-[800px] mx-auto mb-20 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_var(--color-accent-glow)]" />
            <span className="text-[0.65rem] font-bold text-accent tracking-widest uppercase">PRICING</span>
          </div>

          <h2 className="text-[clamp(2.5rem,4vw,3.5rem)] mb-6 text-white font-heading font-bold tracking-tight leading-[1.1]">
            Transparent Pricing For <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB340] to-[#FF9500]">Every Stage</span>
          </h2>
          
          <p className="text-[1.05rem] text-text-secondary max-w-[640px] leading-relaxed mx-auto">
            Choose the package that fits your business. Every system is custom-built for your needs.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full max-w-[1100px] items-center">
          {tiers.map((tier) => (
            <div 
              key={tier.id}
              className={`pricing-card glass-card w-full rounded-[24px] p-8 md:p-10 flex flex-col relative group transition-all duration-300 ${
                tier.isPopular 
                  ? 'is-popular border-accent/40 shadow-[0_0_40px_rgba(255,149,0,0.1)] hover:border-accent/60 hover:shadow-[0_0_50px_rgba(255,149,0,0.15)] z-10 scale-[1.02] lg:scale-[1.05]' 
                  : 'border-white/5 hover:border-white/20'
              }`}
            >
              
              {/* Popular Badge */}
              {tier.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#121217] border border-accent/40 text-accent text-[0.7rem] font-bold uppercase tracking-wider px-4 py-1.5 rounded-full flex items-center gap-1.5 shadow-[0_4px_20px_rgba(255,149,0,0.2)]">
                  <Star size={12} className="fill-accent text-accent" />
                  Most Popular
                </div>
              )}

              {/* Tier Header */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-text-primary mb-3">
                  {tier.name}
                </h3>
                <p className="text-[0.85rem] text-text-secondary leading-relaxed min-h-[40px]">
                  {tier.desc}
                </p>
              </div>

              {/* Price */}
              <div className="mb-8 pb-8 border-b border-white/5">
                <div className="text-[0.85rem] font-bold text-text-tertiary mb-1">Starting From</div>
                <div className="text-4xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FFB340] to-[#FF9500]">
                  {tier.price}
                </div>
              </div>

              {/* Features List */}
              <div className="flex flex-col gap-4 mb-10 flex-1">
                {tier.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check size={16} className="text-accent shrink-0 mt-0.5" />
                    <span className="text-[0.85rem] text-text-primary/90">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              {tier.isPopular ? (
                // Primary Gradient Button
                <a 
                  href="#cta" 
                  className="mt-auto w-full inline-flex items-center justify-center gap-2 h-[52px] px-9 rounded-lg font-bold text-[0.95rem] bg-gradient-to-b from-[#FFB340] to-[#FF9500] text-black hover:from-[#FFC366] hover:to-[#FF9500] transition-colors shadow-[0_0_24px_rgba(255,149,0,0.35),inset_0_1px_1px_rgba(255,255,255,0.4)]"
                >
                  {tier.ctaText}
                </a>
              ) : (
                // Secondary Hollow Button
                <a 
                  href="#cta" 
                  className="mt-auto w-full inline-flex items-center justify-center gap-2 h-[52px] px-9 rounded-lg font-medium text-[0.95rem] bg-white/5 backdrop-blur-md border border-white/10 text-text-primary hover:bg-white/10 transition-colors shadow-[0_4px_20px_rgba(0,0,0,0.2)]"
                >
                  {tier.ctaText}
                </a>
              )}

            </div>
          ))}
        </div>
        
        {/* Bottom Note */}
        <p className="mt-12 text-[0.8rem] text-text-tertiary text-center max-w-[500px]">
          Final pricing confirmed on your discovery call based on scope.
        </p>

      </div>
    </section>
  );
}
