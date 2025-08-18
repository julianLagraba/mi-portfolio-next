"use client";
import { useState, useEffect } from "react";
import i18n from "../i18n";

export default function useI18n() {
 
  const [lang, setLang] = useState("en");

  useEffect(() => {
    const saved = typeof window !== "undefined" ? localStorage.getItem("lang") : null;
    if (saved && saved !== lang) setLang(saved);
  }, []); 

  // aplicar traducciones cuando cambia el lang
  useEffect(() => {
    if (typeof window === "undefined") return;
    localStorage.setItem("lang", lang);

    document.querySelectorAll("[data-i18n-key]").forEach((el) => {
      const key = el.getAttribute("data-i18n-key");
      const txt = i18n[lang]?.[key];
      if (txt != null) {
        if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") el.placeholder = txt;
        else el.textContent = txt;
      }
      const attr = el.getAttribute("data-i18n-attr");
      if (attr && txt != null) el.setAttribute(attr, txt);
    });

    document.documentElement.setAttribute("lang", lang);
  }, [lang]);

  return { lang, setLang };
}
