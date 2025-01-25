import { Container, Content } from "./styles";
import { AuthContext } from "../../../contexts/authContext";
import { useContext } from "react";
import api from "../../../services/api";

export function Header() {
    const {logout} = useContext(AuthContext);

    async function handleSignOut() {
        try {
            await api.get("/user/signout");
            logout();
        } catch {
            console.log("erro");
        }
    };
    
    return (
        <Container>
            <Content>
                <p>to<strong>.do</strong></p>

                <button onClick={handleSignOut}>
                    Sair
                </button>
            </Content>
        </Container>
    );
};