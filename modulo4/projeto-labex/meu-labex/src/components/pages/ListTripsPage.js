import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, ButtonsDiv, Pages, Title } from "./styles";

function ListTripsPage (){
    const navigate = useNavigate();
    const goToLastPage = () => {
        navigate(-1)
      }
      const goToLoginPage = () => {
        navigate("/login")
      }

      const goToApplicationFormPage = () => {
        navigate("/trips/application")
      }

    return(
        <Pages>
        <Title>Lista de Viagens</Title>
        <ButtonsDiv>
      <Button onClick={ goToLastPage}>Voltar</Button>
      <Button onClick={ goToLoginPage}>Login</Button>
      <Button onClick={ goToApplicationFormPage}>Increva-se</Button>
      </ButtonsDiv>
      </Pages>
    );
}

export default ListTripsPage;