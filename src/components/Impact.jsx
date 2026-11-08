import React from 'react';
import { Reveal } from './Section';
import { metrics } from '../data/profile';

export default function Impact() {
  return (
    <section aria-label="Key results" className="container-x">
      <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-200 dark:border-ink-700 dark:bg-ink-700 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((m, i) => (
          <div key={m.label} className="bg-zinc-50 dark:bg-ink-900">
            <Reveal delay={i * 0.06} className="p-6 lg:p-7">
              <p className="font-mono text-4xl font-semibold tracking-tight text-emerald-600 dark:text-emerald-400">{m.value}</p>
              <p className="mt-2 text-sm font-semibold">{m.label}</p>
              <p className="mt-1 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">{m.detail}</p>
            </Reveal>
          </div>
        ))}
      </div>
    </section>
  );
}
