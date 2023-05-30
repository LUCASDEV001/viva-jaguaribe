/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        lightgray: "#f9fbfc",
        yelloworange: "#FFC709",
      },
      height: {
        26.051: "6.513rem",
      },
    },
  },
  plugins: [],
};
