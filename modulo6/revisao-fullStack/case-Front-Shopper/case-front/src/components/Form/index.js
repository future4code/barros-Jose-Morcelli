import React from 'react';
import { MyOrderForm } from './styled';

export default function Form() {
 return (
   <MyOrderForm>
        <div id="selec-client">
            <label htmlFor='client'> Nome do Cliente </label>
                <input id='client' list='dataClient'></input>
                    <datalist id='dataClient'>
                        <option>José</option>
                        <option>Paula</option>
                        <option>Maria</option>
                        <option>Moacir</option>
                    </datalist>    
                        <button>Confirmar</button>
        </div>

        <div id='select-product'>
            <label htmlFor='product'> Produto </label>
                <input id='product' list='dataProduct'></input>
                    <datalist id='dataProduct'>
                        <option>Mamão</option>
                        <option>Banana</option>
                        <option>Maçã</option>
                        <option>Goiaba</option>
                    </datalist>    
                        <label>Quantidade </label>
                        <input id='qty' type={"number"}></input>
                        <p>R$: 200,00</p>
                        <button> Ok </button>
        </div>

        <div id='order'>
            <label htmlFor='deliveryDate'> DATA DE ENTREGA (DD/MM/AAAA) </label>
                <input id='deliveryDate'></input>
                    <button> Confirmar Pedido </button>
        </div>
   </MyOrderForm>
 );
}