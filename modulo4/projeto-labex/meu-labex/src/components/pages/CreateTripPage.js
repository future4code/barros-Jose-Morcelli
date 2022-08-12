import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, ButtonsDiv, Pages, Title } from "./styles";

function CreateTripPage (){
    const navigate = useNavigate();
    const goToLastPage = () => {
        navigate(-1)
      }
    return(
        <Pages>
        <Title>Criar Viagens</Title>
        <ButtonsDiv>
        <Button onClick={goToLastPage}>Voltar</Button>
        </ButtonsDiv>
        </Pages>
    );
}

export default CreateTripPage;