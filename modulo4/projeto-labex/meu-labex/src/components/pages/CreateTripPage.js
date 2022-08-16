import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, ButtonsDiv, Pages, Title } from "./styles";

export const CreateTripePage = () => {
    const navigate = useNavigate()
    return (
        <Pages>
        <Title>Criar Viagem</Title>
        <ButtonsDiv>
        <Button onClick={() => navigate(-1)}>Voltar</Button>
        <Button>Criar</Button>
        </ButtonsDiv>
   </Pages>
    )
}