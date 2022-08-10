import React from "react";
import { useNavigate } from "react-router-dom";

function FormPage (){
    const navigate = useNavigate();
    const goToLastPage = () => {
        navigate(-1)
      }
    return(
        <section>
        <h1>Inscreva-se</h1>
        <select>
        <option>Escolha uma Viagem</option>
        </select>
        <input type="Text" placeholder="Nome"></input>
        <input type="Number" placeholder="idade"></input>
        <input type="Text" placeholder="Texto de Candidatura"></input>
        <input type="Text" placeholder="Profissão"></input>
        <select>
            <option>Escolha um Pais</option>
        </select>
        <button onClick={ goToLastPage}>Voltar</button>
        <button >Criar</button>
        </section>
    );
}

export default FormPage;