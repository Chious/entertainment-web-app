import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        red: '#FC4747',
        black: '#10141E',
        blue: '#5A698F',
        'dark-blue': '#161D2F',
        white: '#FFFFFF',
      },
    },
  },
  plugins: [],
};
export default config;
