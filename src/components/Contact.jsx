import React, { useState } from 'react';
import { FiCheck, FiCopy, FiDownload, FiGithub, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi';
import { Reveal } from './Section';
import { profile } from '../data/profile';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {}
  };

  const channels = [
    { icon: FiLinkedin, label: 'LinkedIn', value: 'hadi-khan', href: profile.linkedin },
    { icon: FiGithub, label: 'GitHub', value: profile.githubUser, href: profile.github },
    { icon: FiPhone, label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
  ];

  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="container-x">
        <Reveal>
          <div className="card relative overflow-hidden p-8 sm:p-12">
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
            <p className="font-mono text-xs uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
              <span className="text-zinc-400 dark:text-zinc-500">06 /</span> Contact
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
              Have a slow API, a payments flow, or a backend to build?
            </h2>
            <p className="mt-4 max-w-xl text-zinc-600 dark:text-zinc-400">
              I'm open to backend roles and freelance work. Email is the fastest way to reach me.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href={`mailto:${profile.email}`} className="btn-primary">
                <FiMail /> {profile.email}
              </a>
              <button onClick={copyEmail} className="btn-ghost" aria-live="polite">
                {copied ? <FiCheck className="text-emerald-500" /> : <FiCopy />} {copied ? 'Copied' : 'Copy email'}
              </button>
              <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                <FiDownload /> Resume (PDF)
              </a>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {channels.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-zinc-200 px-4 py-3 transition hover:border-emerald-500/50 dark:border-ink-700"
                >
                  <Icon className="text-emerald-600 dark:text-emerald-400" />
                  <span className="min-w-0">
                    <span className="block font-mono text-[11px] uppercase tracking-wider text-zinc-500">{label}</span>
                    <span className="block truncate text-sm">{value}</span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
