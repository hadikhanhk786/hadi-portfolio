import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          Let's work together
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-300">
          I'm currently available for freelance projects and full-time opportunities.
        </p>
        <a 
          href="mailto:khanhadi6@gmail.com" 
          className="mt-6 inline-block px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full hover:scale-105 transition-transform"
        >
          Email me
        </a>
        <div className="mt-6 flex justify-center gap-4">
          <a 
            href="https://www.linkedin.com/in/hadi-khan-55b575147/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            aria-label="linkedin"
          >
            LinkedIn
          </a>
          <a 
            href="https://github.com/hadikhanhk786" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            aria-label="github"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
