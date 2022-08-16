import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, ButtonsDiv, Pages, Title } from "./styles";

export const AdminHomePage = () => {

    const navigate = useNavigate()
    return(
        <Pages> 
            <Title>Usuários Aceitos</Title> 
            <ButtonsDiv>
             <Button onClick={ () => navigate("/login")}>logout</Button>
            <Button onClick={ () => navigate("/admin/trips/id")}>Ver detalhes da lista</Button>
            <Button onClick={ () => navigate("/admin/trips/create")}>Criar novas viagens</Button>
            </ButtonsDiv>
        </Pages>
    )
}