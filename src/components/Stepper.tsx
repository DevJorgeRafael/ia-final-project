import React from "react";
import { Stepper, Step, StepLabel } from "@mui/material";
import { styled } from "@mui/system";

const CustomStepper = styled(Stepper)({
  "& .MuiStepIcon-root.Mui-active": {
    color: "#1DB954", // Color verde de Spotify para el icono activo
  },
  "& .MuiStepIcon-root.Mui-completed": {
    color: "#1DB954", // Color verde de Spotify para el icono completado
  },
  "& .MuiStepLabel-label.Mui-active": {
    color: "#1DB954", // Color verde de Spotify para el texto activo
  },
  "& .MuiStepLabel-label.Mui-completed": {
    color: "#1DB954", // Color verde de Spotify para el texto completado
  },
  "& .MuiStepLabel-label": {
    color: "#9ca3af", // Color gris oscuro para el texto inactivo
  },
});

const steps = [
  "Datos del Álbum",
  "Datos de la Canción",
  "Atributos de la Canción",
  "Características Adicionales",
];

interface StepperComponentProps {
  activeStep: number;
}

const StepperComponent: React.FC<StepperComponentProps> = ({ activeStep }) => (
  <CustomStepper activeStep={activeStep} alternativeLabel>
    {steps.map((label, index) => (
      <Step key={label} completed={index < activeStep}>
        <StepLabel>{label}</StepLabel>
      </Step>
    ))}
  </CustomStepper>
);

export default StepperComponent;
