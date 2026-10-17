/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./assets/js/**/*.js"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "1.25rem",
    },
    extend: {
      fontFamily: {
        sans: ["Roboto", "system-ui", "sans-serif"],
        mono: ["Roboto Mono", "ui-monospace", "monospace"],
      },
      colors: {
        // Colores del logo de Skapdal
        brand: {
          blue: "#3E5FFF",
          "blue-light": "#7C93FF",
          "blue-deep": "#2B44D9",
          cyan: "#00DEE8",
          "cyan-2": "#00BFE2",
        },
        // Neutros
        ink: {
          DEFAULT: "#16181D",
          bg: "#0F1115",
          card: "#1B1E25",
          line: "#2A2F38",
          cta: "#191C22",
          text: "#ECEEF2",
        },
      },
    },
  },
  plugins: [],
};
