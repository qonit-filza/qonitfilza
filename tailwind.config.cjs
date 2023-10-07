/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      boxShadow: {
        retro: "5px 5px 0 0 rgba(0,0,0,0.75)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
