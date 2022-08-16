import React from "react";
import { useNavigate } from "react-router-dom";
import { ContainerTrips, ListTrip, List, Span } from "./styles";
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
        <List> <Span>Planeta:</Span> {list.planet} </List>
        <List> <Span>Nome:</Span> {list.name}</List>
        <List> <Span>Descrição:</Span> {list.description} </List>
        <List> <Span>Data:</Span> {list.date} </List>
        <List> <Span>Duração:</Span> {list.durationInDays} Dias </List>
      </ListTrip>
    )
  })   


  return(
    <ContainerTrips>
      <Title>Lista de Viagens</Title>
      { dataTripIsLoading && <img src={loanding}/> }
      {!dataTripIsLoading && dataTrip && renderListTrip }
      {!dataTripIsLoading && !dataTrip && erroDataTrip}

      <ButtonsDiv>
        <Button onClick={ () => navigate("/")}>Voltar</Button>
        <Button onClick={ () => navigate("/trip/application")}>inscrever-se para viagem</Button>
      </ButtonsDiv>
    </ContainerTrips>
  )  
}

