import Modal from "react-modal";
import { useState, useContext } from "react";
import { GetContext } from "../../contexts/getContext";
import { Container } from "./styles";
import axios from "axios";

Modal.setAppElement("#root");

export function EditTaskModal({ isOpen, onRequestClose, todoSelected }) {
    const { getTodos } = useContext(GetContext);
    const [newTodoValue, setNewTodoValue] = useState("");

    async function updateTask() {
        const filteredInput = newTodoValue.trim();
        
        if(filteredInput === "") {
            return;
        }

        await axios.put("http://localhost:3232/todos", {
            id: todoSelected.id,
            name: newTodoValue
        });

        setNewTodoValue("");
        getTodos();
    };

    return (
        <Modal 
            isOpen={isOpen} 
            onRequestClose={onRequestClose}
            overlayClassName="editTaskOverlay"
            className="editTaskModalContent"
        >            
            <Container>
                <h2>Editar tarefa</h2>
                <input type="text" onChange={event => setNewTodoValue(event.target.value)}/>
                <div>
                    <button className="cancelButton" onClick={onRequestClose}>
                        Cancelar
                    </button>
                    <button className="updateButton" onClick={updateTask}>
                        Salvar
                    </button> 
                </div>
            </Container>
        </Modal>
    );
};