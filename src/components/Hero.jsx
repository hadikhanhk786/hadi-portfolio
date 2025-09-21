import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h1 
          initial={{y:20, opacity:0}} 
          animate={{y:0, opacity:1}} 
          transition={{delay:0.1}} 
          className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white"
        >
          Hadi Khan
        </motion.h1>
        <motion.p 
          initial={{y:10, opacity:0}} 
          animate={{y:0, opacity:1}} 
          transition={{delay:0.25}} 
          className="mt-6 text-xl text-gray-600 dark:text-gray-300"
        >
          Full-Stack Software Development Engineer (SDE-2)
        </motion.p>
        <motion.div 
          initial={{opacity:0}} 
          animate={{opacity:1}} 
          transition={{delay:0.4}} 
          className="mt-8 flex justify-center gap-4"
        >
          <a href="#projects" className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full shadow-lg hover:scale-105 transition">
            View Work
          </a>
          <a href="#contact" className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-full hover:shadow-sm dark:text-white transition">
            Get in touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}
