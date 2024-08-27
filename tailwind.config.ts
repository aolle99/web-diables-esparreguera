import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/widgets/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#FFD8B1',
          DEFAULT: '#FF5C00',
          dark: '#FF3E00',
        },
        secondary: {
          light: '#A7F3D0',
          DEFAULT: '#3da448',
          dark: '#2E7B32',
        },
        accent: {
          light: '#FFD8B1',
          DEFAULT: '#F9FAFB',
          dark: '#1F2937',
        },
        background: {
            light: '#F9FAFB',
            DEFAULT: '#404040',
            dark: '#1F2937',
        },
      },
      fontFamily: {
        sans: ['Raleway', 'sans-serif'],
        serif: ['Montserrat', 'serif'],
      },
    },
  },
  plugins: [],
};
export default config;
