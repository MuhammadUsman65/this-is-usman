import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import "./App.css";

const SECTIONS = [
  { id: "about", title: "About Me", alt: false },
  { id: "skills", title: "Skills", alt: true },
  { id: "tech-experience", title: "Technical Experience", alt: false },
  { id: "volunteer-experience", title: "Volunteer Experience", alt: true },
  { id: "education", title: "Education", alt: false },
  { id: "projects", title: "Projects", alt: true },
];

function App() {
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
            <div className="section__container">
              <h2 className="section__title">{title}</h2>
              <div className="section__placeholder">Coming soon...</div>
            </div>
          </section>
        ))}
      </main>
    </>
  );
}

export default App;
