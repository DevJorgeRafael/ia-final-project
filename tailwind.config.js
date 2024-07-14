/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Roboto', 'sans-serif'],
      },
      colors: {
        spotifyBlack: '#191414', // Fondo negro similar al de Spotify
        spotifyGreen: '#1DB954', // Verde característico de Spotify
        spotifyGray: '#121212', // Gris oscuro usado en algunas áreas de Spotify
        spotifyLightGray: '#535353', // Gris claro usado en algunos textos y bordes
      },
    },
  },
  plugins: [],
};
