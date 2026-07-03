import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function About() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
      }),
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    const els = document.querySelectorAll('.reveal');
    els.forEach(el => observer.observe(el));
    return () => els.forEach(el => observer.unobserve(el));
  }, []);

  return (
    <div className="about-page">
      {/* Hero */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-inner">
            <div className="reveal">
              <span className="section-label">About AutoEra</span>
              <h1>An AI engineering studio that builds operational infrastructure.</h1>
            </div>
            <div className="reveal" style={{ transitionDelay: '120ms' }}>
              <p>
                AutoEra is not an AI agency. We don't sell software subscriptions.
                We don't offer AI "solutions" from a product catalogue.
              </p>
              <p>
                We are engineers who understand business operations. We build custom AI
                systems that eliminate specific bottlenecks, automate specific workflows,
                and become a permanent part of how a business runs.
              </p>
              <p>
                The businesses that hire us aren't buying AI because it's trending. They
                hire us because they have a real operational problem — missed calls, slow
                lead response, repetitive support volume, disconnected tools — and they
                want it solved properly.
              </p>
              <p>
                We scope, design, build, deploy, and maintain. Everything included.
                No handoffs to a different team. No documentation without explanation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="about-values">
        <div className="container">
          <h2 className="reveal">How we think about our work.</h2>
          <div className="about-values-grid">
            {[
              {
                title: 'Engineering over marketing',
                desc: 'We don\'t write copy that overpromises. We build systems that deliver the outcome clearly stated before we start. Our standard is working software, not slide decks.',
              },
              {
                title: 'Specificity over templates',
                desc: 'Every system we build is scoped to your specific operations, your tools, your workflow logic. We don\'t adapt templates. We engineer solutions.',
              },
              {
                title: 'Maintainability by default',
                desc: 'Every system we deploy is documented, monitored, and built to last. If something breaks six months after launch, we fix it. That\'s part of what we deliver.',
              },
              {
                title: 'Honesty about what AI can do',
                desc: 'AI is a powerful tool. It\'s not magic. We tell you what will work, what won\'t, and what a simpler approach would look like if that\'s the better answer.',
              },
              {
                title: 'Outcomes, not features',
                desc: 'We measure every system by what changes in your business — not by what it can technically do. A feature that doesn\'t move a metric isn\'t worth building.',
              },
              {
                title: 'Direct communication',
                desc: 'You work directly with the engineers building your system. No account managers, no middlemen, no delay between your question and the person who can answer it.',
              },
            ].map((v, i) => (
              <div
                key={v.title}
                className="about-value-card reveal"
                style={{ transitionDelay: `${(i % 3) * 80}ms` }}
              >
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manifesto */}
      <section className="about-manifesto" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div className="about-manifesto-inner reveal">
            <span className="section-label">Our position</span>
            <h2>
              The AI industry is full of marketers<br />
              pretending to be engineers.
            </h2>
            <p>
              Most of what's sold as "AI automation" is a no-code workflow with a chatbot
              wrapper. It works until it doesn't, and when it breaks, no one can explain
              why. It's built to impress in a demo, not to run reliably in production.
            </p>
            <p>
              We build the other kind. Systems with real architecture, real error handling,
              real monitoring, and real documentation. Systems that integrate cleanly with
              your existing tools and don't require constant babysitting.
            </p>
            <p>
              We're not the right fit for every business. If you need something spun up in
              a day for a pitch, there are faster options. If you want something built
              properly — something that keeps working, keeps improving, and actually solves
              the problem — that's what we do.
            </p>
            <div style={{ marginTop: 40 }}>
              <Link to="/contact" className="btn btn-primary" id="about-cta" style={{ height: 52, padding: '0 28px', fontSize: '0.95rem' }}>
                Book a Discovery Call
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
