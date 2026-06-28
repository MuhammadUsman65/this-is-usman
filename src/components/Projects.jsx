import { Code2, ExternalLink, Play } from "lucide-react";

const CDN = (name, variant = "original") =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${name}-${variant}.svg`;

const PROJECTS = [
  {
    title: "AuTest - Automated App Testing Platform",
    image: "/autest.jpeg",
    video: "https://www.loom.com/share/113dade9059b46ea96c62bc2ccb4ff34",
    description:
      "Built an end-to-end automated mobile testing platform that converts Google Play Store user reviews into runnable Appium test cases. A Node.js scraper with checkpoint-based pagination feeds a fine-tuned DistilBERT classifier that labels reviews as bug reports, feature requests, or usability issues with confidence thresholding to filter uncertain classifications. A fine-tuned Qwen3 LLM then generates structured Given-When-Then test cases covering valid, invalid, and edge case scenarios, which Appium maps to extracted APK view hierarchies and executes on Android emulators with screenshot capture and pass/fail logging. FastAPI backend with MongoDB Atlas across six modular pipeline stages, with scheduling support for automated scraping and test runs, and a React dashboard for APK upload and downloadable execution reports.",
    tags: [
      { name: "Next.js", icon: CDN("nextjs", "plain"), invert: true },
      { name: "JavaScript", icon: CDN("javascript") },
      { name: "Vercel", icon: CDN("vercel"), invert: true },
      { name: "React", icon: CDN("react") },
      { name: "Tailwind CSS", icon: CDN("tailwindcss") },
      { name: "Python", icon: CDN("python") },
      { name: "FastAPI", icon: CDN("fastapi") },
      { name: "MongoDB", icon: CDN("mongodb") },
      { name: "Node.js", icon: CDN("nodejs") },
      { name: "React", icon: CDN("react") },
      { name: "PyTorch", icon: CDN("pytorch") },
      {
        name: "Hugging Face",
        icon: "https://huggingface.co/front/assets/huggingface_logo.svg",
      },
    ],
    github: null,
    live: null,
  },
  {
    title: "AIESEC in Pakistan National Website",
    image: "/aip.png",
    video: "https://www.aiesecinpakistan.org/",
    description:
      "Contributed as a backend developer to the national recruitment platform for AIESEC in Pakistan, built with Next.js. Developed and optimized backend features to improve platform performance and scalability, and shipped a bug-free production deployment that now handles 5,000+ user applications per semester across all AIESEC chapters in Pakistan.",
    tags: [
      { name: "Next.js", icon: CDN("nextjs", "plain"), invert: true },
      { name: "JavaScript", icon: CDN("javascript") },
      { name: "Vercel", icon: CDN("vercel"), invert: true },
      { name: "React", icon: CDN("react") },
      { name: "Tailwind CSS", icon: CDN("tailwindcss") },
    ],
    github: null,
    live: "https://www.aiesecinpakistan.org/",
  },
  {
    title: "Tradr – Stock Price Forecasting & Sentiment Analysis",
    image: "/stock.png",
    video: "https://www.loom.com/share/92c75e840a1141ce89c560c95423e087",
    description:
      "Built a full-stack stock forecasting platform with a dual-model pipeline combining an LSTM neural network across 8 engineered features with Holt-Winters smoothing for seasonality-aware price forecasts and confidence bands. Live candlestick charts support five technical indicator overlays with a 60-day sliding window and early stopping. FastAPI backend with MongoDB Atlas, rate-limited Pydantic-validated endpoints, VADER news sentiment on RSS headlines, and per-ticker model retraining via background tasks.",
    tags: [
      { name: "Python", icon: CDN("python") },
      { name: "FastAPI", icon: CDN("fastapi") },
      { name: "TensorFlow", icon: CDN("tensorflow") },
      { name: "Scikit-learn", icon: CDN("scikitlearn") },
      { name: "NumPy", icon: CDN("numpy") },
      { name: "Pandas", icon: CDN("pandas"), invert: true },
      { name: "MongoDB", icon: CDN("mongodb") },
      { name: "Next.js", icon: CDN("nextjs", "plain"), invert: true },
      { name: "React", icon: CDN("react") },
      { name: "Tailwind CSS", icon: CDN("tailwindcss") },
    ],
    github: "https://github.com/MuhammadUsman65/stock.git",
    live: null,
  },
  {
    title: "NexBoard – Real Time Collaborative Kanban Board",
    image: "/kanban.png",
    video: "https://www.loom.com/share/66f133e9bf774eec8cc18a23359ada2d",
    description:
      "Built a real-time collaborative Kanban board where all changes flow through Socket.io rooms so every connected tab or browser updates instantly without polling. Implemented optimistic UI updates with Zustand snapshot rollback so drags feel instant and revert cleanly if the server rejects them. Backend is Node/Express with MongoDB, supporting drag-and-drop reordering across lists, cascade deletes, and a live activity log per board.",
    tags: [
      { name: "React", icon: CDN("react") },
      { name: "Vite", icon: CDN("vite") },
      { name: "Node.js", icon: CDN("nodejs") },
      { name: "Express", icon: CDN("express"), invert: true },
      { name: "MongoDB", icon: CDN("mongodb") },
      { name: "Socket.io", icon: CDN("socketio"), invert: true },
    ],
    github: "https://github.com/MuhammadUsman65/KanBan.git",
    live: null,
  },
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
