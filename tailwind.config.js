/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      margin: {
        'custom': 'calc(1.5rem / 2)',
      },
      padding: {
        'custom': 'calc(1.5rem / 2)',
      },
    },
  },
  plugins: [],
}