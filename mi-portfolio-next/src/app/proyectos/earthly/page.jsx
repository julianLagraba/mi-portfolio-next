"use client";
import { useState } from "react";
import Link from "next/link";
import "../proyecto.css";
import ContactPanel from "../../components/ContactPanel";

export default function EarthlyPage() {
  const [isDescOpen, setIsDescOpen] = useState(false);
  
  return (
    <>
      <main className="project-page earthly-page">
        <div className="container">

          {/* Título y subtítulo */}
          <div className="project-header">
            <h1 data-i18n-key="proj.earthly.title">
              EARTHLY – Eco Travel Globe
            </h1>
            <p className="subtitle" data-i18n-key="proj.earthly.subtitle">
              Collaborative data storytelling project about sustainable tourism, combining UX/UI design with an interactive globe that ranks countries by sustainability score.
            </p>
          </div>

          {/* === TOP CARDS (2 columnas) === */}
          <section id="earthly-links" className="earthly-top-grid">

            {/* Card 1 – Behance */}
            <a
              href="https://www.behance.net/gallery/238545215/Earthly-Sustainable-Travel-Platform"
              target="_blank"
              rel="noopener noreferrer"
              className="earthly-card"
            >
              <div className="earthly-card-image">
                <img
                  src="/img/earthly.jpg"
                  alt="Earthly UX/UI case study mockups"
                />
              </div>

              <div className="earthly-card-title">
                <h2 data-i18n-key="proj.earthly.card1.title">Full case study – Behance</h2>
              </div>

              <div className="earthly-card-overlay">
                <p data-i18n-key="proj.earthly.card1.desc">
                  Complete Earthly project: branding, UX research, user flows,
                  wireframes and final UI screens.
                </p>
              </div>
            </a>

            {/* Card 2 – Demo Eco Travel Globe */}
            <a
              href="https://eco-travel-globe-earthly.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="earthly-card"
            >
              <div className="earthly-card-image">
                <img
                  src="/img/earthly-globe.png"
                  alt="Eco Travel Globe interactive visualization"
                />
              </div>

              <div className="earthly-card-title">
                <h2 data-i18n-key="proj.earthly.card2.title">Eco Travel Globe – live demo</h2>
              </div>

              <div className="earthly-card-overlay">
                <p data-i18n-key="proj.earthly.card2.desc">
                  Interactive globe built with Python + D3.js to explore
                  sustainability scores by country and discover eco–friendly
                  destinations.
                </p>
              </div>
            </a>
          </section>

          <section id="earthly-description">
            <div className="earthly-desc-card">
              
              <div 
                className="desc-header-mobile" 
                onClick={() => setIsDescOpen(!isDescOpen)}
              >
                <h2 data-i18n-key="proj.common.description">Description</h2>
                <span className="toggle-icon">
                  {isDescOpen ? "−" : "+"}
                </span>
              </div>
              
              <div className={`desc-content-wrapper ${isDescOpen ? "open" : ""}`}>
                
                <p data-i18n-key="proj.earthly.desc.1">
                  Earthly is a conceptual platform focused on sustainable travel.
                  The project was developed in collaboration with a UX/UI designer,
                  who led the visual identity, flows and interface design. My main
                  contribution was the data visualization tab <strong>“Eco Travel Globe”</strong>.
                </p>

                <p data-i18n-key="proj.earthly.desc.2">
                  For the globe, I gathered and processed open–source sustainability
                  indicators using <strong>Python</strong>. The data was cleaned, normalized
                  into a 0–100 score and exported as a JSON dataset grouped by country.
                  This dataset feeds an interactive visualization built with
                  <strong> D3.js</strong>, rendered over a globe using geographic projections and
                  TopoJSON.
                </p>

                <p data-i18n-key="proj.earthly.desc.3">
                  Users can rotate the globe, hover or click on countries to see
                  their sustainability score and key metrics. The interaction is
                  optimized for both desktop and mobile, and the overall experience
                  integrates with the visual language defined in the Earthly UI.
                </p>

                <h3 data-i18n-key="proj.common.stack">Tech stack</h3>
                <ul>
                  <li data-i18n-key="proj.earthly.stack.python">
                    Python for data collection, cleaning and scoring.
                  </li>
                  <li data-i18n-key="proj.earthly.stack.d3">
                    D3.js + TopoJSON for the interactive globe and map projections.
                  </li>
                  <li data-i18n-key="proj.earthly.stack.web">
                    JavaScript / HTML / CSS for the front-end integration.
                  </li>
                  <li data-i18n-key="proj.earthly.stack.vercel">
                    Deployment on Vercel for the Eco Travel Globe demo.
                  </li>
                </ul>
                
              </div>
              
              {!isDescOpen && (
                <p 
                  className="mobile-read-more-hint"
                  onClick={() => setIsDescOpen(true)}
                  data-i18n-key="proj.common.show_details"
                >
                  Show details...
                </p>
              )}
              
            </div>
          </section>
        </div>
      </main>

      <ContactPanel />
    </>
  );
}