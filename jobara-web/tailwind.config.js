/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#701ec7',
        'secondary': '#8d3ae4'
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}