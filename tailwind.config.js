/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./main.js",
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        'layout': '120px 120px auto',
        'sm-layout': '120px auto',
      }
    },
  },
  plugins: [],
}

