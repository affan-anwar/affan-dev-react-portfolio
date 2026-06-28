import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Project from "./Components/Project";
import Experience from "./Components/Experience";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import "./App.css";

export default function App() {
  return (
    <div className="portfolio">
      <Navbar />

      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="projects">
          <Project />
        </section>

        <section id="experience">
          <Experience />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}