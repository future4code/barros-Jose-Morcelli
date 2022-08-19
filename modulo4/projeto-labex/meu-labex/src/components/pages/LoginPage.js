import React from "react";
import { useNavigate } from "react-router-dom";
import { url } from "../constants/constants";
import { useForm } from "../Hooks/useForm";
import { Button, ButtonsDiv, CaixaInscricao, Inputs, Pages, Planet, SubTitle, Title } from "./styles";
import axios from "axios"
import terra from '../../img/terra.gif'
import * as R from "../constants/Coodinator"


export const LoginPage = () => {
    
    const [body,onChange,clear]=useForm({ email: "", password: ""})
    const navigate = useNavigate()
   
    const fazerLogin = (event) => {
        event.preventDefault()
        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/juniorp/login", body).
        then((response)=>{
            console.log(response.data);
            localStorage.setItem("token",response.data.token)
            R.goToTripDetail(navigate)
        })
        .catch((error)=>{
            console.log("deu erro")
        })
        clear();
    }

    return(
        <Pages>
            <Planet src={terra}></Planet>
            <Title>Area de login</Title>
            
            <form onSubmit={fazerLogin}>
        <CaixaInscricao>
            <br></br>
            <SubTitle htmlFor="email">Digite seu email:</SubTitle>
            <Inputs
            id="email"
            name="email"
            type="email" 
            placeholder="E-mail"
            value={body.email}
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            required
            onChange={onChange}
            ></Inputs>

            <SubTitle htmlFor="password">Digite sua senha:</SubTitle>
            <Inputs 
            id="password"
            name="password"
            type="password" 
            placeholder="senha"
            value={body.password}
            pattern="^.{3,}"
            required
            onChange={onChange}
            ></Inputs>
            <br></br>
            </CaixaInscricao>

            <ButtonsDiv>
            <Button type="button"onClick={ () => navigate("/")}>voltar</Button>
            <Button type="submit"onClick={ () => navigate("/admin/trip/list")}>Entrar</Button>
            </ButtonsDiv>
            </form>
        </Pages>

    )
} 