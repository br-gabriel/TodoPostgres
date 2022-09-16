import { Container, Content } from "./styles";
import { AuthContext } from "../../../contexts/authContext";
import { useContext } from "react";
import axios from "axios";

export function Header() {
    const {logout} = useContext(AuthContext);

    async function handleSignOut() {
        try {
            await axios.get("http://localhost:3232/user/signout", { withCredentials: true });
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