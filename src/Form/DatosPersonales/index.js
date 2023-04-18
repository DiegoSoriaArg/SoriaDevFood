import React, {useState} from "react";
import { TextField, Button, Box } from "@mui/material";
import {validarNombre, validarApellido, validarNumero} from  "./validaciones"

const DatosPersonales = ({updateStep}) => {

  const [nombre, setNombre] = useState({
    nombre: {
      value: "",
      valid: true,
    },
  });

  const [apellido, setApellido] = useState({
    apellido: {
      value: "",
      valid: true,
    },
  });

  const [numero, setNumero] = useState({
    numero: {
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
          nombre.nombre.valid &&
          apellido.apellido.valid &&
          numero.numero.valid
        ) {
          console.log(nombre, apellido, numero);
          updateStep(2);
        } else {
          console.log("Nada");
        }
      }}
    >
      <TextField
        label="Nombre"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        error={!nombre.nombre.valid}
        helperText={!nombre.nombre.valid ? nombre.nombre.value : ""}
        onChange={(e) => {
          const nombre = e.target.value;
          const valido = validarNombre(nombre);
          setNombre(valido);
        }}
      />
      <TextField
        label="Apellidos"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        error={!apellido.apellido.valid}
        helperText={!apellido.apellido.valid ? apellido.apellido.value : ""}
        onChange={(e) => {
          const apellido = e.target.value;
          const valido = validarApellido(apellido);
          setApellido(valido);
        }}
      />
      <TextField
        label="Número telefónico"
        variant="outlined"
        fullWidth
        margin="dense"
        type="number"
        inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
        error={!numero.numero.valid}
        helperText={!numero.numero.valid ? numero.numero.value : ""}
        onChange={(e) => {
          const numero = e.target.value;
          const valido = validarNumero(numero);
          setNumero(valido);
        }}
      />
      <Button variant="contained" type="submit">
        Siguiente
      </Button>
    </Box>
  );
};

export default DatosPersonales;
