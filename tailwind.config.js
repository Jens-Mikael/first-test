/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        grey: "#393c41",
        darkGrey: "#171a20",
        semiWhite: "#f4f4f4",
      },
      fontFamily: {
        montserrat: ["var(--font-montserrat)"]
      }
    },
  },
  plugins: [],
};
