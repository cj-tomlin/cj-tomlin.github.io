// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import staticAdapter from '@astrojs/static';

export default defineConfig({
	site: 'https://cj-tomlin.github.io',
	base: '/portfolio/',
	adapter: staticAdapter(),
	experimental: {
		svg: true,
	},
	vite: {
		plugins: [tailwindcss()],
	},
});
