import { Todo } from "./styles";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { useContext, useState } from "react";
import { GetContext } from "../../contexts/getContext";
import { EditTaskModal } from "../EditTaskModal";
import axios from "axios";

export function TodoList() {
    const {getTodos, todos} = useContext(GetContext);
    const [isEditTaskModalOpen, setIsEditTaskModalOpen] = useState(false);
    const [selectedTodo, setSelectedTodo] = useState();
    const [oldTaskTitle, setOldTaskTitle] = useState();

    async function deleteTodo(todo) {
        await axios.delete(`http://localhost:3232/todos/${todo.id}`);
        getTodos();
    };

    async function handleStatusChange(todo) {
        await axios.put("http://localhost:3232/todos", {
            id: todo.id,
            status: !todo.status
        });
        getTodos();
    };

    async function todoSelected(todo) {
        await setSelectedTodo(todo);
    };

    function handleOpenEditTaskModal() {
        setIsEditTaskModalOpen(true);
    };

    function handleCloseEditTaskModal() {
        setIsEditTaskModalOpen(false);
    };

    async function setOldTitle(todo) {
        await setOldTaskTitle(todo.name);
        console.log(oldTaskTitle)
    };
    
    return (
        <div>
            {todos.map((todo) => {
                return (
                    <Todo key={todo.id}>
                        <div className="custom-checkbox">
                            <input id={todo.id} type={"checkbox"} checked={todo.status === true ? "checked" : ""} onClick={() => handleStatusChange(todo)}></input>
                            <label for={todo.id}>{todo.name}</label>
                        </div>

                        <section>
                            <button className="editButton" onClick={() => { handleOpenEditTaskModal(); todoSelected(todo); setOldTitle(todo)}}>
                                <AiOutlineEdit size={20} color={"#000"}/>
                            </button>
                            <button onClick={() => deleteTodo(todo)}>
                                <AiOutlineDelete size={20} color={"#E52E4D"} />
                            </button>
                        </section>
                        
                    </Todo>
                );
            })}

            <EditTaskModal 
                isOpen={isEditTaskModalOpen}
                onRequestClose={handleCloseEditTaskModal}
                todoSelected={selectedTodo}
                OldTitle={oldTaskTitle}
            />
        </div>
    );
};