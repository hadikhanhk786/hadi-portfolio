import Header from "./components/Header";
import Summary from "./components/Summary";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Achievements from "./components/Achievements"; // ✅ new
import Education from "./components/Education";
import ThemeToggle from "./components/ThemeToggle";
import SEO from "./components/SEO";

function App() {
  return (
    <div className="min-h-screen flex justify-center p-6 transition-colors duration-500">
      <SEO
        title="Hadi Khan | Software Engineer Portfolio"
        description="Portfolio of Hadi Khan, SDE-2 specializing in Node.js, PostgreSQL, React, Stripe integrations, and scalable backend systems."
        keywords="Hadi Khan, Software Engineer, Node.js, PostgreSQL, Stripe, RBAC, React, Portfolio"
      />
      <ThemeToggle />
      <div className="w-[90%] max-w-5xl space-y-6">
        <Header />
        <Summary />
        <Skills />
        <Experience />
        <Achievements /> {/* ✅ new */}
        <Education />
      </div>
    </div>
  );
}

export default App;
