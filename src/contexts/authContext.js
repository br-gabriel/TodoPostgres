import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [auth, setAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = Cookies.get("access_token");

    if (token) {
      setAuth(true);
    } else {
      setAuth(false);
    }

    setLoading(false);
  }, []);

  function login() {
    setAuth(true);
    navigate("/", { replace: true });
  }

  function logout() {
    Cookies.remove("access_token");
    setAuth(false);
    navigate("/signin", { replace: true });
  }

  return (
    <AuthContext.Provider value={{ auth, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}
