import Link from "next/link";
import "../proyecto.css";
import ContactPanel from "../../components/ContactPanel";

export default function RiesgosPage() {
  return (
    <main className="project-page">
      <div className="container">
        {/* Botón de regreso */}
        <Link href="/" className="back-link" data-i18n-key="proj.common.back">
          ← Back
        </Link>

        {/* Título y subtítulo */}
        <div className="project-header">
          <h1 data-i18n-key="proj.risk.title">Risk Visualization – NGO</h1>
          <p className="subtitle" data-i18n-key="proj.risk.subtitle">
            Final course dashboard in Data Analytics for an NGO.
          </p>
        </div>

        {/* Descripción */}
        <section id="descripcion">
          <h2 data-i18n-key="proj.common.description">Description</h2>
          <p data-i18n-key="proj.risk.desc">
            Final course project where a Looker Studio dashboard was developed to identify and analyze operational risks across regions, integrating data from multiple sources.
          </p>
        </section>

        {/* Tecnologías usadas */}
        <section id="tecnologias">
          <h2 data-i18n-key="proj.common.stack">Tech stack</h2>
          <ul>
            <li data-i18n-key="proj.risk.stack.looker">Looker Studio (Google Data Studio)</li>
            <li data-i18n-key="proj.risk.stack.sheets">Google Sheets (data source)</li>
          </ul>
        </section>

        {/* Demo */}
        <section id="demo">
          <h2 data-i18n-key="proj.common.demo">Demo</h2>
          <div className="embed-container">
            <iframe
              title="Risk Visualization"
              src="https://lookerstudio.google.com/embed/reporting/66863efc-ee6c-40e4-bdbc-c317b106063e/page/p_07cwv2qlld"
              frameBorder="0"
              allowFullScreen
              sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
            />
          </div>
        </section>

        {/* Fuentes de datos */}
        <section id="fuentes">
          <h2 data-i18n-key="proj.risk.sources">Data sources</h2>
          <ul>
            <li>
              <a
                href="https://docs.google.com/spreadsheets/d/1CESe2P8GG1gMZ4Uc1BZbOGb9UaYLCkc9lQE0uRMtiXI/edit?usp=sharing"
                target="_blank"
                rel="noopener"
                data-i18n-key="proj.risk.source.ngo"
              >
                NGO – Google Sheets
              </a>
            </li>
          </ul>
        </section>

        {/* Resultados e Impacto */}
        <section id="resultados">
          <h2 data-i18n-key="proj.risk.results">Results & impact</h2>
          <p data-i18n-key="proj.risk.results.desc">
            The tool helped the NGO focus resources on the highest-risk areas, improving mitigation planning by 30% and enabling dynamic reporting for the management team.
          </p>
        </section>
      </div>
      <ContactPanel />
    </main>
  );
}
