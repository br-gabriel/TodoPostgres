import { createContext } from "react";
import { useEffect, useState } from "react";
import axios from "axios";

export const GetContext = createContext();

export function GetContextProvider({children}) {
    const [user, setUser] = useState();
    const [todos, setTodos] = useState([]);

    async function getUserId() {
        const response = await axios.get(`http://localhost:3232/user/id`)
        setUser(response.data);
    };

    async function getTodos(user) {
        const response = await axios.get(`http://localhost:3232/user/${user.id}/todos`)
        setTodos(response.data);
    };

    useEffect(() => {
        getUserId();
        getTodos(user);
    }, []);

    return (
        <GetContext.Provider value={{getTodos, todos, getUserId, user}}>
            {children}    
        </GetContext.Provider>
    )
};