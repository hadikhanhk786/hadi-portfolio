import React from 'react';
import { profile } from '../data/profile';

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 py-8 dark:border-ink-800">
      <div className="container-x flex flex-col items-center justify-between gap-3 font-mono text-xs text-zinc-500 sm:flex-row">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <p>Built with React + Tailwind · hosted on GitHub Pages</p>
      </div>
    </footer>
  );
}
