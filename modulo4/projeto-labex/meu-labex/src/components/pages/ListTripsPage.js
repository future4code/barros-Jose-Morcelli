import React from "react";
import { useNavigate,useParams } from "react-router-dom";
import { Button, ButtonsDiv, Pages, Title } from "../styles";




export const ListTripPage = () => {

    const navigate = useNavigate()

    return(

        <Pages>
        <Title>Todas as Viagens </Title>
        <ButtonsDiv>
        <Button onClick={ () => navigate(-1)}>Voltar</Button>
        <Button onClick={ () => navigate("/trip/application")}>inscrever-se para viagem</Button>
        </ButtonsDiv>
        </Pages>
    )

}