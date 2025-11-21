
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        'smart-green': '#B6FF40',
        'smart-blue': '#0057A3',
        primary: {
          50: '#f0f7ff',
          100: '#e0f0ff',
          200: '#b9dfff',
          300: '#7cc5ff',
          400: '#36a7ff',
          500: '#0089ff',
          600: '#0057A3',
          700: '#005a9e',
          800: '#004d82',
          900: '#00416b',
        },
        accent: {
          50: '#f7ffe6',
          100: '#eeffcc',
          200: '#deff99',
          300: '#ceff66',
          400: '#beff33',
          500: '#B6FF40',
          600: '#9ee600',
          700: '#7ab300',
          800: '#568000',
          900: '#324d00',
        }
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
