import React, { useState } from 'react';
import Post from './components/Post/Post';
import { MyForm, PostContainer } from './style';
import './style.css'



function App() {

  const [listaPost,setListaPost]= useState([
    { nome:'Paulinha',
    foto:'https://picsum.photos/50/50',
    post:'https://picsum.photos/200/150'},
  
    {nome:'Joseph',
    foto:'https://picsum.photos/60/50',
    post:'https://picsum.photos/190/150'},
  
    {nome:'Alef',
    foto:'https://picsum.photos/40/50',
    post:'https://picsum.photos/180/150'},
    
  ])

  const [name,setName]= useState('')
  const [foto,setFoto]= useState('')
  const [msg,setMsg]= useState('')

  const arrayComponentes= listaPost.map((elemento,index)=>{
    return <li key={index}><Post 
    nomeUsuario={elemento.nome} 
    fotoUsuario={elemento.foto} 
    fotoPost={elemento.post}/></li>
    
  })

  const handleName= (e) =>{
    e.preventDefault()
    setName(e.target.value)
  }

  const handleFoto= (e) =>{
    e.preventDefault()
    setFoto(e.target.value)
  }

  const handleMsg= (e) =>{
    e.preventDefault()
    setMsg(e.target.value)
  }

  const handleClick= (e) =>{
    e.preventDefault()
    const novoPost = [...listaPost,{nome: name, foto:"https://picsum.photos/40/50", post:"https://picsum.photos/180/150"}]
    setListaPost(novoPost)
    setName('')
    setFoto('')
    setMsg('')
  }

  console.log(listaPost)

  return(
    <PostContainer>
    <MyForm><input type="text" name='name' value={name} placeholder='nome' onChange={handleName}></input>
    <input type="url" value={foto} placeholder='foto do perfil' onChange={handleFoto}></input>
    <input type="url" value={msg} placeholder='imagem do post' onChange={handleMsg}></input>
    <button onClick={handleClick}>Adicionar</button></MyForm>

    
      
    <ul>{arrayComponentes}</ul>
    </PostContainer>
  )

  
  


}


export default App;
