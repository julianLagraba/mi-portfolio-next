"use client";

import Link from "next/link";
import { useI18nCtx } from "../hooks/I18nContext";
import { useEffect, useState } from "react";

export default function HeaderClient() {
  const { lang, setLang } = useI18nCtx();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  // ruta dinámica del CV según idioma
  const cvFile = lang === "es" ? "/cv-es.pdf" : "/cv-en.pdf";

  return (
    <header className="nav">
      <div className="container">
        <Link href={{ pathname: "/", hash: "home" }} className="logo" data-i18n-key="nav.home">
          Home
        </Link>
        <ul className="nav-links">
          <li><Link href={{ pathname: "/", hash: "intro" }}     data-i18n-key="nav.intro">About me</Link></li>
          <li><Link href={{ pathname: "/", hash: "services" }}  data-i18n-key="nav.services">Services</Link></li>
          <li><Link href={{ pathname: "/", hash: "portfolio" }} data-i18n-key="nav.portfolio">Portfolio</Link></li>
          <li><Link href="#contact"   data-i18n-key="nav.contact">Contact</Link></li>
          <li>
            {/* Botón descargar CV */}
            <a href={mounted ? cvFile : "/cv-en.pdf"}
              download
              className="cv-button"
              data-i18n-key="nav.cv"
              suppressHydrationWarning
              >
              Download CV
            </a>
          </li>
        </ul>

        <select
          id="lang-switch"
          value={lang}
          onChange={(e) => setLang(e.target.value)}
          aria-label="Language"
        >
          <option value="en">EN</option>
          <option value="es">ES</option>
        </select>
      </div>
    </header>
  );
}