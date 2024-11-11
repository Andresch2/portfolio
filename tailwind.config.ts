import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          '50': '#f0f7ff',
          '100': '#e4f4ff',
          '200': '#b8e6ff',
          '300': '#79d3ff',
          '400': '#32bdfe',
          '500': '#07a6f0',
          '600': '#0084ce',
          '700': '#006aa6',
          '800': '#035989',
          '900': '#094a71',
          '950': '#0D1E32',
        },
        'light-blue': 'var(--light-blue)',
        'dark-blue': 'var(--dark-blue)',
        'medium-blue': 'var(--medium-blue)',
        'blue-primary': 'var(--blue-primary)',
        'projects-fund': 'var(--projects-fund)',
      },
    },
  },
  plugins: [],
};

export default config;