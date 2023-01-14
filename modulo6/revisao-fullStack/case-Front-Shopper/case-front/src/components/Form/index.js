import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { useForm } from '../../hooks/useForm';
import { useRequestData } from '../../hooks/useRequestData';
import { goToEndOrder } from '../../routers/Coordinator';
import { MyOrderForm } from './styled';

export default function Form({ productList, setProductList }) {
    const navigate = useNavigate()
    //botoes visibles
    const [visebleButtonClient, setVisebleButtonClient] = useState(true)
    const [visebleButtonProduct, setVisebleButtonProduct] = useState(true)
    //Dados do For
    const [form,onChange,restForm] = useForm({ client: "", product: "", qty:1, deliveryDate: "" })
    //Dados Clientes
    const [dataClient, isLoadingClient, erroClient, upClient, setUpClient] = useRequestData("http://localhost:3003/clients")
    // Dados Produtos
    const [dataProduct, isLoadingProduct, erroProduct] = useRequestData("http://localhost:3003/products")   
    
    //------------------------------- CLIENTES ----------------------------------------------------
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

    const seleClientButton = () => {
        setVisebleButtonClient(!visebleButtonClient)
    }

 //------------------------------- PRODUTOS ----------------------------------------------------
    
    //Produto Selecionado 
    const selectProduct = !isLoadingProduct && dataProduct && dataProduct.find((dProduct) => {
        return dProduct.name === form.product 
    })
    
    // Add Produto
    const addProduct = () => {
        const newProductAdd = selectProduct
        newProductAdd.qty = form.qty
        setProductList([...productList, newProductAdd])
    }

    //------------------------------- ORDER ----------------------------------------------------------------

    const makeOrder = (e) => {
        e.preventDefault()
        if (!productList || !form.deliveryDate || !selectClient){
            alert("Confira os seus dados")
        } else {
            const deliveryDateDb = `${form.deliveryDate.split("/")[2]}-${form.deliveryDate.split("/")[1]}-${form.deliveryDate.split("/")[0]}`
            const productListDb = productList.map((p) =>{
                return {"id": p.id, "qty": Number(p.qty)}
            })
            const body = {
                "fk_client": Number(selectClient.id),
                "delivery_date": deliveryDateDb,
                "products": productListDb
            }

            axios.post('http://localhost:3003/order',body,{})
            .then((response) => {
                console.log(response)
                goToEndOrder(navigate)
            }
            ).catch((error)=>{
                console.log(error.mensage)
            })

        }
    }
    
    return (
   <MyOrderForm onSubmit={makeOrder}>
        {selectClient && !visebleButtonClient && 
            <div>
                <h1>Cliente: {selectClient.name}</h1>
            </div>
        }

        {selectClient && !visebleButtonClient || 
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
                        <button type='button' onClick={()=>{seleClientButton()}}>Confirmar</button>}

                        
                </div>
        }
        {selectClient && !visebleButtonClient &&
        <div id='select-product'>
            <label htmlFor='product'> Produto </label>
                <input id='product' list='dataProduct' name='product' value={form.product} onChange={onChange}></input>
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
                        <label htmlFor='qty'>Quantidade </label>
                        <input id='qty' type={"number"} name="qty" value={form.qty} onChange={onChange}></input>
                        <p>R$: {selectProduct && parseFloat(selectProduct.price * form.qty).toFixed(2)}</p>
                        
                        {selectProduct && visebleButtonProduct && selectProduct.qty_stock >= form.qty &&
                        <button type='button' onClick={()=>{addProduct()}}> Adicionar </button>
                        }
                        {selectProduct && selectProduct.qty_stock < form.qty && 
                        <h3> Produto sem Estoque! </h3>
                        }
        </div>
                    }
        {productList.length > 0 &&
        <div id='order'>
            <label htmlFor='deliveryDate'> DATA DE ENTREGA (DD/MM/AAAA) </label>
                <input id='deliveryDate' name='deliveryDate' onChange={onChange} value={form.deliveryDate} ></input>
                    <button type='submit'> Confirmar Pedido </button>
        </div>
        }
   </MyOrderForm>
 );
}