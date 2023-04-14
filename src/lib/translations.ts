import type { Locale } from "./i18n";

type Translation = {[key: string]: string};

export default {
  en: {
    "nav.aboutme": "About Me",
    "nav.projects": "Projects",
  },
  pt: {
    "nav.aboutme": "Sobre Mim",
    "nav.projects": "Projetos",
  },
} as {[locale in Locale]: Translation}
