import React from "react";
import { useNavigate } from "react-router-dom";

function HomePage (){
    const navigate = useNavigate();

    const goToListTripsPage = () => {
        navigate("/ListTripsPage")
      }

      const goToAdminHomePage = () => {
        navigate("/AdminHomePage")
      }
    return(
    <section>
    <h1>Labe X</h1>
    <button onClick={ goToListTripsPage}>Ver Viagens</button>
    <button onClick={goToAdminHomePage}>Area do Administrador</button>
    </section>
    );
}

export default HomePage;