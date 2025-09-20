import Header from "./components/Header";
import Summary from "./components/Summary";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-300 text-slate-900 p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <Header />
        <Summary />
        <Skills />
        <Experience />
        <Education />
      </div>
    </div>
  );
}
