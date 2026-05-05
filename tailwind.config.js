/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a',
        primary: '#8B5CF6',
        secondary: '#A78BFA',
        accent: '#7C3AED',
      },
    },
  },
  plugins: [],
}
