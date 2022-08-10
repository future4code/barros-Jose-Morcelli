import React from "react";
import { useNavigate } from 'react-router-dom';

function AdminHomePage (){
    const navigate = useNavigate();
    const goToCreateTripPage = () => {
        navigate("/CreateTripPage")
      }
    
      const goToLastPage = () => {
        navigate(-1)
      }
    return(
        <section>
      <h1>Painel Administrativo</h1>
      <button onClick={ goToLastPage}>Voltar</button>
      <button onClick={ goToCreateTripPage}>Criar Viagens</button>
      <button >Logout</button>
      </section>
    );
}

export default AdminHomePage;