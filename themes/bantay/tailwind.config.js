const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./layouts/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        lavender: {
          50: "#f2e6ff",
          100: "#e6ccff",
          200: "#cc99ff",
          300: "#b366ff",
          400: "#9933ff",
          500: "#8000ff",
          600: "#6600cc",
          700: "#4d0099",
          800: "#330066",
          900: "#1a0033",
        },
      },
      fontFamily: {
        sans: ['"Atkinson Hyperlegible"', ...defaultTheme.fontFamily.sans],
      },
      gridTemplateColumns: {
        full: "300px 1fr",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
