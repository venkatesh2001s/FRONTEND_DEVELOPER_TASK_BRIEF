import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#17251e",
        forest: "#234b38",
        moss: "#58755b",
        cream: "#f4f0e7",
        saffron: "#d9a441",
        clay: "#b96b45"
      },
      fontFamily: {
        display: ["var(--font-display)"],
        sans: ["var(--font-sans)"]
      },
      boxShadow: {
        soft: "0 20px 70px rgba(23,37,30,.10)"
      }
    }
  },
  plugins: []
};
export default config;
