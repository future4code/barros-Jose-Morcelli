import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, ButtonsDiv, Pages, Planet, Title } from "./styles";
import marte from "../../img/marte.gif"
import { useProtectePage } from "../Hooks/useProtectePage";
import { url } from "../constants/constants";
import { goToLogin } from "../constants/Coodinator";
import CardTrip from "../CardTrips/CardTrip";
import useRequestDataTrips from "../Hooks/useRequestDataTrips";
import loading from '../../img/loading.gif'

export const AdminHomePage = () => {

    useProtectePage();
    const navigate= useNavigate()
    const [data,isLoading]=useRequestDataTrips(`${url}trips`,
    {headers:{
        auth:localStorage.getItem("token")

    }
    });

    console.log(data);
     const logOut=()=>{
         localStorage.removeItem("token")
         goToLogin(navigate)
     }

    const myTrips=data&&data.trips.map((trip)=>{
        return (
            <CardTrip key={trip.id} name={trip.name}/>
        )
    })

    return(
        <Pages> 
            <Planet src={marte}></Planet>
        <Title>Painel Administrativo</Title> 
        <div>            
            {isLoading&&<img src={loading}/>}
            {!isLoading&&data&&data.trips&&myTrips}
            {!isLoading&&data&&!data.trips&&"Ops! Algo deu errado!"}
        </div>
        
        
        <ButtonsDiv>
         <Button onClick={logOut}>logout</Button>
        <Button onClick={ () => navigate("/admin/trips/create")}>Criar novas viagens</Button>
        </ButtonsDiv>
    </Pages>
    )
}