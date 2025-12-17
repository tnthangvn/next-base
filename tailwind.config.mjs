/* eslint-disable @typescript-eslint/no-require-imports */
const defaultTheme = require('tailwindcss/defaultTheme')

const config = {
  content: ['./components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Arial', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        primary: {
          default: '#1E40AF',
        },
      },
    },
  },
  plugins: [],
}

export default config
