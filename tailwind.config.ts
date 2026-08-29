import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--color-bg)",
        surface: "var(--color-surface)",
        text: "var(--color-text)",
        muted: "var(--color-muted)",
        primary: "var(--color-primary)",
        "primary-hover": "var(--color-primary-hover)",
        border: "var(--color-border)",
        whatsapp: "#25D366",
        "brand-navy": "#083A7A",
        "brand-yellow": "#F3A516",
        "brand-lightblue": "#039DCA",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "var(--font-primary)", "system-ui", "sans-serif"],
        heading: ["var(--font-poppins)", "var(--font-heading)", "sans-serif"],
        poppins: ["var(--font-poppins)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
