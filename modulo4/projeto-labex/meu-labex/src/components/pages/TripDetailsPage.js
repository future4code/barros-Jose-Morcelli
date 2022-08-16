import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, ButtonsDiv, Pages, Title } from './styles';

export const TripDetailsPage = () => {
    const navigate = useNavigate()
    return(
        <Pages>
            <Title>Lista detalhada</Title>
            <ButtonsDiv>
        <Button onClick={() => navigate(-1)}>voltar</Button>
        </ButtonsDiv>
        
       </Pages>
    )
}