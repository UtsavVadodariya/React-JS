/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'smooth-counterclockwise': 'rotate-smooth 12s linear infinite',
      },
      keyframes: {
        'rotate-smooth': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }, // Counterclockwise rotation
        },
      },
    },
  },
  plugins: [],
}

