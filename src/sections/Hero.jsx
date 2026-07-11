import { useRef, useEffect } from 'react';
import { ArrowRight, Bot, Database, Zap, Clock, Activity, CheckCircle2, ChevronRight, User, LineChart, BarChart } from 'lucide-react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function DashboardMockup() {
  return (
    <div className="w-full max-w-[1100px] mx-auto mt-16 opacity-0 translate-y-8 dashboard-container relative">
      
      {/* Floating Popups */}
      <div className="absolute top-[35%] -left-[5%] z-20 bg-[#0c0c11] border border-white/10 rounded-lg p-3 shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex items-center gap-3 animate-[float_4s_ease-in-out_infinite]">
        <div className="w-8 h-8 rounded bg-[#27C93F]/10 flex items-center justify-center">
          <CheckCircle2 size={16} className="text-[#27C93F]" />
        </div>
        <div className="flex flex-col text-left">
          <span className="text-[0.75rem] font-bold text-text-primary">New Lead</span>
          <span className="text-[0.65rem] text-text-tertiary">Auto-qualified by AI</span>
        </div>
      </div>
      
      <div className="absolute top-[25%] -right-[2%] z-20 bg-[#0c0c11] border border-white/10 rounded-lg p-3 shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex items-center gap-3 animate-[float_5s_ease-in-out_infinite_1s]">
        <div className="w-8 h-8 rounded bg-accent/10 flex items-center justify-center">
          <Zap size={16} className="text-accent" />
        </div>
        <div className="flex flex-col text-left">
          <span className="text-[0.75rem] font-bold text-text-primary">Workflow Active</span>
          <span className="text-[0.65rem] text-text-tertiary">12 automations running</span>
        </div>
      </div>

      {/* Browser Chrome */}
      <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.8),0_0_60px_rgba(255,149,0,0.06)] relative z-10">
        
        <div className="h-12 bg-[#0A0A0A] border-b border-white/5 flex items-center px-5 relative justify-between">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
            <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
            <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
          </div>
          
          <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2 bg-[#141414] border border-white/5 rounded-md px-6 py-1.5 text-[0.75rem] text-text-secondary">
            <User size={12} className="text-text-tertiary" />
            dashboard.autoera.site
          </div>
          
          <div className="flex items-center gap-3">
            <div className="relative">
              <Activity size={16} className="text-text-secondary" />
              <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-accent border-2 border-[#0A0A0A]" />
            </div>
            <div className="w-6 h-6 rounded-full bg-accent" />
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="p-6 bg-[#0c0c11] flex flex-col gap-6">
          
          {/* Inner Nav */}
          <div className="flex gap-6 border-b border-white/5 pb-3">
            <div className="text-[0.8rem] font-bold text-text-primary border-b-2 border-accent pb-3 -mb-[13px]">Overview</div>
            <div className="text-[0.8rem] font-medium text-text-tertiary pb-3">Pipeline</div>
            <div className="text-[0.8rem] font-medium text-text-tertiary pb-3">AI Chat</div>
          </div>
          
          {/* Top 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg-[#121217] border border-white/5 rounded-xl p-6 flex flex-col justify-center relative overflow-hidden">
              <div className="flex items-center justify-between text-text-tertiary mb-3">
                <User size={18} />
                <span className="text-xs text-[#27C93F] font-bold flex items-center gap-1">↗ +24%</span>
              </div>
              <div className="text-3xl font-heading font-bold text-text-primary">2,847</div>
              <div className="text-[0.75rem] text-text-secondary mt-1">Leads Captured</div>
            </div>
            
            <div className="bg-[#121217] border border-white/5 rounded-xl p-6 flex flex-col justify-center">
              <div className="flex items-center justify-between text-text-tertiary mb-3">
                <span className="text-lg font-serif italic">$</span>
                <span className="text-xs text-[#27C93F] font-bold flex items-center gap-1">↗ +18%</span>
              </div>
              <div className="text-3xl font-heading font-bold text-text-primary">$184K</div>
              <div className="text-[0.75rem] text-text-secondary mt-1">Revenue Pipeline</div>
            </div>
            
            <div className="bg-[#121217] border border-white/5 rounded-xl p-6 flex flex-col justify-center relative">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(255,149,0,0.1)_0%,transparent_50%)]" />
              <div className="flex items-center justify-between text-text-tertiary mb-3 relative z-10">
                <LineChart size={18} />
                <span className="text-xs text-[#27C93F] font-bold flex items-center gap-1">↗ 8.2%</span>
              </div>
              <div className="text-3xl font-heading font-bold text-text-primary relative z-10">12.4%</div>
              <div className="text-[0.75rem] text-text-secondary mt-1 relative z-10">Conversion Rate</div>
            </div>
          </div>

          {/* Middle Row */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-5">
            {/* Pipeline Chart area */}
            <div className="bg-[#121217] border border-white/5 rounded-xl p-6 flex-1">
              <div className="flex items-center justify-between mb-8 text-[0.85rem] font-bold text-text-primary">
                <span className="flex items-center gap-2"><Activity size={16} className="text-accent" /> CRM Pipeline</span>
                <span className="flex items-center gap-2 text-xs text-[#27C93F]"><span className="w-1.5 h-1.5 rounded-full bg-[#27C93F] animate-pulse" /> Live</span>
              </div>
              
              <div className="flex flex-col gap-5">
                {[
                  { label: 'New Leads', value: 48, width: '90%', color: 'bg-[#407BFF]' },
                  { label: 'Qualified', value: 32, width: '65%', color: 'bg-accent' },
                  { label: 'Proposal Sent', value: 18, width: '40%', color: 'bg-[#00E5FF]' },
                  { label: 'Closed Won', value: 12, width: '25%', color: 'bg-[#27C93F]' },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col gap-2">
                    <div className="flex justify-between text-[0.75rem] text-text-secondary">
                      <span>{item.label}</span>
                      <span className="font-bold text-text-primary">{item.value}</span>
                    </div>
                    <div className="h-1 bg-black/40 rounded-full overflow-hidden">
                      <div className={`h-full ${item.color} rounded-full`} style={{ width: item.width }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Live Feed */}
            <div className="bg-[#121217] border border-white/5 rounded-xl p-6 flex flex-col">
              <div className="flex items-center gap-2 mb-8 text-[0.85rem] font-bold text-text-primary">
                <Zap size={16} className="text-accent" /> Live Feed
              </div>
              
              <div className="flex flex-col gap-6">
                {[
                  { icon: CheckCircle2, color: 'text-[#27C93F]', title: 'New lead qualified', sub: '2s ago' },
                  { icon: User, color: 'text-[#407BFF]', title: 'Call booked — Dr. Smith', sub: '1m ago' },
                  { icon: Zap, color: 'text-accent', title: 'Workflow triggered', sub: '3m ago' },
                  { icon: Database, color: 'text-[#27C93F]', title: 'Invoice paid — $2,400', sub: '8m ago' },
                ].map((event, i) => (
                  <div key={i} className="flex gap-4 items-center">
                    <event.icon size={16} className={event.color} />
                    <div className="text-[0.75rem] text-text-secondary flex-1">{event.title}</div>
                    <div className="text-[0.65rem] font-mono text-text-tertiary">{event.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { icon: BarChart, label: 'Traffic', value: '4.2K', sub: 'This Month' },
              { icon: Clock, label: 'Bookings', value: '14', sub: 'This Week' },
              { icon: Zap, label: 'Automations', value: '38', sub: 'Active' },
              { icon: Clock, label: 'Avg Response', value: '2.4m', sub: 'AI Follow-up' },
            ].map((stat, i) => (
              <div key={i} className="bg-[#121217] border border-white/5 rounded-xl p-5 flex flex-col items-center justify-center text-center">
                <div className="flex items-center gap-1.5 text-[0.7rem] font-medium text-text-secondary mb-2">
                  <stat.icon size={12} className="text-accent" /> {stat.label}
                </div>
                <div className="text-xl font-heading font-bold text-text-primary">{stat.value}</div>
                <div className="text-[0.65rem] text-text-tertiary mt-0.5">{stat.sub}</div>
              </div>
            ))}
          </div>
          
        </div>
      </div>
      <style>{`
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
      `}</style>
    </div>
  );
}

export default function Hero() {
  const sectionRef = useRef(null);
  const headlineRef = useRef(null);
  
  // Floating icons refs
  const floatIcon1 = useRef(null);
  const floatIcon2 = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!prefersReducedMotion) {
      const ctx = gsap.context(() => {
        const tl = gsap.timeline();

        // 1. Pill fades in
        tl.to('.hero-pill', { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }, 0.2);

        // 2. Headline word-by-word reveal
        const words = headlineRef.current.querySelectorAll('.word');
        tl.to(words, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.04,
          ease: 'power3.out'
        }, "-=0.15");

        // 3. Subtext fades up
        tl.to('.hero-subtext', { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }, "-=0.1");

        // 4. CTAs fade up
        tl.to('.hero-ctas', { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }, "-=0.2");

        // 5. Dashboard container fades up
        tl.to('.dashboard-container', { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }, "-=0.1");

        // Floating animations for background icons
        gsap.to(floatIcon1.current, {
          y: -20,
          rotation: 5,
          duration: 4,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut'
        });
        
        gsap.to(floatIcon2.current, {
          y: 15,
          rotation: -10,
          duration: 5,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: 1
        });

      }, sectionRef);

      return () => ctx.revert();
    } else {
      gsap.set('.hero-pill, .hero-subtext, .hero-ctas, .dashboard-container', { opacity: 1, y: 0 });
      gsap.set(headlineRef.current.querySelectorAll('.word'), { opacity: 1, y: 0 });
    }
  }, []);

  const headlineText = "Your business runs on AI — whether you've built it yet or not.";

  return (
    <section 
      id="hero" 
      ref={sectionRef}
      className="min-h-screen flex flex-col items-center pt-[calc(var(--nav-h)+64px)] pb-24 relative overflow-hidden bg-bg-primary"
    >
      {/* Background Radial Gradient Wash */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,149,0,0.06)_0%,rgba(10,10,15,1)_60%)]" />
      </div>

      {/* Floating Background Icons */}
      <div 
        ref={floatIcon1}
        className="absolute top-[25%] left-[10%] xl:left-[15%] p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-md opacity-30 hidden md:block z-0 pointer-events-none"
      >
        <Bot size={24} className="text-accent" />
      </div>
      <div 
        ref={floatIcon2}
        className="absolute top-[45%] right-[10%] xl:right-[15%] p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-md opacity-30 hidden md:block z-0 pointer-events-none"
      >
        <Database size={24} className="text-text-tertiary" />
      </div>

      <div className="container max-w-[1300px] relative z-10 flex flex-col items-center text-center">
        
        {/* Top Copy Section */}
        <div className="max-w-[840px] flex flex-col items-center">
          <div className="hero-pill opacity-0 translate-y-4 inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.2)] rounded-full px-4 py-1.5 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_var(--color-accent-glow)] animate-[pulseDot_2s_infinite]" />
            <span className="text-[0.78rem] font-semibold text-text-primary tracking-[0.06em] uppercase drop-shadow-sm">Now accepting Q3 projects</span>
          </div>
          
          <h1 
            ref={headlineRef}
            className="text-[clamp(3rem,6vw,5.5rem)] mb-7 leading-[1.05] tracking-tighter font-heading font-bold"
          >
            {headlineText.split(' ').map((word, i) => (
              <span key={i} className="inline-block overflow-hidden">
                <span className="word inline-block opacity-0 translate-y-8">{word}</span>
                {i !== headlineText.split(' ').length - 1 && '\u00A0'}
              </span>
            ))}
          </h1>
          
          <p className="hero-subtext opacity-0 translate-y-4 text-[1.15rem] text-text-secondary max-w-[640px] mb-10 leading-relaxed mx-auto">
            AutoEra engineers AI systems that answer your calls, respond to your leads, and automate what's slowing your team down — so you can focus on running your business.
          </p>
          
          <div className="hero-ctas opacity-0 translate-y-4 flex justify-center gap-4 flex-wrap mb-10">
            <a 
              href="#cta" 
              className="inline-flex items-center justify-center gap-2 h-[52px] px-9 rounded-lg font-bold text-[0.95rem] bg-gradient-to-b from-[#FFB340] to-[#FF9500] text-black hover:from-[#FFC366] hover:to-[#FF9500] transition-colors shadow-[0_0_24px_rgba(255,149,0,0.35),inset_0_1px_1px_rgba(255,255,255,0.4)] hover:shadow-[0_0_32px_rgba(255,149,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.4)]"
            >
              Book a Free Strategy Call <ArrowRight size={16} />
            </a>
            <a 
              href="#systems" 
              className="inline-flex items-center justify-center gap-2 h-[52px] px-9 rounded-lg font-medium text-[0.95rem] bg-white/5 backdrop-blur-md border border-white/10 text-text-primary hover:bg-white/10 transition-colors shadow-[0_4px_20px_rgba(0,0,0,0.2)]"
            >
              See What We Build
            </a>
          </div>
        </div>

        {/* Dashboard Mockup Section */}
        <DashboardMockup />

      </div>
    </section>
  );
}
