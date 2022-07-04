import logo from "./logo.png"
import './App.css';
import Cabecalho from './components/Cabecalho';
import { Cabeca, FimDePg, InicioDePg, InputGeral, Lateraisd, LateraisE, LateralD, LateralE, Rodap } from './components/style';
import Rodape from "./components/Rodape";
import InputRemetente from "./components/InputRemetente";
import InputMsg from "./components/InputMsg";
import Button from "./components/Button";



function App() {
 return (
  <div className='App'>
    <InicioDePg>
      <Cabecalho imagem={logo} alt="logo" texto="LabZap" />
      </InicioDePg>
    <LateralD></LateralD>
    <LateralE></LateralE>
    <InputGeral>
    <InputRemetente texto="Remetente:"/>
    <InputMsg texto="Msg:"/>
    <Button></Button>
    </InputGeral>
    <FimDePg>
    <Rodape texto="Copyright © 2022 José Augusto"/> 
    </FimDePg>
  </div>
 ) 
  }
export default App;
