import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { FiArrowLeft, FiExternalLink, FiGithub } from 'react-icons/fi';
import ArchitectureDiagram from '../components/ArchitectureDiagram';
import PageHeader from '../components/PageHeader';
import Todo, { SHOW_TODOS, visible } from '../components/Todo';
import { findProject } from '../data/projects.mjs';
import NotFoundPage from './NotFoundPage';

function Block({ n, title, children }) {
  return (
    <section className="border-t border-zinc-200 py-10 dark:border-ink-700">
      <h2 className="text-xl font-bold tracking-tight">
        <span className="mr-2 font-mono text-sm text-emerald-600 dark:text-emerald-400">{String(n).padStart(2, '0')}</span>
        {title}
      </h2>
      <div className="mt-4 text-[15px] leading-relaxed text-zinc-700 dark:text-zinc-300">{children}</div>
    </section>
  );
}

const List = ({ items }) => (
  <ul className="space-y-2">
    {items.filter(visible).map((t) => (
      <li key={t} className="flex gap-3"><span aria-hidden className="mt-[10px] h-1 w-1 shrink-0 rounded-full bg-emerald-500" /><Todo text={t} /></li>
    ))}
  </ul>
);

// Sections with nothing filled in yet are left out of the live site (see Todo.jsx).
function sections(p) {
  const challenges = p.challenges.filter((c) => visible(c.problem) && visible(c.solution));
  return [
    visible(p.overview) && { title: 'Overview', body: <Todo as="p" text={p.overview} /> },
    visible(p.why) && { title: 'Why I built it', body: <Todo as="p" text={p.why} /> },
    visible(p.role) && { title: 'What I did', body: <Todo as="p" text={p.role} /> },
    p.features.some(visible) && { title: 'Key features', body: <List items={p.features} /> },
    {
      title: 'Tech stack',
      body: (
        <dl className="grid gap-3 sm:grid-cols-2">
          {p.stack.map((t) => (
            <div key={t.name} className="card p-4">
              <dt className="font-semibold">{t.name}</dt>
              {visible(t.why) && <dd className="mt-1 text-sm text-zinc-600 dark:text-zinc-400"><Todo text={t.why} /></dd>}
            </div>
          ))}
        </dl>
      ),
    },
    { title: 'Architecture', body: <ArchitectureDiagram layers={p.architecture} /> },
    challenges.length > 0 && {
      title: 'Challenges and how I solved them',
      body: (
        <div className="space-y-4">
          {challenges.map((c) => (
            <div key={c.problem} className="card p-5">
              <p className="font-medium"><Todo text={c.problem} /></p>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400"><Todo text={c.solution} /></p>
            </div>
          ))}
        </div>
      ),
    },
    (visible(p.result) || visible(p.learned)) && {
      title: 'Result and what I learned',
      body: (<><Todo as="p" text={p.result} /><Todo as="p" className="mt-3" text={p.learned} /></>),
    },
    p.future.some(visible) && { title: 'Future improvements', body: <List items={p.future} /> },
    (p.media.length > 0 || SHOW_TODOS) && {
      title: 'Screenshots and demo',
      body: p.media.length ? (
        <div className="grid gap-4 sm:grid-cols-2">
          {p.media.map((m) => (
            <img key={m.src} src={`${process.env.PUBLIC_URL}${m.src}`} alt={m.alt} loading="lazy" decoding="async" className="card w-full" />
          ))}
        </div>
      ) : (
        <Todo text="TODO: add screenshots or a demo video (media in src/data/projects.mjs)" />
      ),
    },
  ].filter(Boolean);
}

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const p = findProject(slug);
  if (!p) return <NotFoundPage />;

  return (
    <>
      <PageHeader eyebrow="Project" title={p.name} intro={p.tagline}>
        <div className="mt-6 flex flex-wrap gap-3">
          {p.live ? (
            <a href={p.live} target="_blank" rel="noopener noreferrer" className="btn-primary"><FiExternalLink /> Live site</a>
          ) : (
            SHOW_TODOS && <Todo text="TODO: live link" />
          )}
          <a href={p.github} target="_blank" rel="noopener noreferrer" className="btn-ghost"><FiGithub /> Code on GitHub</a>
        </div>
      </PageHeader>

      <div className="container-x"><article className="max-w-4xl pb-20 pt-10">
        {sections(p).map((sec, i) => (
          <Block key={sec.title} n={i + 1} title={sec.title}>{sec.body}</Block>
        ))}
        <Link to="/projects" className="btn-ghost mt-6"><FiArrowLeft /> All projects</Link>
      </article></div>
    </>
  );
}
