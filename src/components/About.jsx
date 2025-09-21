import React from 'react';
import profileImage from '../assets/profile.jpg'; // Assuming your photo is in assets folder

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">About Me</h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
            Full-Stack Software Development Engineer (SDE-2) with 5+ years' experience
            building and optimizing scalable web applications using Node.js, PostgreSQL,
            and React.
          </p>
          <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
            Expert in boosting API efficiency, architecting high-availability microservices,
            and tuning databases, while also designing responsive and interactive front-end
            interfaces with React.
          </p>
          <ul className="mt-6 space-y-3 text-gray-700 dark:text-gray-300">
            <li className="flex items-center">
              <span className="mr-2">•</span>
              Full-Stack Development
            </li>
            <li className="flex items-center">
              <span className="mr-2">•</span>
              API Design & Optimization
            </li>
            <li className="flex items-center">
              <span className="mr-2">•</span>
              Database Architecture
            </li>
            <li className="flex items-center">
              <span className="mr-2">•</span>
              React & Frontend Development
            </li>
            <li className="flex items-center">
              <span className="mr-2">•</span>
              Microservices Architecture
            </li>
          </ul>
        </div>
        <div className="flex justify-center">
          <img
            src={profileImage}
            alt="Professional headshot"
            className="w-72 h-72 object-cover rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          />
        </div>
      </div>
    </section>
  );
}
