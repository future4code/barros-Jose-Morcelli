import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from '../../hooks/useForm';
import { useRequestData } from '../../hooks/useRequestData';
import { MyOrderForm } from './styled';

export default function Form() {
    const [visebleButtonClient, setVisebleButtonClient] = useState(true)
    //Dados do For
    const [form,onChange,restForm] = useForm({client:"",product:"",qty:1,deliveryDate:""})
    //Dados Clientes
    const [dataClient, isLoadingClient, erroClient, upClient, setUpClient] = useRequestData("http://localhost:3003/clients")
    // Dados Produtos
    const [dataProduct, isLoadingProduct, erroProduct] = useRequestData("http://localhost:3003/products")   
    //Cliente Selecionado 
    const selectClient = !isLoadingClient && dataClient && dataClient.find((dClient) => {
        return dClient.name === form.client 
    })

    const addClient = () => {
        const body = 
        {
            "name": form.client
        }
        axios.post('http://localhost:3003/client',body,{})
            .then((response) =>{
                setUpClient(!upClient)
                console.log(response)
            }
            ).catch((error) =>{
                console.log(error.menssage);
         })
        
    }

    const seleClient = () => {
        setVisebleButtonClient(!visebleButtonClient)
    }
 
    return (
   <MyOrderForm>
        <div>
        {selectClient && !visebleButtonClient && <h1>Cliente: {selectClient.name}</h1>}
        </div>

        <div id="selec-client">

            <label htmlFor='client'> Nome do Cliente </label>
                <input id='client' list='dataClient' name='client' onChange={onChange} value={form.client}></input>
                    <datalist id='dataClient'>
                        {/*<option>José</option>
                        <option>Paula</option>
                        <option>Maria</option>
                        <option>Moacir</option>*/}
                        {isLoadingClient && !dataClient && <option>Carregando...</option>}
                        {!isLoadingClient && dataClient && dataClient.map((client)=>{
                            return <option key={client.id}>
                                    {client.name}
                                </option>
                        })}
                    </datalist>   
                        {!selectClient && (form.client.length > 2) && 
                        <button type='button' onClick={()=>{addClient()}}>Cadastrar Cliente</button>}

                        {selectClient && visebleButtonClient && 
                        <button type='button' onClick={()=>{seleClient()}}>Confirmar</button>}

                        
        </div>

        <div id='select-product'>
            <label htmlFor='product'> Produto </label>
                <input id='product' list='dataProduct'></input>
                    <datalist id='dataProduct'>
                       {/* <option>Mamão</option>
                        <option>Banana</option>
                        <option>Maçã</option>
                    <option>Goiaba</option>*/}
                    {isLoadingProduct && !dataProduct && <option>Carregando...</option>}
                        {!isLoadingProduct && dataProduct && dataProduct.map((product)=>{
                            return <option key={product.id}>
                                    {product.name}
                                </option>
                        })}
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