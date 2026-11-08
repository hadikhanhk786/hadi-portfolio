import React from 'react';
import Section, { Reveal } from './Section';
import { experience } from '../data/profile';

export default function Experience() {
  return (
    <Section id="experience" index="03" eyebrow="Experience" title="Where I've worked">
      <ol className="relative space-y-12 border-l border-zinc-200 pl-6 dark:border-ink-700 sm:pl-10">
        {experience.map((job, i) => (
          <Reveal key={job.company} delay={i * 0.05}>
            <li className="relative">
              <span
                className={`absolute -left-[31px] top-1.5 h-3 w-3 rounded-full ring-4 ring-white dark:ring-ink-950 sm:-left-[47px] ${
                  job.current ? 'bg-emerald-500' : 'bg-zinc-300 dark:bg-zinc-600'
                }`}
              />
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-lg font-bold">
                  {job.role} <span className="text-zinc-400">·</span>{' '}
                  <span className="text-emerald-700 dark:text-emerald-400">{job.company}</span>
                </h3>
                <p className="shrink-0 font-mono text-xs text-zinc-500">
                  {job.period} · {job.location}
                </p>
              </div>
              <ul className="mt-4 space-y-2.5 text-[15px] leading-relaxed text-zinc-700 dark:text-zinc-300">
                {job.points.map((p) => (
                  <li key={p} className="flex gap-3">
                    <span className="mt-[11px] h-1 w-1 shrink-0 rounded-full bg-zinc-400" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {job.tech.map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
