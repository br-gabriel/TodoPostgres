import { MainHeader } from "./styles";
import { AiOutlineSend } from "react-icons/ai";
import { useState, useContext } from "react";
import { GetContext } from "../../../contexts/getContext";
import { useAuth } from "../../../contexts/authContext";
import axios from "axios";

export function TodoListHeader() {
    const {getTodos} = useContext(GetContext);
    const [inputValue, setInputValue] = useState("");
    const authentication = useAuth(); 
    
    async function createTodo(event) {
        event.preventDefault();
        const filteredInput = inputValue.trim();
        
        if(filteredInput === "") {
            return;
        };
        
        try {
            await axios.post(`http://localhost:3232/user/todos`, {
                name: inputValue,
            }, { withCredentials: true });
            
            getTodos();
        } catch {
            authentication.logout();
        };
        
        setInputValue("");
    };

    return (
        <MainHeader>
            <h1>Minhas tarefas</h1>

            <form>
                <input 
                    type="text" 
                    value={inputValue} 
                    onChange={(event) => {
                        setInputValue(event.target.value);
                    }} 
                    placeholder="Adicionar tarefa"
                ></input>

                <button onClick={createTodo} type="submit">
                    <AiOutlineSend size={25} color={"#fff"}/>
                </button>
            </form>
        </MainHeader>
    );
};