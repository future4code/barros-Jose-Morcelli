import styled from "styled-components";

export const Titulo = styled.h1`
color: #191970;
:hover {
  color: black;
}`

export const CardContainer = styled.section`
    width: 70vh;
    min-height: 550px;
    background: transparent;
    border-style: solid;
    border-width: 4px 4px 4px 4px;
    border-color: black;
    border-radius: 0.9rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    align-content: center;
    background-color: #000080;
    img:nth-child(1){
        width: 200px;
        align-self: flex-end;
        margin-right: 105px;
    }
    section:nth-child(2){
        width: 90%;
        height: 400px;
        span{
        background-image: url(${props => props.back});
        background-position: center;
        background-size: cover, contain;
        background-repeat: no-repeat;
        -webkit-box-shadow: inset 0px -136px 64px -11px rgba(38,38,38,1);
        -moz-box-shadow: inset 0px -136px 64px -11px rgba(38,38,38,1);
        box-shadow: inset 0px -136px 64px -11px rgba(38,38,38,1);
        width: 100%;
        height: 100%;
        display: block;
        }
    div{
        margin: -100px auto 0 auto;
        padding: 0 20px;
        p{
            color: orange;
            font-size: 24px;
        }
    }
    }
    section:nth-child(3){
        display: flex;
        width: 100%;
        justify-content: space-around;
        img{
            width: 55px;
            height: 55px;
            margin-top: 20px;
            cursor: pointer;
            
        }
    }   
`

export const MatchContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
    width: 70vh;
    min-height: 550px;
    background: transparent;
    border-style: solid;
    border-width: 4px 4px 4px 4px;
    border-color: black;
    border-radius: 0.9rem;
    align-items: center;
    background-color: #000080;
    h1{
        color: darkorange;
    }
    div {
        display: flex;
        justify-content: space-around;
        width: 100%;
    }
    button{
        width: 100px;
        height: 40px;
        border-radius: 20%;
        :hover{
            background-color: #FF8C00;
        }
    }
    ul{
        width: 50%;
        
        li {
            display: flex;
            list-style: none;
            align-items: center;
            justify-content: space-between;
            p {
                font-size: 22px;
                color: orange;
            }
        }
    }
        
    img{
        width: 70px;
        height: 70px;
        border-radius: 30%;
        
    }
    p {
        font-size: 26px;
        text-align: center;
        padding: 10px 30px;
    }
`
export const Alerta = styled.p`
            font-size: 22px;
        text-align: center;
        padding: 100px 30px;`