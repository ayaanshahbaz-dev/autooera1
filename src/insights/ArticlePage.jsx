import { useParams, Link, Navigate } from 'react-router-dom';
import { Head } from 'vite-react-ssg';
import { ArrowLeft, Clock, ChevronRight } from 'lucide-react';
import { getArticleBySlug, categoryColors } from './articles';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

// ─── Content Renderer ────────────────────────────────────────────────────────

function ContentBlock({ block }) {
  switch (block.type) {
    case 'h2':
      return (
        <h2 className="text-[1.5rem] font-heading font-bold text-text-primary tracking-tight mt-12 mb-4 leading-snug">
          {block.text}
        </h2>
      );

    case 'h3':
      return (
        <h3 className="text-[1.1rem] font-heading font-bold text-text-primary tracking-tight mt-8 mb-3 leading-snug">
          {block.text}
        </h3>
      );

    case 'p':
      // Preserve line breaks written as \n in content strings
      return (
        <p className="text-[0.975rem] text-text-secondary leading-[1.85] mb-5 whitespace-pre-line">
          {block.text}
        </p>
      );

    case 'callout':
      return (
        <aside className="my-7 px-5 py-4 rounded-xl bg-accent/5 border-l-[3px] border-accent/60 border border-accent/10">
          <p className="text-[0.92rem] text-text-primary leading-relaxed font-medium">
            {block.text}
          </p>
        </aside>
      );

    case 'code':
      return (
        <div className="my-7 rounded-xl overflow-hidden border border-white/8">
          {block.lang && (
            <div className="flex items-center gap-2 px-4 py-2.5 bg-[#111116] border-b border-white/5">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] opacity-60" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] opacity-60" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] opacity-60" />
              </div>
              <span className="ml-2 text-[0.7rem] font-mono text-text-tertiary uppercase tracking-wider">
                {block.lang}
              </span>
            </div>
          )}
          <pre className="overflow-x-auto p-5 bg-[#0A0A0F] text-[0.82rem] font-mono text-[#A8D8B9] leading-relaxed">
            <code>{block.text}</code>
          </pre>
        </div>
      );

    default:
      return null;
  }
}

// ─── Article Page ─────────────────────────────────────────────────────────────

