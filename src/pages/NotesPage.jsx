import React from 'react';
import PageHeader from '../components/PageHeader';
import { notes } from '../data/notes';

export default function NotesPage() {
  return (
    <>
      <PageHeader eyebrow="Notes" title="Learning notes" intro="Short write-ups on backend engineering, PostgreSQL, Node.js and AI agents." />
      <section className="container-x py-12">
        {notes.length ? (
          <ul className="space-y-4">
            {notes.map((n) => (
              <li key={n.title} className="card p-6">
                <p className="font-mono text-xs text-zinc-500">{n.date}</p>
                <h2 className="mt-1 text-lg font-semibold">{n.url ? <a href={n.url} className="hover:text-emerald-500">{n.title}</a> : n.title}</h2>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{n.summary}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-zinc-600 dark:text-zinc-400">No notes published yet. Check back soon.</p>
        )}
      </section>
    </>
  );
}
