import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { url } from "../constants/constants";
import { useForm } from "../Hooks/useForm";
import { Button, ButtonsDiv, Pages, SubTitle, Title } from "./styles";

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
            <SubTitle htmlFor="nome">Nome:</SubTitle>
            <input 
            id="nome"
            name="name"
            type="name" 
            placeholder="nome da viagem"
            value={body.name}
            pattern="^.{5}"
            required
            onChange={onChange}
            />
            
            <SubTitle htmlFor="planeta">Planeta:</SubTitle>
            <select>
          <option>Selecione um planeta</option>
          <option>Mercúrio</option>
          <option>Vênus</option>
          <option>Terra</option>
          <option>Marte</option>
          <option>Júpiter</option>
          <option>Saturno</option>
          <option>Urano</option>
          <option>Netuno</option>
           </select>
            
            <SubTitle htmlFor="data">Data:</SubTitle>
            <input 
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
            <input 
            id="descricao"
            name="description"
            type="description" 
            placeholder="descrição"
            value={body.description}
            required
            onChange={onChange}
            />
            <SubTitle htmlFor="duracao">Duração em Dias:</SubTitle>
            <input 
            id="duracao"
            name="duration"
            type="durationInDays" 
            placeholder="duração"
            value={body.duration}
            required
            onChange={onChange}
            />
        <ButtonsDiv>
        <Button type="button" onClick={() => navigate(-1)}>Voltar</Button>
        <Button>Criar</Button>
        </ButtonsDiv>
        </form>
   </Pages>
    )
}