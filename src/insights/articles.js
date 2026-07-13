/**
 * AutoEra Insights — Article Registry
 *
 * Each article object contains:
 *   slug          — URL path segment
 *   title         — Full article title
 *   summary       — One-sentence description (used on index + meta description)
 *   category      — "AI & Automation" | "Business Systems" | "Technical" | "Case Studies"
 *   readTime      — Estimated read in minutes
 *   publishedDate — ISO date string (for schema only, not displayed as a timestamp)
 *   content       — Ordered array of section objects:
 *                     { type: 'h2' | 'h3' | 'p' | 'callout' | 'code', text, lang? }
 */

export const articles = [
  {
    slug: 'how-ai-lead-qualification-works',
    title: 'How AI Lead Qualification Works Behind the Scenes',
    summary:
      'A technical walkthrough of what actually happens between a lead submitting a form and a CRM pipeline updating — and where AI decision logic sits in that chain.',
    category: 'Business Systems',
    readTime: 7,
    publishedDate: '2026-07-01',
    content: [
      {
        type: 'p',
        text: 'Most businesses treat lead qualification as a people problem: hire more SDRs, train them better, respond faster. But the actual constraint is rarely headcount — it\'s the latency and inconsistency introduced at each handoff point. An AI Lead Management System eliminates those handoffs entirely by making qualification decisions in real time, at every touchpoint, with no degradation across volume.',
      },
      {
        type: 'h2',
        text: 'The Anatomy of a Lead Qualification Pipeline',
      },
      {
        type: 'p',
        text: 'When a lead submits a form, calls a number, or sends a message, four things need to happen before that lead is useful: identity resolution, intent classification, scoring, and routing. In a manual system, these happen serially with humans involved at each step. In an automated system, they happen in parallel within milliseconds.',
      },
      {
        type: 'h3',
        text: '1. Identity Resolution',
      },
      {
        type: 'p',
        text: 'The first step is enriching the raw input — typically just a name, email, or phone number — with contextual data. The system makes concurrent API calls to enrichment services (Clearbit, Apollo, Hunter) and cross-references existing CRM records. The output is a unified contact record: company size, industry, role, LinkedIn profile, and any prior engagement history.',
      },
      {
        type: 'callout',
        text: 'Deduplication is critical here. Without a deterministic merge strategy, the same lead can appear as multiple contacts with conflicting scores, causing both under- and over-engagement from the sales team.',
      },
      {
        type: 'h3',
        text: '2. Intent Classification',
      },
      {
        type: 'p',
        text: 'Intent classification is where an AI model evaluates the semantic content of the lead\'s input — their message, their browsing behavior if available, or their responses to qualification questions — and assigns a category. Common categories include: exploratory inquiry, active evaluation, competitive comparison, and ready to buy.',
      },
      {
        type: 'p',
        text: 'This is typically done with a fine-tuned classifier or a structured prompt against a general-purpose model like GPT-4o or Claude. The prompt receives the lead\'s message alongside enrichment data and returns a structured JSON object with a classified intent, confidence score, and extracted key entities (e.g. use case, timeline, budget signals).',
      },
      {
        type: 'code',
        lang: 'json',
        text: `{
  "intent": "active_evaluation",
  "confidence": 0.87,
  "signals": {
    "urgency": "high",
    "budget_mentioned": false,
    "use_case": "lead qualification automation",
    "timeline": "within 30 days"
  }
}`,
      },
      {
        type: 'h3',
        text: '3. Lead Scoring',
      },
      {
        type: 'p',
        text: 'Scoring combines the enrichment data (firmographic fit) with the intent classification output (behavioral fit) into a single numeric score. The firmographic component is rule-based: assign points for company size range, industry match, role seniority. The behavioral component weights the AI-classified intent, urgency signals, and engagement depth.',
      },
      {
        type: 'p',
        text: 'The scoring model is not a black box — it\'s a weighted formula you can inspect and adjust. This matters because sales teams need to trust the score, and that trust requires explainability. A score of 84 should be traceable: "high firmographic fit (52 pts) + active evaluation intent (24 pts) + high urgency (8 pts)."',
      },
      {
        type: 'h3',
        text: '4. Routing and Action Triggering',
      },
      {
        type: 'p',
        text: 'Once a score is produced, the system evaluates routing rules. These are conditional branches: if score > 80 and intent == active_evaluation, create a task in CRM, send an SMS to the assigned rep, and trigger the high-touch email sequence. If score is between 40 and 80, enroll in a nurture sequence. If below 40, tag as low priority and update the CRM field without rep notification.',
      },
      {
        type: 'callout',
        text: 'The routing layer is where most implementations break down. Workflows built in no-code tools like Zapier become unmaintainable as branching logic grows. Production systems use an orchestration engine — n8n, Temporal, or custom middleware — that can handle retries, error states, and audit logging.',
      },
      {
        type: 'h2',
        text: 'Where the AI Actually Sits in This Chain',
      },
      {
        type: 'p',
        text: 'The AI model does not run the pipeline — it informs one specific decision within it. The model is called once during intent classification and returns a structured output. Everything before it (identity resolution, enrichment) and everything after it (scoring, routing, CRM updates) is deterministic code. This distinction matters because it means the AI component can be swapped, updated, or A/B tested independently without touching the rest of the pipeline.',
      },
      {
        type: 'p',
        text: 'This is what separates an engineered AI Lead Management System from a "chatbot that qualifies leads." The AI is a precision instrument inside a robust system — not the system itself.',
      },
      {
        type: 'h2',
        text: 'Failure Modes to Design For',
      },
      {
        type: 'p',
        text: 'Any production lead qualification system needs explicit handling for: enrichment API timeouts (fallback to partial data), AI model downtime (fallback to rule-based scoring), CRM write failures (dead-letter queue with retry), and duplicate detection races (idempotency keys on all write operations).',
      },
      {
        type: 'p',
        text: 'These are not edge cases — they are certainties at scale. A system that fails silently on any of these will corrupt your CRM and erode sales team trust in the automation within weeks.',
      },
      {
        type: 'callout',
        text: 'If you\'re evaluating whether to build or buy, the question isn\'t the cost of the tool — it\'s whether the tool gives you full observability into each step of this chain. If you can\'t see why a lead was scored 42, you can\'t improve it.',
      },
      {
        type: 'h2',
        text: 'How AutoEra Builds This',
      },
      {
        type: 'p',
        text: 'The AI Lead Management Systems we engineer at AutoEra are built as proper software — dedicated orchestration (n8n or custom), a Postgres-backed contact store, and webhook-driven CRM sync. The AI classification layer uses OpenAI or Anthropic models depending on latency requirements. Every decision is logged to a structured audit table so you can query "why was this lead scored X" at any point.',
      },
      {
        type: 'p',
        text: 'You own the code, the database, and the logic. There is no platform dependency. If the AI provider changes pricing, you swap a model. If your qualification criteria change, you update a config — not a vendor dashboard.',
      },
    ],
    relatedLinks: [
      { text: 'Our AI Systems', href: '/#systems' },
      { text: 'Real Projects', href: '/#projects' },
    ],
  },

  {
    slug: 'rag-vs-fine-tuning',
    title: 'RAG vs Fine-Tuning: Which One Does Your Business Need?',
    summary:
      'A practical decision framework for choosing between Retrieval-Augmented Generation and fine-tuning — covering when each approach is appropriate, what it costs, and what trade-offs you\'re actually making.',
    category: 'Technical',
    readTime: 8,
    publishedDate: '2026-07-05',
    content: [
      {
        type: 'p',
        text: 'Every team building an internal AI tool hits the same fork in the road: should we retrieve information dynamically, or should we bake knowledge into the model itself? The answer depends on the nature of the knowledge, how frequently it changes, and what failure modes are acceptable. Getting this wrong means either an expensive fine-tuning run that goes stale in six months, or a RAG system that retrieves irrelevant context and produces confident nonsense.',
      },
      {
        type: 'h2',
        text: 'What Each Approach Actually Does',
      },
      {
        type: 'h3',
        text: 'Retrieval-Augmented Generation (RAG)',
      },
      {
        type: 'p',
        text: 'RAG keeps knowledge outside the model. At query time, it embeds the user\'s question into a vector representation, searches a vector database (Pinecone, Weaviate, pgvector) for semantically similar document chunks, and injects those chunks into the model\'s prompt as context. The model then generates a response grounded in that retrieved content.',
      },
      {
        type: 'code',
        lang: 'plaintext',
        text: `User query → Embed query → Vector search → Top-K chunks
→ Prompt: "Given the following context: [chunks]... answer: [query]"
→ LLM generation → Response`,
      },
      {
        type: 'p',
        text: 'The model\'s weights are never modified. The knowledge lives in the vector store and can be updated without touching the model.',
      },
      {
        type: 'h3',
        text: 'Fine-Tuning',
      },
      {
        type: 'p',
        text: 'Fine-tuning modifies the model\'s weights by training on example input-output pairs. The goal is to change how the model behaves — its tone, output structure, domain vocabulary, or reasoning style — not to inject facts. After fine-tuning, the model responds differently by default, without needing examples in the prompt.',
      },
      {
        type: 'code',
        lang: 'jsonl',
        text: `{"messages": [{"role": "user", "content": "How do I escalate a billing dispute?"}, {"role": "assistant", "content": "To escalate a billing dispute, follow these steps..."}]}
{"messages": [{"role": "user", "content": "What is our refund policy?"}, {"role": "assistant", "content": "Our refund policy allows..."}]}`,
      },
      {
        type: 'callout',
        text: 'Fine-tuning teaches the model how to respond. RAG tells the model what to respond about. These are fundamentally different objectives — mixing them up leads to systems that are expensive to build and don\'t solve the actual problem.',
      },
      {
        type: 'h2',
        text: 'When to Use RAG',
      },
      {
        type: 'p',
        text: 'RAG is the right choice when your primary problem is knowledge access: you have a body of documents, policies, SOPs, or data, and you want the model to answer questions grounded in that material accurately.',
      },
      {
        type: 'p',
        text: 'Use RAG when:',
      },
      {
        type: 'p',
        text: '— Your knowledge changes frequently (pricing, policies, product documentation)\n— Accuracy and traceability matter (you need to be able to cite sources)\n— The knowledge base is large (thousands of documents)\n— You want to update knowledge without retraining\n— Your budget for AI infrastructure is constrained',
      },
      {
        type: 'p',
        text: 'RAG is not appropriate when the failure mode is inconsistent output format or tone — a customer support agent that sometimes writes formal responses and sometimes casual ones. That\'s a behavioral problem, not a knowledge access problem.',
      },
      {
        type: 'h2',
        text: 'When to Use Fine-Tuning',
      },
      {
        type: 'p',
        text: 'Fine-tuning is the right choice when your primary problem is model behavior: you need consistent output format, domain-specific vocabulary, a particular reasoning style, or you want to reduce prompt length by inlining expected behavior into the model.',
      },
      {
        type: 'p',
        text: 'Use fine-tuning when:',
      },
      {
        type: 'p',
        text: '— You need highly consistent output structure (e.g., always return JSON in a specific schema)\n— You\'re working with a specialized domain with unusual vocabulary (legal, medical, financial)\n— You need the model to follow a very specific reasoning pattern\n— Your knowledge is relatively static (legal frameworks, compliance rules)\n— You\'ve exhausted prompt engineering and it\'s still inconsistent',
      },
      {
        type: 'callout',
        text: 'One underappreciated use of fine-tuning: reducing token cost. A fine-tuned model can follow a complex behavioral pattern with fewer tokens in the system prompt because those patterns are encoded in the weights. At high volume, this compounds into meaningful savings.',
      },
      {
        type: 'h2',
        text: 'The Cost Reality',
      },
      {
        type: 'h3',
        text: 'RAG costs',
      },
      {
        type: 'p',
        text: 'Upfront: embedding your knowledge base (typically $5–50 for most business document sets with OpenAI\'s text-embedding-3-small). Ongoing: vector database hosting ($0–70/month for most use cases), embedding new documents as they\'re added, and slightly longer prompts due to context injection. The prompt cost increase is typically 30–60% per query depending on retrieved chunk count.',
      },
      {
        type: 'h3',
        text: 'Fine-tuning costs',
      },
      {
        type: 'p',
        text: 'Training: $0.008 per 1K tokens with GPT-4o-mini fine-tuning. A typical fine-tune on 500 examples with average 300 tokens each runs 3–4 epochs, totalling ~$5–15. The larger cost is the time to curate quality training pairs — a dataset of 500 high-quality examples requires significant domain expertise to prepare. Post-training inference costs are lower than base models when running on fine-tuned endpoints.',
      },
      {
        type: 'h2',
        text: 'The Combined Approach',
      },
      {
        type: 'p',
        text: 'The most robust production systems use both. Fine-tune the model to produce the correct output format and behave consistently, then use RAG to supply it with current, accurate knowledge at query time. This is the architecture behind AutoEra\'s AURA system: a base model fine-tuned for qualification behavior, with RAG providing current AutoEra service knowledge and pricing context.',
      },
      {
        type: 'p',
        text: 'This approach does have higher complexity and cost. Reserve it for high-stakes applications where both behavioral consistency and knowledge accuracy are non-negotiable.',
      },
      {
        type: 'h2',
        text: 'The Decision Framework',
      },
      {
        type: 'p',
        text: 'Ask yourself three questions:',
      },
      {
        type: 'p',
        text: '1. Is my problem that the model doesn\'t know enough? → RAG\n2. Is my problem that the model doesn\'t behave consistently? → Fine-tuning\n3. Is my problem both? → Combined approach, evaluated against budget',
      },
      {
        type: 'callout',
        text: 'If you\'re unsure, default to RAG first. It\'s faster to implement, easier to iterate, and the knowledge update cycle is immediate. Fine-tuning is a significant commitment — do it once you have evidence that behavioral inconsistency is the actual bottleneck.',
      },
    ],
    relatedLinks: [
      { text: 'How We Built AURA', href: '/insights/how-we-built-aura' },
      { text: 'Internal Knowledge Assistant', href: '/#systems' },
    ],
  },

  {
    slug: 'how-we-built-aura',
    title: 'How We Built AURA: An Internal Knowledge Assistant',
    summary:
      'A case study on building AutoEra\'s own RAG-powered Internal Knowledge Assistant — architecture decisions, the MCP integration layer, and what we learned from using it in production.',
    category: 'Case Studies',
    readTime: 9,
    publishedDate: '2026-07-10',
    content: [
      {
        type: 'p',
        text: 'AURA is AutoEra\'s internal AI system — built to handle inbound discovery conversations, qualify leads, and book strategy calls without manual intervention. It\'s the system we use in production, which makes it the most honest case study we can write: we\'ve had to live with the architectural decisions we made.',
      },
      {
        type: 'h2',
        text: 'The Problem We Were Solving',
      },
      {
        type: 'p',
        text: 'Discovery calls were consuming 4–6 hours per week asking the same questions and explaining the same concepts. The information being conveyed was consistent — what AutoEra builds, how the process works, rough pricing ranges, what tech stack we use — but the conversations weren\'t being captured anywhere useful. Leads who weren\'t ready would drop off with no follow-up path. Those who were ready sometimes fell through the cracks during high-volume weeks.',
      },
      {
        type: 'p',
        text: 'What we needed was a system that could conduct an intelligent first-pass discovery conversation, qualify the lead based on that conversation, and either book a call or route them to appropriate follow-up resources — automatically, at any hour.',
      },
      {
        type: 'h2',
        text: 'Architecture Overview',
      },
      {
        type: 'p',
        text: 'AURA is not a single model behind a chat widget. It\'s a pipeline with four distinct components that each handle a specific concern:',
      },
      {
        type: 'code',
        lang: 'plaintext',
        text: `Inbound message
  → [1] Context Retrieval (RAG layer, pgvector)
  → [2] Conversation State (n8n workflow, Redis session)
  → [3] Response Generation (OpenRouter → Claude Sonnet)
  → [4] Action Dispatch (MCP Integration layer)
  → Outbound response + CRM/calendar side effects`,
      },
      {
        type: 'h3',
        text: 'Component 1: The RAG Layer',
      },
      {
        type: 'p',
        text: 'AURA\'s knowledge base consists of AutoEra\'s service descriptions, pricing structures, process documentation, past project case studies, and a curated FAQ. All of this lives in a Postgres database with the pgvector extension enabled. Each document chunk (typically 400–600 tokens with 50-token overlap) is embedded using OpenAI\'s text-embedding-3-small model.',
      },
      {
        type: 'p',
        text: 'At query time, the user\'s latest message is embedded and compared against the knowledge base using cosine similarity. The top 4 chunks are retrieved and injected into the prompt as context. This gives AURA access to accurate, current information about AutoEra without hallucinating services or pricing that don\'t exist.',
      },
      {
        type: 'callout',
        text: 'We initially tried top-8 retrieval and found that too much context degraded response coherence. The model started trying to reconcile overlapping chunks rather than synthesizing a clean answer. Top-4 with re-ranking by relevance score was the sweet spot for our knowledge base size.',
      },
      {
        type: 'h3',
        text: 'Component 2: Conversation State',
      },
      {
        type: 'p',
        text: 'Maintaining conversation context across turns is handled by n8n. Each conversation is keyed by session ID (derived from contact identifier). The n8n workflow retrieves the conversation history from a Redis store, appends the new message, calls the AI endpoint, stores the updated history, and returns the response.',
      },
      {
        type: 'p',
        text: 'History is trimmed to the last 8 turns using a sliding window. This keeps context fresh and prompt length bounded. We considered full conversation summarization (compressing history into a summary at turn 10+) but the added complexity wasn\'t worth it for conversations that rarely exceed 12 turns.',
      },
      {
        type: 'h3',
        text: 'Component 3: Response Generation',
      },
      {
        type: 'p',
        text: 'Response generation routes through OpenRouter, which gives us model-agnostic inference — we can switch between Claude Sonnet, GPT-4o, or Gemini without changing the upstream code. In practice, Claude Sonnet handles AURA\'s conversational tone better than GPT-4o for our use case: more natural phrasing, better at knowing when not to push for a call booking.',
      },
      {
        type: 'p',
        text: 'The system prompt defines AURA\'s role, its qualification criteria, and how it should handle specific scenarios: budget objections, timeline uncertainty, technical questions outside its knowledge base. It explicitly instructs AURA not to guess or extrapolate beyond retrieved context.',
      },
      {
        type: 'code',
        lang: 'plaintext',
        text: `System prompt structure:
[Role definition] — Who AURA is, what it's optimizing for
[Behavioral rules] — What to do / not do
[Retrieved context] — Injected at runtime by RAG layer
[Conversation history] — Injected at runtime by state layer
[Qualification criteria] — What signals trigger a booking offer`,
      },
      {
        type: 'h3',
        text: 'Component 4: The MCP Integration Layer',
      },
      {
        type: 'p',
        text: 'Model Context Protocol (MCP) is how AURA takes actions beyond generating text. When AURA determines a lead is qualified — based on intent signals, budget range, and timeline — it calls the booking tool via MCP. This triggers an n8n sub-workflow that checks Google Calendar availability, creates a calendar event, sends a confirmation email, and creates a contact record in the CRM.',
      },
      {
        type: 'p',
        text: 'MCP allows the model to express intent ("I want to book a call for this contact at this time") as a structured tool call, and the integration layer handles the actual side effects. This separation keeps the model\'s job clean: reason and respond. Side effects are handled deterministically by external code.',
      },
      {
        type: 'callout',
        text: 'The key advantage of MCP over function calling alone is standardization. The same tool definitions work across different model providers. When we switched from GPT-4o to Claude Sonnet, the MCP tool definitions didn\'t need to change — only the API endpoint.',
      },
      {
        type: 'h2',
        text: 'Qualification Logic',
      },
      {
        type: 'p',
        text: 'AURA qualifies leads by collecting five signals across the conversation: business type, specific problem being solved, current tool stack, approximate budget range, and decision timeline. These signals are extracted from natural conversation — AURA doesn\'t present a form. When three or more signals are collected and the budget signal is above threshold, AURA offers to book a discovery call.',
      },
      {
        type: 'p',
        text: 'Leads below threshold get routed to a nurture sequence: AURA generates a personalized follow-up summary and sends it to the n8n workflow, which adds them to an email sequence appropriate for their stated timeline.',
      },
      {
        type: 'h2',
        text: 'What We Got Wrong Initially',
      },
      {
        type: 'p',
        text: 'Three mistakes cost us time in the first build:',
      },
      {
        type: 'p',
        text: '1. We stored conversation history in the n8n workflow\'s internal memory rather than an external store. This meant history was lost on any workflow restart, and we couldn\'t scale to concurrent conversations. Moving to Redis fixed both issues.',
      },
      {
        type: 'p',
        text: '2. We wrote the system prompt as a narrative paragraph. The model interpreted instructions inconsistently. Rewriting it as structured, numbered rules with explicit conditional logic ("If the user mentions a timeline under 2 weeks, treat as urgent") cut hallucinated behavior by roughly 60%.',
      },
      {
        type: 'p',
        text: '3. We didn\'t implement retry logic on the calendar booking tool call. The first time Google Calendar\'s API had a transient error, a qualified lead got confirmed via chat but no calendar event was created. The CRM record also failed silently. Now every tool call has a 3-attempt retry with exponential backoff and a dead-letter webhook that notifies us on failure.',
      },
      {
        type: 'h2',
        text: 'Results',
      },
      {
        type: 'p',
        text: 'AURA handles 100% of initial discovery conversations. First-response time dropped from hours to under 3 seconds. Qualified lead detection is accurate enough that the calls it books convert at a higher rate than cold-scheduled calls — because AURA has already collected and logged the key context before the call happens.',
      },
      {
        type: 'p',
        text: 'The system is what we build for clients who need an Internal Knowledge Assistant or Sales Qualification Agent. Everything we learned building and running AURA in production is what we bring to those engagements.',
      },
      {
        type: 'callout',
        text: 'The most valuable output of building AURA wasn\'t the automation itself — it was the documentation it forced us to write. To give the RAG layer accurate context, we had to formalize everything about AutoEra\'s services, process, and positioning that previously lived only in our heads.',
      },
    ],
    relatedLinks: [
      { text: 'RAG vs Fine-Tuning', href: '/insights/rag-vs-fine-tuning' },
      { text: 'Our Systems', href: '/#systems' },
      { text: 'Real Projects', href: '/#projects' },
    ],
  },
];

/** Lookup helper — returns undefined if slug not found */
export function getArticleBySlug(slug) {
  return articles.find((a) => a.slug === slug);
}

/** Category colour map for UI badges */
export const categoryColors = {
  'AI & Automation': { bg: 'bg-[#FF9500]/10', text: 'text-[#FF9500]', border: 'border-[#FF9500]/20' },
  'Business Systems': { bg: 'bg-[#A78BFA]/10', text: 'text-[#A78BFA]', border: 'border-[#A78BFA]/20' },
  'Technical':        { bg: 'bg-[#39D98A]/10', text: 'text-[#39D98A]', border: 'border-[#39D98A]/20' },
  'Case Studies':     { bg: 'bg-[#38BDF8]/10', text: 'text-[#38BDF8]', border: 'border-[#38BDF8]/20' },
};
