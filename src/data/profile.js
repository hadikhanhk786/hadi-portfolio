// Single source of truth for portfolio content — keep in sync with the resume PDF.

export const profile = {
  name: 'Hadi Khan',
  role: 'Senior Node.js Backend Engineer',
  years: 6,
  location: 'Bareilly, UP, India',
  email: 'khanhadi6@gmail.com',
  phone: '+91 9528091316',
  linkedin: 'https://www.linkedin.com/in/hadi-khan-55b575147/',
  github: 'https://github.com/hadikhanhk786',
  githubUser: 'hadikhanhk786',
  resume: `${process.env.PUBLIC_URL}/Hadi_Khan_Resume.pdf`,
  stack: ['Node.js', 'Express', 'NestJS', 'PostgreSQL', 'Redis', 'AWS'],
  tagline:
    'I build backends that stay fast, correct and boring under load: APIs, payment flows and data pipelines in Node.js, PostgreSQL and AWS.',
  summary: [
    "Six years into backend engineering, the problems that still excite me most are the messy ones: a government API timing out at 6.2 seconds with a million records on the other side, a payment webhook that needs to be idempotent or someone gets charged twice, a PostgreSQL table that EXPLAIN ANALYZE says is doing a full sequential scan on 40 million rows.",
    "That's the work I've been doing at HSC and LTIMindtree. Node.js, Express, NestJS, PostgreSQL, Redis, AWS Lambda and SQS are my daily stack. I've used them to cut that 6.2s latency down to 0.5s, wire up a Stripe integration that has run cleanly for four years on a platform doing $75M a year, and pull roughly 40% faster query times out of indexes and partitioning.",
    'I also use GitHub Copilot and Claude day-to-day. Not as a shortcut: writing the test first and having AI fill the boilerplate lets me think about the actual problem.',
  ],
};

export const metrics = [
  {
    value: '12x',
    label: 'Latency cut',
    detail: '6.2s → 0.5s on a 1M+ record government platform via indexing, Redis caching and async SQS pipelines.',
  },
  {
    value: '$75M',
    label: 'Annual revenue on Stripe',
    detail: 'Idempotency, webhooks and reconciliation. Zero payment incidents in four years.',
  },
  {
    value: '~40%',
    label: 'Faster PostgreSQL queries',
    detail: 'Composite indexes, date-range partitioning and EXPLAIN ANALYZE-guided rewrites.',
  },
  {
    value: '1M+',
    label: 'Daily records',
    detail: 'Handled on distributed Node.js microservices with sub-second API response times.',
  },
];

export const caseStudies = [
  {
    title: 'From 6.2s to 0.5s',
    tag: 'Performance',
    problem:
      'A Node.js/Express API behind a government compliance platform was answering in 6.2 seconds, and users were complaining.',
    approach: [
      'Profiled and found N+1 query patterns and missing indexes on join columns',
      'Added composite and partial indexes on frequently filtered columns',
      'Cached repeated lookups in Redis',
      'Moved heavy aggregations into async Lambda/SQS jobs',
    ],
    result: '0.5s responses, a 12x improvement that held up under production load.',
  },
  {
    title: 'Payments nobody worries about',
    tag: 'Stripe',
    problem:
      'A platform doing ~$75M a year needed payments where a retried request or a duplicate webhook could never double-charge anyone.',
    approach: [
      'Payment intents with idempotency keys on every charge attempt',
      'Webhook signature verification',
      'Daily reconciliation jobs to catch discrepancies early',
    ],
    result: 'Four years in production, zero payment incidents.',
  },
  {
    title: 'Taming a 40M-row table',
    tag: 'PostgreSQL',
    problem:
      'EXPLAIN ANALYZE showed sequential scans on tables with 40M+ rows, and retrieval was getting slower as data grew.',
    approach: [
      'Partitioned tables by date range',
      'Rewrote query plans around the new indexes',
      'Treated tuning as ongoing work, not a one-time fix',
    ],
    result: 'Retrieval times down roughly 40% across the board.',
  },
];

