export default function Achievements() {
  const achievements = [
    {
      title: "Stripe Payment Gateway Integration",
      details: [
        "Integrated Stripe payment gateway seamlessly across frontend and backend workflows.",
        "Implemented subscription-based billing supporting multiple models: per-user pricing, per-center pricing, storage-based limits, and feature-based plan tiers.",
        "Enabled both single payments and recurring subscriptions with secure checkout flows.",
        "Designed scalable payment architecture for easy plan upgrades, downgrades, and cancellations.",
      ],
    },
    {
      title: "Role-Based Access Control (RBAC)",
      details: [
        "Designed and implemented a role-based access control system tied directly to subscription plans.",
        "Ensured users only access features allowed in their plan — from basic roles to advanced enterprise permissions.",
        "Improved security and customer experience by dynamically restricting UI and API routes based on RBAC policies.",
      ],
    },
    {
      title: "Application Performance Optimization",
      details: [
        "Optimized complex PostgreSQL queries with advanced indexing and partitioning, reducing query execution times significantly.",
        "Improved backend efficiency, scaling the system to handle large datasets with minimal latency.",
        "Enhanced frontend performance using lazy loading, memoization, and code-splitting to reduce initial load times.",
        "Achieved a more responsive and efficient user experience by combining database-level tuning with UI optimizations.",
      ],
    },
  ];

  return (
    <section className="card-3d rounded-2xl p-6 shadow-xl">
      <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
        Key Projects & Achievements
      </h2>
      <div className="space-y-6">
        {achievements.map((ach, idx) => (
          <div key={idx}>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
              {ach.title}
            </h3>
            <ul className="list-disc list-outside pl-6 text-gray-700 dark:text-gray-300 space-y-2">
              {ach.details.map((d, i) => (
                <li key={i} className="leading-relaxed">
                  {d}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
