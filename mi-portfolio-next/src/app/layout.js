// src/app/layout.js
import "./globals.css";
import Script from "next/script";
import I18nProvider from "./components/I18nProvider";
import HeaderClient from "./components/HeaderClient";
import { Analytics } from "@vercel/analytics/react"


export const metadata = {
  title: "Portafolio – Julián Lagraba",
  description: "Portafolio de Julián Lagraba, Analista de datos y Automatización",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* 1) Cargo la librería de partículas */}
        <Script
          src="https://cdn.jsdelivr.net/npm/tsparticles@2/tsparticles.bundle.min.js"
          strategy="afterInteractive"
        />

        {/* 2) Cargo tu scripts.js (filtros, carrusel, i18n, etc.) */}
        <Script src="/scripts.js" strategy="afterInteractive" />

        {/* 3) Todo el contenido cliente dentro del I18nProvider */}
        <I18nProvider>
          {/* 4) Header con traducciones */}
          <HeaderClient />
          {/* 5) El resto de la página (hero, intro, portfolio, proyectos…) */}
          {children}
        </I18nProvider>
        <Analytics />
      </body>
    </html>
  );
}

