import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const NAV_ITEMS = [
  { label: "Home", id: "home" },
  { label: "About Me", id: "about" },
  { label: "Education", id: "education" },
  { label: "Skills", id: "skills" },
  { label: "Technical Experience", id: "tech-experience" },
  { label: "Projects", id: "projects" },
  { label: "Volunteer Experience", id: "volunteer-experience" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);

    const sectionEls = NAV_ITEMS.map(({ id }) =>
      document.getElementById(id),
    ).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.25, rootMargin: "-60px 0px -55% 0px" },
    );

    sectionEls.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <nav className={`navbar${scrolled ? " navbar--scrolled" : ""}`}>
      <div className="navbar__links">
        {NAV_ITEMS.map(({ label, id }) => (
          <button
            key={id}
            className={`navbar__link${active === id ? " navbar__link--active" : ""}`}
            onClick={() =>
              document
                .getElementById(id)
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            {label}
          </button>
        ))}
      </div>
      <div className="navbar__actions">
        <button
          className="navbar__btn"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          title="Back to top"
        >
          <ArrowUp size={15} />
        </button>
      </div>
    </nav>
  );
}
