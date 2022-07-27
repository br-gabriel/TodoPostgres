import Modal from "react-modal";
import { Container } from "./styles";

Modal.setAppElement("#root");

export function EditTaskModal({ isOpen, onRequestClose }) {
    return (
        <Modal 
            isOpen={isOpen} 
            onRequestClose={onRequestClose}
            overlayClassName="editTaskOverlay"
            className="editTaskModalContent"
        >            
            <Container>
                <h2>Editar tarefa</h2>
                <input type="text"/>
                <div>
                    <button className="cancelButton" onClick={onRequestClose}>
                        Cancelar
                    </button>
                    <button type="submit" className="updateButton">
                        Salvar
                    </button> 
                </div>
            </Container>
        </Modal>
    )
}