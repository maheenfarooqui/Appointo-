/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E293B",    // Royal Indigo
        secondary: "#3B82F6",  // Electric Blue
        success: "#10B981",    // Emerald
        surface: "#FFFFFF",    // White
      },
    },
  },
  plugins: [],
}