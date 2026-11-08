import React, { useEffect, useState } from 'react';
import { FiArrowUpRight, FiGitBranch, FiGithub, FiStar } from 'react-icons/fi';
import Section, { Reveal } from './Section';
import { profile } from '../data/profile';

// Repos that aren't projects: this site itself and the GitHub profile README.
const hidden = new Set(['hadi-portfolio', profile.githubUser.toLowerCase()]);

// Live URL from the repo's "Website" field, falling back to its GitHub Pages site.
const liveUrl = (r) =>
  r.homepage?.trim() || (r.has_pages ? `https://${profile.githubUser}.github.io/${r.name}/` : null);

const formatName = (name) =>
  name
    .split(/[-_]/)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');

export default function Projects() {
  const [repos, setRepos] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    fetch(`https://api.github.com/users/${profile.githubUser}/repos?sort=created&per_page=100`, {
      signal: controller.signal,
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      .then((data) =>
        setRepos(
          data
            .filter((r) => !r.fork && !r.archived && !hidden.has(r.name.toLowerCase()))
            .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
            .slice(0, 6)
            .map((r) => ({ ...r, live: liveUrl(r) }))
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
      index="06"
      className="bg-zinc-50/60 dark:bg-ink-900/40"
      eyebrow="Open source"
      title="On GitHub"
      intro="Side projects and experiments, newest first, pulled live from my GitHub. Projects with a live demo open it directly."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {repos === null &&
          Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="card h-40 animate-pulse bg-zinc-100 dark:bg-ink-900" />
          ))}

        {repos?.map((repo, i) => (
          <Reveal key={repo.id} delay={i * 0.05} className="h-full">
            <article className="card group relative flex h-full flex-col p-6 transition hover:-translate-y-0.5 hover:border-emerald-500/50">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-semibold">
                  {/* Stretched link: the whole card opens the live site, or the repo if there isn't one */}
                  <a
                    href={repo.live || repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="after:absolute after:inset-0 after:rounded-2xl focus:outline-none focus-visible:after:ring-2 focus-visible:after:ring-emerald-500"
                  >
                    {formatName(repo.name)}
                  </a>
                </h3>
                {repo.live ? (
                  <span className="inline-flex shrink-0 items-center gap-1 rounded-md bg-emerald-500/10 px-2 py-0.5 font-mono text-[11px] font-medium text-emerald-700 dark:text-emerald-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Live
                  </span>
                ) : (
                  <FiArrowUpRight className="shrink-0 text-zinc-400 transition group-hover:text-emerald-500" />
                )}
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
                {repo.live && (
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative z-10 ml-auto inline-flex items-center gap-1 hover:text-emerald-500"
                  >
                    <FiGithub /> Code
                  </a>
                )}
              </div>
            </article>
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
