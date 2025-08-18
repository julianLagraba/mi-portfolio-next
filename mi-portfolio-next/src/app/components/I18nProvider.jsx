"use client";
import useI18n from "../hooks/useI18n";
import { I18nCtx } from "../hooks/I18nContext";

export default function I18nProvider({ children }) {
  const value = useI18n(); // { lang, setLang }
  return <I18nCtx.Provider value={value}>{children}</I18nCtx.Provider>;
}