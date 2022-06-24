import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import Eu from './components/img/Eu.png'
import Nobel from './components/img/nobel.png'
import Labenu from './components/img/imagem-labenu.png'
import CardPequeno from './components/CardPequeno/CardPequeno';
import gmail from './components/img/gmail.png'
import maps from './components/img/maps.png'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem= {Eu}
          nome="José Augusto" 
          descricao="Oi, eu sou o José Augusto. Sou estudante de Web Full Stack na Labenu."
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/271/271210.png" 
          texto="Ver mais"
        />

        
        <CardPequeno
         imagem= {gmail}
         nome= "E-mail"
         descricao= "josemorcelli1@gmail.com"
         />

         <CardPequeno
         imagem= {maps}
         nome= "Endereço"
         descricao= "Rua Hello World,1994"
          />
        
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem= {Nobel} 
          nome="Nobel do Brasil" 
          descricao="Trabalho como Promotor de Vendas." 
        />
        
        <CardGrande 
          imagem= {Labenu} 
          nome="Labenu" 
          descricao="Atualmente estudando na Labenu curso Web Full Stack." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}
export default App;
