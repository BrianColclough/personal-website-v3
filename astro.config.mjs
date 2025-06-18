import mdx from "@astrojs/mdx";
import solidJs from "@astrojs/solid-js";
import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [solidJs(), tailwind(), sitemap(), icon(), mdx()],
  prefetch: true,
  viewTransitions: true,
  site: "https://www.briancolclough.com",
});