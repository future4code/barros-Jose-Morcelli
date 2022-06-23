import imagem from './Eu.png';
import './App.css';

function App() {
  const valor= "Olá! Eu sou José Augusto!"
  function mensagem(){
    alert ("Tenha uma otima noite!")
  }
  return (
    <div className="App">
      <header className="App-header">
        <h3>{valor}</h3>
        <img src={imagem} className="Eu" alt="imagem" />
        <a
          target="_blank">
        </a>
        <p>Este é o meu primeiro site React</p>
        <button onClick={mensagem}>Aperte este botão</button>
      </header>
    </div>
  );
}

export default App;
