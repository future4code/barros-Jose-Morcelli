import styled from "styled-components";

export const InicioDePg= styled.header`
display: flex;
justify-content: center;
div {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        width: 50px;
        height: 50px;
    }
}`

export const LateralD=styled.aside`
position: fixed;
left: 0;
width: 13%;
height: 100%;
background-color: orange;
`

export const LateralE=styled.aside`
position: fixed;
right: 0;
width: 13%;
height: 100%;
background-color: orange;
`

export const InputGeral=styled.div`
display: flex;
justify-content: center;
bottom: 30px;
position: fixed;
left: 34%;
input{
margin-left: 5px;
width: 130px;
height: 15px;
border-radius: 7px;
}
button{
bottom: 45px;
position: fixed;
left: 64%;
border-radius: 7px;
border: 0px none;
}
`


export const FimDePg=styled.footer`
  background-color: lightgrey;
  padding: 0px;
  margin: 0px;
  bottom: 0px;
  position: fixed;
  width: 100%;
  text-align: center;
  height: 3.5%;
    p{
        margin: 0px;
        height: 2%;
    }
`