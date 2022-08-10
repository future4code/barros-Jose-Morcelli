import React from "react";
import { useNavigate } from "react-router-dom";

function TripPage (){
    const navigate = useNavigate();
    const goToLastPage = () => {
        navigate(-1)
      }
    return(
        <section>
        <h1>Criar Viagens</h1>
        <button onClick={goToLastPage}>Voltar</button>
        </section>
    );
}

export default TripPage;