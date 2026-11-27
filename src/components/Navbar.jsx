import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FiDownload, FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';
import { profile } from '../data/profile';
import { trackEvent } from '../lib/analytics';

const links = [
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/skills', label: 'Skills' },
  { to: '/notes', label: 'Notes' },
  { to: '/resume', label: 'Resume' },
  { to: '/contact', label: 'Contact' },
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
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]); // close the mobile menu after navigating

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        scrolled || open
          ? 'border-b border-zinc-200/80 bg-white/80 backdrop-blur-md dark:border-ink-700/80 dark:bg-ink-950/80'
          : 'border-b border-transparent'
      }`}
    >
      <nav className="container-x flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-mono text-sm font-semibold" aria-label="Hadi Khan, home">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-emerald-500 text-ink-950">hk</span>
          <span className="hidden sm:inline">hadi.khan</span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `rounded-lg px-3 py-2 text-sm transition ${
                  isActive
                    ? 'bg-zinc-100 font-medium text-zinc-900 dark:bg-ink-800 dark:text-white'
                    : 'text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          <ThemeToggle />
          <a href={profile.resume} download onClick={() => trackEvent('resume-download')} className="btn-primary ml-2 !px-4 !py-2">
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
            {links.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `border-b border-zinc-100 py-3 text-sm dark:border-ink-800 ${
                    isActive ? 'font-semibold text-emerald-600 dark:text-emerald-400' : 'text-zinc-700 dark:text-zinc-300'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
            <a href={profile.resume} download onClick={() => trackEvent('resume-download')} className="btn-primary mt-4 justify-center">
              <FiDownload /> Download resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
