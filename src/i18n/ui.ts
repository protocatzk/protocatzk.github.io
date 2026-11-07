export const languages = {
	de: 'Deutsch',
	en: 'English',
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'de';

export const ui = {
	de: {
		'meta.title': 'Proto — Entwickler & Builder',
		'meta.description':
			'Portfolio von Proto: Werkzeuge für Livestreams, Daten und Automatisierung. Python, Docker, Self-Hosting und Open Source.',

		'brand.subtitle': 'DEVELOPER · BUILDER',
		'nav.label': 'Hauptnavigation',
		'nav.projects': 'Projekte',
		'nav.about': 'Über',
		'nav.contact': 'Kontakt',
		'lang.label': 'Sprache wechseln',
		'skip': 'Zum Inhalt springen',

		'hero.eyebrow': '// PORTFOLIO',
		'hero.title': 'Ich baue Werkzeuge, die einfach laufen.',
		'hero.lead':
			'Entwickler aus Deutschland. Ich baue praktische Software für Livestreams, Daten und Automatisierung — von Echtzeit-Analytics bis zu Docker-Setups, die man einmal aufsetzt und vergisst.',
		'hero.cta.projects': 'Projekte ansehen',
		'hero.cta.github': 'GitHub',
		'hero.pill.location': 'Deutschland',
		'hero.pill.open': 'Open Source',
		'hero.pill.stack': 'Python · Docker',

		'profile.label': 'Profil',
		'profile.role': 'Developer / Builder',
		'profile.handle': 'HANDLE',
		'profile.base': 'BASIS',
		'profile.focus': 'FOKUS',
		'profile.focus.value': 'Realtime · Automation',
		'profile.status': 'STATUS',
		'profile.status.value': 'Open Source',

		'projects.eyebrow': '01 / PROJEKTE',
		'projects.title': 'Ausgewählte Projekte',
		'projects.hint':
			'Automatisch synchronisiert mit meinen öffentlichen GitHub-Repositories.',
		'projects.updated': 'Aktualisiert',
		'projects.stars': 'Sterne',
		'projects.open': 'Repo ansehen',
		'projects.empty': 'Keine öffentlichen Projekte gefunden.',
		'projects.all': 'Alle Repositories',
		'projects.moreHint':
			'Alle öffentlichen Repositories, Commits und Experimente.',
		'projects.github': 'GitHub öffnen',
		'projects.noDescription':
			'Kein Beschreibungstext im Repository hinterlegt.',

		'about.eyebrow': '02 / ÜBER',
		'about.title': 'Kurz und praktisch.',
		'about.p1':
			'Am liebsten arbeite ich an Systemen, die im Hintergrund laufen: Datenpipelines, kleine Dienste, Automatisierung und alles, was sich selbst hosten lässt.',
		'about.p2':
			'Mein Werkzeugkasten ist bewusst schmal: Python für Logik und Daten, Docker für reproduzierbare Deployments, Linux als Fundament. Im Frontend setze ich auf schlanke, statische Lösungen — wie diese Seite mit Astro.',
		'about.stack': 'STACK',

		'contact.eyebrow': '03 / KONTAKT',
		'contact.title': 'Lass uns reden.',
		'contact.text':
			'Fragen, Ideen oder ein Projekt? Der schnellste Weg zu mir führt über GitHub.',
		'contact.cta': 'Auf GitHub schreiben',

		'footer.built': 'Gebaut mit',
		'footer.static': 'Statisch · ohne Tracking',
		'footer.top': 'Nach oben',
	},
	en: {
		'meta.title': 'Proto — Developer & Builder',
		'meta.description':
			'Portfolio of Proto: tools for livestreams, data and automation. Python, Docker, self-hosting and open source.',

		'brand.subtitle': 'DEVELOPER · BUILDER',
		'nav.label': 'Main navigation',
		'nav.projects': 'Projects',
		'nav.about': 'About',
		'nav.contact': 'Contact',
		'lang.label': 'Switch language',
		'skip': 'Skip to content',

		'hero.eyebrow': '// PORTFOLIO',
		'hero.title': 'I build tools that just work.',
		'hero.lead':
			'Developer based in Germany. I build practical software for livestreams, data and automation — from real-time analytics to Docker setups you configure once and forget.',
		'hero.cta.projects': 'See projects',
		'hero.cta.github': 'GitHub',
		'hero.pill.location': 'Germany',
		'hero.pill.open': 'Open Source',
		'hero.pill.stack': 'Python · Docker',

		'profile.label': 'Profile',
		'profile.role': 'Developer / Builder',
		'profile.handle': 'HANDLE',
		'profile.base': 'BASE',
		'profile.focus': 'FOCUS',
		'profile.focus.value': 'Realtime · Automation',
		'profile.status': 'STATUS',
		'profile.status.value': 'Open Source',

		'projects.eyebrow': '01 / PROJECTS',
		'projects.title': 'Selected projects',
		'projects.hint': 'Synced automatically from my public GitHub repositories.',
		'projects.updated': 'Updated',
		'projects.stars': 'Stars',
		'projects.open': 'View repo',
		'projects.empty': 'No public projects found.',
		'projects.all': 'All repositories',
		'projects.moreHint': 'All public repositories, commits and experiments.',
		'projects.github': 'Open GitHub',
		'projects.noDescription': 'No description provided in the repository.',

		'about.eyebrow': '02 / ABOUT',
		'about.title': 'Short and practical.',
		'about.p1':
			'I like working on systems that run in the background: data pipelines, small services, automation and anything that can be self-hosted.',
		'about.p2':
			'My toolbox is deliberately small: Python for logic and data, Docker for reproducible deployments, Linux as the foundation. On the frontend I prefer lean, static solutions — like this site built with Astro.',
		'about.stack': 'STACK',

		'contact.eyebrow': '03 / CONTACT',
		'contact.title': "Let's talk.",
		'contact.text':
			'Questions, ideas or a project? The fastest way to reach me is GitHub.',
		'contact.cta': 'Message me on GitHub',

		'footer.built': 'Built with',
		'footer.static': 'Static · no tracking',
		'footer.top': 'Back to top',
	},
} as const;

export type UiKey = keyof (typeof ui)[typeof defaultLang];
