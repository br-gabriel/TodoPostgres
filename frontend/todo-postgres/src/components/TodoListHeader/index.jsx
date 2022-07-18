import { MainHeader } from "./styles"
import { AiOutlineSend } from "react-icons/ai"

export function TodoListHeader() {
    return (
        <MainHeader>
            <h1>Minhas tarefas</h1>

            <input type="text"></input>
            <button>
                <AiOutlineSend size={20} color={"#fff"}/>
            </button>
        </MainHeader>
    )
}