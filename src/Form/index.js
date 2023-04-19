import React, {useState, useEffect} from "react";
import { Box, Typography } from "@mui/material";
import { LogoSpace, FormSpace, Img } from "./styles";
import DatosUsuario from "./DatosUsuario";
import DatosPersonales from "./DatosPersonales";
import DatosEntrega from "./DatosEntrega";
import Complete from "./Complete";
import Stepper from "../Stepper";
import Step from "./Step"

//validaciones
import {validarEmail, validarPassword} from "./DatosUsuario/validaciones";
import { validarNombre, validarApellido, validarNumero } from "./DatosPersonales/validaciones";
import { validarDireccion, validarCiudad, validarEstado } from "./DatosEntrega/validaciones";

const Form = () => {
  //useEffect para consumir una API
  /* useEffect(() => {
    const pedido = async () => {
      try {
        const data = await fetch("https://jsonplaceholder.typicode.com/posts");
        const posts = await data.json();
        console.log(posts);
      } catch (err) {
        console.log(err);
      }
    }
    pedido();
  }, []); */

  //Las siguientes lineas comentadas y los metodos traidos en los import no usados, 
  // hacen referencia a una manera mas reducida de como crear cada formulario
  /* const [pasos, setPasos] = useState({});

  const onSubmit = (e, step, pasos) => {
    e.preventDefault();
    let newStep = step + 1;
    setStep(newStep);
    if(newStep === 3){
      console.log("Enviar datos al backend", pasos);
    }
  };

  const handleChange = (element, position, currentStep, validator, pasos) => {
    const value = element.target.value;
    const valid = validator(value);
    const cp = {...pasos};
    cp[currentStep].inputs[position].value = value;
    cp[currentStep].inputs[position].value = valid;

    setPasos(cp);
  }

  const stepsFlow = {
    0: {
      inputs: [
        {
          label: "Correo electronico",
          type: "email",
          valid: true,
          helperText: "Ingresa un email valido",
          onChange: handleChange,
          validator: validarEmail,
        },
        {
          label: "Contraseña",
          type: "password",
          valid: true,
          helperText: "Debe tener entre 8 y 20 caracteres",
          onChange: handleChange,
          validator: validarPassword,
        },
      ],
      buttonText: "Siguiente",
      onSubmit,
    },
    1: {
      inputs: [
        {
          label: "Nombre",
          type: "text",
          valid: true,
          onChange: handleChange,
          helperText: "Ingresa un nombre valido",
          validator: validarNombre,
        },
        {
          label: "Apellidos",
          type: "text",
          valid: true,
          onChange: handleChange,
          helperText: "Ingresa un apellido valido",
          validator: validarApellido,
        },
        {
          label: "Número telefonico",
          type: "number",
          valid: true,
          onChange: handleChange,
          helperText: "Ingresa un numero valido",
          validator: validarNumero,
        },
      ],
      buttonText: "Siguiente",
      onSubmit,
    },
    2: {
      inputs: [
        {
          label: "Direccion",
          type: "text",
          valid: true,
          onChange: handleChange,
          helperText: "Ingresa una direccion valida",
          validator: validarDireccion,
        },
        {
          label: "Ciudad",
          type: "text",
          valid: true,
          onChange: handleChange,
          helperText: "Ingresa una ciudad valida",
          validator: validarCiudad,
        },
        {
          label: "Estado/Provincia",
          type: "text",
          valid: true,
          onChange: handleChange,
          helperText: "Ingresa un estado valido",
          validator: validarEstado,
        },
      ],
      buttonText: "Crear cuenta",
      onSubmit,
    },
  };

  useEffect(() => {
    setPasos(stepsFlow);
  }, []); */

  const [step, setStep] = useState(0);

  const updateStep = (step) => {
    setStep(step);
  };

  const steps = {
    0: <DatosUsuario updateStep={updateStep} />,
    1: <DatosPersonales updateStep={updateStep} />,
    2: <DatosEntrega updateStep={updateStep} />,
    3: <Complete />,
  };

  return (
    <Box
      sx={{
        padding: "30px",
        display: "flexbox",
        flexDirection: "column",
      }}
    >
      <LogoSpace>
        <Img src={"/favicon.png"} />
        <Typography variant="h3">SoriaDevFood</Typography>
      </LogoSpace>
      <FormSpace>
        {step < 3 && <Stepper step={step} />}
        {/*step < 3 && pasos[step] && (
          <Step data={pasos[step]} step={step} pasos={pasos} />
        )*/}
        {steps[step]}
        {/*step === 3 && <Complete />*/}
      </FormSpace>
    </Box>
  );
};

export default Form;
