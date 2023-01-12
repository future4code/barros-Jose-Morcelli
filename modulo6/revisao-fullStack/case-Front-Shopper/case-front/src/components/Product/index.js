import React from 'react';
import { Myproduct } from './style';

export default function Product() {
 return (
   <Myproduct>
        <p>Mamão Papaia</p>
        <input type="number"/>
        <p>R$: 29,99</p>
        <button>Remover</button>
   </Myproduct>
 );
}