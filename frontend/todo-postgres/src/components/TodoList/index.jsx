import { Todo } from "./styles"
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai"
import axios from "axios";

export function TodoList({todos}) {
    async function deleteTodo(todo) {
        await axios.delete(`http://localhost:3232/todos/${todo.id}`)
    }

    async function handleStatusChange(todo) {
        await axios.put("http://localhost:3232/todos", {
            id: todo.id,
            status: !todo.status
        })
    }
    
    return (
        <div>
            {todos.map((todo) => {
                return (
                    <Todo key={todo.id}>
                        <div>
                            <input  onClick={() => handleStatusChange(todo)} type={"checkbox"}></input>
                            <p>{todo.name}</p>
                        </div>

                        <section>
                            <button className="editButton">
                                <AiOutlineEdit size={20} color={"#000"}/>
                            </button>
                            <button onClick={() => deleteTodo(todo)}>
                                <AiOutlineDelete size={20} color={"#E52E4D"} />
                            </button>
                        </section>
                        
                    </Todo>
                );
            })}
        </div>
    );
}