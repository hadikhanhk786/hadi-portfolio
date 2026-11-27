import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowUpRight } from 'react-icons/fi';

export default function ProjectCard({ project }) {
  return (
    <article className="card group relative flex h-full flex-col p-6 transition hover:-translate-y-0.5 hover:border-emerald-500/50">
      <h3 className="flex items-start justify-between gap-3 text-lg font-semibold">
        <Link
          to={`/projects/${project.slug}`}
          className="after:absolute after:inset-0 after:rounded-2xl focus:outline-none focus-visible:after:ring-2 focus-visible:after:ring-emerald-500"
        >
          {project.name}
        </Link>
        <FiArrowUpRight aria-hidden className="shrink-0 text-zinc-400 transition group-hover:text-emerald-500" />
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{project.tagline}</p>
      <ul className="mt-auto flex flex-wrap gap-1.5 pt-5" aria-label="Tech stack">
        {project.stack.slice(0, 5).map((t) => (
          <li key={t.name} className="chip !text-[11px]">{t.name}</li>
        ))}
      </ul>
    </article>
  );
}
