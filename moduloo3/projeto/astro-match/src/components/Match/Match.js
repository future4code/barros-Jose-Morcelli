import axios from "axios";
import React, { useState, useEffect } from "react";
import { MatchContainer, Alerta } from "../../style";

function Match (props) {

    useEffect(() => {
            getMatch()
        },[]
    )
    const [listaMatch, setlistaMatch] = useState([])


    const aluno = 'Jose-barros'
    function getMatch () {
        axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/matches`).then((response) => {
            setlistaMatch(response.data.matches)
            console.log(response.data.matches, listaMatch)
        }).catch((error) => {
           alert('Erro')
        })
    }

    const lista = listaMatch.map((perfil) => {
        return (
            <ul> 
                <li>
                <img src={perfil.photo} alt={perfil.photo_alt}></img>
                <p>{perfil.name}</p>
                </li> 
            </ul>
        )
    })

    function limparMatch () {
        axios.put(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/clear`).then(() => {
            alert("Sem novos Match!")
            setlistaMatch([])
        }).catch(() =>{
            alert(' tente novamente!')
        })
    }

    return (
            <MatchContainer>
            <h1>Meus Matches</h1>
            <div>
                <button onClick={props.voltar}>Voltar</button>
                <button onClick={limparMatch}>Limpar Matches</button>
            </div>
            {listaMatch.length > 0 && lista}
                    {listaMatch.length === 0 && <Alerta>Você não possui match! <br />
                        Continue avaliando os perfis.</Alerta>}
            </MatchContainer>
    )
}

export default Match;