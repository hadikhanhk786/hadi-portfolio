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
    why: 'I wanted to learn how retrieval-augmented generation works end to end, from chunking and embeddings to grounding answers in sources, and to solve a real annoyance: AI answers that sound right but cite nothing. Students and engineers reading long PDFs need answers they can check against the page.',
    role: 'Solo project. I designed the architecture and built every part: the React UI, the Node.js API, the Python RAG service, the database schema, the Docker deployment on Oracle Cloud and the on-demand GPU setup on Kaggle.',
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
      { name: 'React 19 + Vite + TypeScript', why: 'Fast builds and type safety across a UI with many API calls; Vite makes it easy to host as static files on GitHub Pages.' },
      { name: 'Node.js / Express 5 + Prisma', why: 'My main backend stack; Prisma gives typed database access for users, workspaces, sources and chats.' },
      { name: 'Python FastAPI', why: 'The AI ecosystem (PDF parsing, OCR, embeddings, LLM clients) is strongest in Python, so the RAG pipeline lives in its own small service.' },
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
    result: 'Live on free infrastructure: the UI on GitHub Pages and the API, database and models on an Oracle Cloud Always Free VM, with a free Kaggle GPU started only when someone chats. Answers come back with page citations, follow-up questions take 1-4 s on CPU and ~6-8 s with the 14B model on GPU.',
    learned: 'Most of the speed and quality came from measuring, not from bigger models: prompt caching, the right similarity cutoff for the embedding model and correct timeouts mattered more than the model size. I also learned how to run a full AI stack for free and keep it reliable.',
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
    status: 'MVP',
    overview:
      'Document collection for tax preparers, bookkeepers and accountants. The accountant picks a regional checklist (US, Australia, UAE); the client opens a no-login link on their phone, uploads documents item by item in English or Arabic, and gets reminders until everything is in.',
    why: 'Built to learn product engineering on a real problem: accountants spend hours chasing clients for missing documents over email and WhatsApp. I wanted to build the whole product (auth, files, email, payments) on free tiers and handle the details that make it trustworthy.',
    role: 'Solo project. I built the React UI, the Hono API, the database schema, signed client links, the reminder worker, email providers and subscription billing.',
    features: [
      'Regional checklists (US, Australia, UAE) in English and Arabic',
      'No-login client links that are signed, and can be replaced so the old link stops working',
      'Share a request by copying the link, WhatsApp click-to-chat or email',
      'Reminders sent only during the firm’s business hours, with a daily email cap',
      'Subscription billing',
    ],
    stack: [
      { name: 'React on Cloudflare Pages', why: 'Free global hosting for the UI and the API together.' },
      { name: 'Hono API on Pages Functions', why: 'A small, fast router that runs on Cloudflare’s edge runtime.' },
      { name: 'Neon Postgres', why: 'Serverless Postgres with a free tier that works from edge functions.' },
      { name: 'Clerk', why: 'Ready-made, secure accountant sign-in so I could focus on the product.' },
      { name: 'Cloudflare R2', why: 'S3-compatible storage for client uploads with no egress fees.' },
      { name: 'Resend / Amazon SES', why: 'Simple transactional email, with SES as a fallback provider.' },
      { name: 'Cloudflare Worker (cron)', why: 'Runs the hourly reminder job without a server.' },
      { name: 'Dodo Payments', why: 'Subscription billing for the paid plans.' },
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
    result: 'A working MVP covering the full flow, from creating a request to client uploads, reminders and billing, with an automated test suite that runs offline.',
    learned: 'How to design flows for people who will never create an account, how to stay inside free-tier limits by design, and how to keep payments and emails idempotent and safe.',
    future: ['Deploy publicly and onboard a first accounting firm', 'More regional checklists', 'WhatsApp reminders through an official API'],
    media: [],
    live: '', // TODO: live link
    github: 'https://github.com/hadikhanhk786/docnudge',
  },
  {
    slug: 'ecom-app',
    name: 'E-Commerce',
    tagline: 'Full-stack store with cart, Stripe checkout and order tracking',
    status: 'Learning project',
    overview:
      'A full-stack e-commerce platform with product management, a shopping cart, secure Stripe checkout and order tracking.',
    why: 'A learning project to understand how real online stores work behind the scenes: two kinds of users (buyers and sellers), inventory that must not oversell, and taking payments safely with Stripe.',
    role: 'Solo project. I built the buyer storefront, the seller dashboard, the Express API, the PostgreSQL schema and the Stripe payment flow.',
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
      { name: 'React + Vite', why: 'Quick development for a UI with many pages and forms.' },
      { name: 'Redux Toolkit + React Query', why: 'Redux for app state like the cart, React Query for caching server data.' },
      { name: 'Tailwind CSS', why: 'Consistent, responsive styling without writing much custom CSS.' },
      { name: 'Node.js + Express', why: 'Simple REST API with separate routes for buyers and sellers.' },
      { name: 'PostgreSQL', why: 'Orders, stock and payments need relational data and transactions.' },
      { name: 'JWT auth', why: 'Stateless sessions for both buyer and seller accounts.' },
      { name: 'Stripe (Elements + API)', why: 'Card data never touches my server; Stripe handles PCI compliance.' },
    ],
    architecture: [
      { label: 'Frontend', items: ['React + Vite', 'Stripe Elements'] },
      { label: 'Backend', items: ['Node.js / Express', 'JWT auth'] },
      { label: 'Data', items: ['PostgreSQL'] },
      { label: 'APIs', items: ['Stripe API'] },
    ],
    challenges: [
      {
        problem: 'Two buyers could add the last item to their carts and both try to buy it.',
        solution: 'Adding to the cart reserves the stock with an expiry time, and a scheduled job returns stock from expired carts.',
      },
      {
        problem: 'Letting buyers reuse saved cards without storing card data.',
        solution: 'Each buyer gets a Stripe customer; cards are attached as Stripe payment methods and the app only ever sees the brand and last 4 digits.',
      },
    ],
    result: 'A working store with separate buyer and seller experiences, stock reservations and Stripe test-mode payments.',
    learned: 'Inventory and payments are where the real complexity is: reservations, expiry and idempotency matter more than the UI.',
    future: ['Stripe webhooks to confirm payments server-side', 'Make stock reservation and release atomic in one transaction', 'Automated tests and CI'],
    media: [],
    live: '', // TODO: live link
    github: 'https://github.com/hadikhanhk786/ecom-app',
  },
  {
    slug: 'live-class',
    name: 'Live Classroom',
    tagline: 'Real-time virtual classroom with chat, files and attendance',
    status: 'Learning project',
    overview:
      'A real-time virtual classroom: live chat between teachers and students, classroom updates and notifications, shared files, and session management with attendance.',
    why: 'A learning project to understand real-time systems: keeping many browsers in sync, roles and permissions in a live session, and sharing files during a class.',
    role: 'Solo project. I built the React client, the Express and Socket.IO server, file uploads and the PostgreSQL schema.',
    features: [
      'Live chat between teachers and students',
      'Real-time classroom updates and system notifications',
      'Role-based views for students, teachers and managers',
      'File upload and download (images, videos, PDFs, documents) with categories and bookmarks',
      'Start and end class sessions, track attendance, remove participants',
      'Classroom history',
    ],
    stack: [
      { name: 'React + React Router', why: 'Separate views for students, teachers and managers.' },
      { name: 'Socket.IO', why: 'Rooms and automatic reconnection make real-time chat and class updates simple.' },
      { name: 'Node.js + Express', why: 'One server for the REST API and the WebSocket connections.' },
      { name: 'PostgreSQL', why: 'Users, classes, enrollments, files and bookmarks are relational data.' },
      { name: 'Multer', why: 'Handles multipart file uploads in Express.' },
    ],
    architecture: [
      { label: 'Frontend', items: ['React', 'Socket.IO client'] },
      { label: 'Backend', items: ['Node.js / Express', 'Socket.IO server', 'Multer uploads'] },
      { label: 'Data', items: ['PostgreSQL', 'Uploaded files'] },
    ],
    challenges: [
      {
        problem: 'Keeping everyone in a class in sync, including people who join late.',
        solution: 'Each class is a Socket.IO room with its live state (teachers, students, active or not, message history) kept on the server, so late joiners receive the chat history and the current participant list.',
      },
      {
        problem: 'Students should not get in before the teacher starts the class.',
        solution: 'The server checks the role and the class state on join and rejects students until a teacher has started the session.',
      },
    ],
    result: 'A working real-time classroom with live chat, roles, file sharing and attendance.',
    learned: 'Real-time state held in server memory is simple but is lost on restart and does not scale past one server.',
    future: ['Move live class state to Redis (Socket.IO Redis adapter) to survive restarts and scale out', 'Persist chat history in PostgreSQL', 'Add authentication to socket connections'],
    media: [],
    live: '', // TODO: live link
    github: 'https://github.com/hadikhanhk786/Live-Class',
  },
];

export const findProject = (slug) => projects.find((p) => p.slug === slug);
