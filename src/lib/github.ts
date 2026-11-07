import fallback from '../data/repos.fallback.json';

export type Repo = {
	name: string;
	description: string | null;
	language: string | null;
	stars: number;
	url: string;
	updatedAt: string;
};

type GitHubRepo = {
	name: string;
	description: string | null;
	language: string | null;
	stargazers_count: number;
	html_url: string;
	updated_at: string;
	fork: boolean;
	archived: boolean;
};

const USER = 'protocatzk';
const API = `https://api.github.com/users/${USER}/repos?per_page=100&sort=updated&type=owner`;

let cache: Promise<Repo[]> | null = null;

async function fetchRepos(): Promise<Repo[]> {
	const headers: Record<string, string> = {
		Accept: 'application/vnd.github+json',
		'User-Agent': 'protocatzk-portfolio',
		'X-GitHub-Api-Version': '2022-11-28',
	};

	if (process.env.GITHUB_TOKEN) {
		headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
	}

	try {
		const response = await fetch(API, { headers });

		if (!response.ok) {
			throw new Error(`GitHub API responded with ${response.status}`);
		}

		const data = (await response.json()) as GitHubRepo[];

		return data
			.filter((repo) => !repo.fork)
			.map((repo) => ({
				name: repo.name,
				description: repo.description,
				language: repo.language,
				stars: repo.stargazers_count,
				url: repo.html_url,
				updatedAt: repo.updated_at,
			}));
	} catch (error) {
		console.warn(
			`[portfolio] Could not load repos from GitHub (${(error as Error).message}). Using local snapshot.`,
		);
		return fallback as Repo[];
	}
}

export function getRepos(): Promise<Repo[]> {
	cache ??= fetchRepos();
	return cache;
}
