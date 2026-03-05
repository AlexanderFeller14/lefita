import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        sand: "#f2ece4",
        pine: "#0f3f3d",
        moss: "#7e9f83",
        clay: "#2aa7a1",
        oat: "#faf8f3"
      },
      boxShadow: {
        soft: "0 15px 40px rgba(15,63,61,0.14)"
      },
      borderRadius: {
        xl2: "1.25rem"
      },
      keyframes: {
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(1rem)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        }
      },
      animation: {
        "slide-up": "slide-up 0.4s ease-out"
      }
    }
  },
  plugins: []
};

export default config;
