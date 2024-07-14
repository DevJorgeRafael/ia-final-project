import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import { TextField } from "@mui/material";

const StepContent: React.FC<{ step: number }> = ({ step }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  switch (step) {
    case 0:
      return (
        <>
          <Controller
            name="album_name"
            control={control}
            defaultValue=""
            rules={{ required: "Nombre del Álbum es obligatorio" }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Nombre del Álbum"
                variant="outlined"
                error={!!errors.album_name}
                helperText={
                  errors.album_name ? (errors.album_name.message as string) : ""
                }
                fullWidth
                margin="normal"
              />
            )}
          />
          <Controller
            name="track_name"
            control={control}
            defaultValue=""
            rules={{ required: "Nombre de la Canción es obligatorio" }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Nombre de la Canción"
                variant="outlined"
                error={!!errors.track_name}
                helperText={
                  errors.track_name ? (errors.track_name.message as string) : ""
                }
                fullWidth
                margin="normal"
              />
            )}
          />
          <Controller
            name="duration_ms"
            control={control}
            defaultValue=""
            rules={{ required: "Duración (ms) es obligatorio" }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Duración (ms)"
                variant="outlined"
                error={!!errors.duration_ms}
                helperText={
                  errors.duration_ms
                    ? (errors.duration_ms.message as string)
                    : ""
                }
                fullWidth
                margin="normal"
              />
            )}
          />
          <Controller
            name="explicit"
            control={control}
            defaultValue=""
            rules={{ required: "Explícito es obligatorio" }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Explícito"
                variant="outlined"
                error={!!errors.explicit}
                helperText={
                  errors.explicit ? (errors.explicit.message as string) : ""
                }
                fullWidth
                margin="normal"
              />
            )}
          />
        </>
      );
    case 1:
      return (
        <>
          <Controller
            name="danceability"
            control={control}
            defaultValue=""
            rules={{ required: "Bailabilidad es obligatorio" }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Bailabilidad"
                variant="outlined"
                error={!!errors.danceability}
                helperText={
                  errors.danceability
                    ? (errors.danceability.message as string)
                    : ""
                }
                fullWidth
                margin="normal"
              />
            )}
          />
          <Controller
            name="energy"
            control={control}
            defaultValue=""
            rules={{ required: "Energía es obligatorio" }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Energía"
                variant="outlined"
                error={!!errors.energy}
                helperText={
                  errors.energy ? (errors.energy.message as string) : ""
                }
                fullWidth
                margin="normal"
              />
            )}
          />
          <Controller
            name="key"
            control={control}
            defaultValue=""
            rules={{ required: "Key es obligatorio" }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Key"
                variant="outlined"
                error={!!errors.key}
                helperText={errors.key ? (errors.key.message as string) : ""}
                fullWidth
                margin="normal"
              />
            )}
          />
          <Controller
            name="loudness"
            control={control}
            defaultValue=""
            rules={{ required: "Volumen es obligatorio" }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Volumen"
                variant="outlined"
                error={!!errors.loudness}
                helperText={
                  errors.loudness ? (errors.loudness.message as string) : ""
                }
                fullWidth
                margin="normal"
              />
            )}
          />
        </>
      );
    case 2:
      return (
        <>
          <Controller
            name="mode"
            control={control}
            defaultValue=""
            rules={{ required: "Modo es obligatorio" }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Modo"
                variant="outlined"
                error={!!errors.mode}
                helperText={errors.mode ? (errors.mode.message as string) : ""}
                fullWidth
                margin="normal"
              />
            )}
          />
          <Controller
            name="speechiness"
            control={control}
            defaultValue=""
            rules={{ required: "Habla es obligatorio" }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Habla"
                variant="outlined"
                error={!!errors.speechiness}
                helperText={
                  errors.speechiness
                    ? (errors.speechiness.message as string)
                    : ""
                }
                fullWidth
                margin="normal"
              />
            )}
          />
          <Controller
            name="acousticness"
            control={control}
            defaultValue=""
            rules={{ required: "Acústica es obligatorio" }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Acústica"
                variant="outlined"
                error={!!errors.acousticness}
                helperText={
                  errors.acousticness
                    ? (errors.acousticness.message as string)
                    : ""
                }
                fullWidth
                margin="normal"
              />
            )}
          />
          <Controller
            name="instrumentalness"
            control={control}
            defaultValue=""
            rules={{ required: "Instrumental es obligatorio" }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Instrumental"
                variant="outlined"
                error={!!errors.instrumentalness}
                helperText={
                  errors.instrumentalness
                    ? (errors.instrumentalness.message as string)
                    : ""
                }
                fullWidth
                margin="normal"
              />
            )}
          />
        </>
      );
    case 3:
      return (
        <>
          <Controller
            name="liveness"
            control={control}
            defaultValue=""
            rules={{ required: "Vivacidad es obligatorio" }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Vivacidad"
                variant="outlined"
                error={!!errors.liveness}
                helperText={
                  errors.liveness ? (errors.liveness.message as string) : ""
                }
                fullWidth
                margin="normal"
              />
            )}
          />
          <Controller
            name="valance"
            control={control}
            defaultValue=""
            rules={{ required: "Valance es obligatorio" }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Valance"
                variant="outlined"
                error={!!errors.valance}
                helperText={
                  errors.valance ? (errors.valance.message as string) : ""
                }
                fullWidth
                margin="normal"
              />
            )}
          />
          <Controller
            name="tempo"
            control={control}
            defaultValue=""
            rules={{ required: "Tempo es obligatorio" }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Tempo"
                variant="outlined"
                error={!!errors.tempo}
                helperText={
                  errors.tempo ? (errors.tempo.message as string) : ""
                }
                fullWidth
                margin="normal"
              />
            )}
          />
          <Controller
            name="time_signature"
            control={control}
            defaultValue=""
            rules={{ required: "Firma del Tiempo es obligatorio" }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Firma del Tiempo"
                variant="outlined"
                error={!!errors.time_signature}
                helperText={
                  errors.time_signature
                    ? (errors.time_signature.message as string)
                    : ""
                }
                fullWidth
                margin="normal"
              />
            )}
          />
          <Controller
            name="track_genre"
            control={control}
            defaultValue=""
            rules={{ required: "Género de la Canción es obligatorio" }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Género de la Canción"
                variant="outlined"
                error={!!errors.track_genre}
                helperText={
                  errors.track_genre
                    ? (errors.track_genre.message as string)
                    : ""
                }
                fullWidth
                margin="normal"
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
