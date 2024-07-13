/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Roboto', 'sans-serif'],
      },
      colors: {
        darkGray: '#9ca3af', // Color gris oscuro personalizado
        lightGray: '#3d3d3d', // Color gris ligeramente más claro
      },
    },
  },
  plugins: [],
};
