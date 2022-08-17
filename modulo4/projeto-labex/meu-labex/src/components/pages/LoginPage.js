import React from "react";
import { useNavigate } from "react-router-dom";
import { url } from "../constants/constants";
import { useForm } from "../Hooks/useForm";
import { Button, ButtonsDiv, Pages, SubTitle, Title } from "./styles";
import axios from "axios"

export const LoginPage = () => {
    const navigate = useNavigate()
    const [body,onChange,clear]=useForm({ email: "", password: ""})
   
    const fazerLogin = (event) => {
        event.preventDefault()
        axios.post(`${url}darvas/login`, body).
        then((response)=>{
            console.log(response.data);
        }).catch((error)=>{
            console.log("deu erro")
        })
        clear();
    }

    return(
        <Pages>
            <Title>Area de login</Title>
            <form onSubmit={fazerLogin}>
            <SubTitle htmlFor="email">Digite seu email:</SubTitle>
            <input 
            id="email"
            name="email"
            type="email" 
            placeholder="E-mail"
            value={body.email}
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            required
            onChange={onChange}
            ></input>
            <SubTitle htmlFor="password">Digite sua senha:</SubTitle>
            <input 
            id="password"
            name="password"
            type="password" 
            placeholder="senha"
            value={body.password}
            pattern="^.{3,}"
            required
            onChange={onChange}
            ></input>
            <ButtonsDiv>
            <Button type="button"onClick={ () => navigate("/")}>voltar</Button>
            <Button onClick={ () => navigate("/admin/trip/list")}>Entrar</Button>
            </ButtonsDiv>
            </form>
        </Pages>

    )
} 