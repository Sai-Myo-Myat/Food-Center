/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/*.{js,jsx}',
    './src/**/*.{js,jsx,ts,tsx}',
    './index.html'
  ],
  theme: {
    extend: {
      'colors': {
        'secondary': '#D9D9D9'
      }
    },
  },
  plugins: [],
}
