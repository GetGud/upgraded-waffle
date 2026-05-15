/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          50:  '#f4f8f5',
          100: '#e6f0e9',
          200: '#cde0d3',
          300: '#a8c9b3',
          400: '#7aaa8c',
          500: '#568d6e',
          600: '#427158',
          700: '#375c48',
          800: '#2e4a3b',
          900: '#273d31',
        },
        blush: {
          50:  '#fdf6f4',
          100: '#faebe7',
          200: '#f5d6cf',
          300: '#edb8ac',
          400: '#e2917e',
          500: '#d4705a',
          600: '#be5440',
          700: '#9f4334',
          800: '#843931',
          900: '#6e342e',
        },
        cream: {
          50:  '#fefdfb',
          100: '#fdfaf5',
          200: '#faf4e8',
          300: '#f5ead4',
          400: '#ecd9b4',
          500: '#e0c48e',
          600: '#d0aa66',
          700: '#b88d48',
          800: '#97723c',
          900: '#7c5f34',
        },
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
