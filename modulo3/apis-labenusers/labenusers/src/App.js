import React, { useEffect, useState } from 'react';
import axios from 'axios';



function App() {

  const [usariosList,setUsuariosList] = useState([])
  const [meuInputName, setMeuInputName] = useState("")
  const [meuInputEmail, setMeuInputEmail] = useState("")
  
  useEffect(()=>{
   getAllUsers()
  },[])

  const getAllUsers = ()=>{

  axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",{
    headers:{
         Authorization: "Jose-Augusto-Barros"
        }
        }).then((response)=>{
          console.log(response.data)
          setUsuariosList(response.data)
        }).catch((error)=>{
          console.log(error.response.data)
        })}

        const atualizaInputName = (event)=>{
        setMeuInputName(event.target.value)
        }

        const atualizaInputEmail = (event)=>{
          setMeuInputEmail(event.target.value)
          }

        const body ={
          "name": meuInputName , 
          "email": meuInputEmail
        }

        const createUser =(event)=>{
          event.preventDefault()
          axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",body,{
            headers:{
            Authorization: "Jose-Augusto-Barros"
          }
          }).then((response)=>{
            console.log(response.data)
            getAllUsers()
          }).catch((error)=>{
            console.log(error)
          })
          setMeuInputName("")
          setMeuInputEmail("")
        }

  return (

    <div className="App">
      <h3>Cadastro do Usuário:</h3>
      {usariosList.map((usuarios)=>{
        return(
          <li key={usuarios.id}>{usuarios.name}{usuarios.email} <button>X</button></li>
          
        )
      })}
      <form>
      <input type="text" placeholder='Nome' value={meuInputName} onChange={atualizaInputName}/>
      <input type="text" placeholder='E-mail' value={meuInputEmail} onChange={atualizaInputEmail}></input>
      <button onClick={createUser}> Criar Usuário </button>
      </form>
    </div>
  );
}

export default App;
