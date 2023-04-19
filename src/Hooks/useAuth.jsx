import {useState, useEffect} from "react";

export const useAuth = (jwt) => {
    const [auth, setAuth] = useState(false);

    useEffect(() => {
        if(jwt.length > 5){
            setAuth(true);
        } else {
            setAuth(false);
        }
    }, []);

    

    return auth;

};

export default useAuth;