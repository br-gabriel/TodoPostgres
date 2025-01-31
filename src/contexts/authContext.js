import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const navigate = useNavigate();
    const [auth, setAuth] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem("token");
        
        if(token) {
            setAuth(token);
        };

        setLoading(false);
    }, []);

    async function login(token) {
        await localStorage.setItem("token", token);
        await setAuth(token);

        navigate("/", { replace: true });
    };

    async function logout() {
        await localStorage.removeItem("token");
        await setAuth(null);

        navigate("/signin", { replace: true });
    };

    return (
        <AuthContext.Provider value={{auth, login, logout, loading}}>
            { children }
        </AuthContext.Provider>
    );
};