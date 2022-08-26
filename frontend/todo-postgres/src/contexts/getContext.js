import { createContext } from "react";
import { useEffect, useState } from "react";
import axios from "axios";

export const GetContext = createContext();

export function GetContextProvider({children}) {
    const [todos, setTodos] = useState([]);

    async function getTodos() {
        const response = await axios.get(`http://localhost:3232/user/todos`)
        setTodos(response.data);
    };

    useEffect(() => {
        getTodos();
    }, []);

    return (
        <GetContext.Provider value={{getTodos, todos}}>
            {children}    
        </GetContext.Provider>
    )
};