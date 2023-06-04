/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Sans': ['Source Sans Pro', 'sans-serif'],
      },
      container: {
        center: true,
        
      },
      screens: {
        '3xl': '1750px',
      },
    },
  },
  plugins: [],
}