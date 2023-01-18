/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '100': '30rem',
        "110": "40rem"
      },
      screens: {
        sm: '600px',
      },
      boxShadow: {
        'sm': '0 0 2px 0 rgba(0, 0, 0, 0.2)',
        'md': '0 0 4px 1px rgba(0, 0, 0, 0.2)',
        'lg': '0 0 6px 2px rgba(0, 0, 0, 0.2)',
        'xl': '0 0 10px 4px rgba(0, 0, 0, 0.2)',
        '2xl': '0 0 15px 6px rgba(0, 0, 0, 0.25)'
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'black': '#000000',
        'purple': '#3f3cbb',
        'midnight': '#121063',
        'metal': '#565584',
        'tahiti': '#3ab7bf',
        'silver': '#ecebff',
        'bubble-gum': '#ff77e9',
        'bermuda': '#78dcca',
      },
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
        '14': 'repeat(14, minmax(0, 1fr))',
        '15': 'repeat(15, minmax(0, 1fr))',
        '16': 'repeat(16, minmax(0, 1fr))',
      },
      gridColumn: {
        'span-13': 'span 13 / span 13',
        'span-14': 'span 14 / span 14',
        'span-15': 'span 15 / span 15',
        'span-16': 'span 16 / span 16',
      }
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false
  }
}