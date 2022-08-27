import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { url } from "../constants/constants";
import { useForm } from "../Hooks/useForm";
import { Button, ButtonsDiv, CaixaInscricao, Inputs, Pages, Selecione, SubTitle, Title } from "./styles";

export const CreateTripePage = () => {
    const navigate = useNavigate()
    const [form,onChange,clear]=useForm({ name: "", planet: "", date:"", description:"", durationInDays:""})
    const token = window.localStorage.getItem("token")

    const CreateTrip = (event) => {
        event.preventDefault()
        axios.post(`${url}trips`, form, {
            headers: {
                "Content-Type": "application/json",
                "auth": token
            }
        })
        .then((response) => {
            window.alert("Viagem criada com sucesso!")
            clear()
        })
        .catch((error) => {
            console.log(error.response.data)
        })
    }


    return (
        <Pages>
            
        <Title>Criar Viagem</Title>
        <form onSubmit={CreateTrip}>
            <CaixaInscricao>
                <br></br>
            <SubTitle htmlFor="nome">Nome:</SubTitle>
            <Inputs 
            id="nome"
            name="name"
            type="name" 
            placeholder="nome da viagem"
            value={form.name}
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
            value={form.date}
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
            value={form.description}
            required
            onChange={onChange}
            />

            <SubTitle>Duração em Dias:</SubTitle>
            <Inputs 
            id="durationInDays"
            name="durationInDays" 
            value={form.durationInDays} 
            type="number" 
            placeholder="Duração da viagem em dias" 
            onChange={onChange}
            min={50}
            required
            />

            <br></br>
            </CaixaInscricao>

        <ButtonsDiv>
        <Button onClick={() => navigate(-1)}>Voltar</Button>
        <Button>Criar</Button>
        </ButtonsDiv>
        </form>
   </Pages>
    )
}