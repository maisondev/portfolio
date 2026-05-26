import pt from './pt.json';
import en from './en.json';

export const languages = {
  pt: 'Português',
  en: 'English',
};

export const defaultLanguage = 'pt';

export const translations = {
  pt,
  en,
} as const;

export type Language = keyof typeof translations;

export function isValidLanguage(lang: string): lang is Language {
  return lang in translations;
}

export function getTranslation(lang: Language, key: string): string {
  const keys = key.split('.');
  let current: any = translations[lang];

  for (const k of keys) {
    if (current && typeof current === 'object') {
      current = current[k];
    } else {
      return key;
    }
  }

  return typeof current === 'string' ? current : key;
}

export function getLanguageFromUrl(url: URL): Language {
  const pathname = url.pathname;
  const langMatch = pathname.match(/^\/([a-z]{2})(?:\/|$)/);
  const lang = langMatch ? langMatch[1] : defaultLanguage;
  return isValidLanguage(lang) ? lang : defaultLanguage;
}

export function changeLanguageUrl(url: URL, lang: Language): string {
  const pathname = url.pathname;
  const currentLang = getLanguageFromUrl(url);

  if (currentLang === lang) {
    return pathname;
  }

  // Se a URL começa com /pt ou /en, substitua
  if (pathname.startsWith(`/${currentLang}`)) {
    return pathname.replace(`/${currentLang}`, `/${lang}`);
  }

  // Caso contrário, adicione o novo idioma
  return `/${lang}${pathname === '/' ? '' : pathname}`;
}
