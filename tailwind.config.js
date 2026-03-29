/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Fondos
        bg: {
          base: '#0f1117',
          surface: '#1a1d27',
          elevated: '#22263a',
        },
        // Acento azul
        accent: {
          DEFAULT: '#0ca5eb',
          light: '#36bffa',
          dark: '#0084c9',
        },
        // Textos
        text: {
          primary: '#F7F5F5',
          secondary: '#9ca3af',
          muted: '#6b7280',
        },
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      keyframes: {
        scrollLTR: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        scrollRTL: {
          from: { transform: "translateX(-50%)" },
          to: { transform: "translateX(0)" },
        },
      },
      animation: {
        "scroll-ltr": "scrollLTR 22s linear infinite",
        "scroll-rtl": "scrollRTL 28s linear infinite",
      },
    },
  },

  plugins: [],
}