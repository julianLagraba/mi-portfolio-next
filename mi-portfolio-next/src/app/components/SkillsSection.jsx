'use client';
import React from "react";

const HARD_SKILLS = [
  // Core del portfolio (según tus logos existentes)
  { name: "Power BI", src: "/img/powerbi.png" },
  { name: "SQL", src: "/img/sql.png" },
  { name: "Python", src: "/img/python.png" },
  { name: "Excel", src: "/img/excel.png" },
  { name: "Make", src: "/img/make.png" },
  { name: "Apps Script", src: "/img/appsscript.png" },
  // AWS: 
  { name: "AWS S3", src: "/img/s3.png" },
  { name: "AWS", src: "/img/aws1.png" },
  // Data Viz stack
  { name: "D3.js", src: "/img/d3.png" },
  { name: "Shiny", src: "/img/shiny.png" },
  { name: "Tableau", src: "/img/tableau.png" },
  // Full‑stack base
  { name: "JavaScript", src: "/img/javascript.png" },
  { name: "CSS", src: "/img/css3.png" },
  { name: "React", src: "/img/react.png" },
  { name: "HTML", src: "/img/html5.png" },
  // Bases de datos
  { name: "PostgreSQL", src: "/img/postgresql.png" },
  { name: "MySQL Workbench", src: "/img/workbench.png" },
  { name: "Next.js", src: "/img/nextjs.png" },
  { name: "Node.js", src: "/img/nodejs.png" },
  { name: "Redux", src: "/img/redux.png" },
  { name: "Sequelize", src: "/img/sequalize.png" },
];

const SOFT_SKILLS = [
  { key: "soft.problemSolving", label: "Problem-Solving", emoji: "🧩" },
  { key: "soft.analyticalThinking", label: "Analytical Thinking", emoji: "🧠" },
  { key: "soft.resultsOriented", label: "Results-Oriented", emoji: "🎯" },
  { key: "soft.effectiveCommunication", label: "Effective Communication", emoji: "🗣️" },
  { key: "soft.teamworkCollaboration", label: "Teamwork & Collaboration", emoji: "🤝" },
  { key: "soft.proactivityAutonomy", label: "Proactivity & Autonomy", emoji: "🚀" },
  { key: "soft.continuousLearning", label: "Continuous Learning", emoji: "📚" },
  { key: "soft.adaptability", label: "Adaptability to New Tech", emoji: "🧪" },
  { key: "soft.timeManagement", label: "Time Management", emoji: "⏱️" },
  { key: "soft.attentionToDetail", label: "Attention to Detail", emoji: "🔎" },
];

function LogoTile({ name, src }) {
  const [error, setError] = React.useState(false);
  return (
    <div className="skills-logo-tile">
      {!error ? (
        <>
          <img src={src} alt={name} onError={() => setError(true)} />
          <span className="skills-logo-label">{name}</span>
        </>
      ) : (
        <span className="skills-logo-fallback">{name}</span>
      )}
    </div>
  );
}

function InfiniteRow({ speed = 28 }) {
  const items = [...HARD_SKILLS, ...HARD_SKILLS];
  return (
    <div className="marquee-wrapper">
      <div className="marquee" style={{ animationDuration: `${speed}s` }}>
        {items.map((item, i) => (
          <LogoTile key={`${item.name}-${i}`} name={item.name} src={item.src} />
        ))}
      </div>
    </div>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-header">
        <h2>Skills</h2>
        
      </div>

      <div className="skills-box">
        <div className="skills-subheader">
          <h3>Hard Skills</h3>
          
        </div>
        <InfiniteRow speed={28} />
      </div>

      <div className="skills-box">
        <h3>Soft Skills</h3>
        <ul className="skills-soft-grid">
            {SOFT_SKILLS.map(({ key, label, emoji }) => (
                <li key={key} className="skills-chip">
                <span aria-hidden>{emoji}</span>
                <span data-i18n-key={key}>{label}</span>
                </li>
                ))}
        </ul>
      </div>
    </section>
  );
}