export default function ArticlePage() {
  const { slug } = useParams();
  const article = getArticleBySlug(slug);

  // 404 redirect if slug doesn't match any article
  if (!article) {
    return <Navigate to="/insights" replace />;
  }

  const colors = categoryColors[article.category] ?? categoryColors['Technical'];

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.summary,
    author: {
      '@type': 'Organization',
      name: 'AutoEra',
      url: 'https://autoera.site',
    },
    publisher: {
      '@type': 'Organization',
      name: 'AutoEra',
      logo: {
        '@type': 'ImageObject',
        url: 'https://autoera.site/favicon-32x32.png',
      },
    },
    datePublished: article.publishedDate,
    dateModified: article.publishedDate,
    url: `https://autoera.site/insights/${article.slug}`,
    mainEntityOfPage: `https://autoera.site/insights/${article.slug}`,
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://autoera.site' },
      { '@type': 'ListItem', position: 2, name: 'Insights', item: 'https://autoera.site/insights' },
      {
        '@type': 'ListItem',
        position: 3,
        name: article.title,
        item: `https://autoera.site/insights/${article.slug}`,
      },
    ],
  };

  return (
    <>
      <Head>
        <title>{article.title} — AutoEra Insights</title>
        <meta name="description" content={article.summary} />
        <meta property="og:title" content={`${article.title} — AutoEra Insights`} />
        <meta property="og:description" content={article.summary} />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content={`https://autoera.site/insights/${article.slug}`}
        />
        <link
          rel="canonical"
          href={`https://autoera.site/insights/${article.slug}`}
        />
      </Head>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="flex flex-col min-h-screen bg-bg-primary text-text-secondary font-sans">
        <Navigation insightsPage />

        <main className="flex-1 pt-[110px]">

          {/* ── Page Header ─────────────────────────────────────── */}
          <header className="py-16 border-b border-white/5 relative overflow-hidden flex flex-col items-center">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[radial-gradient(ellipse,rgba(255,149,0,0.06)_0%,transparent_70%)] blur-[80px]" />
            </div>

            <div className="container max-w-[800px] px-4 relative z-10">

              {/* Breadcrumb */}
              <nav className="flex items-center gap-1.5 text-[0.75rem] text-text-tertiary mb-8" aria-label="Breadcrumb">
                <Link to="/" className="hover:text-accent smooth-transition">Home</Link>
                <ChevronRight size={12} aria-hidden="true" />
                <Link to="/insights" className="hover:text-accent smooth-transition">Insights</Link>
                <ChevronRight size={12} aria-hidden="true" />
                <span className="text-text-secondary truncate max-w-[200px]">{article.title}</span>
              </nav>

              {/* Category + Read Time */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span
                  className={`px-3 py-1 rounded-full text-[0.7rem] font-bold tracking-wider border ${colors.bg} ${colors.text} ${colors.border}`}
                >
                  {article.category}
                </span>
                <div className="flex items-center gap-1.5 text-[0.8rem] text-text-tertiary">
                  <Clock size={13} aria-hidden="true" />
                  <span>{article.readTime} min read</span>
                </div>
              </div>

              {/* Title */}
              <h1 className="text-[clamp(1.9rem,4vw,2.8rem)] font-heading font-bold text-white tracking-tight leading-[1.1] mb-5">
                {article.title}
              </h1>

              {/* Summary / Lead */}
              <p className="text-[1.05rem] text-text-secondary leading-relaxed max-w-[680px]">
                {article.summary}
              </p>
            </div>
          </header>

          {/* ── Article Body ─────────────────────────────────────── */}
          <div className="py-14 flex flex-col items-center">
            <div className="container max-w-[800px] px-4">

              {/* Divider line under lead */}
              <div className="w-12 h-[2px] bg-accent/40 rounded-full mb-10" />

              {/* Content sections */}
              <article>
                {article.content.map((block, i) => (
                  <ContentBlock key={i} block={block} />
                ))}
              </article>

              {/* ── Related Links ─────────────────────────────── */}
              {article.relatedLinks && article.relatedLinks.length > 0 && (
                <div className="mt-14 pt-8 border-t border-white/5">
                  <h3 className="text-[0.7rem] font-bold text-text-tertiary tracking-widest uppercase mb-4">
                    Related
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {article.relatedLinks.map((link) => {
                      const isExternal = link.href.startsWith('http');
                      const isInternal = link.href.startsWith('/insights');
                      return isExternal ? (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-[0.85rem] text-text-secondary hover:text-accent hover:border-accent/30 smooth-transition"
                        >
                          {link.text} <ArrowLeft size={13} className="rotate-180" aria-hidden="true" />
                        </a>
                      ) : isInternal ? (
                        <Link
                          key={link.href}
                          to={link.href}
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-[0.85rem] text-text-secondary hover:text-accent hover:border-accent/30 smooth-transition"
                        >
                          {link.text} <ArrowLeft size={13} className="rotate-180" aria-hidden="true" />
                        </Link>
                      ) : (
                        <a
                          key={link.href}
                          href={link.href}
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-[0.85rem] text-text-secondary hover:text-accent hover:border-accent/30 smooth-transition"
                        >
                          {link.text} <ArrowLeft size={13} className="rotate-180" aria-hidden="true" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* ── Back to Insights ─────────────────────────── */}
              <div className="mt-14">
                <Link
                  to="/insights"
                  className="inline-flex items-center gap-2 text-[0.85rem] font-semibold text-text-secondary hover:text-accent smooth-transition"
                >
                  <ArrowLeft size={15} aria-hidden="true" />
                  Back to Insights
                </Link>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
