import solidJs from "@astrojs/solid-js";
import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [solidJs(), tailwind(), sitemap()],
  prefetch: true,
  viewTransitions: true,
  site: "https://www.briancolclough.com",
});
