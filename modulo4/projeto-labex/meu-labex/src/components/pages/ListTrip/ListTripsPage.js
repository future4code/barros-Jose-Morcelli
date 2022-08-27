import React from "react";
import { useNavigate } from "react-router-dom";
import { ListTrip, Span, Trips } from "./styles";
import { Title,ButtonsDiv, Button } from "../styles";
import loanding from '../../../img/loading.gif'
import { useRequestData } from '../../Hooks/useRequestData'
import { url } from '../../constants/constants';

export const ListTripPage = () => {
  const navigate = useNavigate()
  const [dataTrip , dataTripIsLoading, erroDataTrip] = useRequestData( `${url}trips` )

  const renderListTrip = dataTrip.trips&&dataTrip.trips.map( (list) => {
    return (
      <ListTrip key={list.id}>
        <li> <Span>Planeta:</Span> {list.planet} </li>
        <li> <Span>Nome:</Span> {list.name}</li>
        <li> <Span>Descrição:</Span> {list.description} </li>
        <li> <Span>Data:</Span> {list.date} </li>
        <li> <Span>Duração:</Span> {list.durationInDays} Dias </li>
      </ListTrip>
    )
  })   


  return(
    <Trips>
      <Title>Lista de Viagens</Title>
      { dataTripIsLoading && <img src={loanding}/> }
      {!dataTripIsLoading && dataTrip && renderListTrip }
      {!dataTripIsLoading && !dataTrip && erroDataTrip}

      <ButtonsDiv>
        <Button onClick={ () => navigate("/")}>Voltar</Button>
        <Button onClick={ () => navigate("/trip/application")}>inscrever-se para viagem</Button>
      </ButtonsDiv>
    </Trips>
  )  
}

