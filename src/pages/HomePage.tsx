import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/system";

const CustomButton = styled(Button)({
  backgroundColor: "#1DB954", // Verde de Spotify
  color: "#FFFFFF", // Blanco para el texto
  "&:hover": {
    backgroundColor: "#1ED760", // Verde más claro al pasar el cursor
  },
});

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center pt-16 bg-spotifyBlack px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
      <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold text-spotifyGreen mb-4">
        Proyecto de Inteligencia Artificial
      </h1>
      <p className="text-base sm:text-lg md:text-xl text-white mb-8 text-center">
        Desarrollado por:
        <br /> De la Cruz Brayan
        <br /> Echeverría Victor
        <br /> Rosero Jorge
        <br /> Sandoval Alan
      </p>
      <p className="text-base sm:text-lg md:text-lg text-white mb-8 text-center">
        Llena el formulario para que la IA te diga qué tan popular es tu canción
        del 1 al 100.
      </p>
      <CustomButton variant="contained" onClick={() => navigate("/popularity")}>
        Ir al Formulario de Popularidad
      </CustomButton>
    </div>
  );
};

export default HomePage;
