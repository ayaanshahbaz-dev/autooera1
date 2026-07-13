import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Head } from 'vite-react-ssg';
import { ArrowRight, BookOpen, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { articles, categoryColors } from './articles';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ALL = 'All';
const categories = [ALL, 'Business Systems', 'Technical', 'Case Studies', 'AI & Automation'];

export default function InsightsIndex() {
  const [activeCategory, setActiveCategory] = useState(ALL);

  const filtered =
    activeCategory === ALL
      ? articles
      : articles.filter((a) => a.category === activeCategory);

  return (
    <>
      <Head>
        <title>Insights — AutoEra | AI Engineering Articles</title>
        <meta
          name="description"
          content="Technical articles and case studies on AI Lead Management, RAG systems, MCP Integrations, and intelligent automation — written by the AutoEra engineering team."
        />
        <meta property="og:title" content="Insights — AutoEra | AI Engineering Articles" />
        <meta
          property="og:description"
          content="Technical articles and case studies on AI Lead Management, RAG systems, MCP Integrations, and intelligent automation."
        />
        <meta property="og:url" content="https://autoera.site/insights" />
        <link rel="canonical" href="https://autoera.site/insights" />
      </Head>

      {/* Inline ItemList schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'AutoEra Insights',
            url: 'https://autoera.site/insights',
            itemListElement: articles.map((a, i) => ({
              '@type': 'ListItem',
              position: i + 1,
              url: `https://autoera.site/insights/${a.slug}`,
              name: a.title,
            })),
          }),
        }}
      />

      <div className="flex flex-col min-h-screen bg-bg-primary text-text-secondary font-sans">
        <Navigation insightsPage />

        <main className="flex-1 pt-[110px]">
          {/* Hero */}
          <section className="py-20 border-b border-white/5 relative overflow-hidden flex flex-col items-center">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[radial-gradient(ellipse,rgba(255,149,0,0.07)_0%,transparent_70%)] blur-[80px]" />
            </div>

            <div className="container max-w-[860px] flex flex-col items-center text-center px-4 relative z-10">
              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_var(--color-accent-glow)]" />
                <span className="text-[0.65rem] font-bold text-accent tracking-widest uppercase">
                  AutoEra Insights
                </span>
              </div>

              <h1 className="text-[clamp(2.5rem,5vw,3.8rem)] font-heading font-bold tracking-tight text-white leading-[1.05] mb-5">
                Technical Writing on{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB340] to-[#FF9500]">
                  AI Engineering
                </span>
              </h1>

              <p className="text-[1.05rem] text-text-secondary max-w-[580px] leading-relaxed">
                Architecture decisions, system case studies, and practical frameworks — written from building real AI systems, not slides.
              </p>
            </div>
          </section>

          {/* Filters + Articles */}
          <section className="py-16 flex flex-col items-center">
            <div className="container max-w-[1100px] px-4">

              {/* Category Filter Tabs */}
              <div className="flex flex-wrap gap-2 mb-12" role="tablist" aria-label="Filter by category">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    role="tab"
                    aria-selected={activeCategory === cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-1.5 rounded-full text-[0.8rem] font-semibold border smooth-transition ${
                      activeCategory === cat
                        ? 'bg-accent/10 border-accent/30 text-accent'
                        : 'bg-white/5 border-white/10 text-text-secondary hover:text-white hover:border-white/20'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Article Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {filtered.map((article, i) => {
                  const colors = categoryColors[article.category] ?? categoryColors['Technical'];
                  return (
                    <motion.div
                      key={article.slug}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <Link
                        to={`/insights/${article.slug}`}
                        className="group glass-card flex flex-col h-full p-6 rounded-2xl hover:border-accent/30 hover:shadow-[0_8px_40px_rgba(255,149,0,0.07)] smooth-transition"
                        aria-label={`Read: ${article.title}`}
                      >
                        {/* Category badge */}
                        <span
                          className={`self-start px-2.5 py-0.5 rounded-full text-[0.65rem] font-bold tracking-wider border mb-4 ${colors.bg} ${colors.text} ${colors.border}`}
                        >
                          {article.category}
                        </span>

                        {/* Title */}
                        <h2 className="text-[1rem] font-bold text-text-primary leading-snug mb-3 group-hover:text-accent smooth-transition">
                          {article.title}
                        </h2>

                        {/* Summary */}
                        <p className="text-[0.85rem] text-text-secondary leading-relaxed flex-1 mb-5">
                          {article.summary}
                        </p>

                        {/* Footer meta */}
                        <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                          <div className="flex items-center gap-1.5 text-[0.75rem] text-text-tertiary">
                            <Clock size={12} aria-hidden="true" />
                            <span>{article.readTime} min read</span>
                          </div>
                          <span className="text-[0.75rem] font-bold text-accent flex items-center gap-1 group-hover:gap-2 smooth-transition">
                            Read <ArrowRight size={12} aria-hidden="true" />
                          </span>
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {filtered.length === 0 && (
                <div className="flex flex-col items-center py-24 text-text-tertiary">
                  <BookOpen size={32} className="mb-4 opacity-30" />
                  <p className="text-[0.9rem]">No articles in this category yet.</p>
                </div>
              )}
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
