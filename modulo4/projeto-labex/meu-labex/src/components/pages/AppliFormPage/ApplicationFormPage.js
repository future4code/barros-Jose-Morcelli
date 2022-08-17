import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { country,url } from '../../constants/constants';
import { useRequestData } from '../../Hooks/useRequestData'
import { Button, ButtonsDiv, Pages, Title } from "../styles";

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
      <ButtonsDiv>
      <Button onClick={ () => navigate("/trip/list")}>Voltar</Button>
      
      

      <form onSubmit={() => submitForm()}>
        <select>
          <option>Selecione uma viagem</option>
          {namesTrips}
        </select>
        <input
          required
          placeholder="Nome:"
          type="text"
          value={inputName}
          onChange={ e => setInputName(e.target.value) }
        />
        <input
          required
          placeholder="Idade:"
          type="number"
          value={inputAge}
          onChange={ e => setInputAge(e.target.value) }
        />
        <input
          required
          placeholder="Motivo da viagem"
          type="text"
          value={inputText}
          onChange={ e => setInputText(e.target.value) }
        />
        <input
          required
          placeholder="Profissão"
          type="text"
          value={inputProfection}
          onChange={ e => setInputProfection(e.target.value) }
        />
        <select onChange={ event => setSelectCountry(event.target.value)}>
          <option>Selecione um País</option>
          {Countrys}
        </select>
         <Button type="submit">Enviar</Button> 
      </form>
      </ButtonsDiv>
    </Pages>
  )
}