import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, ButtonsDiv, Pages, SubTitle, Title, Trip } from './styles';
import loading from "../../img/loading.gif"
import useRequestDataTrips from "../Hooks/useRequestDataTrips"
import {url} from "../constants/constants"

export const TripDetailsPage = () => {
    const navigate = useNavigate()
    const pathParams = useParams();
    const tripId = pathParams.id
    const token = window.localStorage.getItem("token")
    const [dataTrip, isLoading, error] = useRequestDataTrips(`${url}trip/${tripId}`, {headers: {
        auth: token
    }})

    const title = dataTrip && <Title key={dataTrip.trip.id}> {dataTrip.trip.name} </Title>

    const listInfo = dataTrip && (
        <Trip key={dataTrip.trip.id}>
                <p>{dataTrip.trip.description}</p>
                <p>{dataTrip.trip.planet}</p>
                <p>{dataTrip.trip.durationInDays} dias | {dataTrip.trip.date}</p>
        </Trip>)
    
    return (
        <Pages>
            <Title>Lista detalhada </Title>
            {isLoading && <img src={loading} alt="Carregando"/>}
            {!isLoading && error && <p>Ocorreu um erro.</p>}
            {!isLoading && dataTrip && <span>{title}</span>}

            {isLoading && <img src={loading} alt="Carregando"/>}
            {!isLoading && error && <p>Ocorreu um erro.</p>}
            {!isLoading && dataTrip && <ul>{listInfo}</ul>}

            <SubTitle>Candidatos Aprovados</SubTitle>

            <SubTitle>Candidatos Reprovados</SubTitle>

            <ButtonsDiv>
        <Button onClick={() => navigate(-1)}>voltar</Button>
        </ButtonsDiv>

            </Pages>
    )}