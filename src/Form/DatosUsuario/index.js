import React from "react";
import { TextField, Button, Box } from "@mui/material";
import { useState } from "react";
import { validarEmail, validarPassword } from "./validaciones";

const DatosUsuario = ({updateStep}) => {

  const [email, setEmail] = useState({
    email: {
      value: "",
      valid: true
    }
  });

  const [password, setPassword] = useState({
    password: {
      value: "",
      valid: true
    }
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
        if(email.email.valid && password.password.valid) {
          console.log(email, password);
          updateStep(1);
        } else {
          console.log("Nada");
        }
        
      }}
    >
      <TextField
        label="Correo electrónico"
        variant="outlined"
        fullWidth
        margin="dense"
        type="email"
        error={!email.email.valid}
        helperText={!email.email.valid ? email.email.value : ""}
        //value={email.email.value}
        onChange={(e) => {
          const email = e.target.value;
          const valido = validarEmail(email);
          setEmail(valido);
        }}
      />
      <TextField
        label="Contraseña"
        variant="outlined"
        fullWidth
        margin="dense"
        type="password"
        error={!password.password.valid}
        helperText={!password.password.valid ? password.password.value : ""}
        //value={password.password.value}
        onChange={(e) => {
          const password = e.target.value;
          const valido = validarPassword(password);
          setPassword(valido);
        }}
      />
      <Button variant="contained" type="submit">
        Siguiente
      </Button>
    </Box>
  );

}

export default DatosUsuario;
