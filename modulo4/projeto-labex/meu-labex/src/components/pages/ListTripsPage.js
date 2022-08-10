import React from "react";
import { useNavigate } from "react-router-dom";

function ListTripsPage (){
    const navigate = useNavigate();
    const goToLastPage = () => {
        navigate(-1)
      }
      const goToLoginPage = () => {
        navigate("/LoginPage")
      }

      const goToApplicationFormPage = () => {
        navigate("/ApplicationFormPage")
      }

    return(
        <section>
        <h1>Lista de Viagens</h1>
      <button onClick={ goToLastPage}>Voltar</button>
      <button onClick={ goToLoginPage}>Login</button>
      <button onClick={ goToApplicationFormPage}>Increva-se</button>
      </section>
    );
}

export default ListTripsPage;