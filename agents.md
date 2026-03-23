# Project Context: Personal Website v3

This document provides context for AI agents assisting with the development of `personal-website-v3`.

## 1. Project Overview
This is a personal website and blog built primarily to document running journeys and showcase photography. 
- **Running & Blog:** The blog focuses heavily on running (accessible via `src/pages/blog/index.astro`). It integrates with the Strava API to automatically pull and display recent runs.
- **Photography:** The index page (`src/pages/index.astro`) contains a photography showcase, which is currently a work in progress and will be built out further.

## 2. Tech Stack
- **Framework:** [Astro](https://astro.build/) (Static Site Generation & API routes)
- **UI Libraries:** [Solid.js](https://www.solidjs.com/) (For interactive components)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations:** Motion (`motion`)
- **Deployment:** Vercel (`@astrojs/vercel`)
- **Content:** Markdown / MDX via Contentful & local files
- **Icons:** Iconify (`astro-icon`, `@iconify-icon/solid`)

## 3. Key Directories & Files
- `src/pages/index.astro`: The homepage, currently hosting the beginnings of a photography showcase.
- `src/pages/blog/index.astro`: The main blog index page.
- `src/components/StravaRuns.tsx`: A Solid.js client-side component responsible for rendering Strava activity data.
- `src/pages/api/strava.ts`: An Astro server endpoint that fetches and caches data from the Strava API.
- `DESIGN.md`: Contains the comprehensive design system rules and aesthetic guidelines. **(Agents must read this when doing UI work).**

## 4. Design System: "Neo-Brutalist Editorial"
The site follows a strict "Analog Tech Enthusiast" aesthetic. When creating or modifying UI components, agents must adhere to the rules mapped out in `DESIGN.md`:
- **Structure:** Intentional asymmetry, broken grids, overlapping layers. Avoid generic templates.
- **Borders:** "No-line" rule for sectioning. Use surface background token transitions (`surface`, `surface-container`, `surface-container-lowest`) instead of 1px solid lines.
- **Shadows:** Use offset shadows for depth (e.g., 4px or 8px offset) rather than soft blurs. Offset shadows mimic physical "stickers" or cards.
- **Typography:** 
   - *Epilogue*: Headlines & display text (expressive).
   - *Manrope*: Body text (clean, readable).
   - *Space Grotesk*: Labels, metadata, code (technical).
- **Themes & Textures:** Use grainy textures (3-5% noise overlay). Interactive components use "Tape" or "Sticker" styling. Color moods map to content (e.g., Green for Fitness/Running, Pink for Photography, Purple for Tech).

## 5. Development Guidelines for Agents
1. **Component Choices:** Default to `.astro` components for static content. Only use `.tsx` (Solid.js) when client-side reactivity or state management is strictly necessary (like the `StravaRuns.tsx` component).
2. **Styling:** Use Tailwind CSS utility classes. Ensure you are referencing Tailwind CSS v4 syntax if applicable.
3. **API & Data:** Follow the existing pattern for external APIs—fetch data server-side via Astro API routes (`src/pages/api/...`) and pass it to or fetch it from client components, ensuring API keys remain secure and rate limits are respected (e.g., using Vercel KV or caching).
4. **Design Compliance:** Do not introduce standard Material or generic digital interface patterns (like soft drop shadows or perfect grids). Keep the UI quirky, tactile, and aligned with the Neo-Brutalist Editorial spec.
