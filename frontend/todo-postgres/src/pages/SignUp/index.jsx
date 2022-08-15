import React, { useState } from "react";
import { FormInput } from "../../components/FormComponents/FormInput";
import { FormButton } from "../../components/FormComponents/FormButton";
import { Container, Content, Label, LabelError, LabelSignIn, Strong } from "./styles";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export function SignUp() {
    const [email, setEmail] = useState("");
    const [emailConfirm, setEmailConfirm] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    async function handleSignUp() {
        if (!email | !emailConfirm | !password | !passwordConfirm) {
            setError("Preencha todos os campos");
            return;
        } else if (email !== emailConfirm) {
            setError("Os emails não são iguais");
            return;
        } else if (password !== passwordConfirm) {
            setError("As senhas não são iguais");
            return;
        }

        await axios.post("http://localhost:3232/user/signup", {
            email: email,
            password: password
        });

        alert("Usuário cadastrado com sucesso!");
        navigate("/");
    };

    return (
        <Container>
            <p>to<strong>.do</strong></p>
            
            <Content>
                <div>
                    <Label>Crie sua conta</Label>
                </div>
                
                <FormInput 
                    type="email"
                    placeholder="Digite seu e-mail"
                    value={email}
                    onChange={(event) => [setEmail(event.target.value), setError("")]}
                />

                <FormInput 
                    type="email"
                    placeholder="Confirme seu e-mail"
                    value={emailConfirm}
                    onChange={(event) => [setEmailConfirm(event.target.value), setError("")]}
                />

                <FormInput 
                    type="password"
                    placeholder="Digite sua senha"
                    value={password}
                    onChange={(event) => [setPassword(event.target.value), setError("")]}
                />

                <FormInput 
                    type="password"
                    placeholder="Confirme sua senha"
                    value={passwordConfirm}
                    onChange={(event) => [setPasswordConfirm(event.target.value), setError("")]}
                />

                <LabelError>{error}</LabelError>

                <FormButton Text="Cadastre-se" onClick={handleSignUp}/>

                <LabelSignIn>
                    Já tem uma conta?
                    <Strong>
                        <Link to="/">&nbsp;Entre</Link>
                    </Strong>
                </LabelSignIn>
            </Content>
        </Container>
    );
};