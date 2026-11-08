import React, { useEffect, useState } from 'react';
import { FiArrowUpRight, FiGitBranch, FiGithub, FiStar } from 'react-icons/fi';
import Section, { Reveal } from './Section';
import { profile } from '../data/profile';

const formatName = (name) =>
  name
    .split(/[-_]/)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');

export default function Projects() {
  const [repos, setRepos] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    fetch(`https://api.github.com/users/${profile.githubUser}/repos?sort=updated&per_page=30`, {
      signal: controller.signal,
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      .then((data) =>
        setRepos(
          data
            .filter((r) => !r.fork && !r.archived)
            .sort((a, b) => b.stargazers_count - a.stargazers_count || new Date(b.pushed_at) - new Date(a.pushed_at))
            .slice(0, 6)
        )
      )
      .catch((err) => {
        if (err?.name !== 'AbortError') setRepos([]);
      });
    return () => controller.abort();
  }, []);

  return (
    <Section
      id="projects"
      index="05"
      eyebrow="Open source"
      title="On GitHub"
      intro="Side projects and experiments, pulled live from my GitHub."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {repos === null &&
          Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="card h-40 animate-pulse bg-zinc-100 dark:bg-ink-900" />
          ))}

        {repos?.map((repo, i) => (
          <Reveal key={repo.id} delay={i * 0.05} className="h-full">
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="card group flex h-full flex-col p-6 transition hover:-translate-y-0.5 hover:border-emerald-500/50"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-semibold">{formatName(repo.name)}</h3>
                <FiArrowUpRight className="shrink-0 text-zinc-400 transition group-hover:text-emerald-500" />
              </div>
              <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {repo.description || 'No description yet.'}
              </p>
              <div className="mt-auto flex items-center gap-4 pt-5 font-mono text-xs text-zinc-500">
                {repo.language && (
                  <span className="inline-flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    {repo.language}
                  </span>
                )}
                <span className="inline-flex items-center gap-1">
                  <FiStar /> {repo.stargazers_count}
                </span>
                <span className="inline-flex items-center gap-1">
                  <FiGitBranch /> {repo.forks_count}
                </span>
              </div>
            </a>
          </Reveal>
        ))}
      </div>

      {repos?.length === 0 && (
        <p className="text-sm text-zinc-500">Couldn't load repositories right now.</p>
      )}

      <div className="mt-8">
        <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn-ghost">
          <FiGithub /> View all on GitHub
        </a>
      </div>
    </Section>
  );
}
