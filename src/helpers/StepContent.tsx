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
            })}
            label="Duración (ms)"
            variant="outlined"
            error={!!errors.duration_ms}
            helperText={errors.duration_ms?.message as String}
            fullWidth
            margin="normal"
          />
          <TextField
            {...register("explicit", { required: "Explícito es obligatorio" })}
            label="Explícito"
            variant="outlined"
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
            })}
            label="Bailabilidad"
            variant="outlined"
            error={!!errors.danceability}
            helperText={errors.danceability?.message as String}
            fullWidth
            margin="normal"
          />
          <TextField
            {...register("energy", { required: "Energía es obligatorio" })}
            label="Energía"
            variant="outlined"
            error={!!errors.energy}
            helperText={errors.energy?.message as String}
            fullWidth
            margin="normal"
          />
          <TextField
            {...register("key", { required: "Key es obligatorio" })}
            label="Key"
            variant="outlined"
            error={!!errors.key}
            helperText={errors.key?.message as String}
            fullWidth
            margin="normal"
          />
          <TextField
            {...register("loudness", { required: "Volumen es obligatorio" })}
            label="Volumen"
            variant="outlined"
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
            {...register("mode", { required: "Modo es obligatorio" })}
            label="Modo"
            variant="outlined"
            error={!!errors.mode}
            helperText={errors.mode?.message as String}
            fullWidth
            margin="normal"
          />
          <TextField
            {...register("speechiness", { required: "Habla es obligatorio" })}
            label="Habla"
            variant="outlined"
            error={!!errors.speechiness}
            helperText={errors.speechiness?.message as String}
            fullWidth
            margin="normal"
          />
          <TextField
            {...register("acousticness", {
              required: "Acústica es obligatorio",
            })}
            label="Acústica"
            variant="outlined"
            error={!!errors.acousticness}
            helperText={errors.acousticness?.message as String}
            fullWidth
            margin="normal"
          />
          <TextField
            {...register("instrumentalness", {
              required: "Instrumental es obligatorio",
            })}
            label="Instrumental"
            variant="outlined"
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
            {...register("liveness", { required: "Vivacidad es obligatorio" })}
            label="Vivacidad"
            variant="outlined"
            error={!!errors.liveness}
            helperText={errors.liveness?.message as String}
            fullWidth
            margin="normal"
          />
          <TextField
            {...register("valence", { required: "Valencia es obligatorio" })}
            label="Valencia"
            variant="outlined"
            error={!!errors.valence}
            helperText={errors.valence?.message as String}
            fullWidth
            margin="normal"
          />
          <TextField
            {...register("tempo", { required: "Tempo es obligatorio" })}
            label="Tempo"
            variant="outlined"
            error={!!errors.tempo}
            helperText={errors.tempo?.message as String}
            fullWidth
            margin="normal"
          />
          <TextField
            {...register("time_signature", {
              required: "Firma del Tiempo es obligatorio",
            })}
            label="Firma del Tiempo"
            variant="outlined"
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
