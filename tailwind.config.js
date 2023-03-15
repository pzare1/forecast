/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts,tsx}'],
  theme: {
    extend: {
      colors:{
        "bg-dark":"#22262B",
        "bg-light":"#171A1D",
        "box":"#24282D",
        "sub":"#383E46"
      }
    },
  },
  plugins: [],
}
