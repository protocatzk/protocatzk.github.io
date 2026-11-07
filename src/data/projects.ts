import type { Lang } from '../i18n/ui';

type ProjectOverride = {
	title: string;
	order: number;
	featured?: boolean;
	description: Record<Lang, string>;
	tags: string[];
};

/**
 * Copy for the projects shown on the page. Repositories are still loaded from
 * the GitHub API at build time — this file only adds nicer, bilingual copy.
 * New repositories appear automatically in the "More projects" list.
 */
export const projectOverrides: Record<string, ProjectOverride> = {
	toktracker: {
		title: 'TokTracker',
		order: 1,
		featured: true,
		description: {
			de: 'Trackt TikTok-Livestreams in Echtzeit: Geschenke, Zuschauer und Einnahmen landen in der Datenbank, das Dashboard zeigt die Auswertungen und der Telegram-Bot liefert Reports.',
			en: 'Tracks TikTok livestreams in real time: gifts, viewers and revenue go into the database, the dashboard shows the numbers and a Telegram bot sends reports.',
		},
		tags: ['Python', 'FastAPI', 'Docker', 'MariaDB', 'Redis'],
	},
	restreamer: {
		title: 'Restreamer',
		order: 2,
		featured: true,
		description: {
			de: 'Nimmt einen TikTok-Stream an und verteilt ihn an mehrere Ziele. Läuft als Docker-Service mit Reconnect-Logik.',
			en: 'Takes one TikTok stream and forwards it to multiple destinations. Runs as a Docker service with reconnect handling.',
		},
		tags: ['Python', 'Docker', 'FFmpeg'],
	},
	'streamrecorder-n8n-vod-uploader': {
		title: 'Streamrecorder · n8n VOD Uploader',
		order: 3,
		featured: true,
		description: {
			de: 'Nimmt Streams auf und übergibt die VODs per n8n-Workflow an den nächsten Schritt — ohne manuelles Hochladen.',
			en: 'Records streams and hands the VODs to the next step via an n8n workflow — no manual uploading.',
		},
		tags: ['Python', 'n8n', 'Automation'],
	},
	'fractal.py': {
		title: 'fractal.py',
		order: 4,
		description: {
			de: 'Kleine Python-Spielwiese für Fraktale und prozedurale Grafik.',
			en: 'A small Python playground for fractals and procedural graphics.',
		},
		tags: ['Python', 'Generative Art'],
	},
	tidal: {
		title: 'tidal',
		order: 5,
		description: {
			de: 'TidalCycles-Sketches: generative Patterns und Live-Coding.',
			en: 'TidalCycles sketches: generative patterns and live coding.',
		},
		tags: ['TidalCycles', 'Live Coding'],
	},
	'ssh-toolchain': {
		title: 'ssh-toolchain',
		order: 6,
		description: {
			de: 'Meine SSH-Helfer: Keys, Hosts und Deploy-Skripte an einem Ort.',
			en: 'My SSH helpers: keys, hosts and deploy scripts in one place.',
		},
		tags: ['Shell', 'SSH', 'DevOps'],
	},
};

/** Profile/config repositories that should not appear as portfolio projects. */
export const excludedRepos = new Set([
	'protocatzk',
	'protocatzk.github.com',
	'protocatzk.github.io',
]);
