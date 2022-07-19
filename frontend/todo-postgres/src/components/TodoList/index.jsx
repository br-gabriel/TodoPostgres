import {  } from "./styles"
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai"
/*
const TodoList = ({todos}) => {
    return (
        <div>
            {todos.map((todo) => {
                return (
                    <div>
                        <input type={"checkbox"}></input>
                        <p>{todo.name}</p>
                        <button>
                            <AiOutlineEdit size={20} color={"#000"}/>
                        </button>
                        <button>
                            <AiOutlineDelete size={20} color={"#000"} />
                        </button>
                    </div>
                );
            })}
        </div>
    );
};

export default TodoList;
*/

export function TodoList({todos}) {
    return (
        <div>
            {todos.map((todo) => {
                return (
                    <div>
                        <input type={"checkbox"}></input>
                        <p>{todo.name}</p>
                        <button>
                            <AiOutlineEdit size={20} color={"#000"}/>
                        </button>
                        <button>
                            <AiOutlineDelete size={20} color={"#000"} />
                        </button>
                    </div>
                );
            })}
        </div>
    );
}