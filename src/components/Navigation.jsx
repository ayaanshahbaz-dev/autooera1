import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Systems', path: '#systems' },
    { name: 'Process', path: '#process' },
    { name: 'Projects', path: '#projects' },
    { name: 'FAQ', path: '#faq' },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 h-[var(--nav-h)] z-50 transition-all duration-300 border-b border-transparent ${
          scrolled ? 'bg-bg-primary/80 backdrop-blur-md !border-border-subtle' : ''
        }`}
        role="navigation"
      >
        <div className="container h-full flex items-center justify-between">
          <a href="#" className="flex items-center gap-4 text-text-primary group" aria-label="AutoEra Engineering Studio">
            <svg viewBox="0 0 24 32" fill="none" className="h-7 w-auto">
              <path d="M14 0 L2 18 H10 L8 32 L22 14 H14 L14 0Z" fill="var(--accent)" strokeLinejoin="round" />
            </svg>
            <div className="flex items-baseline gap-4">
              <span className="font-sans font-bold text-2xl tracking-tight">AutoEra</span>
              <span className="font-mono text-xs text-text-tertiary tracking-widest uppercase hidden sm:block">Engineering Studio</span>
            </div>
          </a>

          <div className="hidden md:flex gap-8">
            {links.map(({ name, path }) => (
              <a
                key={name}
                href={path}
                className="text-[0.85rem] font-medium text-text-secondary hover:text-text-primary transition-colors"
              >
                {name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a 
              href="#cta" 
              className="hidden md:flex items-center gap-2 px-5 h-10 rounded-md border border-accent text-accent bg-accent-dim hover:bg-accent-glow/20 transition-all text-[0.85rem] font-medium"
            >
              Book Discovery Call <ArrowRight size={14} />
            </a>

            <button
              className="md:hidden text-text-secondary"
              onClick={() => setMobileOpen(o => !o)}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div 
        className={`fixed inset-0 top-[var(--nav-h)] bg-bg-primary p-6 flex flex-col gap-6 z-40 transition-all duration-300 ${
          mobileOpen ? 'translate-y-0 opacity-100 pointer-events-auto' : '-translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        {links.map(({ name, path }) => (
          <a 
            key={name} 
            href={path} 
            onClick={() => setMobileOpen(false)}
            className="text-xl font-medium text-text-primary"
          >
            {name}
          </a>
        ))}
        <div className="h-px bg-border-subtle my-2"></div>
        <a 
          href="#cta"
          onClick={() => setMobileOpen(false)}
          className="flex justify-center items-center h-12 bg-text-primary text-bg-primary rounded-md font-medium"
        >
          Book Discovery Call
        </a>
      </div>
    </>
  );
}
