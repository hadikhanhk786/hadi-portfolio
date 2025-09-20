export default function Skills() {
  return (
    <section className="card-3d bg-white rounded-2xl p-6 shadow-md">
      <h2 className="text-xl font-semibold mb-4">Technical Skills</h2>
      <ul className="grid grid-cols-2 gap-2 text-sm">
        <li><b>Languages:</b> TypeScript, JavaScript (Node.js), SQL</li>
        <li><b>Frameworks:</b> Express.js, Socket.IO, React.js, Redux, Tailwind CSS, Jest</li>
        <li><b>Databases:</b> PostgreSQL, MySQL</li>
        <li><b>Cloud:</b> AWS (Lambda, API Gateway, S3)</li>
        <li><b>Concepts:</b> REST APIs, Microservices, System Design, CI/CD, TDD</li>
      </ul>
    </section>
  );
}
