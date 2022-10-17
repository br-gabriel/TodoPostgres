import { Container, Todo } from "./styles";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { useContext, useState } from "react";
import { GetContext } from "../../../contexts/getContext";
import { EditTaskModal } from "../EditTaskModal";
import { AuthContext } from "../../../contexts/authContext";
import api from "../../../services/api";

export function TodoList() {
    const {getTodos, todos} = useContext(GetContext);
    const [isEditTaskModalOpen, setIsEditTaskModalOpen] = useState(false);
    const [selectedTodo, setSelectedTodo] = useState();
    const [oldTaskTitle, setOldTaskTitle] = useState();
    const {logout} = useContext(AuthContext);

    async function deleteTodo(todo) {
        try {
            await api.delete(`/user/todos/${todo.id}`, { withCredentials: true });
            getTodos();
        } catch {
            logout();
        };
    };

    async function handleStatusChange(todo) {
        try {
            await api.put(`/user/todos`, {
                id: todo.id,
                status: !todo.status
            }, { withCredentials: true });
            
            getTodos();
        } catch {
            logout();
        };
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
    };
    
    return (
        <Container>
            {todos
                .sort((todo) => todo.status ? 0 : -1)
                .map((todo) => {
                return (
                    <Todo key={todo.id}>
                        <div className="custom-checkbox">
                            <input id={todo.id} type={"checkbox"} readOnly checked={todo.status === true ? "checked" : ""} onClick={() => handleStatusChange(todo)}></input>
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
        </Container>
    );
};