import { ping } from './endpoints/ping';
import {createClient} from './endpoints/createClients';
import express from 'express';
import cors from 'cors';
import { getAllClients } from './endpoints/allClients';
import { getAllProducts } from './endpoints/allProducts';
import { createOrder } from './endpoints/createOrder';
import { getStock } from './endpoints/stock';

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003,() => {
    console.log('Servidor rodando na porta 3003');
})

app.get('/ping',ping)

//add client
app.post("/client",createClient)

//retorna todos os dados dos clientes
app.get('/clients',getAllClients)

//retorna todos os dados dos produtos
app.get('/products',getAllProducts)

//retorna pedidos
app.post("/order",createOrder)

//retorna estoque
app.get('/stock',getStock)