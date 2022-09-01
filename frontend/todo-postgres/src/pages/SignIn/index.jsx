import React, { useState } from "react";
import { Container, Content, Label, LabelError, LabelSignUp, Strong } from "./styles";
import { FormInput } from "../../components/FormComponents/FormInput";
import { FormButton } from "../../components/FormComponents/FormButton";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    async function handleSignIn() {
        if(!email) {
            setError("Email é obrigatório")
            return;
        } else if (!password) {
            setError("Senha é obrigatória")
            return;
        };

        try {
            await axios.post("http://localhost:3232/user/signin", {
                email: email,
                password: password
            }, { withCredentials: true });
            
            navigate("/todos", { replace: true });

        } catch(err) {
            console.log(err);
        }
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

                <FormButton Text="Entrar" onClick={handleSignIn} />
                
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