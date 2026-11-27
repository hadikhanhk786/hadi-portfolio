// Page titles and descriptions, shared by the app (document head) and scripts/prerender.mjs
// (which writes a real HTML file per route so links, refresh and link previews work on GitHub Pages).
import { projects } from './projects.mjs';

export const SITE_URL = 'https://hadikhanhk786.github.io/hadi-portfolio';
export const SITE_NAME = 'Hadi Khan';

export const pages = {
  '/': {
    title: 'Hadi Khan | Senior Node.js Backend Engineer',
    description:
      'Hadi Khan: Senior Node.js backend engineer with 6 years building fast, reliable APIs, Stripe payment flows, data pipelines, AI agents and MCP tooling with Node.js, PostgreSQL, Redis and AWS.',
  },
  '/about': {
    title: 'About | Hadi Khan',
    description: 'My story, experience and education, work case studies, and what I am looking for next.',
  },
  '/projects': {
    title: 'Projects | Hadi Khan',
    description: 'Citewise, DocNudge, an e-commerce platform and a live classroom, plus more on GitHub.',
  },
  '/skills': {
    title: 'Skills | Hadi Khan',
    description: 'Backend, databases, cloud & DevOps, AI agents & MCP, frontend and tools I use.',
  },
  '/resume': {
    title: 'Resume | Hadi Khan',
    description: 'View or download the resume of Hadi Khan, Senior Node.js Backend Engineer.',
  },
  '/contact': {
    title: 'Contact | Hadi Khan',
    description: 'Get in touch with Hadi Khan about backend roles and freelance work.',
  },
  '/notes': {
    title: 'Notes | Hadi Khan',
    description: 'Learning notes on backend engineering, PostgreSQL, Node.js and AI agents.',
  },
  ...Object.fromEntries(
    projects.map((p) => [
      `/projects/${p.slug}`,
      { title: `${p.name} | Projects | Hadi Khan`, description: `${p.name}: ${p.tagline}.` },
    ])
  ),
};

export const notFound = { title: 'Page not found | Hadi Khan', description: 'This page does not exist.' };
