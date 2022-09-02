import { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [auth, setAuth] = useState(false);

    function login() {
        setAuth(true);
    };

    function logout() {
        setAuth(false);
    };

    return (
        <AuthContext.Provider value={{auth, login, logout}}>
            { children }
        </AuthContext.Provider>
    );
};

export function useAuth() {
    return useContext(AuthContext);
};
