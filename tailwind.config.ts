import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      white: "#FFF",
      "red": "hsl(14, 86%, 42%)",
      "green": "hsl(159, 69%, 38%)",
      "rose50": "hsl(20, 50%, 98%)",
      "rose100": "hsl(13, 31%, 94%)",
      "rose300": "hsl(14, 25%, 72%)",
      "rose400": "hsl(7, 20%, 60%)",
      "rose500": "hsl(12, 20%, 44%)",
      "rose900": "hsl(14, 65%, 9%)"
    },
  },
  plugins: [],
};
export default config;
