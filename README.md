# proto.heliac.dev

Statisches, zweisprachiges Portfolio für **Proto** — gebaut mit Astro, inspiriert vom dunklen, monochromen Interface von TokTracker.

**Live:** https://proto.heliac.dev/

- **Deutsch** unter `/`, **Englisch** unter `/en/`
- Drei Hauptprojekte groß, weitere Repositories kompakt darunter
- Projekte werden beim Build automatisch aus der öffentlichen GitHub-API geladen
- Kein JavaScript, keine externen Fonts, kein Tracking
- Budget: **unter 1 MB** — der Build schlägt fehl, wenn es größer wird

## Entwicklung

```bash
yarn install
yarn dev
```

Der Dev-Server läuft standardmäßig auf `http://localhost:4321`.

## Build

```bash
yarn build
```

Der Build landet in `dist/` und wird anschließend automatisch auf Größe geprüft:

```bash
yarn size   # prüft einen vorhandenen dist/-Ordner
```

## Inhalte anpassen

| Datei | Zweck |
| :--- | :--- |
| `src/i18n/ui.ts` | Alle Texte auf Deutsch und Englisch |
| `src/data/site.ts` | Name, Handle, Links, Avatar, Stack |
| `src/data/projects.ts` | Titel, Beschreibungen, Tags und `featured`-Flag pro Repository |
| `src/data/repos.fallback.json` | Lokaler Snapshot, falls die GitHub-API beim Build nicht erreichbar ist |
| `src/styles/global.css` | Farben, Typografie und Layout |

Die drei Hauptprojekte werden über `featured: true` in `projectOverrides` gesteuert. Alle anderen öffentlichen Repositories erscheinen automatisch in der kompakten Liste darunter. Forks sowie Profil- und Portfolio-Repositories werden ausgeblendet.

### GitHub-API

Beim Build wird `https://api.github.com/users/protocatzk/repos` abgefragt. Ohne Token gilt das Limit von 60 Anfragen pro Stunde. Für CI oder häufigere Builds kann ein Token gesetzt werden:

```bash
GITHUB_TOKEN=ghp_... yarn build
```

Schlägt die Anfrage fehl, wird automatisch `src/data/repos.fallback.json` verwendet.

## Deployment

Der Workflow `.github/workflows/deploy.yml` baut die Seite bei jedem Push auf `stream` und veröffentlicht sie über GitHub Pages.

1. Im Repository unter **Settings → Pages** als Source **GitHub Actions** wählen.
2. Push auf `stream`.

`SITE_URL` ist im Workflow fest auf `https://proto.heliac.dev` gesetzt. `BASE_PATH` kommt weiterhin von `actions/configure-pages`.

### Custom Domain

Die Seite läuft unter `proto.heliac.dev`. Dafür sind zwei Dinge nötig:

1. DNS-CNAME: `proto` → `protocatzk.github.io`
2. In **Settings → Pages**: Custom Domain `proto.heliac.dev` und **Enforce HTTPS** aktivieren

Die Datei `public/CNAME` enthält die Domain, damit sie im Build-Artefakt erhalten bleibt.

## Struktur

```text
src/
├── components/        Header, Footer, ProjectCard, MiniProject, PortfolioPage
├── data/              Site-Konfiguration, Projekt-Copy, Repo-Snapshot
├── i18n/              DE/EN-Texte und Routing-Helfer
├── layouts/           HTML-Grundgerüst inkl. Meta/SEO
├── lib/               GitHub-API, Projekt-Aufbereitung, Sprachfarben
├── pages/             /, /en/ und 404
└── styles/            globales CSS
```

## Design

Das Layout übernimmt die visuelle Sprache von TokTracker: GitHub-Dark-Palette (`#0d1117`), eckige Rahmen, dünne Trennlinien, Monospace-Labels in Großbuchstaben und weiße Akzente. Schriften werden aus dem System geladen, Bilder liegen lokal im `public/`-Ordner.
