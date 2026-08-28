import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./config/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: "#0a0a0a",
          graphite: "#111111",
          dark: "#161616",
          card: "#1a1a1a",
          border: "#2a2a2a",
          red: "#cc0000",
          "red-bright": "#ff1a1a",
          "red-dim": "#8b0000",
          gold: "#c9a84c",
          "gold-bright": "#e8c87a",
          "gold-dim": "#8a6830",
          white: "#f5f5f5",
          muted: "#888888",
          subtle: "#555555",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-bebas)", "var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      letterSpacing: {
        widest: "0.25em",
        "ultra-wide": "0.4em",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spin 20s linear infinite",
        "fade-up": "fadeUp 0.8s ease-out forwards",
        "glow-red": "glowRed 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        glowRed: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(204, 0, 0, 0.3)" },
          "50%": { boxShadow: "0 0 60px rgba(204, 0, 0, 0.6)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "noise": "url('/images/noise.png')",
      },
    },
  },
  plugins: [],
};

export default config;
