import { Todo } from "./styles"
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai"

export function TodoList({todos}) {
    return (
        <div>
            {todos.map((todo) => {
                return (
                    <Todo key={todo.id}>
                        <div>
                            <input type={"checkbox"}></input>
                            <p>{todo.name}</p>
                        </div>

                        <section>
                            <button>
                                <AiOutlineEdit size={20} color={"#000"}/>
                            </button>
                            <button>
                                <AiOutlineDelete size={20} color={"#E52E4D"} />
                            </button>
                        </section>
                        
                    </Todo>
                );
            })}
        </div>
    );
}