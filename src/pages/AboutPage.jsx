import React from 'react';
import About from '../components/About';
import CaseStudies from '../components/CaseStudies';
import Experience from '../components/Experience';
import Section from '../components/Section';
import { certifications, education, lookingFor } from '../data/profile';

export default function AboutPage() {
  return (
    <div className="pt-16">
      <About />
      <CaseStudies />
      <Experience />
      <Section id="education" index="04" eyebrow="Education & certifications" title="Education">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="card p-6">
            <p className="font-mono text-xs text-zinc-500">{education.year}</p>
            <h3 className="mt-1 font-semibold">{education.degree}</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">{education.school}</p>
          </div>
          <div className="card p-6">
            <h3 className="font-semibold">Certifications & achievements</h3>
            {certifications.length ? (
              <ul className="mt-2 space-y-1 text-sm">
                {certifications.map((c) => (
                  <li key={c.title}>{c.url ? <a href={c.url} className="underline">{c.title}</a> : c.title} · {c.issuer} · {c.year}</li>
                ))}
              </ul>
            ) : (
              <p className="mt-2 font-mono text-xs text-amber-700 dark:text-amber-300">TODO: add certifications in src/data/profile.js</p>
            )}
          </div>
        </div>
      </Section>
      <Section id="looking-for" index="05" eyebrow="Next" title="What I'm looking for">
        <p className="max-w-2xl text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">{lookingFor}</p>
      </Section>
    </div>
  );
}
