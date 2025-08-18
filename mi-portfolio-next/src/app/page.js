// app/page.jsx
import Head from 'next/head'
import Script from 'next/script'


export default function HomePage() {
  return (
    <>
      <Head>
        <title data-i18n-key="title">Portfolio – Julián Lagraba</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {/* Partículas */}
      <Script
        src="https://cdn.jsdelivr.net/npm/tsparticles@2/tsparticles.bundle.min.js"
        strategy="afterInteractive"
      />
      {/* Tu script de filtros, i18n, carrusel, etc. */}
      <Script src="/scripts.js" strategy="afterInteractive" />

      
      {/* HERO */}
      <section id="home" className="hero" data-i18n-key="section.hero">
        <div className="container">
          <div id="tsparticles"></div>
          <div className="hero-content container">
            <h1 data-i18n-key="hero.name">Julián Lagraba</h1>
            <p data-i18n-key="hero.description">
              Data Analyst • Automation • Visualization
            </p>
            <a href="#portfolio" className="btn-primary" data-i18n-key="hero.cta">
              View Portfolio
            </a>
          </div>
        </div>
          {/* Flecha hacia “Sobre mí” */}
          <a
            id="hero-arrow"
            href="#intro"
            className="hero-scroll"
            aria-label="Ir a Sobre mí"
            title="Ir a Sobre mí"
          >
            <svg
              className="chev"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path fill="currentColor" d="M7.41 8.59 12 13.17 16.59 8.59 18 10l-6 6-6-6z" />
            </svg>
          </a>
      </section>

      {/* INTRO / SOBRE MÍ */}
      <section id="intro" className="section-darker" data-i18n-key="section.intro">
        <div className="container about-grid">
          <div className="about-photo">
            <img
              src="/img/foto.jpg"
              alt="Foto de Julián Lagraba"
              data-i18n-key="about.photoAlt"
            />
          </div>
          <div className="about-content">
            <h2 data-i18n-key="about.heading">Hi, I'm Julián.</h2>
            <p data-i18n-key="about.p1">
              I specialize in data analysis and process automation, creating interactive dashboards in Power BI, SQL queries, and intelligent workflows with Make (Integromat). With over 5 years of experience in the IT sector, I have worked from hardware and software technical support to large-scale data management and visualization.
            </p>
            <p data-i18n-key="about.p2">
              I currently work as a Data Administrator at the Municipality of Córdoba, where I design and maintain Power BI dashboards, generate SQL reports, manage AWS S3 files, and participate in user-experience testing. Additionally, as a freelancer, I develop automation projects that reduce operational times by up to 90 %.
            </p>

            <h2 data-i18n-key="certs.heading">Certifications</h2>
            <div className="cert-carousel" data-i18n-key="certs.carousel">
              <button className="carousel-btn prev" aria-label="Anterior">&#10094;</button>
              <div className="carousel-track-container">
                <ul className="carousel-track">
                  {/* Slide 1 */}
                  <li className="carousel-slide" data-i18n-key="cert1.slide">
                      <div className="slide-inner">
                        {/* Imagen clickeable (opcional) */}
                        <a
                          href="https://www.credly.com/badges/ed9f7003-f2e6-484c-a3d0-448aada47722/linked_in_profile"
                          target="_blank"
                          rel="noopener"
                        >
                          <img
                            src="/img/aws.png"
                            alt="AWS Cloud Quest: Cloud Practitioner"
                            data-i18n-key="cert1.imgAlt"
                          />
                        </a>

                        <div className="slide-info">
                          <h3 data-i18n-key="cert1.title">AWS Cloud Practitioner</h3>
                          <p className="issuer" data-i18n-key="cert1.issuer">
                            Amazon Web Services
                          </p>
                          {/* Único <a> dentro del slide */}
                          <a
                            href="https://www.credly.com/badges/ed9f7003-f2e6-484c-a3d0-448aada47722/linked_in_profile"
                            target="_blank"
                            rel="noopener"
                            data-i18n-key="cert1.linkText"
                            className="cert-link"
                          >
                            View Certificate
                          </a>
                        </div>
                      </div>
                    </li>
                  {/* Slide 2 */}
                  <li className="carousel-slide" data-i18n-key="cert2.slide">
                    <div className="slide-inner">
                      {/* Imagen clickeable */}
                      <a
                        href="https://www.credly.com/badges/ec3d5daf-c581-4e28-a187-5182c3f32481?source=linked_in_profile"
                        target="_blank"
                        rel="noopener"
                      >
                        <img
                          src="/img/cissco.png"
                          alt="Introduction to Cybersecurity – Cisco"
                          data-i18n-key="cert2.imgAlt"
                        />
                      </a>
                      <div className="slide-info">
                        <h3 data-i18n-key="cert2.title">Introduction to Cybersecurity</h3>
                        <p className="issuer" data-i18n-key="cert2.issuer">Cisco</p>
                        {/* Único enlace dentro del slide */}
                        <a
                          href="https://www.credly.com/badges/ec3d5daf-c581-4e28-a187-5182c3f32481?source=linked_in_profile"
                          target="_blank"
                          rel="noopener"
                          data-i18n-key="cert2.linkText"
                          className="cert-link"
                        >
                          View Certificate
                        </a>
                      </div>
                    </div>
                  </li>

                  {/* Slide 3 */}
                  <li className="carousel-slide" data-i18n-key="cert3.slide">
                    <div className="slide-inner">
                      {/* Imagen clickeable */}
                      <a
                        href="https://skills.yourlearning.ibm.com/certificate/share/63c1746668ewogICJvYmplY3RUeXBlIiA6ICJBQ1RJVklUWSIsCiAgImxlYXJuZXJDTlVNIiA6ICIyNzE1ODU2UkVHIiwKICAib2JqZWN0SWQiIDogIlBMQU4tMDA0RkU1RDEyRkFBIgp9fda074fb89-10"
                        target="_blank"
                        rel="noopener"
                      >
                        <img
                          src="/img/ibm.png"
                          alt="Fundamentos de Data Analytics – Guayerd & IBM"
                          data-i18n-key="cert3.imgAlt"
                        />
                      </a>
                      <div className="slide-info">
                        <h3 data-i18n-key="cert3.title">Data Analytics Fundamentals</h3>
                        <p className="issuer" data-i18n-key="cert3.issuer">Guayerd &amp; IBM</p>
                        {/* Único enlace dentro del slide */}
                        <a
                          href="https://skills.yourlearning.ibm.com/certificate/share/63c1746668ewogICJvYmplY3RUeXBlIiA6ICJBQ1RJVklUWSIsCiAgImxlYXJuZXJDTlVNIiA6ICIyNzE1ODU2UkVHIiwKICAib2JqZWN0SWQiIDogIlBMQU4tMDA0RkU1RDEyRkFBIgp9fda074fb89-10"
                          target="_blank"
                          rel="noopener"
                          data-i18n-key="cert3.linkText"
                          className="cert-link"
                        >
                          View Certificate
                        </a>
                      </div>
                    </div>
                  </li>

                  {/* Slide 4 */}
                  <li className="carousel-slide" data-i18n-key="cert4.slide">
                    <div className="slide-inner">
                      {/* Imagen clickeable */}
                      <a
                        href="https://cert.efset.org/BqT9fX"
                        target="_blank"
                        rel="noopener"
                      >
                        <img
                          src="/img/efset.png"
                          alt="English Certificate – EF SET"
                          data-i18n-key="cert4.imgAlt"
                        />
                      </a>
                      <div className="slide-info">
                        <h3 data-i18n-key="cert4.title">English Certificate</h3>
                        <p className="issuer" data-i18n-key="cert4.issuer">EF SET</p>
                        {/* Único enlace dentro del slide */}
                        <a
                          href="https://cert.efset.org/BqT9fX"
                          target="_blank"
                          rel="noopener"
                          data-i18n-key="cert4.linkText"
                          className="cert-link"
                        >
                          View Certificate
                        </a>
                      </div>
                    </div>
                  </li>

                </ul>
              </div>
              <button className="carousel-btn next" aria-label="Siguiente">&#10095;</button>
            </div>
          </div>
        </div>
      </section>

      {/* PORTAFOLIO */}
      <section id="portfolio" className="section-dark" data-i18n-key="section.portfolio">
        <div className="container">
          <h2 data-i18n-key="portfolio.heading">Portfolio</h2>
          <div className="filters">
            <button className="filter-btn active" data-filter="all" data-i18n-key="filter.all">All</button>
            <button className="filter-btn" data-filter="powerbi" data-i18n-key="filter.powerbi">Power BI</button>
            <button className="filter-btn" data-filter="make" data-i18n-key="filter.make">Make</button>
            <button className="filter-btn" data-filter="looker" data-i18n-key="filter.looker">Looker Studio</button>
            <button className="filter-btn" data-filter="react" data-i18n-key="filter.react">React</button>
          </div>
          <div className="projects-grid">
            {/* Proyecto 1 */}
            <div className="project-card" data-tech="powerbi make">
              <div className="card-image">
                <img src="/img/Inscripciones.png" alt="Automatización de Formularios" />
                <div className="overlay">
                  <p>Make + Power BI workflow for payment validation and visualization.</p>
                </div>
              </div>
              <div className="card-content">
                <h3>Form Automation</h3>
                <a href="/proyectos/formulario" className="btn-primary">View Project</a>
              </div>
            </div>
            {/* Proyecto 2 */}
            <div className="project-card" data-tech="powerbi">
              <div className="card-image">
                <img src="/img/Portal Empleados.png" alt="Portal de Empleados" />
                <div className="overlay">
                  <p>Dashboard for employee management and license tracking.</p>
                </div>
              </div>
              <div className="card-content">
                <h3>Employee Portal</h3>
                <a href="/proyectos/portal" className="btn-primary">View Project</a>
              </div>
            </div>
            {/* Proyecto 3 */}
            <div className="project-card" data-tech="looker">
              <div className="card-image">
                <img src="/img/Fundacion.png" alt="Visualización de Riesgos" />
                <div className="overlay">
                  <p>Looker Studio dashboard for operational risk analysis at an NGO.</p>
                </div>
              </div>
              <div className="card-content">
                <h3>Risk Visualization</h3>
                <a href="/proyectos/riesgos" className="btn-primary">View Project</a>
              </div>
            </div>
            {/* Proyecto 4 */}
            <div className="project-card" data-tech="react">
              <div className="card-image">
                <img src="/img/Pokeapp.png" alt="PokeApp" />
                <div className="overlay">
                  <p>Henry’s Final Project: a Pokémon app using React, Redux, Node, and Sequelize.</p>
                </div>
              </div>
              <div className="card-content">
                <h3>PokeApp</h3>
                <a href="https://pi-pokemon-frontend-theta.vercel.app/" className="btn-primary">View Project</a>
              </div>
            </div>
          </div>
        </div>
      </section>

    {/* CONTACT / FOOTER */}
      <section id="contact" className="contact-panel">
        <div className="container">
          <div className="contact-card">
            <div className="contact-grid">
              {/* Col 1: Brand + blurb */}
              <div className="contact-brand">
                <h3 className="contact-name">Julián Lagraba</h3>
                <p className="contact-blurb" data-i18n-key="contact.blurb">
                  Data Analyst and Automation Specialist. I build dashboards in Power BI, workflows in Make, and clear visualizations to support decision-making.
                </p>

                <a
                  href="mailto:julilagraba@gmail.com"
                  className="contact-cta"
                  data-i18n-key="contact.emailCta"
                >
                  ✉️ Get in touch
                </a>
              </div>

              {/* Col 2: Pages */}
              <div className="contact-col">
                <h4 className="contact-title" data-i18n-key="contact.pages">PAGES</h4>
                <ul className="contact-list">
                  <li><a href="/#home"      data-i18n-key="nav.home">Home</a></li>
                  <li><a href="/#intro"     data-i18n-key="nav.intro">About me</a></li>
                  <li><a href="/#portfolio" data-i18n-key="nav.portfolio">Projects</a></li>
                </ul>
              </div>

              {/* Col 3: Social */}
              <div className="contact-col">
                <h4 className="contact-title" data-i18n-key="contact.getInTouch">GET IN TOUCH</h4>
                <ul className="contact-list">
                  <li>
                    <a href="mailto:julilagraba@gmail.com">Email</a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/julian-lagraba-5476a01b8" target="_blank" rel="noopener">
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/" target="_blank" rel="noopener">GitHub</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>


      <footer className="site-footer">
        <div className="container">
          <p>© 2025 Lagraba Julián</p>
        </div>
      </footer>
    </>
  )
}
