import React from "react";
import { useNavigate } from "react-router-dom";
import { url } from "../constants/constants";
import { useForm } from "../Hooks/useForm";
import { Button, ButtonsDiv, CaixaInscricao, Inputs, Pages, Planet, SubTitle, Title } from "./styles";
import axios from "axios"
import terra from '../../img/terra.gif'


export const LoginPage = () => {
    
    const [form,onChange,clear]=useForm({ email: "", password: ""})
    const navigate = useNavigate()
   
    const fazerLogin = (event) => {
        event.preventDefault()
        axios.post(`${url}login`, form, {
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then((response)=>{
            window.localStorage.setItem("token", response.data.token)
            navigate("/admin/trips/list")
        })
        .catch((error)=>{
            window.alert("E-mail e/ou senha incorretos. Verifique as informações e tente novamente.")
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
            value={form.email}
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            required
            onChange={onChange}
            autoFocus
            ></Inputs>

            <SubTitle htmlFor="password">Digite sua senha:</SubTitle>
            <Inputs 
            id="password"
            name="password"
            type="password" 
            placeholder="senha"
            value={form.password}
            pattern="^.{3,}"
            required
            onChange={onChange}
            ></Inputs>
            <br></br>
            </CaixaInscricao>

            <ButtonsDiv>
            <Button type="button"onClick={ () => navigate("/")}>voltar</Button>
            <Button type="submit">Entrar</Button>
            </ButtonsDiv>
            </form>
        </Pages>

    )
} 