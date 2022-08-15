import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, ButtonsDiv, Pages, Title } from "./styles";

function ApplicationFormPage (){
    const navigate = useNavigate();
    const goToLastPage = () => {
        navigate(-1)
      }
    return(
        <Pages>
        <Title>Inscreva-se</Title>
        <select>
        <option>Escolha uma Viagem</option>
        </select>
        <input type="Text" placeholder="Nome"></input>
        <input type="Number" placeholder="idade"></input>
        <input type="Text" placeholder="Texto de Candidatura"></input>
        <input type="Text" placeholder="Profissão"></input>
        <select>
            <option>Escolha um Pais</option>
        </select>
        <ButtonsDiv>
        <Button onClick={ goToLastPage}>Voltar</Button>
        <Button >Criar</Button>
        </ButtonsDiv>
        </Pages>
    );
}

export default ApplicationFormPage;

