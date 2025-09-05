// import adapter from '@sveltejs/adapter-vercel'
import adapter from "@sveltejs/adapter-static";
import path from 'path';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

import { mdsvex, escapeSvelte } from "mdsvex";
import { createHighlighter } from "shiki";
import remarkToc from "remark-toc";
import rehypeSlug from "rehype-slug";

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
  extensions: [".md"],
  layout: {
    _:  path.resolve("./src/mdsvex.svelte"),
  },
  highlight: {
    highlighter: async (code, lang = "text") => {
      const highlighter = await createHighlighter({ 
        themes: ["poimandres"],
        langs: [lang]
      });
      const html = escapeSvelte(highlighter.codeToHtml(code, { 
        lang,
        theme: "poimandres"
      }));
      return `{@html \`${html}\` }`;
    },
  },
  remarkPlugins: [[remarkToc, { tight: true }]],
  rehypePlugins: [rehypeSlug],
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: [".svelte", ".md"],
  preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],
  kit: {
    adapter: adapter(),
	paths: {
		base: process.env.NODE_ENV === 'production' ? '' : '',
	}
  },
};

export default config;
