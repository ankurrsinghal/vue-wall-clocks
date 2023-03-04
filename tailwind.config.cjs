/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#42b883',
        secondary: '#213547',
        light: 'rgba(60, 60, 60, .12)'
      }
    },
  },
  plugins: [],
}
