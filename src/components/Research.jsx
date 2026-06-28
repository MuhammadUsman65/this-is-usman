import { ExternalLink } from "lucide-react";

const work = [
  {
    company: "arXiv",
    logo: "/arxiv.jpg",
    period: "2026",
    role: "Enhanced RSLP for High-Dimensional Forecasting",
    link: "https://arxiv.org/abs/2603.07500",
    Description:
      "Co-authored this paper which tackles a common problem in econometrics: when you have hundreds of correlated economic indicators, standard forecasting models tend to overfit and become unreliable. We built an enhanced version of the Random Subspace Local Projection method that uses smarter sampling, adaptive model tuning, and a more robust inference procedure to produce stable, trustworthy impulse response estimates. Testing on real macroeconomic data showed 33% better estimator stability at longer horizons and 14% narrower confidence intervals compared to the baseline approach.",
  },
];

export default function Research() {
  return (
    <div className="entry-list">
      {work.map((w, i) => (
        <div key={i} className="entry-card">
          {/* ── Logo ── */}
          <div className="entry-card__logo-wrap">
            <div className="entry-card__logo">
              {w.logo ? (
                <img src={w.logo} alt={w.company} />
              ) : (
                <span className="entry-card__logo-initial">
                  {w.company.charAt(0)}
                </span>
              )}
            </div>
          </div>

          {/* ── Content ── */}
          <div className="entry-card__content">
            {/* Company name + Visit Website button */}
            <div className="entry-card__header">
              <h3 className="entry-card__company">{w.company}</h3>
              {w.link && (
                <a
                  href={w.link}
                  target="_blank"
                  rel="noreferrer"
                  className="entry-card__website-btn"
                >
                  Read paper <ExternalLink size={11} />
                </a>
              )}
            </div>

            <p className="entry-card__role">{w.role}</p>
            <p className="entry-card__period">{w.period}</p>

            {w.tags?.length > 0 && (
              <div className="entry-card__tags">
                {w.tags.map((tag) => (
                  <span key={tag} className="entry-card__tag">
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <p className="entry-card__description">{w.Description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
