import React from 'react';
import { Myproduct } from './style';

export default function Product({product, productList, setProductList, removeProduct}) {
  const updateQuantidade = (event) => {
        const currenQty = event.target.value
        const productUpdate = productList.map((p)=> {
          if (p.id === product.id) {
            p.qty = currenQty 
          }
          return p
        })
        setProductList(productUpdate)
  }
 return (
   <Myproduct>
        <p>{product.name}</p>
        <input id='qty' type={"number"} name="qty" min="0" max={(product.qty_stock.toString())} value={product.qty} onChange={updateQuantidade}></input>
        <p>R$:{parseFloat(product.price * product.qty).toFixed(2)}</p>
        <button type='button' onClick={()=>{removeProduct(product.id)}}>Remover</button>
   </Myproduct>
 );
}