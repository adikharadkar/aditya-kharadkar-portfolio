import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/hero/Hero";
import Experience from "./components/experience/Experience";
import Skills from "./components/skills/Skills";
import Certifications from "./components/certifications/Certifications";
import Projects from "./components/projects/Projects";
import Education from "./components/education/Education";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-stone-950 dark:text-white">
      <Navbar />
      <main className="min-h-screen px-6 py-16 md:px-12 md:py-24">
        <Hero />
        <Experience />
        <Skills />
        <Certifications />
        <Projects />
        <Education />
        <Contact />
      </main>
    </div>
  );
}

export default App;
