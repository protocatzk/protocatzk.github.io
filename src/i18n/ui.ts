export const languages = {
	de: 'Deutsch',
	en: 'English',
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'de';

export const ui = {
	de: {
		'meta.title': 'Proto — Software für Livestreams & Automatisierung',
		'meta.description':
			'Portfolio von Proto: TokTracker, Restreamer und Automatisierung für Livestreams. Gebaut mit Python, Docker und Linux.',

		'brand.subtitle': 'PYTHON · DOCKER · LINUX',
		'nav.label': 'Hauptnavigation',
		'nav.projects': 'Projekte',
		'nav.about': 'Über',
		'nav.contact': 'Kontakt',
		'lang.label': 'Sprache wechseln',
		'skip': 'Zum Inhalt springen',

		'hero.eyebrow': '// PORTFOLIO',
		'hero.title': 'Software für Livestreams, Daten und Automatisierung.',
		'hero.lead':
			'Ich bin Proto, Entwickler aus Deutschland. Ich baue Tools, die ich selbst brauche: Echtzeit-Tracking, Stream-Recording und Automatisierung. Meistens mit Python, Docker und Linux.',
		'hero.cta.projects': 'Projekte ansehen',
		'hero.cta.github': 'GitHub',
		'hero.pill.location': 'Deutschland',
		'hero.pill.hosting': 'Self-hosted',
		'hero.pill.stack': 'Python · Docker',

		'profile.label': 'Profil',
		'profile.role': 'Software & Infrastruktur',
		'profile.handle': 'HANDLE',
		'profile.base': 'BASIS',
		'profile.focus': 'FOKUS',
		'profile.focus.value': 'Livestream-Tools',
		'profile.status': 'STATUS',
		'profile.status.value': 'Public Repos',

		'projects.eyebrow': '01 / PROJEKTE',
		'projects.title': 'Was ich baue',
		'projects.hint':
			'Die drei Hauptprojekte zuerst, darunter kleinere Tools und Experimente.',
		'projects.main': 'Hauptprojekte',
		'projects.other': 'Weitere Projekte',
		'projects.updated': 'Aktualisiert',
		'projects.stars': 'Sterne',
		'projects.open': 'Repo ansehen',
		'projects.empty': 'Keine öffentlichen Projekte gefunden.',
		'projects.all': 'Alle Repositories',
		'projects.noDescription': 'Keine Beschreibung im Repository hinterlegt.',

		'about.eyebrow': '02 / ÜBER',
		'about.title': 'Wie ich arbeite.',
		'about.p1':
			'Ich baue am liebsten Systeme, die im Hintergrund laufen: Daten sammeln, verarbeiten und verfügbar machen. Wenn mir ein Tool fehlt, baue ich es selbst — und meistens bleibt es dann im Einsatz.',
		'about.p2':
			'Mein Stack ist bewusst klein: Python für Logik und Daten, Docker für reproduzierbare Deployments, Linux als Basis. Im Frontend reicht mir eine statische Seite ohne unnötigen Ballast.',
		'about.stack': 'STACK',

		'contact.eyebrow': '03 / KONTAKT',
		'contact.title': 'Fragen oder Ideen?',
		'contact.text':
			'Wenn du Fragen zu einem Projekt hast oder etwas Ähnliches brauchst, schreib mir auf GitHub. Dort liegen auch alle Repositories.',
		'contact.cta': 'Auf GitHub schreiben',

		'footer.links': 'Footer-Links',
		'footer.top': 'Nach oben',
	},
	en: {
		'meta.title': 'Proto — Software for livestreams & automation',
		'meta.description':
			'Portfolio of Proto: TokTracker, Restreamer and automation for livestreams. Built with Python, Docker and Linux.',

		'brand.subtitle': 'PYTHON · DOCKER · LINUX',
		'nav.label': 'Main navigation',
		'nav.projects': 'Projects',
		'nav.about': 'About',
		'nav.contact': 'Contact',
		'lang.label': 'Switch language',
		'skip': 'Skip to content',

		'hero.eyebrow': '// PORTFOLIO',
		'hero.title': 'Software for livestreams, data and automation.',
		'hero.lead':
			"I'm Proto, a developer based in Germany. I build tools I need myself: real-time tracking, stream recording and automation. Mostly with Python, Docker and Linux.",
		'hero.cta.projects': 'See projects',
		'hero.cta.github': 'GitHub',
		'hero.pill.location': 'Germany',
		'hero.pill.hosting': 'Self-hosted',
		'hero.pill.stack': 'Python · Docker',

		'profile.label': 'Profile',
		'profile.role': 'Software & infrastructure',
		'profile.handle': 'HANDLE',
		'profile.base': 'BASE',
		'profile.focus': 'FOCUS',
		'profile.focus.value': 'Livestream tools',
		'profile.status': 'STATUS',
		'profile.status.value': 'Public repos',

		'projects.eyebrow': '01 / PROJECTS',
		'projects.title': 'What I build',
		'projects.hint':
			'The three main projects first, followed by smaller tools and experiments.',
		'projects.main': 'Main projects',
		'projects.other': 'More projects',
		'projects.updated': 'Updated',
		'projects.stars': 'Stars',
		'projects.open': 'View repo',
		'projects.empty': 'No public projects found.',
		'projects.all': 'All repositories',
		'projects.noDescription': 'No description provided in the repository.',

		'about.eyebrow': '02 / ABOUT',
		'about.title': 'How I work.',
		'about.p1':
			'I like building systems that run in the background: collecting, processing and exposing data. When a tool is missing, I build it myself — and most of the time it stays in use.',
		'about.p2':
			'My stack is deliberately small: Python for logic and data, Docker for reproducible deployments, Linux as the base. On the frontend, a static site without extra weight is enough.',
		'about.stack': 'STACK',

		'contact.eyebrow': '03 / CONTACT',
		'contact.title': 'Questions or ideas?',
		'contact.text':
			'If you have questions about a project or need something similar, message me on GitHub. All repositories are there too.',
		'contact.cta': 'Message me on GitHub',

		'footer.links': 'Footer links',
		'footer.top': 'Back to top',
	},
} as const;

export type UiKey = keyof (typeof ui)[typeof defaultLang];
