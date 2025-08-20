/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#26A69A", /* green */
        secondary: "#64748B", /* semiDark for paragraph */
        light: "#FAFAFA", /* semiLight */
        dark: "#38424a" /* dark for headinh */
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
}

