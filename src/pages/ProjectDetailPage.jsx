import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { FiArrowLeft, FiExternalLink, FiGithub } from 'react-icons/fi';
import ArchitectureDiagram from '../components/ArchitectureDiagram';
import PageHeader from '../components/PageHeader';
import Todo from '../components/Todo';
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
    {items.map((t) => (
      <li key={t} className="flex gap-3"><span aria-hidden className="mt-[10px] h-1 w-1 shrink-0 rounded-full bg-emerald-500" /><Todo text={t} /></li>
    ))}
  </ul>
);

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
            <Todo text="TODO: live link" />
          )}
          <a href={p.github} target="_blank" rel="noopener noreferrer" className="btn-ghost"><FiGithub /> Code on GitHub</a>
        </div>
      </PageHeader>

      <div className="container-x"><article className="max-w-4xl pb-20 pt-10">
        <Block n={1} title="Overview"><Todo as="p" text={p.overview} /></Block>
        <Block n={2} title="Why I built it"><Todo as="p" text={p.why} /></Block>
        <Block n={3} title="What I did"><Todo as="p" text={p.role} /></Block>
        <Block n={4} title="Key features"><List items={p.features} /></Block>
        <Block n={5} title="Tech stack">
          <dl className="grid gap-3 sm:grid-cols-2">
            {p.stack.map((t) => (
              <div key={t.name} className="card p-4">
                <dt className="font-semibold">{t.name}</dt>
                <dd className="mt-1 text-sm text-zinc-600 dark:text-zinc-400"><Todo text={t.why} /></dd>
              </div>
            ))}
          </dl>
        </Block>
        <Block n={6} title="Architecture"><ArchitectureDiagram layers={p.architecture} /></Block>
        <Block n={7} title="Challenges and how I solved them">
          <div className="space-y-4">
            {p.challenges.map((c) => (
              <div key={c.problem} className="card p-5">
                <p className="font-medium"><Todo text={c.problem} /></p>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400"><Todo text={c.solution} /></p>
              </div>
            ))}
          </div>
        </Block>
        <Block n={8} title="Result and what I learned">
          <Todo as="p" text={p.result} />
          <Todo as="p" className="mt-3" text={p.learned} />
        </Block>
        <Block n={9} title="Future improvements"><List items={p.future} /></Block>
        <Block n={10} title="Screenshots and demo">
          {p.media.length ? (
            <div className="grid gap-4 sm:grid-cols-2">
              {p.media.map((m) => (
                <img key={m.src} src={`${process.env.PUBLIC_URL}${m.src}`} alt={m.alt} loading="lazy" decoding="async" className="card w-full" />
              ))}
            </div>
          ) : (
            <Todo text="TODO: add screenshots or a demo video (media in src/data/projects.mjs)" />
          )}
        </Block>
        <Link to="/projects" className="btn-ghost mt-6"><FiArrowLeft /> All projects</Link>
      </article></div>
    </>
  );
}
