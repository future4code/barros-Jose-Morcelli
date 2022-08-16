import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, ButtonsDiv, Pages, SubTitle, Title } from "./styles";


export const LoginPage = () => {
    const navigate = useNavigate()

    return(
        <Pages>
            <Title>Area de login</Title>
            <form>
            <SubTitle htmlFor="email">Digite seu email:</SubTitle>
            <input type="email" placeholder="E-mail"></input>
            <SubTitle htmlFor="password">Digite sua senha:</SubTitle>
            <input type="password" placeholder="senha"></input>
            <ButtonsDiv>
            <Button onClick={ () => navigate("/")}>voltar</Button>
            <Button onClick={ () => navigate("/admin/trip/list")}>Entrar</Button>
            </ButtonsDiv>
            </form>
        </Pages>

    )
} 