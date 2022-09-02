import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/authContext";

export function PrivateRoute({ children }) {
    const authentication = useAuth();
    const isAuthenticated = authentication.auth;
    
    if (!isAuthenticated) {
        return <Navigate to="/" />
    };

    return children;
};