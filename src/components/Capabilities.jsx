import React from 'react';
import { FiActivity, FiCheckCircle, FiCpu } from 'react-icons/fi';
import Section, { Reveal } from './Section';
import { capabilities } from '../data/profile';

const icons = { agents: FiCpu, support: FiActivity, practice: FiCheckCircle };

export default function Capabilities() {
  return (
    <Section
      id="how-i-work"
      index="04"
      eyebrow="How I work"
      title="Beyond writing the API"
      intro="Shipping the endpoint is half the job. I also build the AI tooling around the code and look after it once it's live."
      className="bg-zinc-50/60 dark:bg-ink-900/40"
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {capabilities.map((c, i) => {
          const Icon = icons[c.key] || FiCpu;
          return (
            <Reveal key={c.key} delay={i * 0.08} className="h-full">
              <article className="card flex h-full flex-col p-6">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-emerald-500/10 text-lg text-emerald-600 dark:text-emerald-400">
                  <Icon />
                </span>
                <h3 className="mt-4 text-xl font-bold tracking-tight">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{c.lead}</p>
                <ul className="mt-5 space-y-2.5 text-sm text-zinc-700 dark:text-zinc-300">
                  {c.points.map((p) => (
                    <li key={p} className="flex gap-2">
                      <span className="mt-[3px] font-mono text-xs text-emerald-600 dark:text-emerald-400">→</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
