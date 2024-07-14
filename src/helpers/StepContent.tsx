import React, { useState, useEffect } from "react";
import { useFormContext, Controller } from "react-hook-form";
import { TextField, Autocomplete, Tooltip, IconButton, MenuItem, InputLabel, FormHelperText, FormControl, Select } from "@mui/material";
import InfoIcon from '@mui/icons-material/Info';
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
            label={
              <>
                Duración (ms)
                <Tooltip title="Duración de la canción en milisegundos.">
                  <IconButton>
                    <InfoIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
              </>
            }
            variant="outlined"
            type="number"
            error={!!errors.duration_ms}
            helperText={errors.duration_ms?.message as String}
            fullWidth
            margin="normal"
          />
          <FormControl
            fullWidth
            variant="outlined"
            margin="normal"
            error={!!errors.explicit}
          >
            <InputLabel id="explicit-label">
              <>
                Explícito
                <Tooltip title="Indica si la canción tiene contenido explícito">
                  <IconButton>
                    <InfoIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
              </>
            </InputLabel>
            <Controller
              name="explicit"
              control={control}
              defaultValue=""
              rules={{ required: "Explícito es obligatorio" }}
              render={({ field }) => (
                <Select
                  {...field}
                  labelId="explicit-label"
                  label={
                    <>
                      Explícito
                      <Tooltip title="Indica si la canción tiene contenido explícito">
                        <IconButton>
                          <InfoIcon fontSize="small" />
                        </IconButton>
                      </Tooltip>
                    </>
                  }
                >
                  <MenuItem value={0}>No</MenuItem>
                  <MenuItem value={1}>Sí</MenuItem>
                </Select>
              )}
            />
            <FormHelperText>
              {errors.explicit?.message as String}
            </FormHelperText>
          </FormControl>
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
            label={
              <>
                Bailabilidad
                <Tooltip title="Describe qué tan adecuada es una pista para bailar, basada en elementos musicales. Valor de 0.0 a 1.0.">
                  <IconButton>
                    <InfoIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
              </>
            }
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
            label={
              <>
                Energía
                <Tooltip title="Una medida de 0.0 a 1.0 que representa la intensidad y actividad perceptual.">
                  <IconButton>
                    <InfoIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
              </>
            }
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
            label={
              <>
                Key
                <Tooltip title="La clave de la pista. Los enteros se asignan a tonos usando la notación Pitch Class.">
                  <IconButton>
                    <InfoIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
              </>
            }
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
            label={
              <>
                Volumen
                <Tooltip title="El volumen general de una pista en decibelios (dB).">
                  <IconButton>
                    <InfoIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
              </>
            }
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
            select
            label={
              <>
                Modo
                <Tooltip title="Indica la modalidad (mayor o menor) de la pista. Mayor se representa con 1 y menor con 0.">
                  <IconButton>
                    <InfoIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
              </>
            }
            variant="outlined"
            error={!!errors.mode}
            helperText={errors.mode?.message as String}
            fullWidth
            margin="normal"
          >
            <MenuItem value={1}>Mayor (1)</MenuItem>
            <MenuItem value={0}>Menor (0)</MenuItem>
          </TextField>

          <TextField
            {...register("speechiness", {
              required: "Habla es obligatorio",
              valueAsNumber: true,
            })}
            label={
              <>
                Habla
                <Tooltip title="Detecta la presencia de palabras habladas en una pista. Valores más altos indican una mayor presencia de palabras habladas.">
                  <IconButton>
                    <InfoIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
              </>
            }
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
            label={
              <>
                Acústica
                <Tooltip title="Una medida de confianza de 0.0 a 1.0 de si la pista es acústica.">
                  <IconButton>
                    <InfoIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
              </>
            }
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
            label={
              <>
                Instrumental
                <Tooltip title="Predice si una pista no contiene voces. Valores más altos indican una mayor probabilidad de que la pista sea instrumental.">
                  <IconButton>
                    <InfoIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
              </>
            }
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
            {...register("liveness", { required: "Vivacidad es obligatorio" })}
            label={
              <>
                Vivacidad
                <Tooltip title="Detecta la presencia de una audiencia en la grabación. Valores altos indican una alta probabilidad de que la pista sea en vivo.">
                  <IconButton>
                    <InfoIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
              </>
            }
            variant="outlined"
            type="number"
            error={!!errors.liveness}
            helperText={errors.liveness?.message as String}
            fullWidth
            margin="normal"
          />
          <TextField
            {...register("valence", { required: "Valencia es obligatorio" })}
            label={
              <>
                Valencia
                <Tooltip title="Medida de 0.0 a 1.0 que describe la positividad musical transmitida por una pista.">
                  <IconButton>
                    <InfoIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
              </>
            }
            variant="outlined"
            type="number"
            error={!!errors.valence}
            helperText={errors.valence?.message as String}
            fullWidth
            margin="normal"
          />
          <TextField
            {...register("tempo", { required: "Tempo es obligatorio" })}
            label={
              <>
                Tempo
                <Tooltip title="El tempo estimado de una pista en BPM (beats por minuto).">
                  <IconButton>
                    <InfoIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
              </>
            }
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
            label={
              <>
                Firma del Tiempo
                <Tooltip title="La firma de tiempo de la canción.">
                  <IconButton>
                    <InfoIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
              </>
            }
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
                getOptionLabel={(option) => option.label || ""}
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
                onChange={(event, value) =>
                  field.onChange(value ? value.value : null)
                }
                isOptionEqualToValue={(option, value) => option.value === value}
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
