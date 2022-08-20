import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { url } from "../constants/constants";
import { useForm } from "../Hooks/useForm";
import { Button, ButtonsDiv, CaixaInscricao, Inputs, Pages, Selecione, SubTitle, Title } from "./styles";

export const CreateTripePage = () => {
    const navigate = useNavigate()
    const [body,onChange,clear]=useForm({ name: "", planet: "", date:"", description:"", duration:""})
   
    const fazerLogin = (event) => {
        event.preventDefault()
        axios.post(`${url}darvas/login`, body).
        then((response)=>{
            console.log(response.data);
        }).catch((error)=>{
            console.log("deu erro")
        })
        clear();
    }
    return (
        <Pages>
            
        <Title>Criar Viagem</Title>
        <form onSubmit={fazerLogin}>
            <CaixaInscricao>
                <br></br>
            <SubTitle htmlFor="nome">Nome:</SubTitle>
            <Inputs 
            id="nome"
            name="name"
            type="name" 
            placeholder="nome da viagem"
            value={body.name}
            minLength="5"
            required
            onChange={onChange}
            />
            
            <SubTitle htmlFor="planeta">Planeta:</SubTitle>
            <Selecione>
          <option>Selecione um planeta</option>
          <option>Mercúrio</option>
          <option>Vênus</option>
          <option>Terra</option>
          <option>Marte</option>
          <option>Júpiter</option>
          <option>Saturno</option>
          <option>Urano</option>
          <option>Netuno</option>
           </Selecione>
            
            <SubTitle htmlFor="data">Data:</SubTitle>
            <Inputs 
            id="date"
            name="date"
            type="date" 
            min={"2023-01-01"}
            placeholder="data"
            value={body.date}
            required
            onChange={onChange}
            />

            <SubTitle htmlFor="descricao">Descrição:</SubTitle>
            <Inputs 
            id="descricao"
            name="description"
            type="description" 
            minLength="20"
            placeholder="descrição"
            value={body.description}
            required
            onChange={onChange}
            />

            <SubTitle htmlFor="duracao">Duração em Dias:</SubTitle>
            <Inputs 
            id="duracao"
            name="durationInDays"
            type="number" 
            min="50"
            placeholder="duração"
            value={body.duration}
            required
            onChange={onChange}
            />

            <br></br>
            </CaixaInscricao>

        <ButtonsDiv>
        <Button type="button" onClick={() => navigate(-1)}>Voltar</Button>
        <Button>Criar</Button>
        </ButtonsDiv>
        </form>
   </Pages>
    )
}