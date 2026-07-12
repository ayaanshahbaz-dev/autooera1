import { useState, useEffect, useRef } from 'react';
import { Menu, X, Bell, Check, Sparkles, Bot, Calendar } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  // Close notifications if click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setNotificationsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const links = [
    { name: 'Systems', path: '#systems' },
    { name: 'Process', path: '#process' },
    { name: 'Projects', path: '#projects' },
    { name: 'Pricing', path: '#pricing' },
    { name: 'FAQ', path: '#faq' },
  ];

  const notifications = [
    {
      id: 1,
      icon: <Sparkles size={16} className="text-[#39D98A]" />,
      bg: "bg-[#39D98A]/10",
      border: "border-[#39D98A]/20",
      title: "AI Voice Agent v2.0",
      time: "Just now",
      desc: "Our newest inbound call handlers now feature sub-500ms latency and 45 languages.",
      linkText: "View Details"
    },
    {
      id: 2,
      icon: <Bot size={16} className="text-[#A78BFA]" />,
      bg: "bg-[#A78BFA]/10",
      border: "border-[#A78BFA]/20",
      title: "New CRM Automation Blueprint",
      time: "2 hours ago",
      desc: "See how our automated lead qualification sequence saves 15 hours a week.",
      linkText: "View Details"
    },
    {
      id: 3,
      icon: <Calendar size={16} className="text-accent" />,
      bg: "bg-accent/10",
      border: "border-accent/20",
      title: "Limited Strategy Slots",
      time: "1 day ago",
      desc: "Only 3 spots left this week for free technical system mapping sessions. Book yours now.",
      linkText: "View Details"
    }
  ];

  const dropdownVariants = {
    hidden: { opacity: 0, scale: 0.95, y: -10, transition: { duration: 0.2 } },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0, 
      transition: { 
        duration: 0.35, 
        ease: [0.16, 1, 0.3, 1],
        when: "beforeChildren",
        staggerChildren: 0.08
      } 
    },
    exit: { opacity: 0, scale: 0.95, y: -10, transition: { duration: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.25, ease: "easeOut" } }
  };

  return (
    <>
      <nav className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 w-[calc(100%-24px)] md:w-[95%] max-w-[1000px] z-50 h-[68px] rounded-[34px] bg-[#111116]/80 backdrop-blur-xl border border-white/5 shadow-[0_24px_50px_rgba(0,0,0,0.4)] px-4 md:px-6 flex items-center justify-between transition-all">
        
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 text-white group" aria-label="AutoEra">
          <div className="w-[34px] h-[34px] rounded-xl bg-gradient-to-br from-[#FFB340] to-[#FF9500] flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(255,149,0,0.3)] group-hover:scale-105 transition-transform">
            <svg viewBox="0 0 24 32" fill="none" className="h-[18px] w-auto">
              <path d="M14 0 L2 18 H10 L8 32 L22 14 H14 L14 0Z" fill="#1a0f00" strokeLinejoin="round" />
            </svg>
          </div>
          <span className="font-heading font-bold text-xl tracking-tight mt-[2px]">AutoEra</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-7">
          {links.map(({ name, path }) => (
            <a
              key={name}
              href={path}
              className="text-[14px] font-semibold text-text-secondary hover:text-white smooth-transition tracking-tight"
            >
              {name}
            </a>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3 md:gap-5">
          
          {/* Notifications */}
          <div className="relative" ref={dropdownRef}>
            <motion.button 
              onClick={() => setNotificationsOpen(!notificationsOpen)}
              whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
              aria-label={notificationsOpen ? 'Close notifications' : 'View notifications'}
              aria-expanded={notificationsOpen}
              aria-haspopup="dialog"
              className={`relative p-2.5 rounded-full smooth-transition ${notificationsOpen ? 'bg-white/10 text-white' : 'text-text-secondary hover:text-white hover:bg-white/5'}`}
            >
              <Bell size={20} aria-hidden="true" />
              <div className="absolute top-2.5 right-2.5 w-2.5 h-2.5 bg-[#39D98A] rounded-full border-[2.5px] border-[#111116]" aria-hidden="true"></div>
            </motion.button>

            {/* Dropdown */}
            <AnimatePresence>
              {notificationsOpen && (
                <motion.div 
                  variants={shouldReduceMotion ? {} : dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  role="dialog"
                  aria-modal="true"
                  aria-label="Notifications"
                  className="absolute top-[calc(100%+20px)] right-[-60px] md:right-0 w-[350px] md:w-[400px] bg-[#0A0A0F] border border-white/10 rounded-[20px] shadow-[0_24px_50px_rgba(0,0,0,0.8)] overflow-hidden"
                >
                  <div className="flex items-center justify-between p-5 border-b border-white/5 bg-[#111116]">
                    <h2 className="font-bold text-white text-base font-heading">Notifications</h2>
                    <motion.button 
                      whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                      whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
                      className="flex items-center gap-1.5 text-[12px] font-medium text-text-secondary hover:text-white smooth-transition"
                    >
                      <Check size={14} /> Mark all read
                    </motion.button>
                  </div>
                  
                  <div className="flex flex-col p-2 max-h-[420px] overflow-y-auto">
                    {notifications.map(notif => (
                      <motion.div 
                        key={notif.id}
                        variants={shouldReduceMotion ? {} : itemVariants}
                        whileHover={shouldReduceMotion ? {} : { scale: 1.01, backgroundColor: "rgba(255,255,255,0.05)" }}
                        whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                        className="p-4 rounded-2xl smooth-transition group cursor-pointer"
                      >
                        <div className="flex gap-4">
                          <div className={`w-11 h-11 rounded-full border ${notif.border} ${notif.bg} flex items-center justify-center shrink-0`}>
                            {notif.icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between mb-1.5">
                              <h4 className="font-bold text-[14.5px] text-white truncate pr-2 tracking-tight">{notif.title}</h4>
                              <span className="text-[11px] font-medium text-text-tertiary whitespace-nowrap mt-0.5">{notif.time}</span>
                            </div>
                            <p className="text-[13px] text-text-secondary leading-snug mb-3 pr-2">
                              {notif.desc}
                            </p>
                            <a href="#" className="text-[13px] font-bold text-accent hover:text-[#ffaa33] smooth-transition inline-flex items-center">
                              {notif.linkText} <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                            </a>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  <div className="p-4 border-t border-white/5 bg-[#111116] text-center">
                    <a href="#" className="text-[13px] font-bold text-text-secondary hover:text-white smooth-transition inline-flex items-center group">
                      View full schedule <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* CTA */}
          <motion.a 
            href="#cta" 
            whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
            className="hidden md:flex h-11 items-center px-6 rounded-full bg-gradient-to-r from-[#FFB340] to-[#FF9500] text-[#1a0f00] font-bold text-[14px] hover:shadow-[0_4px_20px_rgba(255,149,0,0.3)] smooth-transition tracking-tight"
          >
            Book Free Strategy Call
          </motion.a>

          {/* Mobile Menu Toggle */}
          <motion.button
            whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-drawer"
            className="lg:hidden w-11 h-11 flex items-center justify-center rounded-full bg-white/5 text-text-secondary hover:text-white hover:bg-white/10 smooth-transition"
            onClick={() => setMobileOpen(o => !o)}
          >
            {mobileOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </motion.button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div 
            id="mobile-nav-drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -20 }}
            animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 top-[88px] bg-[#0A0A0F]/95 backdrop-blur-2xl p-6 flex flex-col gap-6 z-40 border-t border-white/10"
          >
            <div className="flex flex-col gap-6 pt-6">
              {links.map(({ name, path }, i) => (
                <motion.a 
                  key={name} 
                  href={path} 
                  onClick={() => setMobileOpen(false)}
                  initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: -10 }}
                  animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + (i * 0.05), duration: 0.2 }}
                  className="text-[28px] font-heading font-bold text-white hover:text-accent smooth-transition tracking-tight"
                >
                  {name}
                </motion.a>
              ))}
            </div>
            
            <div className="mt-auto pb-10">
              <motion.a 
                href="#cta"
                onClick={() => setMobileOpen(false)}
                whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
                className="flex justify-center items-center h-[60px] bg-gradient-to-r from-[#FFB340] to-[#FF9500] text-[#1a0f00] rounded-2xl font-bold text-[18px] hover:shadow-[0_8px_30px_rgba(255,149,0,0.3)] smooth-transition tracking-tight"
              >
                Book Free Strategy Call
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
