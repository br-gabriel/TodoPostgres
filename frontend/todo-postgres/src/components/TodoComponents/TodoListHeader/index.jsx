import { MainHeader } from "./styles";
import { AiOutlineSend } from "react-icons/ai";
import { useState, useContext } from "react";
import { GetContext } from "../../../contexts/getContext";
import axios from "axios";

export function TodoListHeader() {
    const {getTodos, getUserId, user} = useContext(GetContext);
    const [inputValue, setInputValue] = useState("");
    
    async function createTodo() {
        const filteredInput = inputValue.trim();
        
        if(filteredInput === "") {
            return;
        }

        getUserId();
        
        await axios.post(`http://localhost:3232/user/${user.id}/todos`, {
            name: inputValue,
        });
        getTodos(user);
        setInputValue("");
    };

    return (
        <MainHeader>
            <h1>Minhas tarefas</h1>

            <div>
                <input 
                    type="text" 
                    value={inputValue} 
                    onChange={(event) => {
                        setInputValue(event.target.value);
                    }} 
                    placeholder="Adicionar tarefa"
                ></input>

                <button onClick={createTodo}>
                    <AiOutlineSend size={25} color={"#fff"}/>
                </button>
            </div>
        </MainHeader>
    )
}