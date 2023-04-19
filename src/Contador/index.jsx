import React, {useContext} from "react";
import { CounterContext } from "../Context";
import useAuth from "../Hooks/useAuth";
import { ContainerContador } from "../styles";

const Contador =() => {

    const counterData = useContext(CounterContext);
    const access = useAuth(counterData.user.JWT);
    console.log(access);

    return (
        <ContainerContador>
            <h2>Practicamos contextos en React:</h2>
            <strong>El valor del contador es: {counterData.count} - JWT: {counterData.user.JWT}</strong>
        </ContainerContador>
    )

};

export default Contador;