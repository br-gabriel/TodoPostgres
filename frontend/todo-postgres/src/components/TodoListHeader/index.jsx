import { MainHeader } from "./styles"
import { AiOutlineSend } from "react-icons/ai"

export function TodoListHeader() {
    return (
        <MainHeader>
            <h1>Minhas tarefas</h1>

            <div>
                <input type="text" placeholder="Adicionar tarefa"></input>
                <button>
                    <AiOutlineSend size={25} color={"#fff"}/>
                </button>
            </div>
        </MainHeader>
    )
}