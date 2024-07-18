import { useEffect, useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import {
  Button,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  CircularProgress
} from "@mui/material";
import { styled } from "@mui/system";
import StepContent from "../helpers/StepContent";
import { submitForm } from "../store/actions/formActions";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../store";
import { setFormData } from "../store/reducers/formReducer"; 
import StepperComponent from "./Stepper"; 

const steps = [
  "Datos del Álbum",
  "Datos de la Canción",
  "Atributos de la Canción",
  "Características Adicionales",
];

const CustomButton = styled(Button)({
  backgroundColor: "#1DB954", 
  color: "#FFFFFF", 
  "&:hover": {
    backgroundColor: "#1ED760",
  },
  "&:disabled": {
    backgroundColor: "#535353", 
    color: "#9ca3af", 
  },
});

const Form = () => {
  const methods = useForm({
    defaultValues: {
      album_name: "",
      track_name: "",
      duration_ms: 0,
      explicit: 0,
      danceability: 0,
      energy: 0,
      key: 0,
      loudness: 0,
      mode: 0,
      speechiness: 0,
      acousticness: 0,
      instrumentalness: 0,
      liveness: 0,
      valence: 0,
      tempo: 0,
      time_signature: 0,
      track_genre: null,
    },
  });

  const dispatch = useDispatch<AppDispatch>();
  const formData = useSelector((state: RootState) => state.form.formData);
  const result = useSelector((state: RootState) => state.form.result);
  const loading = useSelector((state: RootState) => state.form.loading);
  const [activeStep, setActiveStep] = useState(0);
  const [open, setOpen] = useState(false); 

  useEffect(() => {
    if(result !== null) {
      setOpen(true)
    }
  }, [result])

  const handleNext = async (data: any) => {
    dispatch(setFormData({ ...formData, ...data }));

    if (activeStep < steps.length - 1) {
      setActiveStep(activeStep + 1);
      methods.reset({ ...formData, ...data });
    } else {
      const allData: any = { ...formData, ...data };
      allData.duration_ms = allData.duration_ms * 1000;
      console.log(allData);
      try {
        dispatch(submitForm(allData));
      } catch (error) {
        console.error("Error al enviar el formulario:", error);
      }
    }
  };

  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
      methods.reset(formData);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(handleNext)} className="space-y-4">
        <StepperComponent activeStep={activeStep} />{" "}
        <Box>
          <StepContent step={activeStep} />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
          <CustomButton disabled={activeStep === 0} onClick={handleBack}>
            Atrás
          </CustomButton>
          <CustomButton type="submit">
            {activeStep === steps.length - 1 ? "Enviar" : "Siguiente"}
          </CustomButton>
        </Box>
        {loading && (
          <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
            <CircularProgress />
          </Box>
        )}
      </form>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle className="font-bold">
          Resultado de Popularidad
        </DialogTitle>
        <DialogContent>
          <Typography variant="h6">
            La popularidad de tu canción es: {result}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            sx={{
              backgroundColor: "#1DB954",
              color: "#FFFFFF",
              "&:hover": { backgroundColor: "#0e5c2a" },
            }}
          >
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>
    </FormProvider>
  );
};

export default Form;
