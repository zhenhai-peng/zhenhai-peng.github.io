import en from './en.json';
import zh from './zh.json';

export type Lang = 'en' | 'zh';

const translations = { en, zh } as const;

export function t(lang: Lang, key: string): string {
  const keys = key.split('.');
  let result: unknown = translations[lang];
  for (const k of keys) {
    result = (result as Record<string, unknown>)?.[k];
  }
  return (result as string) ?? key;
}

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang === 'zh') return 'zh';
  return 'en';
}

export function getPostSlug(slug: string): string {
  return slug.split('/').slice(0, -1).join('/');
}

export function getPostLang(slug: string): string {
  return slug.split('/').at(-1) ?? 'en';
}
