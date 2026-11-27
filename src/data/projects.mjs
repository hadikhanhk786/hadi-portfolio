// Featured projects: one entry per /projects/<slug> page. Edit text here, not in components.
// Any string starting with "TODO:" is shown on the site as a visible TODO until you fill it in.
// .mjs so the post-build script (scripts/prerender.mjs) can read the same data for page titles/SEO.

export const projects = [
  {
    slug: 'citewise',
    name: 'Citewise',
    tagline: 'AI study copilot that answers from your PDFs with page-level citations',
    status: 'Live (invite-only)',
    overview:
      'An AI study copilot: upload PDFs and notes, ask questions, and get answers that come only from your sources, each with a verified page citation. It can also draw charts, export answers as PDF, read scanned PDFs, search the web and search a built-in software-engineering docs library.',
    why: 'TODO: the problem in your own words, and who has it.',
    role: 'TODO: confirm (solo project?) and what you built yourself.',
    features: [
      'Chat with PDFs and notes; every answer cites the page it came from',
      'Strict-sources mode: answers only from your documents, or says the sources do not cover it',
      'Optional live web search with linked sources',
      'Charts (bar, line, pie) drawn from answers',
      'Download any answer as a PDF',
      'OCR for scanned PDFs',
      'Shared library of Node.js, NestJS, Express, TypeScript, PostgreSQL and Redis docs, system-design case studies and interview questions',
      'Invite-only sign-up with signed invite links',
    ],
    stack: [
      { name: 'React 19 + Vite + TypeScript', why: 'TODO: why you chose it' },
      { name: 'Node.js / Express 5 + Prisma', why: 'TODO: why you chose it' },
      { name: 'Python FastAPI', why: 'TODO: why you chose it' },
      { name: 'PostgreSQL + pgvector', why: 'Keeps app data and embeddings in one database instead of running a separate vector store.' },
      { name: 'Ollama (Qwen2.5, nomic-embed-text)', why: 'Runs open models on my own hardware, so there is no per-request API cost.' },
      { name: 'Oracle Cloud Always Free + Kaggle GPU', why: 'Free hosting: an ARM VM for the app and a free GPU only while someone is chatting.' },
      { name: 'Docker Compose + Caddy', why: 'One command deploys the whole stack, with automatic HTTPS.' },
    ],
    architecture: [
      { label: 'Frontend', items: ['React (GitHub Pages)'] },
      { label: 'Backend', items: ['Caddy (HTTPS)', 'Node.js API', 'FastAPI RAG service'] },
      { label: 'Data', items: ['PostgreSQL + pgvector'] },
      { label: 'AI & APIs', items: ['GPU router', 'Kaggle T4 (Qwen2.5 14B)', 'Local Ollama (CPU)', 'SearXNG web search'] },
    ],
    challenges: [
      {
        problem: 'Answers took ~40 s on the free 2-core CPU because the model re-read ~1,800 prompt tokens on every question.',
        solution: 'Passed retrieved passages in document order so Ollama could reuse its prompt cache. Follow-up questions dropped to 1-4 s.',
      },
      {
        problem: 'Answers never showed citations.',
        solution: 'The similarity cutoff (0.75) was tuned for OpenAI/Gemini embeddings; the local nomic-embed-text matches scored ~1.1, so every passage was dropped. Re-tuned it to 1.25 and cited answers came back.',
      },
      {
        problem: 'A good model needs a GPU, and a GPU running all day costs money.',
        solution: 'A small router starts a free Kaggle T4 notebook when someone chats and the notebook shuts itself down after 5 idle minutes; the local model answers meanwhile. The 14B model on the GPU answers in ~6-8 s vs ~51-105 s on the CPU.',
      },
    ],
    result: 'TODO: users or usage, if any.',
    learned: 'TODO: what you learned.',
    future: [
      'Invite management from the Admin page',
      'Add links, PDFs and HTML from the UI to the docs library and training data',
      'A fine-tuned 7B model trained on docs and case studies',
    ],
    media: [], // TODO: add screenshots, e.g. { src: '/projects/citewise-chat.png', alt: '...' }
    live: 'https://hadikhanhk786.github.io/citewise/',
    github: 'https://github.com/hadikhanhk786/citewise',
  },
  {
    slug: 'docnudge',
    name: 'DocNudge',
    tagline: 'Document collection for accountants, with reminders until everything is in',
    status: 'TODO: status (live / in progress)',
    overview:
      'Document collection for tax preparers, bookkeepers and accountants. The accountant picks a regional checklist (US, Australia, UAE); the client opens a no-login link on their phone, uploads documents item by item in English or Arabic, and gets reminders until everything is in.',
    why: 'TODO: the problem in your own words, and who has it.',
    role: 'TODO: confirm (solo project?) and what you built yourself.',
    features: [
      'Regional checklists (US, Australia, UAE) in English and Arabic',
      'No-login client links that are signed, and can be replaced so the old link stops working',
      'Share a request by copying the link, WhatsApp click-to-chat or email',
      'Reminders sent only during the firm’s business hours, with a daily email cap',
      'Subscription billing',
    ],
    stack: [
      { name: 'React on Cloudflare Pages', why: 'TODO: why you chose it' },
      { name: 'Hono API on Pages Functions', why: 'TODO: why you chose it' },
      { name: 'Neon Postgres', why: 'TODO: why you chose it' },
      { name: 'Clerk', why: 'TODO: why you chose it' },
      { name: 'Cloudflare R2', why: 'TODO: why you chose it' },
      { name: 'Resend / Amazon SES', why: 'TODO: why you chose it' },
      { name: 'Cloudflare Worker (cron)', why: 'TODO: why you chose it' },
      { name: 'Dodo Payments', why: 'TODO: why you chose it' },
    ],
    architecture: [
      { label: 'Frontend', items: ['React (Cloudflare Pages)'] },
      { label: 'Backend', items: ['Hono API (Pages Functions)', 'Reminder Worker (cron)'] },
      { label: 'Data', items: ['Neon Postgres', 'Cloudflare R2 (files)'] },
      { label: 'APIs', items: ['Clerk (auth)', 'Resend / SES (email)', 'Dodo Payments'] },
    ],
    challenges: [
      {
        problem: 'Clients must open a request without an account, and the server should store no secret per link.',
        solution: 'Links are HMAC-signed tokens with a version number; "Replace link" bumps the version so the old link stops working.',
      },
      {
        problem: 'Staying inside the email provider’s free 100 emails/day.',
        solution: 'A rolling 24-hour cap (default 90) plus region-aware send windows for reminders.',
      },
    ],
    result: 'TODO: result.',
    learned: 'TODO: what you learned.',
    future: ['TODO: future improvements'],
    media: [],
    live: '', // TODO: live link
    github: 'https://github.com/hadikhanhk786/docnudge',
  },
  {
    slug: 'ecom-app',
    name: 'E-Commerce',
    tagline: 'Full-stack store with cart, Stripe checkout and order tracking',
    status: 'TODO: status',
    overview:
      'A full-stack e-commerce platform with product management, a shopping cart, secure Stripe checkout and order tracking.',
    why: 'TODO: the problem in your own words, and who has it.',
    role: 'TODO: your role and what you built yourself.',
    features: [
      'Product browsing and search',
      'Shopping cart',
      'Secure payments with Stripe',
      'Order tracking',
      'User authentication',
      'Multiple delivery addresses',
      'Seller dashboard',
      'Responsive design',
    ],
    stack: [
      { name: 'React + Vite', why: 'TODO: why you chose it' },
      { name: 'Redux Toolkit + React Query', why: 'TODO: why you chose it' },
      { name: 'Tailwind CSS', why: 'TODO: why you chose it' },
      { name: 'Node.js + Express', why: 'TODO: why you chose it' },
      { name: 'PostgreSQL', why: 'TODO: why you chose it' },
      { name: 'JWT auth', why: 'TODO: why you chose it' },
      { name: 'Stripe (Elements + API)', why: 'TODO: why you chose it' },
    ],
    architecture: [
      { label: 'Frontend', items: ['React + Vite', 'Stripe Elements'] },
      { label: 'Backend', items: ['Node.js / Express', 'JWT auth'] },
      { label: 'Data', items: ['PostgreSQL'] },
      { label: 'APIs', items: ['Stripe API'] },
    ],
    challenges: [{ problem: 'TODO: hardest challenge', solution: 'TODO: how you solved it' }],
    result: 'TODO: result.',
    learned: 'TODO: what you learned.',
    future: ['TODO: future improvements'],
    media: [],
    live: '', // TODO: live link
    github: 'https://github.com/hadikhanhk786/ecom-app',
  },
  {
    slug: 'live-class',
    name: 'Live Classroom',
    tagline: 'Real-time virtual classroom with chat, files and attendance',
    status: 'TODO: status',
    overview:
      'A real-time virtual classroom: live chat between teachers and students, classroom updates and notifications, shared files, and session management with attendance.',
    why: 'TODO: the problem in your own words, and who has it.',
    role: 'TODO: your role and what you built yourself.',
    features: [
      'Live chat between teachers and students',
      'Real-time classroom updates and system notifications',
      'Role-based views for students, teachers and managers',
      'File upload and download (images, videos, PDFs, documents) with categories and bookmarks',
      'Start and end class sessions, track attendance, remove participants',
      'Classroom history',
    ],
    stack: [
      { name: 'React + React Router', why: 'TODO: why you chose it' },
      { name: 'Socket.IO', why: 'TODO: why you chose it' },
      { name: 'Node.js + Express', why: 'TODO: why you chose it' },
      { name: 'PostgreSQL', why: 'TODO: why you chose it' },
      { name: 'Multer', why: 'TODO: why you chose it' },
    ],
    architecture: [
      { label: 'Frontend', items: ['React', 'Socket.IO client'] },
      { label: 'Backend', items: ['Node.js / Express', 'Socket.IO server', 'Multer uploads'] },
      { label: 'Data', items: ['PostgreSQL', 'Uploaded files'] },
    ],
    challenges: [{ problem: 'TODO: hardest challenge', solution: 'TODO: how you solved it' }],
    result: 'TODO: result.',
    learned: 'TODO: what you learned.',
    future: ['TODO: future improvements'],
    media: [],
    live: '', // TODO: live link
    github: 'https://github.com/hadikhanhk786/Live-Class',
  },
];

export const findProject = (slug) => projects.find((p) => p.slug === slug);
