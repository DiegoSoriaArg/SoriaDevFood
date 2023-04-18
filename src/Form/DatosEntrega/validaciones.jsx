export const validarDireccion = (direccion) => {
    if(direccion.length >= 4 && direccion.length <= 20){
        return {direccion: {value: direccion, valid: true}};
    } else {
        return {direccion: {value: "Ingresa una direccion valida", valid: false}};
    }
};

export const validarCiudad = (ciudad) => {
    if(ciudad.length >= 4 && ciudad.length <= 15){
        return {ciudad: {value: ciudad, valid: true}};
    } else {
        return {ciudad: {value: "Ingresa una ciudad valida", valid: false}};
    }
};

export const validarEstado = (estado) => {
    if(estado.length >= 4 && estado.length <= 10){
        return {estado: {value: estado, valid: true}};
    } else {
        return {estado: {value: "Ingresa un estado valido", valid: false}};
    }
};