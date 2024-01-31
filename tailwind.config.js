/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "purple-base": "#C905E6",
        "turquoise-base-light": "#e9fffc",
        "turquoise-base": "#24FADF",
        "turquoise-base-dark": "#077B6C",
        "turquoise-base-darker": "#064B43",
        "grey-base": "#E6E6E6",
        "grey-dark-base": "#808080",
        "grey-darkest-base": "#404040",
        "yellow-base": "#FADF24"
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
