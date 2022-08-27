import React,{useState} from "react";
import * as styles from "../pages/styles"
import { useNavigate } from "react-router-dom";
import { useRequestData } from "../Hooks/useRequestData";
import { useProtectePage } from "../Hooks/useProtectePage";
import deletar from "../../img/deletar.png"
import loading from "../../img/loading.gif"
import marte from "../../img/marte.gif"
import axios from "axios";
import { url } from "../constants/constants";

export const AdminHomePage = () => {
  useProtectePage()
  const navigate = useNavigate()
  const [dataTrip , dataTripIsLoading, erroDataTrip] = useRequestData( `${url}trips` )
  
  const logout = () => {
    localStorage.clear()
    navigate("/login")
  }
  
  const getDetailTrip = (tripName,tripId) => {
    localStorage.setItem("tripId",tripId)
    navigate(`/admin/trips/${tripName}`)
  }
  
  const [header, setHeader ] = useState( {headers: {auth: localStorage.getItem("token")}});
  const deleteTrip = (tripName,tripId) => {
    axios
    .delete(`${url}trips/${tripId}`,header)
    .then( (response) => {
      alert(tripName + " Viagem excluida com sucesso! Pode comemorar.")
    })
    .catch( (error) => {
      alert("Não foi dessa vez!")
    })
  }
  

  const renderListTrip = dataTrip.trips && dataTrip.trips.map( (trip) => {
    return (
      
      <styles.Trip key={trip.id}  >
        <div  onClick={ () => getDetailTrip(trip.name,trip.id)}>
          <h1> {trip.name} </h1>  
        </div>
        <styles.ImagemDeletar onClick={ ()=> deleteTrip(trip.name,trip.id)} src={deletar} />
      </styles.Trip>
    )
  })

  return(
    <styles.Pages>  
     
     <styles.Planet src={marte}></styles.Planet>
      
      <styles.Title>Painel Administrativo</styles.Title>
      { dataTripIsLoading && <img src={loading}/> }
      {!dataTripIsLoading && dataTrip && renderListTrip }
      {!dataTripIsLoading && !dataTrip && erroDataTrip}
    

<styles.ButtonsDiv>
<styles.Button onClick={ logout }>Logout</styles.Button>
<styles.Button onClick={ () => navigate("/admin/trips/create")}>Criar Viagens</styles.Button> 
</styles.ButtonsDiv>
</styles.Pages>
    )
}