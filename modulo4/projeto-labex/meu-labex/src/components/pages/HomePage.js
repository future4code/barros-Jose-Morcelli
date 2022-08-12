import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, ButtonsDiv, Pages, Title } from "./styles";

function HomePage (){
    const navigate = useNavigate();

    const goToListTripsPage = () => {
        navigate("/trips/list")
      }

      const goToAdminHomePage = () => {
        navigate("/login")
      }
    return(
    <Pages>
    <Title>Labe X</Title>
    <ButtonsDiv>
    <Button onClick={ goToListTripsPage}>Ver Viagens</Button>
    <Button onClick={goToAdminHomePage}>Area do Administrador</Button>
    </ButtonsDiv>
    </Pages>
    );
}

export default HomePage;