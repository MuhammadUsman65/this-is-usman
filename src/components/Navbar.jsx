import { useState, useEffect, useRef } from "react";
import { ArrowUp, ChevronRight } from "lucide-react";

const NAV_ITEMS = [
  { label: "Home", id: "home" },
  { label: "About Me", id: "about" },
  { label: "Education", id: "education" },
  { label: "Skills", id: "skills" },
  { label: "Technical Experience", id: "tech-experience" },
  { label: "Projects", id: "projects" },
  { label: "Volunteer Experience", id: "volunteer-experience" },
  { label: "Research Work", id: "research-work" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const linksRef = useRef(null);

  // Re-evaluate whether the hint chevron should show
  const updateHint = () => {
    const el = linksRef.current;
    if (!el) return;
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 2);
  };

  useEffect(() => {
    // Page vertical scroll → navbar background change
    const onPageScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onPageScroll);

    // Section visibility → active nav link
    const sectionEls = NAV_ITEMS.map(({ id }) =>
      document.getElementById(id),
    ).filter(Boolean);

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { threshold: 0.25, rootMargin: "-60px 0px -55% 0px" },
    );
    sectionEls.forEach((el) => sectionObserver.observe(el));

    // Recalculate hint whenever the strip resizes (e.g. orientation change)
    const ro = new ResizeObserver(updateHint);
    if (linksRef.current) ro.observe(linksRef.current);
    updateHint(); // initial check on mount

    return () => {
      window.removeEventListener("scroll", onPageScroll);
      sectionObserver.disconnect();
      ro.disconnect();
    };
  }, []);

  // Auto-scroll the nav strip to keep the active item in view
  useEffect(() => {
    const activeEl = linksRef.current?.querySelector(".navbar__link--active");
    activeEl?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "nearest",
    });
    // After the strip animates, re-check whether hint is still needed
    const t = setTimeout(updateHint, 380);
    return () => clearTimeout(t);
  }, [active]);

  return (
    <nav className={`navbar${scrolled ? " navbar--scrolled" : ""}`}>
      {/* Links strip + right-edge scroll hint */}
      <div className="navbar__links-wrap">
        <div className="navbar__links" ref={linksRef} onScroll={updateHint}>
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

        {/*
          Gradient fade + animated chevron.
          Visible only when items are still hidden to the right.
          pointer-events: none so it never blocks clicks on nav buttons.
        */}
        <div
          className={`navbar__scroll-hint${
            canScrollRight ? " navbar__scroll-hint--visible" : ""
          }`}
          aria-hidden="true"
        >
          <ChevronRight size={13} className="navbar__scroll-chevron" />
        </div>
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
