import React from 'react';
import {
  FaReact,
  FaNodeJs,
  FaAws,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiMysql,
  SiJavascript,
  SiExpress,
  SiSocketdotio,
  SiRedux,
  SiJest,
} from "react-icons/si";

const skills = [
  { name: "React.js", icon: <FaReact className="text-blue-500" /> },
  { name: "Redux", icon: <SiRedux className="text-purple-600" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-700 dark:text-gray-200" /> },
  { name: "Socket.IO", icon: <SiSocketdotio className="text-orange-500" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-500" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-700" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-500" /> },
  { name: "Jest", icon: <SiJest className="text-red-500" /> },
  { name: "React Testing Library", icon: <FaReact className="text-blue-400" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-800" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
  { name: "AWS", icon: <FaAws className="text-orange-500" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-600" /> },
  { name: "REST APIs" },
  { name: "Microservices" },
  { name: "System Design" },
  { name: "CI/CD" },
  { name: "Agile (Scrum, Kanban)" },
  { name: "TDD" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">
          Skills & Technologies
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg flex items-center gap-3 hover:shadow-md transition-shadow"
            >
              {skill.icon && (
                <div className="text-2xl">
                  {skill.icon}
                </div>
              )}
              <span className="text-gray-800 dark:text-gray-200">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}