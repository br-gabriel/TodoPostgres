import { MainHeader } from "./styles"
import { AiOutlineSend } from "react-icons/ai"
import { useState } from "react"
import axios from "axios"

export function TodoListHeader() {
    const [inputValue, setInputValue] = useState("")

    /*async function TaskUpdateEmitter() {
        
    }*/
    
    async function createTodo() {
        await axios.post("http://localhost:3232/todos", {
            name: inputValue,
        });
        //enviar a atualização para o taskUpdateEmitter
        setInputValue("");
    }

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