/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import TechExperience from "./components/TechExperience";
import Education from "./components/Education";
import VolunteerExperience from "./components/VolunteerExperience";
import Projects from "./components/Projects";
import Research from "./components/Research";

import "./App.css";

const SECTIONS = [
  { id: "about", title: "About Me", alt: false },
  { id: "education", title: "Education", alt: false },
  { id: "skills", title: "Skills", alt: true },
  { id: "tech-experience", title: "Technical Experience", alt: false },
  { id: "projects", title: "Projects", alt: true },
  { id: "volunteer-experience", title: "Volunteer Experience", alt: true },
  { id: "research-work", title: "Research Work", alt: false },
];

// Add new section components here as you build them out
const SECTION_CONTENT = {
  about: <AboutMe />,
  skills: <Skills />,
  "tech-experience": <TechExperience />,
  education: <Education />,
  projects: <Projects />,
  "volunteer-experience": <VolunteerExperience />,
  "research-work": <Research />,
};

function App() {
  // Scroll-reveal: sections fade + slide up as they enter the viewport
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal--visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        {SECTIONS.map(({ id, title, alt }) => (
          <section
            key={id}
            id={id}
            className={`section${alt ? " section--alt" : ""}`}
          >
            <div className="section__container reveal">
              <h2 className="section__title">{title}</h2>
              {SECTION_CONTENT[id] ?? (
                <div className="section__placeholder">Coming soon…</div>
              )}
            </div>
          </section>
        ))}
      </main>
    </>
  );
}

export default App;
