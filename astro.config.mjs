// @ts-check
import { defineConfig } from 'astro/config';

const site = process.env.SITE_URL || 'https://proto.heliac.dev';
const base = process.env.BASE_PATH || '/';

// https://astro.build/config
export default defineConfig({
	site,
	base,
	trailingSlash: 'always',
	compressHTML: true,
	build: {
		inlineStylesheets: 'auto',
	},
});
