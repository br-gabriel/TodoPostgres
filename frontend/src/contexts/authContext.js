import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const navigate = useNavigate();
    const [auth, setAuth] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const recoveredAuth = localStorage.getItem("isAuth");
        
        if(recoveredAuth) {
            setAuth(JSON.parse(recoveredAuth));
        };

        setLoading(false);
    }, []);

    async function login() {
        await localStorage.setItem("isAuth", "true");
        await setAuth(localStorage.getItem("isAuth"));

        navigate("/", { replace: true });
    };

    async function logout() {
        await localStorage.removeItem("isAuth");
        await setAuth(null);

        navigate("/signin", { replace: true });
    };

    return (
        <AuthContext.Provider value={{auth, login, logout, loading}}>
            { children }
        </AuthContext.Provider>
    );
};