import React from 'react';
import Section, { Reveal } from './Section';
import { caseStudies } from '../data/profile';

export default function CaseStudies() {
  return (
    <Section
      id="work"
      index="02"
      eyebrow="Selected work"
      title="Problems I've solved in production"
      intro="Three pieces of work from the last few years: what was broken, what I changed, and what it measured afterwards."
      className="bg-zinc-50/60 dark:bg-ink-900/40"
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {caseStudies.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.08} className="h-full">
            <article className="card flex h-full flex-col p-6 transition hover:border-emerald-500/50">
              <span className="chip self-start !border-emerald-500/30 !bg-emerald-500/10 !text-emerald-700 dark:!text-emerald-300">
                {c.tag}
              </span>
              <h3 className="mt-4 text-xl font-bold tracking-tight">{c.title}</h3>

              <p className="mt-5 font-mono text-[11px] uppercase tracking-wider text-zinc-500">Problem</p>
              <p className="mt-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{c.problem}</p>

              <p className="mt-5 font-mono text-[11px] uppercase tracking-wider text-zinc-500">Approach</p>
              <ul className="mt-2 space-y-1.5 text-sm text-zinc-700 dark:text-zinc-300">
                {c.approach.map((a) => (
                  <li key={a} className="flex gap-2">
                    <span className="mt-[3px] font-mono text-xs text-emerald-600 dark:text-emerald-400">→</span>
                    <span>{a}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-6">
                <p className="rounded-lg border border-emerald-500/20 bg-emerald-500/5 px-4 py-3 text-sm font-medium text-emerald-800 dark:text-emerald-300">
                  {c.result}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
