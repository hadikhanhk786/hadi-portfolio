import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiMail } from 'react-icons/fi';
import Hero from '../components/Hero';
import Impact from '../components/Impact';
import Section, { Reveal } from '../components/Section';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects.mjs';
import { skills } from '../data/profile';

const topSkills = ['Backend', 'Databases', 'Cloud & Infra', 'AI & Agents'];

export default function HomePage() {
  return (
    <>
      <Hero />
      <Impact />
      <Section id="featured" index="01" eyebrow="Featured" title="Projects I've built">
        <div className="grid gap-4 sm:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.05} className="h-full"><ProjectCard project={p} /></Reveal>
          ))}
        </div>
        <Link to="/projects" className="btn-ghost mt-8">All projects <FiArrowRight /></Link>
      </Section>
      <Section id="top-skills" index="02" eyebrow="Stack" title="What I work with" className="bg-zinc-50/60 dark:bg-ink-900/40">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skills.filter((s) => topSkills.includes(s.group)).map((s) => (
            <div key={s.group} className="card p-5">
              <h3 className="font-semibold">{s.group}</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{s.items.slice(0, 5).join(' · ')}</p>
            </div>
          ))}
        </div>
        <Link to="/skills" className="btn-ghost mt-8">All skills <FiArrowRight /></Link>
      </Section>
      <section className="py-20 sm:py-28">
        <div className="container-x">
          <div className="card flex flex-col items-start gap-4 p-8 sm:flex-row sm:items-center sm:justify-between sm:p-12">
            <div>
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Have a slow API, a payments flow, or a backend to build?</h2>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400">I'm open to backend roles and freelance work.</p>
            </div>
            <Link to="/contact" className="btn-primary shrink-0"><FiMail /> Get in touch</Link>
          </div>
        </div>
      </section>
    </>
  );
}
