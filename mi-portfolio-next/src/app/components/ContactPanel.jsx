"use client";

export default function ContactPanel() {
  return (
    <section id="contact" className="contact-panel">
      <div className="container">
        <div className="contact-card">
          <div className="contact-grid">
            {/* Col 1: Brand + blurb */}
            <div className="contact-brand">
              <h3 className="contact-name">Julián Lagraba</h3>
              <p className="contact-blurb" data-i18n-key="contact.blurb">
                Data Analyst and Automation Specialist. I build dashboards in Power BI,
                workflows in Make, and clear visualizations to support decision-making.
              </p>

              <a
                href="mailto:julianlagraba@gmail.com?subject=Contacto%20desde%20Portfolio" 
                className="cv-button"
                data-i18n-key="contact.emailCta"
              >
                ✉️ Get in touch
              </a>
            </div>

            {/* Col 2: Pages */}
            <div className="contact-col">
              <h4 className="contact-title" data-i18n-key="contact.pages">PAGES</h4>
              <ul className="contact-list">
                <li><a href="/#home" data-i18n-key="nav.home">Home</a></li>
                <li><a href="/#intro" data-i18n-key="nav.intro">About me</a></li>
                <li><a href="/#portfolio" data-i18n-key="nav.portfolio">Projects</a></li>
              </ul>
            </div>

            {/* Col 3: Social */}
            <div className="contact-col">
              <h4 className="contact-title" data-i18n-key="contact.getInTouch">GET IN TOUCH</h4>
              <ul className="contact-list">
                <li><a href="mailto:julilagraba@gmail.com">Email</a></li>
                <li><a href="https://www.linkedin.com/in/julian-lagraba-5476a01b8" target="_blank" rel="noopener">LinkedIn</a></li>
                <li><a href="https://github.com/" target="_blank" rel="noopener">GitHub</a></li>
              </ul>
            </div>
          </div>

          <div className="contact-divider" />
          <p className="contact-copy">© 2025 Lagraba Julián</p>
        </div>
      </div>
    </section>
  );
}
