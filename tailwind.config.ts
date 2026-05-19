import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        dbsBlue: "#07172f",
        dbsGold: "#d7b56d",
        dbsCream: "#f5efe3",
        dbsRed: "#8f1d2c"
      }
    }
  },
  plugins: []
};

export default config;
