import { TodoListHeader } from "../TodoListHeader"
import { TodoList } from "../TodoList"
import { Container } from "./styles"
import { useEffect, useState } from "react"
import axios from "axios"

export function Main() {
    async function getTodos() {
        const response = await axios.get("http://localhost:3333/todos")
        console.log(response.data)
        setTodos(response.data);
    }

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        getTodos();
    }, []);

    return (
        <Container>
            <TodoListHeader/>
            <TodoList todos={todos}/>
        </Container>
    );
};