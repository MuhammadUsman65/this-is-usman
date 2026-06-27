import { ExternalLink } from "lucide-react";

const EXPERIENCES = [
  {
    company: "AIESEC in Pakistan",
    logo: "/aiesec.png",
    role: "Backend Developer",
    period: "Oct 2024 - Feb 2025",
    tags: ["Remote"],
    website: "https://www.aiesecinpakistan.org/",
    bullets: [
      "Successfully developed optimized backend features for www.aiesecinpakistan.org/ using Next.js to improve performance and scalability.",
      "Delivered a bug-free production deployment of the platform, which now serves 5,000+ users per semester for national recruitment applications.",
      " Contributed to the national HR Hub https://nexusmxp.com/ to digitalize our HR processes.",
    ],
  },
];

export default function TechExperience() {
  return (
    <div className="entry-list">
      {EXPERIENCES.map((exp, i) => (
        <div key={i} className="entry-card">
          {/* ── Logo ── */}
          <div className="entry-card__logo-wrap">
            <div className="entry-card__logo">
              {exp.logo ? (
                <img src={exp.logo} alt={exp.company} />
              ) : (
                <span className="entry-card__logo-initial">
                  {exp.company.charAt(0)}
                </span>
              )}
            </div>
          </div>

          {/* ── Content ── */}
          <div className="entry-card__content">
            {/* Company name + Visit Website button */}
            <div className="entry-card__header">
              <h3 className="entry-card__company">{exp.company}</h3>
              {exp.website && (
                <a
                  href={exp.website}
                  target="_blank"
                  rel="noreferrer"
                  className="entry-card__website-btn"
                >
                  Visit Website <ExternalLink size={11} />
                </a>
              )}
            </div>

            <p className="entry-card__role">{exp.role}</p>
            <p className="entry-card__period">{exp.period}</p>

            {exp.tags?.length > 0 && (
              <div className="entry-card__tags">
                {exp.tags.map((tag) => (
                  <span key={tag} className="entry-card__tag">
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <ul className="entry-card__bullets">
              {exp.bullets.map((b, j) => (
                <li key={j} className="entry-card__bullet">
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
