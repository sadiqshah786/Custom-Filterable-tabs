/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      primary: '#f1c40f',
      secondary: '#3498db',
    },
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif']
    },
  },
  plugins: [],
}