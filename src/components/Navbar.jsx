import React, { useEffect, useState } from 'react';
import { FiDownload, FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';
import { profile } from '../data/profile';

const links = [
  { href: '#about', label: 'About' },
  { href: '#work', label: 'Work' },
  { href: '#experience', label: 'Experience' },
  { href: '#how-i-work', label: 'How I work' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      className="grid h-9 w-9 place-items-center rounded-lg text-zinc-600 transition hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-ink-800 dark:hover:text-white"
    >
      {isDark ? <FiSun /> : <FiMoon />}
    </button>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(`#${e.target.id}`));
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    links.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        scrolled || open
          ? 'border-b border-zinc-200/80 bg-white/80 backdrop-blur-md dark:border-ink-700/80 dark:bg-ink-950/80'
          : 'border-b border-transparent'
      }`}
    >
      <nav className="container-x flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-mono text-sm font-semibold">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-emerald-500 text-ink-950">hk</span>
          <span className="hidden sm:inline">hadi.khan</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className={`rounded-lg px-3 py-2 text-sm transition ${
                active === href
                  ? 'text-zinc-900 dark:text-white'
                  : 'text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white'
              }`}
            >
              {label}
            </a>
          ))}
          <ThemeToggle />
          <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="btn-primary ml-2 !px-4 !py-2">
            <FiDownload /> Resume
          </a>
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="grid h-9 w-9 place-items-center rounded-lg text-zinc-700 dark:text-zinc-300"
          >
            {open ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="container-x pb-4 md:hidden">
          <div className="flex flex-col">
            {links.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="border-b border-zinc-100 py-3 text-sm text-zinc-700 dark:border-ink-800 dark:text-zinc-300"
              >
                {label}
              </a>
            ))}
            <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="btn-primary mt-4 justify-center">
              <FiDownload /> Download resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
