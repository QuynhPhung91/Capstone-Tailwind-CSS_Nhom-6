/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        jost: ["Jost", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
      },
      backdropBlur: {
        main: "#fff",
        warm: "fff0e5",
      },
    },
  },

  plugins: [require("flowbite/plugin")],
};
