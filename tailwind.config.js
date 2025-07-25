/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      animation: {
        pulse: 'pulse 4s ease-in-out infinite',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Jika kamu ingin gunakan font Inter
      },
    },
  },
  plugins: [],
}
