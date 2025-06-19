import mdx from "@astrojs/mdx";
import solidJs from "@astrojs/solid-js";
import { defineConfig } from 'astro/config';


import sitemap from "@astrojs/sitemap";

import icon from "astro-icon";

import tailwindcss from "@tailwindcss/vite";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";

// https://astro.build/config
export default defineConfig({
  integrations: [solidJs(), sitemap(), icon(), mdx()],
  prefetch: true,
  clientRouter: true,
  site: "https://www.briancolclough.com",

  markdown: {
    shikiConfig: {
      themes: {
        light: 'catppuccin-latte',
        dark: 'catppuccin-mocha',
      },
      wrap: true,
    },
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['heading-link'],
          },
          content: {
            type: 'text',
            value: '#',
          },
        },
      ],
    ],
  },

  vite: {
    plugins: [tailwindcss()],
  },
});