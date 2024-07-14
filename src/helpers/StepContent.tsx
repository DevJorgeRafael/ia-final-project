import React, { useState, useEffect } from "react";
import { useFormContext, Controller } from "react-hook-form";
import { TextField, Autocomplete } from "@mui/material";
import genreOptions from "../helpers/genres";

const StepContent: React.FC<{ step: number }> = ({ step }) => {
  const {
    control,
    register,
    formState: { errors },
  } = useFormContext();
  const [selectedGenre, setSelectedGenre] = useState<any>(null);

  useEffect(() => {
    setSelectedGenre(null); // Resetea el valor cuando se cambia de step
  }, [step]);

  switch (step) {
    case 0:
      return (
        <>
          <TextField
            {...register("album_name", {
              required: "Nombre del Álbum es obligatorio",
            })}
            label="Nombre del Álbum"
            variant="outlined"
            error={!!errors.album_name}
            helperText={errors.album_name?.message as String}
            fullWidth
            margin="normal"
          />
          <TextField
            {...register("track_name", {
              required: "Nombre de la Canción es obligatorio",
            })}
            label="Nombre de la Canción"
            variant="outlined"
            error={!!errors.track_name}
            helperText={errors.track_name?.message as String}
            fullWidth
            margin="normal"
          />
          <TextField
            {...register("duration_ms", {
              required: "Duración (ms) es obligatorio",
              valueAsNumber: true,
            })}
            label="Duración (ms)"
            variant="outlined"
            type="number"
            error={!!errors.duration_ms}
            helperText={errors.duration_ms?.message as String}
            fullWidth
            margin="normal"
          />
          <TextField
            {...register("explicit", {
              required: "Explícito es obligatorio",
              valueAsNumber: true,
            })}
            label="Explícito"
            variant="outlined"
            type="number"
            error={!!errors.explicit}
            helperText={errors.explicit?.message as String}
            fullWidth
            margin="normal"
          />
        </>
      );
    case 1:
      return (
        <>
          <TextField
            {...register("danceability", {
              required: "Bailabilidad es obligatorio",
              valueAsNumber: true,
            })}
            label="Bailabilidad"
            variant="outlined"
            type="number"
            error={!!errors.danceability}
            helperText={errors.danceability?.message as String}
            fullWidth
            margin="normal"
          />
          <TextField
            {...register("energy", {
              required: "Energía es obligatorio",
              valueAsNumber: true,
            })}
            label="Energía"
            variant="outlined"
            type="number"
            error={!!errors.energy}
            helperText={errors.energy?.message as String}
            fullWidth
            margin="normal"
          />
          <TextField
            {...register("key", {
              required: "Key es obligatorio",
              valueAsNumber: true,
            })}
            label="Key"
            variant="outlined"
            type="number"
            error={!!errors.key}
            helperText={errors.key?.message as String}
            fullWidth
            margin="normal"
          />
          <TextField
            {...register("loudness", {
              required: "Volumen es obligatorio",
              valueAsNumber: true,
            })}
            label="Volumen"
            variant="outlined"
            type="number"
            error={!!errors.loudness}
            helperText={errors.loudness?.message as String}
            fullWidth
            margin="normal"
          />
        </>
      );
    case 2:
      return (
        <>
          <TextField
            {...register("mode", { 
              required: "Modo es obligatorio",
              valueAsNumber: true,
             })}
            label="Modo"
            variant="outlined"
            type="number"
            error={!!errors.mode}
            helperText={errors.mode?.message as String}
            fullWidth
            margin="normal"
          />
          <TextField
            {...register("speechiness", { 
              required: "Habla es obligatorio",
              valueAsNumber: true,
             })}
            label="Habla"
            variant="outlined"
            type="number"
            error={!!errors.speechiness}
            helperText={errors.speechiness?.message as String}
            fullWidth
            margin="normal"
          />
          <TextField
            {...register("acousticness", {
              required: "Acústica es obligatorio",
              valueAsNumber: true,
            })}
            label="Acústica"
            variant="outlined"
            type="number"
            error={!!errors.acousticness}
            helperText={errors.acousticness?.message as String}
            fullWidth
            margin="normal"
          />
          <TextField
            {...register("instrumentalness", {
              required: "Instrumental es obligatorio",
              valueAsNumber: true,
            })}
            label="Instrumental"
            variant="outlined"
            type="number"
            error={!!errors.instrumentalness}
            helperText={errors.instrumentalness?.message as String}
            fullWidth
            margin="normal"
          />
        </>
      );
    case 3:
      return (
        <>
          <TextField
            {...register("liveness", { 
              required: "Vivacidad es obligatorio",
              valueAsNumber: true,
             })}
            label="Vivacidad"
            variant="outlined"
            type="number"
            error={!!errors.liveness}
            helperText={errors.liveness?.message as String}
            fullWidth
            margin="normal"
          />
          <TextField
            {...register("valence", { 
              required: "Valencia es obligatorio",
              valueAsNumber: true,
            })}
            label="Valencia"
            variant="outlined"
            type="number"
            error={!!errors.valence}
            helperText={errors.valence?.message as String}
            fullWidth
            margin="normal"
          />
          <TextField
            {...register("tempo", { 
              required: "Tempo es obligatorio",
              valueAsNumber: true,
             })}
            label="Tempo"
            variant="outlined"
            type="number"
            error={!!errors.tempo}
            helperText={errors.tempo?.message as String}
            fullWidth
            margin="normal"
          />
          <TextField
            {...register("time_signature", {
              required: "Firma del Tiempo es obligatorio",
              valueAsNumber: true,
            })}
            label="Firma del Tiempo"
            variant="outlined"
            type="number"
            error={!!errors.time_signature}
            helperText={errors.time_signature?.message as String}
            fullWidth
            margin="normal"
          />
          <Controller
            name="track_genre"
            control={control}
            defaultValue={null}
            render={({ field }) => (
              <Autocomplete
                {...field}
                options={genreOptions}
                getOptionLabel={(option) => option.label}
                value={
                  selectedGenre ||
                  genreOptions.find((option) => option.value === field.value) ||
                  null
                }
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Género de la Canción"
                    variant="outlined"
                    error={!!errors.track_genre}
                    helperText={errors.track_genre?.message as String}
                    fullWidth
                    margin="normal"
                  />
                )}
                onChange={(event, value) => {
                  field.onChange(value ? value.value : null);
                  setSelectedGenre(value);
                }}
                isOptionEqualToValue={(option, value) =>
                  option.value === (value ? value.value : null)
                }
                autoHighlight
                clearOnEscape
              />
            )}
          />
        </>
      );
    default:
      return null;
  }
};

export default StepContent;
