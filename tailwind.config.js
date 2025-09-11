/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",                // ✅ include root HTML for Vite
    "./src/**/*.{js,jsx,ts,tsx}",  // ✅ include all React components
  ],
  theme: {
    extend: {
      colors: {
        'shpe-blue': '#192858', // Navy / SHPE Blue
        'shpe-red': '#DC2626',  // SHPE Red
        'shpe-gold': '#F59E0B', // SHPE Gold
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
