/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#030303',
        primary: '#8B5CF6',
        secondary: '#C4B5FD',
        accent: '#6D28D9',
      },
    },
  },
  plugins: [],
}
