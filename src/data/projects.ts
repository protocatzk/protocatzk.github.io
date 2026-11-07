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
 * New repositories appear automatically without an entry here.
 */
export const projectOverrides: Record<string, ProjectOverride> = {
	toktracker: {
		title: 'TokTracker',
		order: 1,
		featured: true,
		description: {
			de: 'Dockerisierte TikTok-Live-Analytics-Plattform: Echtzeit-Geschenk-Tracking, Einnahmen in USD und EUR, Web-Dashboard und Telegram-Bot.',
			en: 'Dockerized TikTok Live analytics platform: real-time gift tracking, USD/EUR revenue, web dashboard and Telegram bot.',
		},
		tags: ['Python', 'FastAPI', 'Docker', 'MariaDB', 'Redis'],
	},
	restreamer: {
		title: 'Restreamer',
		order: 2,
		description: {
			de: 'Dockerisierter Restream-Service für TikTok-Livestreams — ein Stream rein, mehrere Ziele raus.',
			en: 'Dockerized restream service for TikTok livestreams — one stream in, multiple destinations out.',
		},
		tags: ['Python', 'Docker', 'FFmpeg'],
	},
	'streamrecorder-n8n-vod-uploader': {
		title: 'Streamrecorder · n8n VOD Uploader',
		order: 3,
		description: {
			de: 'Nimmt Streams auf und lädt VODs automatisch per n8n-Workflow hoch.',
			en: 'Records streams and uploads VODs automatically via an n8n workflow.',
		},
		tags: ['Python', 'n8n', 'Automation'],
	},
	'fractal.py': {
		title: 'fractal.py',
		order: 4,
		description: {
			de: 'Experimente mit Fraktalen und prozeduraler Grafik in Python.',
			en: 'Experiments with fractals and procedural graphics in Python.',
		},
		tags: ['Python', 'Generative Art'],
	},
	tidal: {
		title: 'tidal',
		order: 5,
		description: {
			de: 'TidalCycles-Experimente: generative Patterns und Live-Coding-Musik.',
			en: 'TidalCycles experiments: generative patterns and live-coded music.',
		},
		tags: ['TidalCycles', 'Live Coding', 'Music'],
	},
	'ssh-toolchain': {
		title: 'ssh-toolchain',
		order: 6,
		description: {
			de: 'Persönliche SSH-Toolchain: Keys, Hosts und Deploy-Skripte sauber verwaltet.',
			en: 'Personal SSH toolchain: keys, hosts and deploy scripts kept tidy.',
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
