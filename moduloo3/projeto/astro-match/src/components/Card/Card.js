import { React, useState, useEffect } from "react";
import axios from "axios";
import {CardContainer} from '../../style'
import Like from '../../Imagens/like.png'
import partido from '../../Imagens/coracao.png'
import Match from '../../Imagens/match.png'

function Card(props) {

    const [perfil, setPerfil] = useState([])
    const [imagem, setImagem] = useState(undefined)
    const [id, setId] = useState(undefined)
    const aluno = 'Jose-barros'

    useEffect(
        () => {
            funcaoPerfil()
        },[]
    )


    function funcaoPerfil ()  {
        axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/person`).then((response) => {
            setPerfil(response.data.profile)
            setImagem(response.data.profile.photo)
            setId(response.data.profile.id)
        }).catch((error) => {
            console.log(error.data)
        })
    }    


function curtir(){
    axios.post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/choose-person`, {
        id: id,
        choice: true
    }).then((response) => {
        funcaoPerfil () 
    }).catch((error) => {
        console.log(id)
    })
}


function naoCurtir(){
    axios.post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/choose-person`, {
        id: id,
        choice: false
    }).then((response) => {
        funcaoPerfil () 
    }).catch((error) => {
        console.log('não deu certo')
    })
}

    return (
        <CardContainer back={imagem}>
            
            <img src={Match} alt='icone de matches' onClick={props.monstraMatches}></img>
                <section>
                    <span />
                    <div>
                        <p>{perfil.name}, {perfil.age}</p>
                        <p>{perfil.bio}</p>
                    </div>
                </section>
            <section>
                <img src={partido} alt='logo deslike' onClick={naoCurtir} />
                <img src={Like} alt='logo coração para dar like' onClick={curtir} />
            </section>
        </CardContainer>
    )
}

export default Card;