import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  content: ['./components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Arial', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        ...defaultTheme.colors,
        red: 'red',
      },
    },
  },
  plugins: [],
};

export default config;
