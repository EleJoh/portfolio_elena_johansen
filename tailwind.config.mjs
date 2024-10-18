/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        blueColor: "rgba(157, 196, 198, 1)",
        blueDarkColor: "rgba(61, 151, 156, 1)",
        beigeColor: "rgba(228, 228, 224, 1)",
      },
      fontSize: {
        h1: "14rem",
        h1_s: "4rem",
        h1_m: "6rem",

        menu: "1.2rem",
        menu_m: "1rem",
        menu_s: "0.7rem",

        h2: "3rem",
        h2_m: "2rem",
        h2_s: "1.3rem",

        h3: "2rem",
        h3_m: "1.5rem",
        h3_s: "1.3rem",

        h4: "1.7rem",
        h4_m: "1.4rem",
        h4_s: "1.2rem",

        p: "1.3rem",
        p_m: "1rem",
        p_s: "0.9rem",

        p_mini: "1.1rem",
        p_m_mini: "0.8rem",
        p_s_mini: "0.7rem",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms"), require("@tailwindcss/aspect-ratio"), require("@tailwindcss/container-queries")],
};
