/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
 // tailwind.config.js
theme: {
  extend: {
    colors: {
      primary: "#00796B",    // Deep Teal
      accent: "#80CBC4",     // Mint Green
      bgLight: "#F5F5F5",    // Light Grey
      surface: "#FFFFFF",    // Pure White
    },
  },
},
  plugins: [],
}