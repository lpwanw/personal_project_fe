/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      colors: {
        'gray-725': '#393c42',
        'gray-775': '#36393f',
        'gray-875': '#2f3136',
        'gray-925': '#292b2f',
        'gray-950': '#202225',
      },
      fontSize: {
        'xxs': '0.5rem',
      },
    },
  },
  plugins: [],
}

