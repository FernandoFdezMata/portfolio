/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        hull: {
          50:  '#f0f9ff',
          100: '#e0f2fe',
          200: '#b9e5fe',
          300: '#7cd3fd',
          400: '#36bffa',
          500: '#0ca5eb',
          600: '#0084c9',
          700: '#0169a3',
          800: '#065986',
          900: '#0b4a6f',
          950: '#072f4a',
        },
        panel: {
          bg: '#545454',
          surface: '#E4E4E5',
          border: '#E4E4E5',
          hover: '#152030',
          text1: '#F7F5F5',
          text2: '#EDEBEB',
        },
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
}