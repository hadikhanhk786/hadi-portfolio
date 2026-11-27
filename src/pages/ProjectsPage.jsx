import React from 'react';
import PageHeader from '../components/PageHeader';
import ProjectCard from '../components/ProjectCard';
import Projects from '../components/Projects';
import { Reveal } from '../components/Section';
import { projects } from '../data/projects.mjs';

export default function ProjectsPage() {
  return (
    <>
      <PageHeader eyebrow="Projects" title="Things I've built" intro="Four projects in depth, then everything else on my GitHub." />
      <section className="py-12">
        <div className="container-x grid gap-4 sm:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.05} className="h-full"><ProjectCard project={p} /></Reveal>
          ))}
        </div>
      </section>
      <Projects />
    </>
  );
}
