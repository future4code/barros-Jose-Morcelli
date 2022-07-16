import logo from "./logo.png"
import './App.css';
import Cabecalho from './components/Cabecalho';
import { FimDePg, InicioDePg, InputGeral, JanelaDeMensagem, LateralD, LateralE, MensagensNaJanela } from './components/style';
import Rodape from "./components/Rodape";

import { useState } from "react";



function App() {

  const [remetente, setRemetente]=useState("")
  const [mensagem, setMensagem]=useState("")
  const [listaMensagens, setListaMensagens]=useState([])

  const historico = listaMensagens.map((valor, index)=>{
    return <li key={index}>
      <p>{valor.rmt}:</p>
      <p>{valor.msg}</p>
      </li>
  })

  const handleInputRemetente= (e)=>{
    setRemetente(e.target.value)
  }

  const handleInputMensagem= (e)=>{
    setMensagem(e.target.value)
  }

  const handleSubmit= (e)=>{
    e.preventDefault()
    const novasMensagens= [...listaMensagens, {rmt: remetente, msg: mensagem}]
    setListaMensagens(novasMensagens)
    setRemetente("")
    setMensagem("")

  }

 return (
  <div className='App'>
    <InicioDePg>
      <Cabecalho imagem={logo} alt="logo" texto="LabZap" />
      </InicioDePg>
    <LateralD/>
    <LateralE/>
    <JanelaDeMensagem>

        <ul>
      {historico}
        </ul>
      
    <InputGeral>
    <input type="text" name='name' value={remetente} placeholder='nome' onChange={handleInputRemetente}></input>
    <input type="text" value={mensagem} placeholder='digite aqui sua mensagem' onChange={handleInputMensagem}></input>
    <button onClick={handleSubmit}>Enviar mensagem</button>
    </InputGeral>
    
    </JanelaDeMensagem>
    <FimDePg>
    <Rodape texto="Copyright © 2022 José Augusto"/> 
    </FimDePg>
  </div>
 ) 
  }
export default App;
