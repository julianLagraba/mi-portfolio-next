"use client";

import Link from "next/link";
import { useI18nCtx } from "../hooks/I18nContext";
import { useEffect, useState } from "react";

export default function HeaderClient() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeMenu = () => setIsOpen(false);
  const { lang, setLang } = useI18nCtx();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  // ruta dinámica del CV según idioma
  const cvFile = lang === "es" ? "/cv-es.pdf" : "/cv-en.pdf";

  const toggleLang = () => {
    setLang((prev) => (prev === "es" ? "en" : "es"));
  };

  return (
    <>
      <header className={`nav ${scrolled ? "scrolled" : ""}`}>
        <div className="container header-inner">

          {/* LOGO */}
          <a href="/" className="logo home-badge">
            <svg className="home-badge-icon" width="22" height="22" viewBox="0 0 24 24">
              <path fill="#fff" d="M12 3l9 8h-3v9h-5v-6H11v6H6v-9H3z"/>
            </svg>
          </a>

          <div className="header-right">
            {/* Desktop nav */}
            <nav className="nav-links desktop-only">
              <a href="#intro">ABOUT ME</a>
              <a href="#cert-carousel">SERVICES</a>
              <a href="#portfolio">PORTFOLIO</a>
              <a href="#contact">CONTACT</a>
              <a className="cv-button" href={cvFile} target="_blank">DOWNLOAD CV</a>
            </nav>

            {/* LANG */}
            <label className="lang-switch">
              <input
                type="checkbox"
                checked={lang === "en"}
                onChange={() => toggleLang()}
              />
              <span className="slider">
                <span className="label-left">ES</span>
                <span className="label-right">EN</span>
              </span>
            </label>

            {/* HAMBURGER */}
            <button 
              className={`nav-toggle mobile-only ${isOpen ? "is-open" : ""}`}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Open navigation"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

     {/* MOBILE MENU PANEL */}
      <nav className={`nav-mobile-panel ${isOpen ? "open" : ""}`}>
        <div className="nav-mobile-top">
          {/* LANG SWITCH ARRIBA IZQ */}
          <label className="lang-switch">
            <input
              type="checkbox"
              checked={lang === "en"}
              onChange={toggleLang}
            />
            <span className="slider">
              <span className="label-left">ES</span>
              <span className="label-right">EN</span>
            </span>
          </label>

          {/* X DE CIERRE ARRIBA DER */}
          <button className="close-btn" onClick={() => setIsOpen(false)}>
            ×
          </button>
        </div>

        {/* LINKS */}
        <a href="#intro" onClick={closeMenu}>ABOUT ME</a>
        <a href="#cert-carousel" onClick={closeMenu}>SERVICES</a>
        <a href="#portfolio" onClick={closeMenu}>PORTFOLIO</a>
        <a href="#contact" onClick={closeMenu}>CONTACT</a>

        {/* BOTÓN CV ABAJO, FULL WIDTH */}
        <a className="cv-button" href={cvFile} target="_blank">
          DOWNLOAD CV
        </a>
      </nav>
    </>
  );
}