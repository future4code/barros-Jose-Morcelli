import React from "react";
import { useNavigate } from "react-router-dom";
import { AstronautaHome, Button, ButtonsDiv, Pages, Title } from "./styles";
import Astronauta from '../../img/Astronauta.gif'

export const HomePage = () => {

  const navigate = useNavigate()

  return(
      <Pages>
        <AstronautaHome src={Astronauta}></AstronautaHome>
        <Title>Labe X - Viajando com as Estrelas </Title>
          <ButtonsDiv>
          <Button onClick={ () => navigate( "/trip/list" )}>Acesso livre</Button>
            <Button onClick={ () => navigate( "/login" )}>Login</Button>
          </ButtonsDiv>
      </Pages>
  )
}