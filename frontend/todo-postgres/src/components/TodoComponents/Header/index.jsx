import { Container, Content } from "./styles";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export function Header() {
    const navigate = useNavigate();

    async function handleSignOut() {
        try {
            //await axios.post("http://localhost:3232/user/signout");
            navigate("/");
        } catch(err) {
            console.log(err);
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