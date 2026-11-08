import React from 'react';
import { MotionConfig } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Impact from './components/Impact';
import About from './components/About';
import CaseStudies from './components/CaseStudies';
import Experience from './components/Experience';
import Capabilities from './components/Capabilities';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <ThemeProvider>
      <MotionConfig reducedMotion="user">
        <div className="min-h-screen overflow-x-hidden">
          <Navbar />
          <main>
            <Hero />
            <Impact />
            <About />
            <CaseStudies />
            <Experience />
            <Capabilities />
            <Skills />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </div>
      </MotionConfig>
    </ThemeProvider>
  );
}
