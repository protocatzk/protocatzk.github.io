import { excludedRepos, projectOverrides } from '../data/projects';
import type { Lang } from '../i18n/ui';
import { getRepos } from './github';

export type Project = {
	name: string;
	title: string;
	description: string;
	url: string;
	language: string | null;
	stars: number;
	updatedAt: string;
	tags: string[];
	featured: boolean;
};

export async function getProjects(lang: Lang): Promise<Project[]> {
	const repos = await getRepos();

	return repos
		.filter((repo) => !excludedRepos.has(repo.name))
		.map((repo) => {
			const override = projectOverrides[repo.name];

			return {
				name: repo.name,
				title: override?.title ?? repo.name,
				description: override?.description[lang] ?? repo.description ?? '',
				url: repo.url,
				language: repo.language,
				stars: repo.stars,
				updatedAt: repo.updatedAt,
				tags: override?.tags ?? (repo.language ? [repo.language] : []),
				order: override?.order ?? 999,
				featured: override?.featured ?? false,
			};
		})
		.sort(
			(a, b) =>
				a.order - b.order ||
				new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime(),
		)
		.map(({ order: _order, ...project }) => project);
}
