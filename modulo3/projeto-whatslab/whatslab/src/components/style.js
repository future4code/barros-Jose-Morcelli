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
left: 29%;
input{
    margin-left: 5px;
    border-radius: 7px;
}
input:nth-child(1){
    width: 80px;
}
input:nth-child(2){
    width: 350px;
}
button{
bottom: 50px;
margin-left: 10px;
left: 65%;
border-radius: 7px;
border: 5px none;
}
`

export const JanelaDeMensagem=styled.div`
display: flex;
flex-direction: column;
justify-content: flex-end;
border: 1px solid black;
height: 82vh;
box-sizing: border-box;
width: 700px;
margin: auto;

ul{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px 10px;
    width: 10vw;
    list-style: none;
}
li{
    display: flex;
        align-items: center;
        
        padding-right: 2vw;
}
p:nth-child(1){
    font-weight: bold;
}
p{
    margin-left:1vw;
        text-align: left;
        
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