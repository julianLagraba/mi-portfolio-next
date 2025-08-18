import Link from "next/link";
import "../proyecto.css";
import ContactPanel from "../../components/ContactPanel";

export default function PortalPage() {
  return (
    <main className="project-page">
      <div className="container">
        {/* Botón de regreso */}
        <Link href="/" className="back-link" data-i18n-key="proj.common.back">
          ← Back
        </Link>

        {/* Título y subtítulo */}
        <div className="project-header">
          <h1 data-i18n-key="proj.portal.title">Employee Portal</h1>
          <p className="subtitle" data-i18n-key="proj.portal.subtitle">
            Dashboard for employee management and license tracking.
          </p>
        </div>

        {/* Descripción */}
        <section id="descripcion">
          <h2 data-i18n-key="proj.common.description">Description</h2>
          <p data-i18n-key="proj.portal.desc">
            Interactive dashboard built with Power BI that consolidates information about employees, leaves, and queries, allowing to visualize absenteeism trends and optimize human resource allocation.
          </p>
        </section>

        {/* Tecnologías usadas */}
        <section id="tecnologias">
          <h2 data-i18n-key="proj.common.stack">Tech stack</h2>
          <ul>
            <li data-i18n-key="proj.common.stack.powerbi">Power BI</li>
            <li data-i18n-key="proj.portal.stack.sheets">Google Sheets (data source)</li>
            <li data-i18n-key="proj.portal.stack.sql">SQL</li>
          </ul>
        </section>

        {/* Demo */}
        <section id="demo">
          <h2 data-i18n-key="proj.common.demo">Demo</h2>
          <div className="embed-container">
            <iframe
              title="Employee Portal Dashboard"
              src="https://app.powerbi.com/view?r=eyJrIjoiMTQ0OGE5YjAtNmQ4ZC00OGE3LWE1ZGItMWQ4YjlkODgwMGUxIiwidCI6ImIxNjQ5MWI2LTQzMGEtNDdkOS1iNzgzLTU2NWIxOWMxYWYwOSIsImMiOjR9&pageName=ReportSection3f6095af65ddda42f455"
              frameBorder="0"
              allowFullScreen
            />
          </div>
        </section>

        {/* Fuentes de datos */}
        <section id="fuentes">
          <h2 data-i18n-key="proj.portal.sources">Data sources</h2>
          <ul>
            <li>
              <a
                href="https://docs.google.com/spreadsheets/d/1e0D0e4u8aco3OSsv6qnbesmKtiAwcitESrq6G8C4t8o/edit?usp=sharing"
                target="_blank"
                rel="noopener"
                data-i18n-key="proj.portal.source.consultas"
              >
                Queries – Google Sheets
              </a>
            </li>
            <li>
              <a
                href="https://docs.google.com/spreadsheets/d/1Nry5uhFBXS2oN0Ih9L0iuRWHnldwnx18rjyLUobORZU/edit?usp=sharing"
                target="_blank"
                rel="noopener"
                data-i18n-key="proj.portal.source.medical"
              >
                Medical Records – Google Sheets
              </a>
            </li>
            <li>
              <a
                href="https://docs.google.com/spreadsheets/d/1LjxsKHbE3iDZHt6udoD75KzH4bE4jv_t9lO-G8f7clI/edit?usp=sharing"
                target="_blank"
                rel="noopener"
                data-i18n-key="proj.portal.source.employees"
              >
                Employees – Google Sheets
              </a>
            </li>
            <li>
              <a
                href="https://docs.google.com/spreadsheets/d/1tlWm2IxDKjuV8tNsAGYr_07uwT9i8S17Tp3d6tPHiCk/edit?usp=sharing"
                target="_blank"
                rel="noopener"
                data-i18n-key="proj.portal.source.licenses"
              >
                Leaves – Google Sheets
              </a>
            </li>
          </ul>
        </section>

        {/* Resultados e Impacto */}
        <section id="resultados">
          <h2 data-i18n-key="proj.portal.results">Results & impact</h2>
          <p data-i18n-key="proj.portal.results.desc">
            Improved visibility of leave data, reduced reporting times by 50%, and facilitated human resource management by centralizing all information in a single dashboard.
          </p>
        </section>
      </div>
      <ContactPanel />
    </main>
  );
}
