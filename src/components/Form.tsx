import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  TextField,
  Button,
  Stepper,
  Step,
  StepLabel,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

const options = Array.from(
  { length: 100 },
  (_, index) => `Option ${index + 1}`
);

const Form = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    register,
  } = useForm();
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { label: "Nombre del Álbum", name: "album_name" },
    { label: "Nombre de la Canción", name: "track_name" },
    { label: "Duración (ms)", name: "duration_ms" },
    { label: "Explícito", name: "explicit" },

    { label: "Bailabilidad", name: "danceability" },
    { label: "Energía", name: "energy" },
    { label: "Clave", name: "key" },
    { label: "Sonoridad", name: "loudness" },

    { label: "Modo", name: "mode" },
    { label: "Oralidad", name: "speechiness" },
    { label: "Acústica", name: "acousticness" },
    { label: "Instrumentalidad", name: "instrumentalness" },

    { label: "Vivacidad", name: "liveness" },
    { label: "Valencia", name: "valance" },
    { label: "Tempo", name: "tempo" },
    { label: "Firma de Tiempo", name: "time_signature" },
    { label: "Género de la Canción", name: "track_genre" },
  ];

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const onSubmit = (data: any) => {
    console.log(data);
    // Aquí enviarás los datos a tu API y manejarás la respuesta
  };

  return (
    <div className="w-full max-w-lg mx-auto">
      <Stepper activeStep={activeStep} className="mb-8">
        {Array.from({ length: 4 }).map((_, index) => (
          <Step key={index}>
            <StepLabel>Step {index + 1}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {steps
          .slice(activeStep * 4, (activeStep + 1) * 4)
          .map((step, index) => (
            <Controller
              key={index}
              name={step.name}
              control={control}
              defaultValue=""
              rules={{ required: `${step.label} es obligatorio` }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label={step.label}
                  variant="outlined"
                  error={!!errors[step.name]}
                  helperText={
                    errors[step.name]
                      ? (errors[step.name]?.message as string)
                      : ""
                  }
                  fullWidth
                  margin="normal"
                />
              )}
            />
          ))}

        <div className="flex justify-between mt-4">
          <Button
            disabled={activeStep === 0}
            onClick={handleBack}
            className="bg-gray-500 hover:bg-gray-700 text-white"
          >
            Atrás
          </Button>
          {activeStep === steps.length / 4 - 1 ? (
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className="bg-blue-500 hover:bg-blue-700"
            >
              Enviar
            </Button>
          ) : (
            <Button
              onClick={handleNext}
              variant="contained"
              color="primary"
              className="bg-blue-500 hover:bg-blue-700"
            >
              Siguiente
            </Button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Form;
