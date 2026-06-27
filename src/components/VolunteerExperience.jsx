import { useState } from "react";
import { ChevronDown } from "lucide-react";

/* ─── Add / edit organisations and roles here ───────────────────────────────
   logo       →  path in /public, or null to show the initial letter
   roles      →  list of child headings; each is independently collapsible
   bullets    →  bullet points inside a role (can be empty [])
   ─────────────────────────────────────────────────────────────────────────── */
const VOLUNTEER = [
  {
    organization: "AIESEC in FAST NUCES",
    logo: "/aiesec.png",
    roles: [
      {
        title: "HR Team Leader",
        period: "Add dates here",
        bullets: ["Add your bullet points here.", "Add another bullet point."],
      },
      {
        title: "Team Member",
        period: "Add dates here",
        bullets: ["Add your bullet points here."],
      },
    ],
  },
  {
    organization: "FAST NUCES",
    logo: "/logo.png",
    roles: [
      {
        title: "Role Title",
        period: "Add dates here",
        bullets: ["Add your bullet points here."],
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
    <div className="entry-card">
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
