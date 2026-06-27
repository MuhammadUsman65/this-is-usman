import { useState } from "react";

const CDN = (name, variant = "original") =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${name}-${variant}.svg`;

/* ─── Add / remove skills here at any time ──────────────────────────────────
   invert: true  →  dark icon gets a light filter to stay visible on dark bg  */
const TABS = {
  Languages: [
    { name: "C", icon: CDN("c") },
    { name: "C++", icon: CDN("cplusplus") },
    { name: "Python", icon: CDN("python") },
    { name: "JavaScript", icon: CDN("javascript") },
    { name: "SQL", icon: CDN("mysql") },
    { name: "Java", icon: CDN("java") },
  ],
  "Web Technologies": [
    { name: "React.js", icon: CDN("react") },
    { name: "Node.js", icon: CDN("nodejs") },
    { name: "Express.js", icon: CDN("express"), invert: true },
    { name: "MongoDB", icon: CDN("mongodb") },
    { name: "Next.js", icon: CDN("nextjs", "plain"), invert: true },
    { name: "MySQL", icon: CDN("mysql") },
    { name: "Flask", icon: CDN("flask"), invert: true },
    { name: "Django", icon: CDN("django", "plain"), invert: true },
    { name: "FastAPI", icon: CDN("fastapi") },
    { name: "Firebase", icon: CDN("firebase") },
    { name: "Docker", icon: CDN("docker") },
    { name: "Kubernetes", icon: CDN("kubernetes") },
    { name: "GitHub Actions", icon: CDN("githubactions") },
    {
      name: "Hugging Face",
      icon: "https://huggingface.co/front/assets/huggingface_logo.svg",
    },
  ],
};

function SkillCard({ name, icon, invert }) {
  return (
    <div className="skill-card">
      <img
        src={icon}
        alt={name}
        className={`skill-card__icon${invert ? " skill-card__icon--invert" : ""}`}
        draggable={false}
        /* Hide silently if the CDN icon doesn't exist */
        onError={(e) => {
          e.currentTarget.style.opacity = "0";
        }}
      />
      <span className="skill-card__name">{name}</span>
    </div>
  );
}

/* Infinite right-to-left ticker.
   Content is duplicated so the seam is invisible.
   CSS :has() pauses the animation only while a card is hovered — no JS state needed. */
function Marquee({ items }) {
  // ~3.2 s per unique card → comfortable reading pace regardless of how many items there are
  const duration = `${Math.max(16, items.length * 3.2)}s`;
  const doubled = [...items, ...items];

  return (
    <div className="skills__marquee">
      <div className="skills__track" style={{ animationDuration: duration }}>
        {doubled.map((skill, i) => (
          <SkillCard key={`${skill.name}-${i}`} {...skill} />
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState("Languages");

  return (
    <div className="skills">
      <div className="skills__tabs">
        {Object.keys(TABS).map((tab) => (
          <button
            key={tab}
            className={`skills__tab${activeTab === tab ? " skills__tab--active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* key forces a full remount — resets animation position on tab switch */}
      <Marquee key={activeTab} items={TABS[activeTab]} />
    </div>
  );
}
