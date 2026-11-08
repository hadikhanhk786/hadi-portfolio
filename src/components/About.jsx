import React from 'react';
import Section, { Reveal } from './Section';
import profileImage from '../assets/profile.jpg';
import { education, profile } from '../data/profile';

const facts = [
  ['Experience', `${profile.years} years, backend-focused`],
  ['Currently', 'Senior Software Engineer, LTIMindtree'],
  ['Based in', profile.location],
  ['Education', `${education.degree} · ${education.year}`],
];

export default function About() {
  return (
    <Section id="about" index="01" eyebrow="About" title="I like the messy backend problems">
      <div className="grid gap-12 lg:grid-cols-[1fr_320px]">
        <Reveal className="space-y-5 text-[17px] leading-relaxed text-zinc-700 dark:text-zinc-300">
          {profile.summary.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </Reveal>

        <Reveal delay={0.1}>
          <div className="card overflow-hidden">
            <img src={profileImage} alt="Hadi Khan" className="aspect-[4/5] w-full object-cover object-top" />
            <dl className="divide-y divide-zinc-200 dark:divide-ink-700">
              {facts.map(([k, v]) => (
                <div key={k} className="flex flex-col gap-0.5 px-5 py-3">
                  <dt className="font-mono text-[11px] uppercase tracking-wider text-zinc-500">{k}</dt>
                  <dd className="text-sm">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
