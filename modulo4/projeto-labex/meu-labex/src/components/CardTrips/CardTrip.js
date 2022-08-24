import React from 'react';
import * as Styles from "../pages/styles"
import deletar from "../../img/deletar.png"

export default function CardTrip({name}) {
 return (
   <Styles.Trip>
      <h1>{name||"Indefinido"}</h1>
      <Styles.ImagemDeletar src={deletar}/>
   </Styles.Trip>
 );
}