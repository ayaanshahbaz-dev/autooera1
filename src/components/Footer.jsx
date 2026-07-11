export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-bg-primary border-t border-border-subtle pt-20 pb-10">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-12 mb-20">
          
          <div className="flex flex-col gap-6">
            <a href="#" aria-label="AutoEra Engineering Studio">
              <svg viewBox="0 0 176 38" fill="none" className="h-7 w-auto">
                <text x="0" y="28" className="font-sans font-bold text-[32px] tracking-tight fill-text-primary">Auto</text>
                <path d="M86 4 L76 21 H82 L74 36 L86 19 H80 L86 4Z" fill="var(--accent)" strokeLinejoin="round" />
                <text x="94" y="28" className="font-sans font-bold text-[32px] tracking-tight fill-text-primary">Era</text>
              </svg>
            </a>
            <p className="text-text-secondary text-sm max-w-[280px]">
              Building software we're proud to put our name on.
            </p>
          </div>

          <div className="flex flex-col">
            <h4 className="text-sm font-medium mb-6 text-text-primary">Platform</h4>
            <nav className="flex flex-col gap-3">
              <a href="#systems" className="text-sm text-text-secondary hover:text-text-primary transition-colors">Systems We Engineer</a>
              <a href="#process" className="text-sm text-text-secondary hover:text-text-primary transition-colors">Our Process</a>
              <a href="#projects" className="text-sm text-text-secondary hover:text-text-primary transition-colors">Engineering Projects</a>
            </nav>
          </div>

          <div className="flex flex-col">
            <h4 className="text-sm font-medium mb-6 text-text-primary">Connect</h4>
            <nav className="flex flex-col gap-3">
              <a href="mailto:engineering@autoera.site" className="text-sm text-text-secondary hover:text-text-primary transition-colors">engineering@autoera.site</a>
              <a href="#faq" className="text-sm text-text-secondary hover:text-text-primary transition-colors">FAQ</a>
            </nav>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-border-subtle text-xs">
          <p className="text-text-tertiary">
            © {year} AutoEra Engineering Studio. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
            <div className="text-text-tertiary font-mono">Last Updated: July 2026</div>
            <div className="flex items-center gap-2 text-accent font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_var(--color-accent-glow)]" />
              Active Development
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
