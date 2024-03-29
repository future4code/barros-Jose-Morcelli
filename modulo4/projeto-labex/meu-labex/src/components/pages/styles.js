import styled, { createGlobalStyle } from "styled-components";
import estrelas from '../../img/estrelas.gif'

export const GlobalStyle = createGlobalStyle`
    :root {
    --state-blue: #6A5ACD;
    --white: #f2f2f2;
    --dark-gray: #444444;
    }
    body {
        margin: 0;
        padding: 0;
        background-image: url(${estrelas});
        box-sizing: border-box;
        font-family: 'Jolly Lodger', cursive;
    }`

export const Pages = styled.div`
    margin-top: 30vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`

export const Title = styled.h1`
    color: var(--state-blue);
    font-size: 5rem;
    display: flex;
    justify-content: center;
`
export const SubTitle = styled.label`
color: var(--state-blue);
display: flex;
justify-content: center;
font-size: 25px;
margin: 10px;
`

export const Inputs = styled.input`
display: flex;
justify-content: center;
margin: 20px;
margin-left: 70px;
width: 200px;
border-radius: 20px;
`
export const Selecione = styled.select`
display: block;
justify-content: center;
margin: 20px;
margin-left: 70px;
width: 209px;
border-radius: 20px;
`

export const Button = styled.button`
    background-color: var(--state-blue);
    color: var(--white);
    border-radius: 10px;
    width: 120px;
    margin: 6px;
    padding: 15px;
    border: solid 1px var(--state-blue);
    box-shadow: 3px 1px 8px #aaa;
    font-family: 'DynaPuff', cursive;
    :hover {
        cursor: pointer;
        border: 1px solid var(--state-blue);
        background-color: var(--white);
        color: var(--state-blue)
    }
    :active {
        transform:scale(0.98)
    }
`

export const ButtonsDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 30px;
    gap: 15px;`
    

    export const AstronautaHome = styled.img`
    width: 350px;
    margin: -100px;
    margin-left: 500px;
    `

    export const Planet = styled.img`
    width: 150px;
    margin-top: -160px;
    `

    export const CaixaInscricao = styled.div`
    border: black 2px solid;
    box-shadow: inset 0 0 32px 0 grey, 0 0 32px 0 grey;
    border-radius: 16px;
    background-color: var(--white);
    `

    //--------------------------------------------------------------

    export const Trip=styled.div`
    display: grid;
    text-transform: uppercase;
    font-weight: 700;
    padding: 35px;
    -moz-box-align: center;
    align-items: center;
    width: 35vw;
    grid-template-columns: 85% 15%;
    padding: 10px 5px;
    box-sizing: border-box;
    width: 600px;
    border: var(--state-blue) 2px solid;
    box-shadow: inset 0 0 32px 0 var(--state-blue), 0 0 32px 0 var(--state-blue);
    border-radius: 16px;
    list-style: none;
    line-height: 1.7;
    font-size: 10px;
    font-family: 'DynaPuff', cursive;
    margin: 5px;
    background-color: var(--white);
    :hover{
        cursor: pointer;
        background-color: var(--white);
        border: 1px solid var(--state-blue);
        color: var(--state-blue)
    }
    :active {
        transform:scale(0.98)
    }
    h1{
        margin: 20px;
    }

    `
    export const ImagemDeletar=styled.img`
    width: 60px;
    :hover{
        cursor: pointer;
        width: 57px;
    }
    :active {
        transform:scale(0.98)
    }
    `