import { languages, defaultLanguage, type Language } from './utils';

export function getStaticPaths() {
  return Object.keys(languages).map((lang) => ({
    params: { lang: lang as Language },
  }));
}
