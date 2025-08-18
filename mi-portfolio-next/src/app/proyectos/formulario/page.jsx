import Link from "next/link";
import "../proyecto.css";
import ContactPanel from "../../components/ContactPanel";

export default function FormularioPage() {
  return (
    <>

      <main className="project-page">
        <div className="container">

          {/* Botón de regreso */}
          <Link href="/" className="back-link" data-i18n-key="proj.common.back">
            ← Back
          </Link>

          {/* Título y subtítulo */}
          <div className="project-header">
            <h1 data-i18n-key="proj.form.title">
              Form Registration Automation
            </h1>
            <p className="subtitle" data-i18n-key="proj.form.subtitle">
              End-to-end workflow in Make + Power BI to validate payments and visualize results.
            </p>
          </div>

          {/* Descripción */}
          <section id="descripcion">
            <h2 data-i18n-key="proj.common.description">Description</h2>
            <p data-i18n-key="proj.form.desc">
              This project automates the validation of payments from registration forms via Make and integrates the results into a Power BI dashboard, enabling real-time analysis and process efficiency improvements.
            </p>
          </section>

          {/* Tecnologías usadas */}
          <section id="tecnologias">
            <h2 data-i18n-key="proj.common.stack">Tech stack</h2>
            <ul>
              <li data-i18n-key="proj.common.stack.make">Make (Integromat)</li>
              <li data-i18n-key="proj.common.stack.powerbi">Power BI</li>
              <li data-i18n-key="proj.common.stack.web">JavaScript / HTML / CSS</li>
            </ul>
          </section>

          {/* Demo: Power BI embed */}
          <section id="demo">
            <h2 data-i18n-key="proj.common.gallery">Screenshots / Demo</h2>
            <div className="embed-container">
              <iframe
                title="Inscripción"
                src="https://app.powerbi.com/view?r=eyJrIjoiNDEwM2MyZmQtZWRiNC00NmVjLThlZjUtMWQ2OThlOTU1MzJiIiwidCI6ImIxNjQ5MWI2LTQzMGEtNDdkOS1iNzgzLTU2NWIxOWMxYWYwOSIsImMiOjR9"
                frameBorder="0"
                allowFullScreen
              />
            </div>
          </section>

          {/* Workflow completo */}
          <section id="workflow">
            <h2 data-i18n-key="proj.form.workflow">Full workflow</h2>
            <div className="workflow-gallery">
              <img
                src="/img/Workflow1.png"
                alt="Workflow step 1"
                data-i18n-key="proj.form.imgAlt1"
                data-i18n-attr="alt"
              />
              <img
                src="/img/Workflow2.png"
                alt="Workflow step 2"
                data-i18n-key="proj.form.imgAlt2"
                data-i18n-attr="alt"
              />
              <img
                src="/img/Workflow3.png"
                alt="Workflow step 3"
                data-i18n-key="proj.form.imgAlt3"
                data-i18n-attr="alt"
              />
            </div>
          </section>

          {/* Fuentes de datos */}
          <section id="fuentes">
            <h2 data-i18n-key="proj.form.sources">Data sources</h2>
            <div className="data-sources">
              <a
                href="https://docs.google.com/spreadsheets/d/1lsnQ5pRkEJ_BFen8RIF-LTEnic37XjXdDpKw64RhFxw/edit?usp=sharing"
                target="_blank"
                rel="noopener"
                data-i18n-key="proj.form.sheet"
              >
                Registrations – Google Sheets
              </a>
              <a
                href="https://docs.google.com/spreadsheets/d/1lsnQ5pRkEJ_BFen8RIF-LTEnic37XjXdDpKw64RhFxw/edit?usp=sharing"
                target="_blank"
                rel="noopener"
                className="btn-secondary"
                data-i18n-key="proj.common.viewData"
              >
                View data
              </a>
            </div>
          </section>

          {/* Resultados e Impacto */}
          <section id="resultados">
            <h2 data-i18n-key="proj.form.results">Results & impact</h2>
            <p data-i18n-key="proj.form.results.desc">
              Manual validation time reduced by 80% and increased accuracy in receipt review. The interactive dashboard improved decision-making and continuous process monitoring.
            </p>
          </section>
        </div>
      </main>
      <ContactPanel />
      
    </>
  );
}
