import { useState } from "react";
import { ChevronDown } from "lucide-react";

/* ─── Add / edit organisations and roles here ───────────────────────────────
   logo       →  path in /public, or null to show the initial letter
   roles      →  list of child headings; each is independently collapsible
   bullets    →  bullet points inside a role (can be empty [])
   ─────────────────────────────────────────────────────────────────────────── */
const VOLUNTEER = [
  {
    organization: "AIESEC in Islamabad",
    logo: "/aiesec.png",
    roles: [
      {
        title: "Regional Head & HR Operations & Recruitment",
        period: "Feb 2025 - Jan 2026",
        bullets: [
          "Built an HR performance dashboard and compliance tracking system, improving team accountability and visibility by 30%.",
          "Led a 17-member HR team managing the full member lifecycle for 90+ members, driving a 90%+ retention rate;  and helped AIESEC Islamabad rank #1 nationally in organizational development.",
          "Led 2 end-to-end recruitment cycles for a 20+ member task force, screening 2,000+ applicants through a structured 3-stage process ",
        ],
      },
      {
        title: "Team Member - Recruitment Taskforce",
        period: "Sep 2024 - Oct 2024",
        bullets: [
          "Part of the team which was responsible for recruiting the next generation of AIESEC.",
          "Helped oversee execution of a 3 stage recruitment process and induction ceremony with over 800+ applicants.",
          "Conducted interviews and performed people analysis to bring onboard the best talent possible.",
        ],
      },
      {
        title: "Partnerships Executive - GEC '24",
        period: "May 2024 - Aug 2024",
        bullets: [
          "Responsible for contacting and signing partners for a local AIESEC conference.",
          "Onboarded Edify Elite as a partner organization.",
          "Raised over PKR 300,000 for the event.",
        ],
      },
      {
        title: "Team Member - Training and Development ",
        period: "Mar 2024 - Aug 2024",
        bullets: [
          "Identified gaps within the local committee and implemented targeted actions to address them. ",
        ],
      },
    ],
  },
  {
    organization: "FAST NUCES",
    logo: "/logo.png",
    roles: [
      {
        title: "Event Vice Coordinator - NaSCon 2024",
        period: "Dec 2023 2025 - Mar 2024",
        bullets: [
          "Managed the entire event agenda, including logistics and participant communication, ensuring smooth execution.",
          "Coordinated all logistics requirements, streamlining operations and enhancing the overall event experience.",
        ],
      },
      {
        title: "Teaching Assistant - Object Oriented Programming",
        period: "Sep 2023 - jan 2024",
        bullets: [
          "Guided 60 students through OOP concepts, graded assignments, and provided valuable support to the course instructor.",
        ],
      },
      {
        title: "Lab Demonstrator - Information and Communication Technology",
        period: "Sep 2023 - jan 2024",
        bullets: [
          "Facilitated hands-on learning experiences and offered clear guidance to students, enhancing their practical understanding of course material.",
        ],
      },
      {
        title: "Event Team Member - NaSCon 2023 ",
        period: "Feb 2023 - Mar 2023",
        bullets: [
          "Managed event venue planning and preparation",
          "Led a marketing campaign targeting on-campus and off-campus students.",
        ],
      },
    ],
  },
];

/* ── Child: a single collapsible role ─────────────────────────────────────── */
function RoleEntry({ role }) {
  const [open, setOpen] = useState(false);
  const hasBullets = role.bullets?.length > 0;

  return (
    <div className="vol-role">
      <button
        className="vol-role__toggle"
        onClick={() => hasBullets && setOpen((o) => !o)}
        style={{ cursor: hasBullets ? "pointer" : "default" }}
        aria-expanded={open}
      >
        <div className="vol-role__header-text">
          <span className="vol-role__title">{role.title}</span>
          {role.period && (
            <span className="vol-role__period">{role.period}</span>
          )}
        </div>

        {hasBullets && (
          <ChevronDown
            size={15}
            className={`vol-icon${open ? " vol-icon--open" : ""}`}
          />
        )}
      </button>

      {hasBullets && (
        <div
          className={`vol-collapsible${open ? " vol-collapsible--open" : ""}`}
        >
          <div className="vol-collapsible__inner">
            <ul className="entry-card__bullets vol-role__bullets">
              {role.bullets.map((b, j) => (
                <li key={j} className="entry-card__bullet">
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

/* ── Parent: an organisation entry with collapsible role list ─────────────── */
function OrgEntry({ org }) {
  const [open, setOpen] = useState(true); // organisations start expanded

  return (
    <div className="entry-card volunteer-list">
      {/* Logo — same as TechExperience / Education */}
      <div className="entry-card__logo-wrap">
        <div className="entry-card__logo">
          {org.logo ? (
            <img src={org.logo} alt={org.organization} />
          ) : (
            <span className="entry-card__logo-initial">
              {org.organization.charAt(0)}
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="entry-card__content">
        {/* Org toggle — click to expand / collapse all roles */}
        <button
          className="vol-org__toggle"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
        >
          <h3 className="entry-card__company">{org.organization}</h3>
          <ChevronDown
            size={18}
            className={`vol-icon${open ? " vol-icon--open" : ""}`}
          />
        </button>

        {/* Collapsible role list */}
        <div
          className={`vol-collapsible${open ? " vol-collapsible--open" : ""}`}
        >
          <div className="vol-collapsible__inner">
            <div className="vol-roles">
              {org.roles.map((role, i) => (
                <RoleEntry key={i} role={role} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function VolunteerExperience() {
  return (
    <div className="entry-list">
      {VOLUNTEER.map((org, i) => (
        <OrgEntry key={i} org={org} />
      ))}
    </div>
  );
}
