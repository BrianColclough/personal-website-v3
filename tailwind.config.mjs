/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        wubberly: ["Wubberly", "sans-serif"],
        fields: ["Fields", "sans-serif"],
        wotfard: ["Wotfard", "sans"],
        geistMono: ["Geist Mono", "sans"],
      },
      colors: {
        red: {
          50: "#fff1f1",
          100: "#ffdfdf",
          200: "#ffc4c4",
          300: "#ff9b9b",
          400: "#ff6161",
          500: "#ff2f2f",
          600: "#f21010",
          700: "#cc0909",
          800: "#a80c0c",
          900: "#710e0e",
          950: "#4c0303",
        },
        navy: {
          50: "#f3f6fc",
          100: "#e5edf9",
          200: "#c6daf1",
          300: "#94bde5",
          400: "#5a9ad6",
          500: "#357dc2",
          600: "#2562a4",
          700: "#1f4f85",
          800: "#1d436f",
          900: "#1d3a5d",
          950: "#152842",
        },
        orange: {
          50: "color-mix(in srgb, var(--color-orange-base) 5%, white)",
          100: "color-mix(in srgb, var(--color-orange-base) 10%, white)",
          200: "color-mix(in srgb, var(--color-orange-base) 30%, white)",
          300: "color-mix(in srgb, var(--color-orange-base) 50%, white)",
          400: "color-mix(in srgb, var(--color-orange-base) 70%, white)",
          500: "var(--color-orange-base)",
          600: "color-mix(in srgb, var(--color-orange-base), black 10%)",
          700: "color-mix(in srgb, var(--color-orange-base), black 30%)",
          800: "color-mix(in srgb, var(--color-orange-base), black 50%)",
          900: "color-mix(in srgb, var(--color-orange-base), black 70%)",
        },
      },
      animation: {
        wiggle: "wiggle 500ms ease-out",
      },
      keyframes: {
        wiggle: {
          "0%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(2deg)" },
          "50%": { transform: "rotate(0deg)" },
          "75%": { transform: "rotate(-2deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
