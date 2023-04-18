import React, {useState} from "react";
import { TextField, Button, Box } from "@mui/material";
import { validarDireccion, validarCiudad, validarEstado } from "./validaciones";

const DatosEntrega = ({updateStep}) => {

  const [direccion, setDireccion] = useState({
    direccion: {
      value: "",
      valid: true,
    },
  });

  const [ciudad, setCiudad] = useState({
    ciudad: {
      value: "",
      valid: true,
    },
  });

  const [estado, setEstado] = useState({
    estado: {
      value: "",
      valid: true,
    },
  });

  return (
    <Box
      component="form"
      autocomplete="off"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
      onSubmit={(e) => {
        e.preventDefault();
        if (
          direccion.direccion.valid &&
          ciudad.ciudad.valid &&
          estado.estado.valid
        ) {
          console.log(direccion, ciudad, estado);
          updateStep(3);
        } else {
          console.log("Nada");
        }
      }}
    >
      <TextField
        label="Dirección"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        error={!direccion.direccion.valid}
        helperText={!direccion.direccion.valid ? direccion.direccion.value : ""}
        onChange={(e) => {
          const direccion = e.target.value;
          const valido = validarDireccion(direccion);
          setDireccion(valido);
        }}
      />
      <TextField
        label="Ciudad"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        error={!ciudad.ciudad.valid}
        helperText={!ciudad.ciudad.valid ? ciudad.ciudad.value : ""}
        onChange={(e) => {
          const ciudad = e.target.value;
          const valido = validarCiudad(ciudad);
          setCiudad(valido);
        }}
      />
      <TextField
        label="Estado/Provincia"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        error={!estado.estado.valid}
        helperText={!estado.estado.valid ? estado.estado.value : ""}
        onChange={(e) => {
          const estado = e.target.value;
          const valido = validarEstado(estado);
          setEstado(valido);
        }}
      />
      <Button variant="contained" type="submit">
        Crear cuenta
      </Button>
    </Box>
  );
};

export default DatosEntrega;
