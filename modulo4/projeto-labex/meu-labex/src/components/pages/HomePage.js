import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, ButtonsDiv, Pages, Title } from "./styles";

export const HomePage = () => {

  const navigate = useNavigate()

  return(
      <Pages>
        <Title>Labe X - Viajando com as Estrelas </Title>
          <ButtonsDiv>
          <Button onClick={ () => navigate( "/trip/list" )}>Acesso livre</Button>
            <Button onClick={ () => navigate( "/login" )}>Login</Button>
          </ButtonsDiv>
      </Pages>
  )
}