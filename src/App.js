import Header from "./components/Header";
import Summary from "./components/Summary";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";

function App() {
  return (
    <div className="min-h-screen p-6 flex justify-center">
      <div className="w-[90%] max-w-5xl space-y-6">
        <Header />
        <Summary />
        <Skills />
        <Experience />
        <Education />
      </div>
    </div>
  );
}

export default App;
