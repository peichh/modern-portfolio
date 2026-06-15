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
        background: "#e8f3d0", // Light greenish-cream
        primary: "#007699",    // Deep teal/blue
        muted: "#5f9aa2",      // Muted slate blue/teal
        accent: "#befbff",     // Light icy blue/cyan
        "accent-dark": "#007699" // Reusing deep teal for consistency
      },
    },
  },
  plugins: [],
};
export default config;