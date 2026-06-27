import { Code2, ExternalLink, Play } from "lucide-react";

const CDN = (name, variant = "original") =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${name}-${variant}.svg`;

/* ─── Add / edit projects here ──────────────────────────────────────────────
   image   →  path in /public, e.g. "/projects/axiom.png"
   video   →  YouTube / demo URL, or null to hide the overlay and hint
   tags    →  { name, icon (CDN url or null), invert (bool) }
   github  →  repo URL, or null to hide the Source Code button
   live    →  deployed URL, or null to hide the Live Demo button
   ─────────────────────────────────────────────────────────────────────────── */
const PROJECTS = [
  {
    title: "Axiom – RAG Conversational AI Tutor",
    image: "/projects/axiom.png",
    video: null, // e.g. "https://youtu.be/..."
    description:
      "Designed a Retrieval-Augmented Generation (RAG) AI tutor with a dual-LLM pipeline for complex domain reasoning. Built document ingestion with MMR retrieval using local embeddings. Deployed containerised backend on Hugging Face with Upstash Redis IP-hashed rate limiting.",
    tags: [
      { name: "FastAPI", icon: CDN("fastapi") },
      { name: "LangChain", icon: null },
      { name: "Docker", icon: CDN("docker") },
      { name: "ChromaDB", icon: null },
      { name: "Redis", icon: CDN("redis") },
    ],
    github: "https://github.com/MuhammadUsman65",
    live: null,
  },
  // Add more projects below ↓
];

function ProjectCard({ project }) {
  const hasVideo = Boolean(project.video);

  return (
    <div className="project-card">
      {/* ── Image column ── */}
      <div className="project-card__img-col">
        {/* Wraps in <a> if there is a video link, otherwise a plain div */}
        {hasVideo ? (
          <a
            href={project.video}
            target="_blank"
            rel="noreferrer"
            className="project-card__img-wrap project-card__img-wrap--video"
            aria-label={`Watch demo for ${project.title}`}
          >
            <img
              src={project.image}
              alt={project.title}
              className="project-card__img"
              onError={(e) => {
                e.currentTarget.style.opacity = "0.3";
              }}
            />
            <div className="project-card__video-overlay">
              <div className="project-card__play-btn">
                <Play size={26} fill="white" strokeWidth={0} />
              </div>
              <span>Watch Demo</span>
            </div>
          </a>
        ) : (
          <div className="project-card__img-wrap">
            <img
              src={project.image}
              alt={project.title}
              className="project-card__img"
              onError={(e) => {
                e.currentTarget.style.opacity = "0.3";
              }}
            />
          </div>
        )}

        {/* Hint only shown when a video link exists */}
        {hasVideo && (
          <p className="project-card__video-hint">Click image for video demo</p>
        )}
      </div>

      {/* ── Content column ── */}
      <div className="project-card__content">
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__desc">{project.description}</p>

        {project.tags?.length > 0 && (
          <div className="project-card__tags">
            {project.tags.map((tag) => (
              <span key={tag.name} className="project-card__tag">
                {tag.icon && (
                  <img
                    src={tag.icon}
                    alt=""
                    className={`project-card__tag-icon${tag.invert ? " project-card__tag-icon--invert" : ""}`}
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                )}
                {tag.name}
              </span>
            ))}
          </div>
        )}

        <div className="project-card__actions">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="project-card__btn"
            >
              <Code2 size={14} /> Source Code
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="project-card__btn"
            >
              <ExternalLink size={14} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <div className="project-list">
      {PROJECTS.map((project, i) => (
        <ProjectCard key={i} project={project} />
      ))}
    </div>
  );
}
