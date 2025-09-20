export default function Experience() {
  return (
    <section className="space-y-6">
      <div className="card-3d bg-white rounded-2xl p-6 shadow-md">
        <h2 className="text-xl font-semibold mb-2">
          Senior Software Engineer | Hughes Systique Corporation (HSC), Gurgaon
        </h2>
        <p className="text-sm text-gray-500">Oct 2021 – Present</p>
        <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
          <li>Designed multi-state ticket management system generating $75M annual revenue.</li>
          <li>Built React + TypeScript front-ends with performance optimizations.</li>
          <li>Engineered API latency improvements from 6.2s → 0.5s; scaled to 1M+ records.</li>
          <li>Optimized PostgreSQL queries with indexing & partitioning.</li>
          <li>Mentored juniors; improved quality and reduced bugs by 15%.</li>
        </ul>
      </div>

      <div className="card-3d bg-white rounded-2xl p-6 shadow-md">
        <h2 className="text-xl font-semibold mb-2">
          Software Engineer | Svayam Infoware Pvt. Ltd
        </h2>
        <p className="text-sm text-gray-500">Jan 2020 – Oct 2021</p>
        <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
          <li>Built full-stack ERP with Angular, Node.js, and SQL Server.</li>
          <li>Designed efficient REST APIs with caching.</li>
          <li>Improved MySQL query performance by 40%.</li>
          <li>Reduced operational costs by 18% via CI-driven testing.</li>
        </ul>
      </div>
    </section>
  );
}
