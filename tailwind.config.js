/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'sky': {
          650: '#0575E6'
        },
        'main': {
          100: '#111111',
          200: '#FFFFFF',
          400: '#E1E1E1',
          500: '#7A7A7A',
          600: '#F9FAFE',
          700: '#E9EBFF',
          800: '#C4C4C4',
          900: '#4D64E1',
          1000: '#F9F9F9',
        },
      },
      screens: {
        'sm': '640px',


        'md': '768px',


        'lg': '1024px',


        'xl': '1280px',


        '2xl': '1536px',
      },
      fontFamily: {
        risque: ['var(--font-riqsue)']
      },
    },
  },
  plugins: [

  ],
}