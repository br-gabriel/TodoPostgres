import Modal from "react-modal";
import { useState, useContext } from "react";
import { GetContext } from "../../../contexts/getContext";
import { Container } from "./styles";
import { useAuth } from "../../../contexts/authContext";
import axios from "axios";

Modal.setAppElement("#root");

export function EditTaskModal({ isOpen, onRequestClose, todoSelected, OldTitle }) {
    const {getTodos} = useContext(GetContext);
    const [newTodoValue, setNewTodoValue] = useState("");
    const authentication = useAuth();

    async function renameTask(event) {
        event.preventDefault();
        const filteredInput = newTodoValue.trim();
        
        if(filteredInput === "") {
            return;
        };

        try {
            await axios.put(`http://localhost:3232/user/todos`, {
                id: todoSelected.id,
                name: newTodoValue
            }, { withCredentials: true });

            getTodos();
        } catch {
            authentication.logout();
        };

        setNewTodoValue("");
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
                <input type="text" defaultValue={OldTitle} onChange={event => setNewTodoValue(event.target.value)}/>
                <div>
                    <button type="reset" className="cancelButton" onClick={onRequestClose}>
                        Cancelar
                    </button>
                    <button type="submit" className="updateButton" onClick={renameTask}>
                        Salvar
                    </button> 
                </div>
            </Container>
        </Modal>
    );
};