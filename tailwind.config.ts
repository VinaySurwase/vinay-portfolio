import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "#0B0D10",
          secondary: "#11141A",
          glass: "rgba(255, 255, 255, 0.06)",
        },
        text: {
          primary: "#EDEEF0",
          secondary: "#A1A6B3",
        },
        accent: "#7C83FF",
        border: "rgba(255, 255, 255, 0.08)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      backdropBlur: {
        glass: "12px",
      },
    },
  },
  plugins: [],
};

export default config;
