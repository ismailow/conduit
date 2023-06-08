/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        titillium: ['Titillium Web', 'sans-serif'],
      },
      colors: {
        conduit: {
          green: '#5c885c',
        },
      },
      spacing: {
        navItem: '0.425rem',
      },
    },
  },
  plugins: [],
};
