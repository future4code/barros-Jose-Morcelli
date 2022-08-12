import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, ButtonsDiv, Pages, Title } from "./styles";

function LoginPage (){
    const navigate = useNavigate();
    const goToLastPage = () => {
        navigate(-1)
      }
    return(
        <Pages>
        <Title>Login</Title>
        <input type="email" placeholder="E-mail"></input>
        <input type="password" placeholder="Senha"></input>
        <ButtonsDiv>
      <Button onClick={ goToLastPage}>Voltar</Button>
      <Button onClick={""}>Entrar</Button>
      </ButtonsDiv>
      </Pages>
    );
}

export default LoginPage;