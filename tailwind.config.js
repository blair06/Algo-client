/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#ffffff",
        onBackground: "#000000",
        primary: "#4e7e64",
        onPrimary: "#ffffff",
        error: "#b00020",
      },
    },
  },
  plugins: [],
};
