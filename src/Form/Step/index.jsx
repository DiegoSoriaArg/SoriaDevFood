import React from "react";
import { TextField, Button, Box } from "@mui/material";
import { useState } from "react";

const Step = ({data, step, pasos}) => {

    const  {inputs, buttonText, onSubmit} = data;

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
        onSubmit={onSubmit}
    >
        {
            inputs.map((input, i) => {
                const {label, type, valid, onChange, helperText, validator} = input;
                return (
                    <TextField
                        key={i}
                        label={label}
                        variant="outlined"
                        fullWidth
                        margin="dense"
                        type={type}
                        error={!valid}
                        helperText={!valid && helperText}
                        //value={email.email.value}
                        onChange={(e) => onChange(e, i, step, validator, pasos)}
                    />
                )
            })
        }
        
        <Button variant="contained" type="submit">
            {buttonText}
        </Button>
    </Box>
    );

}

export default Step;
