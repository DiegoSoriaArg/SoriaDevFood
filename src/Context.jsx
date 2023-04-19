import React, {createContext, useState} from "react";

export const CounterContext = createContext();

export const CounterProvider = ({children}) => {

    const [count, setCount] = useState(0);

    const values = {
        count,
        suma(){
            setCount((value) => value + 1);
        },
        resta(){
            setCount((value) => value - 1);
        },
        user: {
            status: "Online",
            JWT: "123456",
            theme: "dark"
        }
    }

    return (<CounterContext.Provider value={values}>
        {children}
    </CounterContext.Provider>)
}
