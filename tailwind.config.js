/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary colors
        'bright-blue': '#3a7bfd',
        'check-bg-blue': '#57ddff',
        'check-bg-purple': '#c058f3',
        // Neutral colors - Light theme
        'very-light-gray': '#fafafa',
        'very-light-grayish-blue': '#e4e5f1',
        'light-grayish-blue-light-mode': '#d2d3db',
        'dark-grayish-blue-light-mode': '#9394a5',
        'very-dark-grayish-blue-light-mode': '#484b6a',
        // Neutral colors - Dark theme
        'very-dark-blue': '	#161722',
        'very-dark-desaturated-blue': '#25273c',
        'light-grayish-blue-dark-mode': '#cacde8',
        'light-grayish-blue-dark-mode-hover': '#e4e5f1',
        'dark-grayish-blue': '#777a92',
        'very-dark-grayish-blue-1': '#4d5066',
        'very-dark-grayish-blue-2': '#393a4c',
      },
      fontSize:{
        58: '3.6rem',
        29: '1.8rem',
        18: '1.125rem',
        16: '1rem',
        15: '0.9375rem',
      },
      spacing: {
        1.6: '0.1rem',
        16: '1rem',
        38: '2.4rem',
        58: '3.6rem',
        77: '4.8rem',
        80: '5rem',
        102: '6.4rem',
        864: '54rem',
      },
      letterSpacing: {
        16: '1rem',
      },
      boxShadow: {
        'light-mode': '-1px 5px 20px 10px rgba(157, 162, 235, 0.3)',
        'dark-mode': '-1px 5px 20px 10px rgba(37, 39, 60, 0.2)'
      }
    },
  },
  plugins: [],
}
