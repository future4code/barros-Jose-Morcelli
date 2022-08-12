import React from "react";
import { useNavigate } from 'react-router-dom';
import { Button, ButtonsDiv, Pages, Title } from "./styles";

function AdminHomePage (){
    const navigate = useNavigate();
    const goToCreateTripPage = () => {
        navigate("/admin/trips/create")
      }
    
      const goToLastPage = () => {
        navigate(-1)
      }
    return(
        <Pages>
      <Title>Painel Administrativo</Title>
      <ButtonsDiv>
      <Button onClick={ goToLastPage}>Voltar</Button>
      <Button onClick={ goToCreateTripPage}>Criar Viagens</Button>
      <Button>Logout</Button>
      </ButtonsDiv>
      </Pages>
    );
}

export default AdminHomePage;