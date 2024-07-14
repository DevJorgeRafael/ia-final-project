import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { Button, Box, Stepper, Step, StepLabel } from "@mui/material";
import StepContent from "../helpers/StepContent";

const steps = [
  "Datos del Álbum",
  "Datos de la Canción",
  "Atributos de la Canción",
  "Características Adicionales",
];

const Form = () => {
  const methods = useForm({
    defaultValues: {
      album_name: "",
      track_name: "",
      duration_ms: "",
      explicit: "",
      danceability: "",
      energy: "",
      key: "",
      loudness: "",
      mode: "",
      speechiness: "",
      acousticness: "",
      instrumentalness: "",
      liveness: "",
      valence: "",
      tempo: "",
      time_signature: "",
      track_genre: null,
    },
  });

  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState(methods.getValues());

  const handleNext = (data: any) => {
    setFormData((prevData) => ({ ...prevData, ...data }));

    if (activeStep < steps.length - 1) {
      setActiveStep(activeStep + 1);
      methods.reset({ ...formData, ...data });
    } else {
      console.log({ ...formData, ...data }); // Aquí enviarás los datos completos al backend
    }
  };

  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
      methods.reset(formData);
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(handleNext)} className="space-y-4">
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label, index) => (
            <Step key={label} completed={index < activeStep}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <Box>
          <StepContent step={activeStep} />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
          <Button disabled={activeStep === 0} onClick={handleBack}>
            Atrás
          </Button>
          <Button type="submit">
            {activeStep === steps.length - 1 ? "Enviar" : "Siguiente"}
          </Button>
        </Box>
      </form>
    </FormProvider>
  );
};

export default Form;
