/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            fontFamily: {
                wubberly: ['Wubberly', 'sans-serif'],
                fields: ["Fields", 'sans-serif'],
                wotfard: ["Wotfard", 'sans']
            },
            colors: {
                'red': {
                    '50': '#fff1f1',
                    '100': '#ffdfdf',
                    '200': '#ffc4c4',
                    '300': '#ff9b9b',
                    '400': '#ff6161',
                    '500': '#ff2f2f',
                    '600': '#f21010',
                    '700': '#cc0909',
                    '800': '#a80c0c',
                    '900': '#710e0e',
                    '950': '#4c0303',
                },
                'navy': {
                    '50': '#f3f6fc',
                    '100': '#e5edf9',
                    '200': '#c6daf1',
                    '300': '#94bde5',
                    '400': '#5a9ad6',
                    '500': '#357dc2',
                    '600': '#2562a4',
                    '700': '#1f4f85',
                    '800': '#1d436f',
                    '900': '#1d3a5d',
                    '950': '#152842',
                },

            },

        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        // ...
    ],
}
