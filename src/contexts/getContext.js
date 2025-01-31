import { createContext, useContext, useEffect, useState } from "react";
import api from "../services/api";
import { AuthContext } from "./authContext";

export const GetContext = createContext();

export function GetContextProvider({children}) {
    const [todos, setTodos] = useState([]);
    const { auth } = useContext(AuthContext);

    async function getTodos() {
        if (!auth) return;

        try {
            const response = await api.get(`/user/todos`);
            setTodos(response.data);
        } catch (error) {
            if (error.response?.status === 401) {
                localStorage.removeItem('token');
                window.location.href = '/signin';
            }
            console.error('Error fetching todos:', error);
        }
    };

    useEffect(() => {
        getTodos();
    }, [auth]);

    return (
        <GetContext.Provider value={{getTodos, todos}}>
            {children}    
        </GetContext.Provider>
    );
};