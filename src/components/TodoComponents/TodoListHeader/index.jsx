import { MainHeader } from "./styles";
import { AiOutlineSend } from "react-icons/ai";
import { useState, useContext } from "react";
import { GetContext } from "../../../contexts/getContext";
import { AuthContext } from "../../../contexts/authContext";
import api from "../../../services/api";

export function TodoListHeader() {
    const {getTodos} = useContext(GetContext);
    const [inputValue, setInputValue] = useState("");
    const {logout} = useContext(AuthContext); 
    
    async function createTodo(event) {
        event.preventDefault();
        const filteredInput = inputValue.trim();
        
        if(filteredInput === "") {
            return;
        };
        
        try {
            await api.post(`/user/todos`, {
                name: inputValue,
            });
            
            getTodos();
        } catch {
            logout();
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