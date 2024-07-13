import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center pt-16 bg-gray-400">
      <h1 className="text-4xl font-bold text-white mb-4">
        Proyecto de Inteligencia Artificial
      </h1>
      <p className="text-lg mb-8">
        Desarrollado por:
        <br /> De la Cruz Brayan
        <br /> Echeverría Victor
        <br /> Rosero Jorge
        <br /> Sandoval Alan
      </p>
      <p className="text-lg mb-8">
        Llena el formulario para que la IA te diga qué tan popular es tu canción
        del 1 al 100.
      </p>
      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate("/popularity")}
        className="bg-blue-500 hover:bg-blue-700"
      >
        Ir al Formulario de Popularidad
      </Button>
    </div>
  );
};

export default HomePage;
