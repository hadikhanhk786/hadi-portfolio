export default function Header() {
  return (
    <header className="card-3d bg-white rounded-2xl p-6 shadow-md text-center">
      <h1 className="text-3xl font-bold">HADI KHAN</h1>
      <p className="mt-2">Bareilly, UP 243005</p>
      <p className="mt-1">📞 +91 9528091316 | 📧 khanhadi6@gmail.com</p>
      <div className="flex justify-center gap-6 mt-3">
        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">LinkedIn</a>
        <a href="https://github.com" target="_blank" rel="noreferrer" className="text-gray-800 hover:underline">GitHub</a>
      </div>
    </header>
  );
}
