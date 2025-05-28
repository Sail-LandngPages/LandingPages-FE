/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sora: ["Sora", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
        orbitron: ["Orbitron", "sans-serif"],
      },
      colors: {
        primary: "#133C8A",
        dark: "#050505",
      },
      boxShadow: {
        "custom-bottom": "0 35px 60px -15px rgba(0, 0, 0, 0.4)",
        "bottom": "0px 4px 10px #D97706"
      },
    },
  },
  plugins: [],
};
