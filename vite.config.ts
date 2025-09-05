import { defineConfig } from 'vite';
// @ts-ignore - Dynamic import to avoid TypeScript module resolution issues
const { sveltekit } = await import('@sveltejs/kit/vite');

export default defineConfig({
	plugins: [sveltekit()]
});