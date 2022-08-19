import { useEffect } from "react"
import {useNavigate} from "react-router-dom"
import { goToLogin } from "../constants/Coodinator"

export function useProtectePage(){
    
    const navigate=useNavigate()
    useEffect(()=>{
        const token=localStorage.getItem("token")
        if (!token){
            goToLogin(navigate)
        }
    },[])

}