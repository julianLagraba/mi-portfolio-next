"use client";
import { createContext, useContext } from "react";

export const I18nCtx = createContext({ lang: "en", setLang: () => {} });
export const useI18nCtx = () => useContext(I18nCtx);