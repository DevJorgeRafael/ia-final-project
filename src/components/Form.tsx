import React from "react";
import {
  Box,
  Stepper,
  Step,
  StepButton,
  Button,
  Typography
} from "@mui/material";
import { useForm, FormProvider } from "react-hook-form";
import StepContent from "../helpers/StepContent";

const steps = [
  "Datos del Álbum",
  "Datos de la Canción",
  "Atributos de la Canción",
  "Características Adicionales",
];

const Form = () => {
  const methods = useForm();
  const { handleSubmit, trigger, reset } = methods;
  const [activeStep, setActiveStep] = React.useState(0);
  const [stepData, setStepData] = React.useState({});

  const handleNext = async () => {
    const valid = await trigger();
    if (valid) {
      const currentData = methods.getValues();
      setStepData((prev) => ({ ...prev, ...currentData }));
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      reset(); // Resetear los valores del formulario
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const onSubmit = (data: any) => {
    console.log(data);
    // Aquí enviarás los datos a tu API y manejarás la respuesta
  };

  return (
    <FormProvider {...methods}>
      <Box sx={{ width: "100%" }}>
        <Box
          sx={{ width: "100%", maxWidth: 600, margin: "0 auto", padding: 4 }}
        >
          <Stepper
            nonLinear
            activeStep={activeStep}
            alternativeLabel
            sx={{ width: "100%" }}
          >
            {steps.map((label, index) => (
              <Step key={label} completed={activeStep > index}>
                <StepButton
                  color="inherit"
                  onClick={() => setActiveStep(index)}
                >
                  <Typography variant="caption" noWrap>
                    {label}
                  </Typography>
                </StepButton>
              </Step>
            ))}
          </Stepper>
          <div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-4"
              style={{ width: "100%" }}
            >
              <StepContent step={activeStep} />
              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Button
                  color="inherit"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1 }}
                >
                  Atrás
                </Button>
                <Box sx={{ flex: "1 1 auto" }} />
                {activeStep === steps.length - 1 ? (
                  <Button type="submit" variant="contained">
                    Enviar
                  </Button>
                ) : (
                  <Button variant="contained" onClick={handleNext}>
                    Siguiente
                  </Button>
                )}
              </Box>
            </form>
          </div>
        </Box>
      </Box>
    </FormProvider>
  );
};

export default Form;
