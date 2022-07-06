import React from 'react';
import Post from './components/Post/Post';
import { PostContainer } from './style';
import './style.css'

const listaPost=[
  { nomeUsuario:'Paulinha',
  fotoUsuario:'https://picsum.photos/50/50',
  fotoPost:'https://picsum.photos/200/150'},

  {nomeUsuario:'Joseph',
  fotoUsuario:'https://picsum.photos/60/50',
  fotoPost:'https://picsum.photos/190/150'},

  {nomeUsuario:'Alef',
  fotoUsuario:'https://picsum.photos/40/50',
  fotoPost:'https://picsum.photos/180/150'},
]

function App() {

  const arrayComponentes= listaPost.map((elemento,index)=>{
    return <li key={index}><Post 
    nomeUsuario={elemento.nomeUsuario} 
    fotoUsuario={elemento.fotoUsuario} 
    fotoPost={elemento.fotoPost}/></li>
    
  })

  console.log(listaPost)

  return(
    <PostContainer>
    <ul>{arrayComponentes}</ul>
    </PostContainer>
  )

  
  


}


export default App;
