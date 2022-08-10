import React from "react";
import { useNavigate } from "react-router-dom";

function LoginPage (){
    const navigate = useNavigate();
    const goToLastPage = () => {
        navigate(-1)
      }
    return(
        <section>
        <h1>LoginPage</h1>
        <input type="email" placeholder="E-mail"></input>
        <input type="password" placeholder="Senha"></input>
      <button onClick={ goToLastPage}>Voltar</button>
      <button onClick={""}>Entrar</button>
      </section>
    );
}

export default LoginPage;