import React from 'react';
import { motion } from 'framer-motion';

export function Reveal({ children, delay = 0, className }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

export default function Section({ id, index, eyebrow, title, intro, children, className = '' }) {
  return (
    <section id={id} className={`py-20 sm:py-28 ${className}`}>
      <div className="container-x">
        <Reveal className="mb-12 max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
            <span className="text-zinc-400 dark:text-zinc-500">{index} /</span> {eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
          {intro && <p className="mt-4 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">{intro}</p>}
        </Reveal>
        {children}
      </div>
    </section>
  );
}
