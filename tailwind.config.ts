import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#f3ead0", // Cream/sand
        primary: "#4b4737",    // Rich dark brown
        muted: "#b1ab99",      // Warm muted gray
        accent: "#b0d6d0",     // Soft sage
        "accent-dark": "#7b9f99" // Pastel teal
      },
    },
  },
  plugins: [],
};
export default config;