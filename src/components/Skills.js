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
    <section className="card-3d rounded-2xl p-6 shadow-xl">
      <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
        Technical Skills
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex items-center gap-2 p-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition"
          >
            {skill.icon && <span className="text-2xl">{skill.icon}</span>}
            <span className="font-medium text-gray-800 dark:text-white">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
