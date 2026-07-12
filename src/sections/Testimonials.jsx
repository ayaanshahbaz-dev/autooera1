import { Star } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      id: 1,
      quote: "Our response time went from hours to seconds. AURA handles every inquiry instantly, even on weekends.",
      name: "J. Martinez",
      role: "Local Business Owner",
      initial: "J"
    },
    {
      id: 2,
      quote: "We used to lose leads because we missed calls. Now, the system texts them back immediately and books the appointment.",
      name: "Client Name",
      role: "Clinic Manager",
      initial: "C"
    },
    {
      id: 3,
      quote: "The calendar integration is flawless. Leads qualify themselves through the chat widget and show up on our schedule automatically.",
      name: "Sarah T.",
      role: "Consultant",
      initial: "S"
    },
    {
      id: 4,
      quote: "Instead of manual data entry, every lead is instantly synced to our CRM. It saved us countless hours of admin work.",
      name: "Michael R.",
      role: "Agency Founder",
      initial: "M"
    },
    {
      id: 5,
      quote: "The automated email follow-ups keep our pipeline warm without us lifting a finger. It's like having a full-time assistant.",
      name: "Business Owner",
      role: "E-commerce Brand",
      initial: "B"
    },
    {
      id: 6,
      quote: "Having a centralized dashboard to track every lead interaction has given us total visibility into our sales process.",
      name: "David K.",
      role: "Sales Director",
      initial: "D"
    },
    {
      id: 7,
      quote: "The AI knows our business perfectly. It answers complex customer questions using our own documentation.",
      name: "Client Name",
      role: "Service Provider",
      initial: "C"
    },
    {
      id: 8,
      quote: "We stopped paying for generic software. This custom workflow does exactly what we need, exactly how we want it.",
      name: "Elena G.",
      role: "Startup Founder",
      initial: "E"
    }
  ];

  // Duplicate the array to create a seamless infinite loop
  const marqueeItems = [...reviews, ...reviews];

  return (
    <section 
      id="testimonials" 
      className="py-32 bg-bg-primary relative overflow-hidden flex flex-col items-center border-t border-white/5"
    >
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 12px)); } /* 12px accounts for half the 24px gap */
        }
        .animate-marquee {
          animation: marquee 50s linear infinite;
          width: max-content;
        }
        .marquee-container:hover .animate-marquee {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee {
            animation-duration: 200s;
          }
        }
      `}</style>

      <div className="container max-w-[1200px] flex flex-col items-center px-4 mb-16">
        
        {/* Section Header */}
        <div className="text-center max-w-[800px] mx-auto flex flex-col items-center">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_var(--color-accent-glow)]" />
            <span className="text-[0.65rem] font-bold text-accent tracking-widest uppercase">TESTIMONIALS</span>
          </div>

          <h2 className="text-[clamp(2.5rem,4.5vw,3.5rem)] mb-6 text-white font-heading font-bold tracking-tight leading-[1.1]">
            What Working With AutoEra Will <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB340] to-[#FF9500]">Look Like</span>
          </h2>
          
          <p className="text-[1.05rem] text-text-secondary max-w-[640px] leading-relaxed mx-auto mb-4">
            Real feedback from businesses we have helped grow with premium websites and connected systems.
          </p>
        </div>

      </div>

      {/* Infinite Marquee */}
      <div className="w-full overflow-hidden marquee-container relative py-4">
        
        {/* Gradient fades on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-[15vw] bg-gradient-to-r from-bg-primary to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-[15vw] bg-gradient-to-l from-bg-primary to-transparent z-10 pointer-events-none" />

        <div className="flex gap-6 animate-marquee pl-6">
          {marqueeItems.map((review, idx) => (
            <div 
              key={idx} 
              className="glass-card w-[350px] md:w-[400px] shrink-0 p-8 rounded-2xl flex flex-col relative opacity-85 smooth-transition hover:opacity-100"
            >

              {/* Stars */}
              <div className="flex gap-1 mb-6 mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-accent text-accent" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-[0.95rem] text-text-primary leading-relaxed mb-8 flex-1 italic">
                "{review.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-10 h-10 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center text-accent font-bold">
                  {review.initial}
                </div>
                <div className="flex flex-col">
                  <span className="text-[0.9rem] font-bold text-white">{review.name}</span>
                  <span className="text-[0.75rem] text-text-secondary">{review.role}</span>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
