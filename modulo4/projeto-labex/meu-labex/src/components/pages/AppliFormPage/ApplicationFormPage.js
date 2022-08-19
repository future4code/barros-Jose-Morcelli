import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { country,url } from '../../constants/constants';
import { useRequestData } from '../../Hooks/useRequestData'
import { Button, ButtonsDiv, CaixaInscricao, Inputs, Pages, Selecione, SubTitle, Title } from "../styles";

export const ApplicationFormPage = () => {
  const navigate = useNavigate()
  const [tripName , tripNameIsLoading, errotripName] = useRequestData( `${url}trips` )



  const [ inputName, setInputName] = useState("")
  const [ inputAge, setInputAge] = useState("")
  const [ inputText, setInputText] = useState("")
  const [ inputProfection, setInputProfection] = useState("")
  const [ selectCountry, setSelectCountry] = useState("")



  const submitForm = (event) => {
    event.preventdefault()
  }
  const namesTrips = tripName.trips && tripName.trips.map( name => {
    return <option key={name.id} value={name.id}> {name.name} </option>
  })

  const Countrys = country.map( (name,index) => {
    return  <option key={index} value={name}> {name}  </option>
  })

  return (
    <Pages>
      <Title>Inscreva-se para uma viagem</Title>
      
      <form onSubmit={() => submitForm()}>
        <CaixaInscricao>
        <SubTitle>Viagens:</SubTitle>
        <Selecione>
          <option>Selecione uma viagem</option>
          {namesTrips}
        </Selecione>

        <SubTitle htmlFor="nome">Nome:</SubTitle>
        <Inputs
          id="nome"
          name="name"
          type="name"
          required
          placeholder="Nome:"
          value={inputName}
          onChange={ e => setInputName(e.target.value) }
        />

        <SubTitle htmlFor="Idade">Idade:</SubTitle>
        <Inputs
          id="Idade"
          name="Idade"
          type="age"
          required
          placeholder="Idade:"
          value={inputAge}
          onChange={ e => setInputAge(e.target.value) }
        />

        <SubTitle htmlFor="motivo">Motivo:</SubTitle>
        <Inputs
          id="motivo"
          name="motivo"
          type="text"
          required
          placeholder="Motivo da viagem"
          value={inputText}
          onChange={ e => setInputText(e.target.value) }
        />

        <SubTitle htmlFor="profissao">Profissão:</SubTitle>
        <Inputs
          id="profissao"
          name="profissao"
          type="text"
          required
          placeholder="Profissão"
          value={inputProfection}
          onChange={ e => setInputProfection(e.target.value) }
        />

        <SubTitle htmlFor="paises">Países:</SubTitle>
        <Selecione onChange={ event => setSelectCountry(event.target.value)}>
          <option>Selecione um País</option>
          {Countrys}
        </Selecione>

        </CaixaInscricao>
        <ButtonsDiv>
          <Button onClick={ () => navigate("/trip/list")}>Voltar</Button>
          <Button type="submit">Enviar</Button> 
        </ButtonsDiv>
      </form>
      
    </Pages>
  )
}