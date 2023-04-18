
export const validarEmail = (email) => {
    if(email.length >= 10 && !/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]$/.test(email)){
        return {email: {value: email, valid: true}};
    } else {
        return {email: {value: "Ingresa un email valido", valid: false}};
    }

};

export function validarPassword(password) {
    if(password.length > 8 && password.length < 20){
        return {password: {value: password, valid: true}};
    } else {
        return {password: {value: "Debe tener entre 8 y 20 caracteres", valid: false}};
    }
};