/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      boxShadow: {
        retro: "5px 5px 0 0 rgba(0,0,0,0.75)",
      },
      fontFamily: {
        "ar-one": ['"AR One Sans"', "sans"],
        "roboto-mono": ['"Roboto Mono"', "roboto"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".text-balance": {
          "text-wrap": "balance",
        },
      });
    }),
  ],
};
