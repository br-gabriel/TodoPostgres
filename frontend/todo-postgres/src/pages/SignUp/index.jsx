import React, { useState } from "react";
import { FormInput } from "../../components/FormComponents/FormInput";
import { FormButton } from "../../components/FormComponents/FormButton";
import { Container, Content, Label, LabelError, LabelSignIn, Strong } from "./styles";
import { Link, useNavigate } from "react-router-dom";

export function SignUp() {
    const [email, setEmail] = useState("");
    const [emailConf, setEmailConf] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    
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
                    onChange={(e) => [setEmail(e.target.value), setError("")]}
                />

                <FormInput 
                    type="email"
                    placeholder="Confirme seu e-mail"
                    value={emailConf}
                    onChange={(e) => [setEmailConf(e.target.value), setError("")]}
                />

                <FormInput 
                    type="password"
                    placeholder="Digite sua senha"
                    value={password}
                    onChange={(e) => [setPassword(e.target.value), setError("")]}
                />

                <LabelError>{error}</LabelError>

                <FormButton Text="Cadastre-se" onClick={console.log("handleSignUp")}/>

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