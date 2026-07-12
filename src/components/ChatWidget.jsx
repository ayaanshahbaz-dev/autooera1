import { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, ChevronLeft, Bot, Paperclip, Smile, FileText, Calendar, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [view, setView] = useState('home'); // 'home' or 'chat'
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      text: "Hi, I'm AURA! 👋 AutoEra's AI Business Consultant — ask me anything, or let's find the right system for your business.",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  
  const messagesEndRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  const WEBHOOK_URL = "https://engraved-humongous-backboned.ngrok-free.dev/webhook/aura";

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, view]);

  const toggleWidget = () => setIsOpen(!isOpen);

  const handleQuickAction = (actionText) => {
    setView('chat');
    
    // Add user message
    const userMsg = {
      id: Date.now(),
      type: 'user',
      text: actionText,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages(prev => [...prev, userMsg]);
    setIsTyping(true);

    // Instant local response based on action
    setTimeout(() => {
      let botResponse = "I can definitely help with that. Could you provide a bit more detail about your current setup or what you're looking to achieve?";
      
      const botMsg = {
        id: Date.now() + 1,
        type: 'bot',
        text: botResponse,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      
      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
    }, 1000);
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMsg = {
      id: Date.now(),
      type: 'user',
      text: inputValue.trim(),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: userMsg.text,
          sessionId: "website-user"
        })
      });

      const data = await response.json();
      
      let reply = data?.[0]?.reply || data?.reply || data?.[0]?.output || data?.output || "I'm having trouble processing that right now.";

      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        type: 'bot',
        text: reply,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        type: 'bot',
        text: "We're having a server issue right now — please reach us directly via email.",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  const panelVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 10, transition: { duration: 0.2 } },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0, 
      transition: { 
        duration: 0.35, 
        ease: [0.16, 1, 0.3, 1] 
      } 
    },
    exit: { opacity: 0, scale: 0.95, y: 10, transition: { duration: 0.2 } }
  };

  const listVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.08, when: "beforeChildren" }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.25, ease: "easeOut" } }
  };

  const viewVariants = {
    hidden: { opacity: 0, scale: 0.98, transition: { duration: 0.2 } },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } },
    exit: { opacity: 0, scale: 0.98, transition: { duration: 0.2 } }
  };

  return (
    <>
      {/* Toggle Button */}
      <motion.button 
        onClick={toggleWidget}
        whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
        whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
        aria-label={isOpen ? 'Close chat support' : 'Open chat support'}
        aria-expanded={isOpen}
        aria-haspopup="dialog"
        className="fixed bottom-6 right-6 z-[100] flex items-center justify-center bg-bg-primary border border-accent/30 rounded-full text-accent shadow-[0_8px_30px_rgba(255,149,0,0.25),inset_0_0_0_1px_rgba(255,255,255,0.02)] transition-all duration-200 group p-1.5 hover:shadow-[0_12px_36px_rgba(255,149,0,0.35)]"
      >
        <div className="flex items-center gap-3">
          {isOpen ? (
             <div className="w-[50px] h-[50px] flex items-center justify-center text-accent">
               <X size={26} aria-hidden="true" />
             </div>
          ) : (
             <>
               <div className="w-[42px] h-[42px] bg-gradient-to-br from-[#FFB340] to-[#FF9500] text-[#1a0f00] rounded-full flex items-center justify-center shrink-0 shadow-inner ml-0.5">
                 <MessageSquare size={20} className="ml-[-1px] mt-[1px]" aria-hidden="true" />
               </div>
               <div className="flex flex-col items-start pr-4">
                 <div className="flex items-center gap-1.5">
                   <div className="w-1.5 h-1.5 bg-[#39D98A] rounded-full shadow-[0_0_6px_#39D98A]" aria-hidden="true"></div>
                   <span className="text-[9px] font-bold text-[#39D98A] tracking-wider uppercase">We are online</span>
                 </div>
                 <span className="text-white font-bold text-[15px] leading-tight mt-0.5 font-heading tracking-wide">Help &amp; Support</span>
               </div>
             </>
          )}
        </div>
        {!isOpen && (
          <span className="absolute -top-1.5 -right-1.5 w-[22px] h-[22px] bg-[#FF3366] text-white text-[11px] font-bold rounded-full flex items-center justify-center border-2 border-bg-primary shadow-lg" aria-label="2 new messages">
            2
          </span>
        )}
      </motion.button>

      {/* Widget Container */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            variants={shouldReduceMotion ? {} : panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            role="dialog"
            aria-modal="true"
            aria-label="Chat support"
            className="fixed bottom-[96px] right-4 sm:right-6 w-[calc(100vw-32px)] sm:w-[380px] h-[600px] max-h-[75vh] bg-[#0A0A0F] border border-white/10 rounded-[20px] shadow-[0_24px_70px_rgba(0,0,0,0.55)] flex flex-col overflow-hidden z-[100] font-sans"
          >
            <AnimatePresence mode="wait">
              {view === 'home' ? (
                /* --- HOME VIEW --- */
                <motion.div 
                  key="home"
                  variants={shouldReduceMotion ? {} : viewVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="flex flex-col h-full w-full bg-gradient-to-b from-[#111116] to-[#0A0A0F]"
                >
                  {/* Header */}
                  <div className="flex items-center justify-between p-5 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/30 flex items-center justify-center text-accent">
                        <Bot size={20} className="ml-[-1px] mt-[1px]" />
                      </div>
                      <div>
                        <p className="font-bold text-white text-base font-heading">AURA</p>
                        <p className="text-[9px] font-bold text-accent tracking-widest uppercase">AI Business Consultant</p>
                      </div>
                    </div>
                    <motion.button 
                      whileHover={shouldReduceMotion ? {} : { scale: 1.1 }}
                      whileTap={shouldReduceMotion ? {} : { scale: 0.9 }}
                      onClick={toggleWidget} 
                      aria-label="Close chat"
                      className="w-8 h-8 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-text-secondary hover:text-white hover:bg-white/10 transition-colors"
                    >
                      <X size={16} aria-hidden="true" />
                    </motion.button>
                  </div>

                  <div className="px-5 pt-2 pb-6 flex-1 overflow-y-auto">
                    <h2 className="text-2xl font-bold text-white mb-2 font-heading tracking-tight">Hi, I'm AURA 👋</h2>
                    <p className="text-text-secondary text-sm mb-6 leading-relaxed max-w-[280px]">
                      AutoEra's AI Business Consultant — ask me anything, or let's find the right system for your business.
                    </p>

                    {/* Primary CTA */}
                    <motion.button 
                      onClick={() => setView('chat')}
                      whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                      whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                      className="w-full bg-gradient-to-br from-[#FFB340] to-[#FF9500] rounded-2xl p-5 mb-8 text-left relative overflow-hidden group border border-[#FFC366]/50 shadow-lg"
                    >
                      <div className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white mb-4 bg-white/10 backdrop-blur-sm group-hover:scale-105 transition-transform">
                        <Send size={18} className="ml-0.5" />
                      </div>
                      <h3 className="font-bold text-[#1a0f00] text-lg mb-1 tracking-tight">Send us a message</h3>
                      <p className="text-[#1a0f00]/80 text-[12.5px] font-semibold">We typically reply in under 2 minutes.</p>
                      
                      <MessageSquare className="absolute -right-4 -bottom-4 text-white/20 w-32 h-32 transform -rotate-12 group-hover:rotate-0 transition-transform duration-500" strokeWidth={1.5} />
                    </motion.button>

                    {/* Quick Actions */}
                    <div className="mb-4">
                      <p className="text-[10px] font-bold text-text-tertiary tracking-widest uppercase mb-3">Quick Actions</p>
                      <motion.div 
                        variants={shouldReduceMotion ? {} : listVariants}
                        initial="hidden"
                        animate="visible"
                        className="grid grid-cols-2 gap-3"
                      >
                        <QuickActionBtn variants={shouldReduceMotion ? {} : itemVariants} icon={FileText} title="Pricing Info" onClick={() => handleQuickAction("I'd like some pricing info.")} />
                        <QuickActionBtn variants={shouldReduceMotion ? {} : itemVariants} icon={Calendar} title="Book a Call" onClick={() => handleQuickAction("I'd like to book a consultation.")} />
                        <QuickActionBtn variants={shouldReduceMotion ? {} : itemVariants} icon={HelpCircle} title="General FAQ" onClick={() => handleQuickAction("I have some general questions.")} />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ) : (
                /* --- CHAT VIEW --- */
                <motion.div 
                  key="chat"
                  variants={shouldReduceMotion ? {} : viewVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="flex flex-col h-full w-full bg-[#0A0A0F]"
                >
                  {/* Header */}
                  <div className="flex items-center justify-between p-4 border-b border-white/5 bg-[#111116]">
                    <motion.button 
                      whileHover={shouldReduceMotion ? {} : { scale: 1.1 }}
                      whileTap={shouldReduceMotion ? {} : { scale: 0.9 }}
                      onClick={() => setView('home')}
                      aria-label="Back to home"
                      className="w-9 h-9 rounded-full bg-[#16161d] border border-white/5 flex items-center justify-center text-text-secondary hover:text-white hover:border-white/10 transition-colors"
                    >
                      <ChevronLeft size={20} className="mr-0.5" aria-hidden="true" />
                    </motion.button>
                    <div className="flex flex-col items-center">
                      <h2 className="font-bold text-white text-[15px] font-heading tracking-tight">AURA</h2>
                      <p className="text-[9px] font-bold text-accent tracking-widest uppercase">AI Business Consultant</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <motion.button 
                        whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
                        whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
                        onClick={() => setView('home')} 
                        className="text-[9px] font-bold text-text-tertiary border border-white/10 bg-[#16161d] rounded-full px-3 py-1.5 hover:text-white hover:border-white/20 transition-all uppercase tracking-wider"
                      >
                        End Chat
                      </motion.button>
                      <motion.button 
                        whileHover={shouldReduceMotion ? {} : { scale: 1.1 }}
                        whileTap={shouldReduceMotion ? {} : { scale: 0.9 }}
                        onClick={toggleWidget} 
                        aria-label="Close chat"
                        className="w-9 h-9 rounded-full bg-[#16161d] border border-white/5 flex items-center justify-center text-text-secondary hover:text-white hover:border-white/10 transition-colors"
                      >
                        <X size={18} aria-hidden="true" />
                      </motion.button>
                    </div>
                  </div>

                  {/* Secure Connection Pill */}
                  <div className="flex justify-center mt-5 mb-2 relative z-10">
                    <div className="bg-[#16161d] border border-white/5 rounded-full px-4 py-1.5 text-[9px] font-bold text-text-tertiary tracking-widest uppercase shadow-sm">
                      RAG-POWERED · LIVE
                    </div>
                  </div>

                  {/* Messages Area */}
                  <motion.div 
                    variants={shouldReduceMotion ? {} : listVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex-1 overflow-y-auto p-4 flex flex-col gap-5"
                  >
                    {messages.map((msg) => (
                      <motion.div 
                        key={msg.id} 
                        variants={shouldReduceMotion ? {} : itemVariants}
                        className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'} w-full`}
                      >
                        {msg.type === 'bot' && (
                          <div className="w-8 h-8 rounded-full border border-accent/30 bg-accent/10 text-accent flex items-center justify-center shrink-0 mr-3 mt-1 shadow-[0_0_10px_rgba(255,149,0,0.15)]">
                            <Bot size={16} />
                          </div>
                        )}
                        <div className={`flex flex-col ${msg.type === 'user' ? 'items-end' : 'items-start'} max-w-[80%]`}>
                          <div className={`p-3.5 px-4 rounded-2xl text-[14px] leading-relaxed ${
                            msg.type === 'user' 
                              ? 'bg-gradient-to-br from-[#FFB340] to-[#FF9500] text-[#1a0f00] font-semibold rounded-br-sm shadow-[0_4px_15px_rgba(255,149,0,0.2)]' 
                              : 'bg-[#16161d] border border-white/5 text-white rounded-bl-sm'
                          }`}>
                            {msg.text}
                          </div>
                          <span className="text-[10px] text-text-tertiary mt-1.5 px-1 font-medium">{msg.time}</span>
                        </div>
                      </motion.div>
                    ))}

                    <AnimatePresence>
                      {isTyping && (
                        <motion.div 
                          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
                          animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                          exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.9, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="flex justify-start w-full"
                        >
                          <div className="w-8 h-8 rounded-full border border-accent/30 bg-accent/10 text-accent flex items-center justify-center shrink-0 mr-3 mt-1 shadow-[0_0_10px_rgba(255,149,0,0.15)]">
                            <Bot size={16} />
                          </div>
                          <div className="bg-[#16161d] border border-white/5 rounded-2xl rounded-bl-sm p-4 px-5 flex gap-1.5 items-center h-[44px]">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                            <div className="w-1.5 h-1.5 bg-accent rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                            <div className="w-1.5 h-1.5 bg-accent rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                    <div ref={messagesEndRef} />
                  </motion.div>

                  {/* Input Area */}
                  <div className="p-4 bg-[#0A0A0F] border-t border-white/5">
                    <div className="flex items-center gap-2 bg-[#16161d] border border-white/10 rounded-2xl p-1.5 pr-1.5 focus-within:border-accent/30 focus-within:shadow-[0_0_15px_rgba(255,149,0,0.1)] transition-all">
                      <button aria-label="Attach file" className="w-9 h-9 flex items-center justify-center text-text-tertiary hover:text-white transition-colors shrink-0">
                        <Paperclip size={18} aria-hidden="true" />
                      </button>
                      <input 
                        type="text" 
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                        placeholder="Reply to AutoEra..."
                        className="flex-1 bg-transparent border-none outline-none text-white text-[14px] placeholder:text-text-tertiary min-w-0"
                      />
                      <button aria-label="Add emoji" className="w-9 h-9 flex items-center justify-center text-text-tertiary hover:text-white transition-colors shrink-0">
                        <Smile size={18} aria-hidden="true" />
                      </button>
                      <motion.button 
                        whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
                        whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
                        onClick={handleSendMessage}
                        disabled={!inputValue.trim()}
                        aria-label="Send message"
                        className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-text-secondary hover:text-[#1a0f00] hover:bg-gradient-to-br hover:from-[#FFB340] hover:to-[#FF9500] disabled:opacity-50 disabled:hover:bg-white/5 disabled:hover:text-text-secondary transition-all shrink-0"
                      >
                        <Send size={16} className={inputValue.trim() ? "text-accent" : ""} aria-hidden="true" />
                      </motion.button>
                    </div>
                  </div>

                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function QuickActionBtn({ icon: Icon, title, onClick, variants }) {
  const shouldReduceMotion = useReducedMotion();
  return (
    <motion.button 
      variants={variants}
      onClick={onClick}
      whileHover={shouldReduceMotion ? {} : { scale: 1.03, backgroundColor: "rgba(255,255,255,0.05)" }}
      whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
      className="bg-[#16161d] border border-white/5 rounded-2xl p-4 text-left transition-colors group flex flex-col gap-3"
    >
      <Icon size={18} className="text-text-tertiary group-hover:text-accent transition-colors" />
      <div className="text-text-primary text-[13px] font-bold group-hover:text-accent transition-colors tracking-tight">{title}</div>
    </motion.button>
  );
}
