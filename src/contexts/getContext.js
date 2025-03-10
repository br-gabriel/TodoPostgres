import { createContext, useEffect, useState } from "react";
import api from "../services/api";

export const GetContext = createContext();

export function GetContextProvider({children}) {
    const [todos, setTodos] = useState([]);

    async function getTodos() {
        try {
            const response = await api.get(`/user/todos`);
            console.log("Response:", response);
            setTodos(response.data);
        } catch (error) {
            console.error("Error:", error);
        }
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