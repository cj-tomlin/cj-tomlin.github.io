import tailwindcss from "@tailwindcss/vite";
// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://cj-tomlin.github.io',
	base: '/',
	integrations: [
		mdx(),
		sitemap(),
	],
	vite: {
		plugins: [
			tailwindcss(),
		],
	},
});
