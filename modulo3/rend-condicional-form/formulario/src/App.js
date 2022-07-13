import './App.css';
import Etapa1 from './components/Etapa1';
import Etapa2 from './components/Etapa2';
import Etapa3 from './components/Etapa3';
import Final from './components/Final';
import ButtonProxEtapa from './components/ButtonProxEtapa';
import { useState } from 'react';

function App() {
  
  const [etapa,setEtapa]=useState(1)
let proximaPag;

  
    switch (etapa) {
      case 1:
        proximaPag=<Etapa1></Etapa1>
        break;
      case 2:
      <Etapa2></Etapa2>
        break;
      case 3:
      <Etapa3></Etapa3>
        break;
        default:
        <Final></Final>
        break;

    }
  
  function etapaSeguinte(){
    setEtapa(etapa + 1);
    
  }
  return (
    
    <div className="App">

      <Etapa1></Etapa1>
      <ButtonProxEtapa onClick={etapaSeguinte}></ButtonProxEtapa>
      
      
    </div>
  );
}

export default App;
