/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBlue: '#001f3f',
        darkerBlue: '#00122a',
        darkBrown: '#4B2E16', // Define a custom dark brown color
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['dark'],
    },
  },
  plugins: [],
  darkMode: 'class',
};
