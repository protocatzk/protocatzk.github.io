import { defaultLang, languages, ui, type Lang, type UiKey } from './ui';

export function getLangFromUrl(url: URL): Lang {
	const [, first] = url.pathname.split('/');
	if (first in languages) return first as Lang;
	return defaultLang;
}

export function useTranslations(lang: Lang) {
	return function t(key: UiKey): string {
		return ui[lang][key] ?? ui[defaultLang][key];
	};
}

/** Prefix a path with Astro's configured base path and the locale prefix. */
export function localizedPath(lang: Lang, path = ''): string {
	const base = import.meta.env.BASE_URL;
	const prefix = lang === defaultLang ? '' : `${lang}/`;
	return `${base}${prefix}${path.replace(/^\//, '')}`;
}

/** Resolve a file from /public against the configured base path. */
export function assetPath(path: string): string {
	return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;
}

export function formatDate(iso: string, lang: Lang): string {
	return new Intl.DateTimeFormat(lang === 'de' ? 'de-DE' : 'en-US', {
		month: 'short',
		year: 'numeric',
	}).format(new Date(iso));
}
