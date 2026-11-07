const languageColors: Record<string, string> = {
	Python: '#3572a5',
	TypeScript: '#3178c6',
	JavaScript: '#f1e05a',
	Astro: '#ff5a03',
	Shell: '#89e051',
	HTML: '#e34c26',
	CSS: '#563d7c',
	Dockerfile: '#384d54',
};

export function languageColor(language: string | null): string {
	return language ? (languageColors[language] ?? 'var(--muted)') : 'var(--muted)';
}
