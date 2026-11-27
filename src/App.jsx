import React, { lazy, Suspense, useEffect } from 'react';
import { MotionConfig } from 'framer-motion';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import { useMeta } from './lib/useMeta';
import { initAnalytics, trackPage } from './lib/analytics';

// Code-split everything except the home page.
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const ProjectDetailPage = lazy(() => import('./pages/ProjectDetailPage'));
const SkillsPage = lazy(() => import('./pages/SkillsPage'));
const ResumePage = lazy(() => import('./pages/ResumePage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const NotesPage = lazy(() => import('./pages/NotesPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

function RouteEffects() {
  const { pathname } = useLocation();
  const path = pathname.replace(/\/+$/, '') || '/';
  useMeta(path);
  useEffect(() => {
    window.scrollTo(0, 0);
    trackPage(path);
  }, [path]);
  return null;
}

export default function App() {
  useEffect(initAnalytics, []);
  return (
    <ThemeProvider>
      <MotionConfig reducedMotion="user">
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <RouteEffects />
          <div className="flex min-h-screen flex-col overflow-x-hidden">
            <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-emerald-500 focus:px-4 focus:py-2 focus:text-ink-950">
              Skip to content
            </a>
            <Navbar />
            <main id="main" className="flex-1">
              <Suspense fallback={<div className="min-h-[60vh]" />}>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/projects" element={<ProjectsPage />} />
                  <Route path="/projects/:slug" element={<ProjectDetailPage />} />
                  <Route path="/skills" element={<SkillsPage />} />
                  <Route path="/resume" element={<ResumePage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/notes" element={<NotesPage />} />
                  <Route path="*" element={<NotFoundPage />} />
                </Routes>
              </Suspense>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </MotionConfig>
    </ThemeProvider>
  );
}
