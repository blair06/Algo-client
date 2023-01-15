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
        "tier-unrated": "#000000",
        "tier-bronze": "#ad5600",
        "tier-silver": "#435f7a",
        "tier-gold": "#ec9a01",
        "tier-platinum": "#27e2a5",
        "tier-diamond": "#02b4fc",
        "tier-ruby": "#ff1962",
      },
    },
    screens: {
      mobile: "360px",
      tablet: "768px",
    },
  },
  plugins: [],
};
