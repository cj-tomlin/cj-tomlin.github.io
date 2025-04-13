// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
	site: 'https://cj-tomlin.github.io',
	base: '/portfolio/',
	experimental: {
		svg: true,
	},
	vite: {
		plugins: [tailwindcss()],
	},
});
