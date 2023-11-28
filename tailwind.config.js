/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        '500':'500px',
        '760': '760px',
        '1000':'1000px',
        '1100':'1100px',
        '1200': '1200px',
        '1600': '1600px',
        '1300': '1300px',
      }
    },
  },
  plugins: [],
};
