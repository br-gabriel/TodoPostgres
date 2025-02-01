import { createContext, useEffect, useState } from "react";
import api from "../services/api";

export const GetContext = createContext();

export function GetContextProvider({children}) {
    const [todos, setTodos] = useState([]);

    async function getTodos() {
        const response = await api.get(`/user/todos`, {withCredentials: true});
        setTodos(response.data);
    };

    useEffect(() => {
        getTodos();
    }, []);

    return (
        <GetContext.Provider value={{getTodos, todos}}>
            {children}    
        </GetContext.Provider>
    );
};