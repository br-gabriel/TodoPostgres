import { TodoListHeader } from "../TodoListHeader";
import { TodoList } from "../TodoList";
import { Container } from "./styles";
import { GetContextProvider } from "../../../contexts/getContext";

export function Main() {
    return (
        <GetContextProvider>
            <Container>
                <TodoListHeader/>
                <TodoList/>
            </Container>
        </GetContextProvider>
    );
};