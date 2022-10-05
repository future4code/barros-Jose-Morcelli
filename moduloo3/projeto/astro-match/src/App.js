import React, { useState } from 'react';
import GlobalStyle from './globalStyle'
import Card from './components/Card/Card';
import Match from './components/Match/Match'
import { Titulo } from './style';

function App() {
  let conteudo;
  const [boolean, setBoolean] = useState(false)

  function monstraMatches () {
    setBoolean(!boolean)
  }

  if(boolean){
    conteudo = <Match
                  voltar={monstraMatches}
                />
  } else {
    conteudo = <Card
      monstraMatches = {monstraMatches}
    />
  }

  return (
    <div>

      <Titulo>AstroMatch</Titulo>
      <GlobalStyle />
      {conteudo}
    </div>
  );
}

export default App;