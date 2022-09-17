import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/authContext";
import { useContext } from "react";

export function PrivateRoute({ children }) {
    const {loading, auth} = useContext(AuthContext);

    if (loading) {
        return <div className="loading">Carregando...</div>;
    }

    if (!auth) {
        return <Navigate to="/signin" />
    };

    return children;
};