export const experience = [
  {
    company: 'LTIMindtree',
    role: 'Senior Software Engineer',
    period: 'Jan 2026 – Present',
    location: 'Remote, India',
    current: true,
    points: [
      'Built an OpenAI API pipeline on Node.js/Express microservices that turns reports which took 45+ minutes to assemble by hand into structured output in under 3 seconds.',
      'Designed the REST API layer in strict TypeScript, with typed request/response schemas, custom error middleware and request-level logging that makes production debugging far less painful.',
      'Pair-program with GitHub Copilot and Claude for test scaffolding, edge-case generation and refactoring. It cuts delivery time without lowering the quality bar.',
    ],
    tech: ['TypeScript', 'Node.js', 'Express', 'OpenAI API', 'Microservices'],
  },
  {
    company: 'HughesSystique Corporation (HSC)',
    role: 'Senior Software Engineer',
    period: 'Oct 2021 – Oct 2025',
    location: 'Noida, India',
    points: [
      'Cut API latency on a government compliance platform from 6.2s to 0.5s (12x) by fixing N+1 queries, adding composite/partial indexes, Redis caching and async Lambda/SQS jobs.',
      'Brought PostgreSQL retrieval times down ~40% on 40M+ row tables with date-range partitioning and query plan rewrites.',
      'Owned the Stripe integration for a ~$75M/yr platform: payment intents, webhook verification, idempotency keys and daily reconciliation. Zero payment incidents in four years.',
      'Moved report generation, email notifications and audit logging onto AWS Lambda and SQS, so the API stayed responsive through load spikes and costs went down.',
      'Helped establish code reviews, TDD and GitHub Actions CI/CD, which cut the production bug rate 15%. Mentored three junior engineers, and the sprint defect rate fell ~20% over six months.',
    ],
    tech: ['Node.js', 'Express', 'PostgreSQL', 'Redis', 'AWS Lambda', 'SQS', 'Stripe'],
  },
  {
    company: 'Svayam Infoware Pvt. Ltd.',
    role: 'Software Engineer',
    period: 'Jan 2020 – Oct 2021',
    location: 'Lucknow, India',
    points: [
      'Built a full-stack ERP on Node.js/Express and SQL Server, used daily by 200+ employees for inventory, orders and HR workflows.',
      'Cut average query time ~40% with indexed joins and stored procedures for the reporting load.',
      'Replaced synchronous report generation and email calls with Bull + Redis background queues, which lowered operational costs ~18%.',
    ],
    tech: ['Node.js', 'Express', 'SQL Server', 'Bull', 'Redis'],
  },
];

export const skills = [
  {
    group: 'Backend',
    items: ['Node.js', 'Express.js', 'NestJS', 'REST APIs', 'Microservices', 'Event-driven architecture', 'WebSockets / Socket.IO'],
  },
  {
    group: 'Databases',
    items: ['PostgreSQL', 'Indexing & partitioning', 'EXPLAIN ANALYZE', 'MySQL', 'Redis (caching, pub/sub, rate limiting)'],
  },
  {
    group: 'Cloud & Infra',
    items: ['AWS Lambda', 'SQS', 'API Gateway', 'S3', 'IAM', 'Docker', 'GitHub Actions', 'CI/CD'],
  },
  {
    group: 'Languages',
    items: ['TypeScript', 'JavaScript (ES6+)', 'SQL', 'Python (familiar)'],
  },
  {
    group: 'Integrations',
    items: ['Stripe (intents, webhooks, idempotency, reconciliation)', 'OpenAI API', 'JWT / OAuth2'],
  },
  {
    group: 'Testing & AI tools',
    items: ['Jest', 'Supertest', 'TDD', 'Integration testing', 'GitHub Copilot', 'Claude', 'ChatGPT'],
  },
];

export const education = {
  degree: 'B.Tech, Information Technology',
  school: 'Shri Ramswaroop Memorial College of Engineering, Lucknow',
  year: '2020',
};
