import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiGithub, FiLinkedin, FiMail, FiMapPin } from 'react-icons/fi';
import { profile } from '../data/profile';

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: 'easeOut' },
});

function LatencyTerminal() {
  return (
    <div className="card overflow-hidden shadow-2xl shadow-emerald-500/5 dark:bg-ink-900/90">
      <div className="flex items-center gap-2 border-b border-zinc-200 px-4 py-3 dark:border-ink-700">
        <span className="h-3 w-3 rounded-full bg-zinc-300 dark:bg-ink-700" />
        <span className="h-3 w-3 rounded-full bg-zinc-300 dark:bg-ink-700" />
        <span className="h-3 w-3 rounded-full bg-zinc-300 dark:bg-ink-700" />
        <span className="ml-3 font-mono text-xs text-zinc-500">compliance-api — p50 latency</span>
      </div>
      <div className="space-y-5 p-5 font-mono text-[13px] leading-relaxed">
        <p className="text-zinc-500">
          <span className="text-emerald-600 dark:text-emerald-400">$</span> curl -w "%{'{'}time_total{'}'}" /api/records
        </p>

        <div>
          <div className="mb-1.5 flex justify-between text-xs">
            <span className="text-zinc-500">before · N+1 queries, seq scans</span>
            <span className="text-rose-500">6.2s</span>
          </div>
          <div className="h-2.5 overflow-hidden rounded-full bg-zinc-100 dark:bg-ink-800">
            <motion.div
              className="h-full rounded-full bg-rose-500/80"
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.4, delay: 0.5, ease: 'easeOut' }}
            />
          </div>
        </div>

        <div>
          <div className="mb-1.5 flex justify-between text-xs">
            <span className="text-zinc-500">after · indexes + Redis + SQS</span>
            <span className="text-emerald-600 dark:text-emerald-400">0.5s</span>
          </div>
          <div className="h-2.5 overflow-hidden rounded-full bg-zinc-100 dark:bg-ink-800">
            <motion.div
              className="h-full rounded-full bg-emerald-500"
              initial={{ width: 0 }}
              animate={{ width: '8%' }}
              transition={{ duration: 0.4, delay: 1.9, ease: 'easeOut' }}
            />
          </div>
        </div>

        <motion.p
          className="border-t border-dashed border-zinc-200 pt-4 text-zinc-600 dark:border-ink-700 dark:text-zinc-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.4 }}
        >
          <span className="text-emerald-600 dark:text-emerald-400">✓</span> 12x faster · held under production load
        </motion.p>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative pt-28 sm:pt-36">
      <div className="grid-bg pointer-events-none absolute inset-0 -z-10" />
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl" />

      <div className="container-x grid items-center gap-12 pb-20 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
        <div>
          <motion.p
            {...fadeUp(0)}
            className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/60 px-3 py-1 font-mono text-xs text-zinc-600 dark:border-ink-700 dark:bg-ink-900/60 dark:text-zinc-400"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Senior Software Engineer @ LTIMindtree
          </motion.p>

          <motion.h1 {...fadeUp(0.08)} className="mt-6 text-4xl font-extrabold tracking-tight sm:text-6xl">
            {profile.name}
            <span className="mt-2 block bg-gradient-to-r from-emerald-500 to-teal-400 bg-clip-text text-2xl font-bold text-transparent sm:text-4xl">
              {profile.role}
            </span>
          </motion.h1>

          <motion.p {...fadeUp(0.16)} className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            {profile.tagline}
          </motion.p>

          <motion.div {...fadeUp(0.24)} className="mt-6 flex flex-wrap gap-2">
            {profile.stack.map((s) => (
              <span key={s} className="chip">
                {s}
              </span>
            ))}
          </motion.div>

          <motion.div {...fadeUp(0.32)} className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#work" className="btn-primary">
              See my work <FiArrowRight />
            </a>
            <a href="#contact" className="btn-ghost">
              Get in touch
            </a>
          </motion.div>

          <motion.div
            {...fadeUp(0.4)}
            className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-zinc-500 dark:text-zinc-400"
          >
            <span className="inline-flex items-center gap-1.5">
              <FiMapPin /> {profile.location}
            </span>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-zinc-900 dark:hover:text-white">
              <FiGithub /> GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-zinc-900 dark:hover:text-white">
              <FiLinkedin /> LinkedIn
            </a>
            <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-1.5 hover:text-zinc-900 dark:hover:text-white">
              <FiMail /> Email
            </a>
          </motion.div>
        </div>

        <motion.div {...fadeUp(0.3)}>
          <LatencyTerminal />
        </motion.div>
      </div>
    </section>
  );
}
