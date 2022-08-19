import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, ButtonsDiv, Pages, Planet, Title } from "./styles";
import marte from "../../img/marte.gif"
import { useProtectePage } from "../Hooks/useProtectePage";
import { url } from "../constants/constants";
import { goToLogin } from "../constants/Coodinator";
import { useRequestData } from "../Hooks/useRequestData";

export const AdminHomePage = () => {

    useProtectePage();
    const navigate= useNavigate()
    const data=useRequestData(`${url}juniorp/trip/reTQKzHx3izgvBMzsFTi`,
    {headers:{
        auth:localStorage.getItem("token")

    }}
    );
    console.log(data);
     const logOut=()=>{
         localStorage.removeItem("token")
         goToLogin(navigate)
     }

    return(
        <Pages> 
            <Planet src={marte}></Planet>
            <Title>Usuários Aceitos</Title> 
            <ButtonsDiv>
             <Button onClick={() => navigate("/login")}>logout</Button>
            <Button onClick={ () => navigate("/admin/trips/id")}>Ver detalhes da lista</Button>
            <Button onClick={ () => navigate("/admin/trips/create")}>Criar novas viagens</Button>
            </ButtonsDiv>
        </Pages>
    )
}