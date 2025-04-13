// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
	site: 'https://cj-tomlin.github.io',
	base: '/',
	experimental: {
		svg: true,
	},
	vite: {
		plugins: [tailwindcss()],
		resolve: {
			alias: {
				"@": new URL("./src", import.meta.url).pathname,
			},
		},
	},
});
