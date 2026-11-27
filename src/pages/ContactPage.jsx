import React from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import ContactForm from '../components/ContactForm';
import PageHeader from '../components/PageHeader';
import { profile } from '../data/profile';

const channels = [
  { icon: FiMail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: FiLinkedin, label: 'LinkedIn', value: 'hadi-khan', href: profile.linkedin },
  { icon: FiGithub, label: 'GitHub', value: profile.githubUser, href: profile.github },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader eyebrow="Contact" title="Let's talk" intro="I'm open to backend roles and freelance work. Send a message or reach me directly." />
      <section className="container-x grid gap-8 py-12 lg:grid-cols-[1fr_320px]">
        <ContactForm />
        <ul className="space-y-3">
          {channels.map(({ icon: Icon, label, value, href }) => (
            <li key={label}>
              <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl border border-zinc-200 px-4 py-3 transition hover:border-emerald-500/50 dark:border-ink-700">
                <Icon aria-hidden className="text-emerald-600 dark:text-emerald-400" />
                <span className="min-w-0">
                  <span className="block font-mono text-[11px] uppercase tracking-wider text-zinc-500">{label}</span>
                  <span className="block truncate text-sm">{value}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
