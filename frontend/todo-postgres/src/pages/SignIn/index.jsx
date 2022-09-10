import React, { useState } from "react";
import { Container, Content, Label, LabelError, LabelSignUp, Strong } from "./styles";
import { FormInput } from "../../components/FormComponents/FormInput";
import { FormButton } from "../../components/FormComponents/FormButton";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";
import axios from "axios";

export function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const authentication = useAuth();

    async function handleSignIn(event) {
        event.preventDefault();
        try {
            await axios.post("http://localhost:3232/user/signin", {
                email: email,
                password: password
            }, { withCredentials: true });

            authentication.login();
            navigate("/todos", { replace: true });
            
        } catch(res) {
            const errorMessage = res.response.data.error;
            setError(errorMessage);
        };
    };

    return (
        <Container>
            <p>to<strong>.do</strong></p>
            
            <Content>
                <div>
                    <Label>Entre na sua conta</Label>
                </div>

                <FormInput
                    type="email"
                    placeholder="Digite seu e-mail"
                    value={email}
                    onChange={(event) => [setEmail(event.target.value), setError("")]}
                />

                <FormInput
                    type="password"
                    placeholder="Digite sua senha"
                    value={password}
                    onChange={(event) => [setPassword(event.target.value), setError("")]}
                />

                <LabelError>{error}</LabelError>

                <FormButton type="submit" onClick={handleSignIn} Text="Entrar" />

                <LabelSignUp>
                    Não tem uma conta?
                    <Strong>
                        <Link to="/signup">&nbsp;Registre-se</Link>
                    </Strong>
                </LabelSignUp>
            </Content>
        </Container>
    );
};