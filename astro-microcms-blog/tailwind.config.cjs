/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Sawarabi Gothic', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
