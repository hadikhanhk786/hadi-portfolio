const experiences = [
  {
    role: "Senior Software Engineer | Hughes Systique Corporation (HSC), Gurgaon",
    period: "Oct 2021 – Present",
    details: [
      "Designed multi-state ticket management system generating $75M annual revenue.",
      "Built React + TypeScript front-ends with performance optimizations.",
      "Engineered API latency improvements from 6.2s → 0.5s; scaled to 1M+ records.",
      "Optimized PostgreSQL queries with indexing & partitioning.",
      "Mentored juniors; improved quality and reduced bugs by 15%.",
    ],
  },
  {
    role: "Software Engineer | Svayam Infoware Pvt. Ltd",
    period: "Jan 2020 – Oct 2021",
    details: [
      "Built full-stack ERP with Angular, Node.js, and SQL Server.",
      "Designed efficient REST APIs with caching.",
      "Improved MySQL query performance by 40%.",
      "Reduced operational costs by 18% via CI-driven testing.",
    ],
  },
];

export default function Experience() {
  return (
    <section className="space-y-6">
      {experiences.map((exp, idx) => (
        <div key={idx} className="card-3d rounded-2xl p-6 shadow-xl">
          <h2 className="text-lg font-semibold mb-1 text-gray-900 dark:text-white">
            {exp.role}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
            {exp.period}
          </p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-200 space-y-1">
            {exp.details.map((detail, i) => (
              <li key={i}>{detail}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
