export const validarNombre = (nombre) => {
    if(nombre.length >= 4 && nombre.length <= 10){
        return {nombre: {value: nombre, valid: true}};
    } else {
        return {nombre: {value: "Ingresa un nombre valido", valid: false}};
    }
};

export const validarApellido = (apellido) => {
    if(apellido.length >= 4 && apellido.length <= 10){
        return {apellido: {value: apellido, valid: true}};
    } else {
        return {apellido: {value: "Ingresa un apellido valido", valid: false}};
    }
};

export const validarNumero = (numero) => {
    if(numero.length >= 9){
        return {numero: {value: numero, valid: true}};
    } else {
        return {numero: {value: "Ingresa un numero valido", valid: false}};
    }
};