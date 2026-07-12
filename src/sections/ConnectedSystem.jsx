import { useRef, useEffect } from 'react';
import { 
  MessageSquare, UserCheck, Activity, Zap, Mail, 
  Calendar, LayoutDashboard, GitMerge, Users, 
  CheckCircle2, ArrowRight, User, Bot, Database
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ConnectedSystem() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (!prefersReducedMotion) {
      const ctx = gsap.context(() => {
        gsap.fromTo('.cs-heading', 
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

        gsap.fromTo('.cs-card', 
          { opacity: 0, y: 30 },
          { 
            opacity: 1, 
            y: 0, 
            duration: 0.5, 
            stagger: 0.1, 
            ease: 'power3.out',
            scrollTrigger: {
              trigger: '.cs-grid',
              start: 'top 85%',
            }
          }
        );
        
        gsap.fromTo('.cs-cta', 
          { opacity: 0, y: 20 },
          { 
            opacity: 1, 
            y: 0, 
            duration: 0.5, 
            ease: 'power2.out',
            scrollTrigger: {
              trigger: '.cs-grid',
              start: 'bottom 90%',
            }
          }
        );
      }, sectionRef);

      return () => ctx.revert();
    }
  }, []);

  return (
    <section 
      id="connected-system" 
      ref={sectionRef}
      className="py-32 bg-bg-primary border-t border-white/5 relative overflow-hidden flex flex-col items-center"
    >
      <div className="container max-w-[1200px] flex flex-col items-center px-4">
        
        {/* Section Header */}
        <div className="cs-heading text-center max-w-[800px] mx-auto mb-20 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_var(--color-accent-glow)]" />
            <span className="text-[0.65rem] font-bold text-text-tertiary tracking-widest uppercase">CONNECTED SYSTEM</span>
          </div>

          <h2 className="text-[clamp(2.5rem,4.5vw,3.5rem)] mb-6 text-white font-heading font-bold tracking-tight leading-[1.1]">
            One System. Every Part of Your Business Talks to Every Other Part.
          </h2>
          
          <p className="text-[1.1rem] text-text-secondary max-w-[640px] leading-relaxed mx-auto">
            Your website captures the lead. AURA qualifies it. Your calendar books it. Your CRM tracks it. Nothing falls through — because it's one engineered system, not five disconnected tools.
          </p>
        </div>

        {/* Grid */}
        <div className="cs-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full mb-16">
          
          {/* 1. AI Chat Widget (Larger) */}
          <div className="cs-card lg:col-span-2 bg-[#121217] border border-white/5 rounded-2xl p-7 flex flex-col hover:border-accent/30 hover:shadow-[0_0_30px_rgba(255,149,0,0.05)] transition-all group overflow-hidden relative">
            <div className="flex items-center gap-2 mb-6">
              <MessageSquare size={18} className="text-accent" />
              <h3 className="font-bold text-text-primary text-[1.05rem]">AI Chat Widget</h3>
            </div>
            
            <div className="flex-1 bg-[#0A0A0A] border border-white/10 rounded-xl overflow-hidden shadow-lg mt-2 relative">
              {/* Browser Chrome */}
              <div className="h-10 bg-[#121217] border-b border-white/5 flex items-center px-4 gap-4">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="bg-[#0A0A0A] border border-white/5 rounded px-6 py-1 text-[0.65rem] text-text-tertiary flex items-center gap-2">
                    autoera.site
                  </div>
                </div>
              </div>
              {/* Fake Chat */}
              <div className="p-5 flex flex-col gap-4">
                <div className="flex gap-3 max-w-[80%]">
                  <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center shrink-0">
                    <User size={14} className="text-text-secondary" />
                  </div>
                  <div className="bg-[#1a1a24] border border-white/5 p-3 rounded-2xl rounded-tl-sm text-[0.8rem] text-text-secondary">
                    I need a system to handle incoming leads. Right now they sit in my inbox for hours.
                  </div>
                </div>
                <div className="flex gap-3 max-w-[80%] self-end flex-row-reverse">
                  <div className="w-8 h-8 rounded bg-accent/10 flex items-center justify-center shrink-0">
                    <Bot size={14} className="text-accent" />
                  </div>
                  <div className="bg-accent/10 border border-accent/20 p-3 rounded-2xl rounded-tr-sm text-[0.8rem] text-accent font-medium shadow-[0_0_15px_rgba(255,149,0,0.1)]">
                    I can help with that. Our AI can respond instantly, qualify them, and book them directly to your calendar. How many leads do you typically get a week?
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Lead Qualification */}
          <div className="cs-card bg-[#121217] border border-white/5 rounded-2xl p-7 flex flex-col hover:border-accent/30 hover:shadow-[0_0_30px_rgba(255,149,0,0.05)] transition-all group overflow-hidden">
            <div className="flex items-center gap-2 mb-6">
              <UserCheck size={18} className="text-accent" />
              <h3 className="font-bold text-text-primary text-[1.05rem]">Lead Qualification</h3>
            </div>
            <div className="flex-1 bg-[#0A0A0A] border border-white/5 rounded-xl p-5 flex flex-col gap-3 justify-center">
              <div className="flex items-center gap-3 bg-[#121217] p-3 rounded-lg border border-white/5">
                <CheckCircle2 size={14} className="text-accent shrink-0" />
                <span className="text-[0.75rem] text-text-secondary">Business Type: B2B SaaS</span>
              </div>
              <div className="flex items-center gap-3 bg-[#121217] p-3 rounded-lg border border-white/5">
                <CheckCircle2 size={14} className="text-accent shrink-0" />
                <span className="text-[0.75rem] text-text-secondary">Budget: $5k - $10k</span>
              </div>
              <div className="flex items-center gap-3 bg-[#121217] p-3 rounded-lg border border-white/5">
                <CheckCircle2 size={14} className="text-accent shrink-0" />
                <span className="text-[0.75rem] text-text-secondary">Timeline: Immediate</span>
              </div>
            </div>
          </div>

          {/* 3. Pipeline Sync */}
          <div className="cs-card bg-[#121217] border border-white/5 rounded-2xl p-7 flex flex-col hover:border-accent/30 hover:shadow-[0_0_30px_rgba(255,149,0,0.05)] transition-all group overflow-hidden">
            <div className="flex items-center gap-2 mb-6">
              <Activity size={18} className="text-accent" />
              <h3 className="font-bold text-text-primary text-[1.05rem]">Pipeline Sync</h3>
            </div>
            <div className="flex-1 bg-[#0A0A0A] border border-white/5 rounded-xl p-5 flex flex-col justify-center gap-4 relative">
              <div className="absolute left-[31px] top-[40px] bottom-[40px] w-px bg-white/10" />
              <div className="flex items-center gap-4 relative z-10">
                <div className="pipe-step pipe-step-1 w-6 h-6 rounded-full bg-[#121217] border border-white/10 flex items-center justify-center text-[10px] text-text-tertiary">1</div>
                <div className="text-[0.8rem] text-text-secondary pipe-text-1">New Lead</div>
              </div>
              <div className="flex items-center gap-4 relative z-10">
                <div className="pipe-step pipe-step-2 w-6 h-6 rounded-full bg-[#121217] border border-white/10 flex items-center justify-center text-[10px] text-text-tertiary">2</div>
                <div className="text-[0.8rem] text-text-secondary pipe-text-2">Qualified</div>
              </div>
              <div className="flex items-center gap-4 relative z-10">
                <div className="pipe-step pipe-step-3 w-6 h-6 rounded-full bg-[#121217] border border-white/10 flex items-center justify-center text-[10px] text-text-tertiary">3</div>
                <div className="text-[0.8rem] text-text-secondary pipe-text-3">Booked Call</div>
              </div>
            </div>
          </div>

          {/* 4. AI Follow-Up */}
          <div className="cs-card bg-[#121217] border border-white/5 rounded-2xl p-7 flex flex-col hover:border-accent/30 hover:shadow-[0_0_30px_rgba(255,149,0,0.05)] transition-all group overflow-hidden">
            <div className="flex items-center gap-2 mb-6">
              <Zap size={18} className="text-accent" />
              <h3 className="font-bold text-text-primary text-[1.05rem]">AI Follow-Up</h3>
            </div>
            <div className="flex-1 bg-[#0A0A0A] border border-white/5 rounded-xl p-5 flex flex-col justify-center">
              <div className="bg-[#121217] border border-white/10 p-4 rounded-xl flex flex-col gap-3">
                <div className="flex justify-between items-center text-[0.7rem] text-text-tertiary">
                  <span className="flex items-center gap-1.5"><Bot size={12} className="text-accent" /> AI System</span>
                  <span>14s after capture</span>
                </div>
                <div className="text-[0.8rem] text-text-secondary">
                  "Hi Alex, saw you're looking for AI automation. I've reserved a time for us to chat tomorrow if you're free?"
                </div>
              </div>
            </div>
          </div>

          {/* 5. WhatsApp & Email Automation */}
          <div className="cs-card bg-[#121217] border border-white/5 rounded-2xl p-7 flex flex-col hover:border-accent/30 hover:shadow-[0_0_30px_rgba(255,149,0,0.05)] transition-all group overflow-hidden">
            <div className="flex items-center gap-2 mb-6">
              <Mail size={18} className="text-accent" />
              <h3 className="font-bold text-text-primary text-[1.05rem]">WhatsApp & Email</h3>
            </div>
            <div className="flex-1 bg-[#0A0A0A] border border-white/5 rounded-xl p-5 flex flex-col justify-center gap-3">
              <div className="flex items-center justify-between bg-[#121217] border border-white/5 px-4 py-3 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent shadow-[0_0_5px_rgba(255,149,0,0.5)]" />
                  <span className="text-[0.75rem] text-text-secondary">Welcome Email</span>
                </div>
                <span className="text-[0.65rem] text-text-tertiary font-mono">Day 1</span>
              </div>
              <div className="flex items-center justify-between bg-[#121217] border border-white/5 px-4 py-3 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent shadow-[0_0_5px_rgba(255,149,0,0.5)]" />
                  <span className="text-[0.75rem] text-text-secondary">Value SMS</span>
                </div>
                <span className="text-[0.65rem] text-text-tertiary font-mono">Day 2</span>
              </div>
            </div>
          </div>

          {/* 6. Calendar Sync */}
          <div className="cs-card bg-[#121217] border border-white/5 rounded-2xl p-7 flex flex-col hover:border-accent/30 hover:shadow-[0_0_30px_rgba(255,149,0,0.05)] transition-all group overflow-hidden">
            <div className="flex items-center gap-2 mb-6">
              <Calendar size={18} className="text-accent" />
              <h3 className="font-bold text-text-primary text-[1.05rem]">Calendar Sync</h3>
            </div>
            <div className="flex-1 bg-[#0A0A0A] border border-white/5 rounded-xl p-5 flex items-center justify-center">
              <div className="grid grid-cols-4 gap-2 w-full">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className={`h-8 rounded bg-[#121217] border border-white/5 flex items-center justify-center ${i === 5 ? 'bg-accent/20 border-accent/40 text-accent font-bold shadow-[0_0_10px_rgba(255,149,0,0.2)]' : 'text-text-tertiary'}`}>
                    <span className="text-[0.65rem]">{9 + i}:00</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 7. Owner Dashboard */}
          <div className="cs-card bg-[#121217] border border-white/5 rounded-2xl p-7 flex flex-col hover:border-accent/30 hover:shadow-[0_0_30px_rgba(255,149,0,0.05)] transition-all group overflow-hidden">
            <div className="flex items-center gap-2 mb-6">
              <LayoutDashboard size={18} className="text-accent" />
              <h3 className="font-bold text-text-primary text-[1.05rem]">Owner Dashboard</h3>
            </div>
            <div className="flex-1 bg-[#0A0A0A] border border-white/5 rounded-xl p-4 grid grid-cols-2 gap-3">
              <div className="bg-[#121217] border border-white/5 rounded-lg p-3 flex flex-col justify-center">
                <div className="text-2xl font-bold text-text-primary mb-1">124</div>
                <div className="text-[0.65rem] text-text-secondary">Leads Captured</div>
              </div>
              <div className="bg-[#121217] border border-white/5 rounded-lg p-3 flex flex-col justify-center">
                <div className="text-2xl font-bold text-text-primary mb-1">28</div>
                <div className="text-[0.65rem] text-text-secondary">Calls Booked</div>
              </div>
              <div className="bg-[#121217] border border-white/5 rounded-lg p-3 flex flex-col justify-center col-span-2">
                <div className="flex justify-between items-center mb-2">
                  <div className="text-[0.7rem] text-text-secondary">Automations Running</div>
                  <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                </div>
                <div className="h-1.5 w-full bg-[#0A0A0A] rounded-full overflow-hidden">
                  <div className="h-full bg-accent w-[75%]" />
                </div>
              </div>
            </div>
          </div>

          {/* 8. n8n Workflow Engine */}
          <div className="cs-card bg-[#121217] border border-white/5 rounded-2xl p-7 flex flex-col hover:border-accent/30 hover:shadow-[0_0_30px_rgba(255,149,0,0.05)] transition-all group overflow-hidden">
            <div className="flex items-center gap-2 mb-6">
              <GitMerge size={18} className="text-accent" />
              <h3 className="font-bold text-text-primary text-[1.05rem]">n8n Workflow Engine</h3>
            </div>
            <div className="flex-1 bg-[#0A0A0A] border border-white/5 rounded-xl p-5 flex items-center justify-center relative">
              <div className="flex items-center justify-center gap-4 w-full relative">
                <div className="w-10 h-10 rounded-lg bg-[#121217] border border-white/10 flex items-center justify-center z-10 relative workflow-node-1 transition-all">
                  <MessageSquare size={16} className="text-text-secondary" />
                </div>
                <div className="h-px bg-white/10 flex-1 relative">
                  <div className="absolute top-1/2 -translate-y-1/2 w-6 h-6 rounded bg-[#1a1a24] border border-accent flex items-center justify-center shadow-[0_0_10px_rgba(255,149,0,0.5)] z-20 animate-workflow-zap">
                    <Zap size={12} className="text-accent" />
                  </div>
                </div>
                <div className="w-10 h-10 rounded-lg bg-[#121217] border border-white/10 flex items-center justify-center z-10 relative workflow-node-2 transition-all">
                  <Database size={16} className="text-text-secondary" />
                </div>
              </div>
            </div>
          </div>

          {/* 9. Client Portal */}
          <div className="cs-card bg-[#121217] border border-white/5 rounded-2xl p-7 flex flex-col transition-all group overflow-hidden opacity-70">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Users size={18} className="text-accent" />
                <h3 className="font-bold text-text-primary text-[1.05rem]">Client Portal</h3>
              </div>
              <span className="px-2.5 py-1 rounded bg-accent/10 border border-accent/20 text-accent text-[0.6rem] font-bold uppercase tracking-wider">
                In Development
              </span>
            </div>
            <div className="flex-1 flex items-center text-[0.85rem] text-text-secondary leading-relaxed border border-white/5 rounded-xl bg-[#0A0A0A] p-5 text-center">
              A secure dashboard where clients track their system's status, view activity logs, and request changes — coming soon.
            </div>
          </div>

        </div>

        {/* Bottom CTA */}
        <div className="cs-cta flex justify-center mt-6">
          <a 
            href="#cta" 
            className="inline-flex items-center justify-center gap-2 h-[52px] px-9 rounded-lg font-bold text-[0.95rem] bg-gradient-to-b from-[#FFB340] to-[#FF9500] text-black hover:from-[#FFC366] hover:to-[#FF9500] transition-colors shadow-[0_0_24px_rgba(255,149,0,0.35),inset_0_1px_1px_rgba(255,255,255,0.4)] hover:shadow-[0_0_32px_rgba(255,149,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.4)]"
          >
            Book a Free Strategy Call <ArrowRight size={16} />
          </a>
        </div>

      </div>

      {/* Animations Style Block */}
      <style>{`
        /* Card Hover Edge Glow */
        .cs-card::after {
          content: '';
          position: absolute;
          inset: 0px;
          border-radius: inherit;
          padding: 1px;
          background: linear-gradient(90deg, transparent 0%, rgba(255,149,0,0.8) 50%, transparent 100%);
          background-size: 200% 100%;
          animation: card-shimmer 2.5s infinite linear;
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
          z-index: 20;
        }
        .cs-card:hover::after {
          opacity: 1;
        }
        @keyframes card-shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }

        /* Pipeline Sequence */
        .pipe-step {
          transition: all 0.3s ease;
        }
        .pipe-step-1 { animation: pipe-activate 6s infinite 0s; }
        .pipe-step-2 { animation: pipe-activate 6s infinite 2s; }
        .pipe-step-3 { animation: pipe-activate 6s infinite 4s; }

        @keyframes pipe-activate {
          0%, 33%, 100% { 
            background-color: #121217; 
            border-color: rgba(255,255,255,0.1); 
            color: #52525b; 
            box-shadow: none;
            transform: scale(1);
          }
          5%, 28% { 
            background-color: #FF9500; 
            border-color: #0A0A0A; 
            border-width: 4px;
            color: transparent; 
            box-shadow: 0 0 15px rgba(255,149,0,0.6);
            transform: scale(1.15);
          }
        }

        .pipe-text-1 { animation: pipe-text-active 6s infinite 0s; }
        .pipe-text-2 { animation: pipe-text-active 6s infinite 2s; }
        .pipe-text-3 { animation: pipe-text-active 6s infinite 4s; }

        @keyframes pipe-text-active {
          0%, 33%, 100% { color: #A1A1AA; opacity: 0.5; font-weight: normal; }
          5%, 28% { color: #FF9500; opacity: 1; font-weight: bold; }
        }

        /* Workflow Engine */
        @keyframes workflow-zap {
          0% { left: 0%; transform: translate(-50%, -50%) scale(0.8); opacity: 0; }
          10% { left: 10%; transform: translate(-50%, -50%) scale(1); opacity: 1; }
          90% { left: 90%; transform: translate(-50%, -50%) scale(1); opacity: 1; }
          100% { left: 100%; transform: translate(-50%, -50%) scale(0.8); opacity: 0; }
        }
        .animate-workflow-zap {
          animation: workflow-zap 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
        @keyframes workflow-node-pulse {
          0%, 100% { box-shadow: none; border-color: rgba(255,255,255,0.1); }
          10%, 30% { box-shadow: 0 0 15px rgba(255,149,0,0.3); border-color: rgba(255,149,0,0.5); }
        }
        .workflow-node-1 { animation: workflow-node-pulse 2s infinite 0s; }
        .workflow-node-2 { animation: workflow-node-pulse 2s infinite 1s; }
      `}</style>
    </section>
  );
}
