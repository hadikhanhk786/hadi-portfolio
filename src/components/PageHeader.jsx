import React from 'react';
import { motion } from 'framer-motion';

/** Top of every inner page (the fixed navbar is 64px tall). Animates on load, not on scroll. */
export default function PageHeader({ eyebrow, title, intro, children }) {
  return (
    <header className="pt-28 sm:pt-36">
      <div className="container-x">
        <motion.div className="max-w-3xl" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, ease: 'easeOut' }}>
          <p className="font-mono text-xs uppercase tracking-widest text-emerald-600 dark:text-emerald-400">{eyebrow}</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">{title}</h1>
          {intro && <p className="mt-4 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">{intro}</p>}
          {children}
        </motion.div>
      </div>
    </header>
  );
}
