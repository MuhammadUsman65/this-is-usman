const EDUCATION = [
  {
    institution: "FAST National University of Computing and Emerging Sciences",
    logo: "/logo.png",
    degree: "Bachelor of Science in Software Engineering",
    period: "2022 – 2026",
    tags: ["Islamabad"],
    bullets: [
      {
        title: "Relevant Coursework",
        text: "Requirements Engineering, Data Structures, Software Design and Architecture, Process Engineering, Database Systems, Web Engineering, Software Quality Assurance, Software Project Management, DevOps, AI.",
      },
      {
        title: "Achievements",
        text: "Dean's List of Honors: Spring 2023 & Spring 2026",
      },
    ],
  },
];

export default function Education() {
  return (
    <div className="entry-list">
      {EDUCATION.map((edu, i) => (
        <div key={i} className="entry-card">
          {/* ── Logo ── */}
          <div className="entry-card__logo-wrap">
            <div className="entry-card__logo">
              {edu.logo ? (
                <img src={edu.logo} alt={edu.institution} />
              ) : (
                <span className="entry-card__logo-initial">
                  {edu.institution.charAt(0)}
                </span>
              )}
            </div>
          </div>

          {/* ── Content ── */}
          <div className="entry-card__content">
            <h3 className="entry-card__company">{edu.institution}</h3>
            <p className="entry-card__role">{edu.degree}</p>
            <p className="entry-card__period">
              {edu.period}
              {edu.location && <> &bull; {edu.location}</>}
            </p>

            {edu.tags?.length > 0 && (
              <div className="entry-card__tags">
                {edu.tags.map((tag) => (
                  <span key={tag} className="entry-card__tag">
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <ul className="entry-card__bullets">
              {edu.bullets.map((b, j) => (
                <li key={j} className="entry-card__bullet">
                  <span className="entry-card__bullet-title">{b.title}:</span>
                  <span>{b.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
