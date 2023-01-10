import React from 'react';
import minimarket from "../../assets/img/minimarket.png"
import { MyHeader, MyLogo } from './styled';

export default function Header() {
 return (
   <MyHeader>

        <MyLogo src={minimarket}/>

   </MyHeader>
 );
}