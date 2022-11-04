import express, {Request,Response} from "express"
import cors from 'cors'
import { produtos } from "./data"

const app = express()

app.use(express.json())

app.use(cors())

//----------------------------------Exercício 1------------------------------

app.get('/test', (req:Request, res:Response) => {
  res.send
       ("Servidor rodando na porta http://localhost:3003")
  
})

//----------------------------------Exercício 2------------------------------

//R: data.ts

//----------------------------------Exercício 3------------------------------

//R: type.ts

//----------------------------------Exercício 4------------------------------

app.post('/criar', (req:Request, res:Response) => {
    const {name, price} = req.body

    let criandoProdutos = {
        id: Date.now().toString(),
        name,
        price
    }

try {
    if(!name){
        const erro = new Error("Informe o nome do produto")
        erro.name = "dataNameNotFound"
        throw erro
       
    }else if (price === undefined){
        const erro = new Error("Informe o preço do produto")
        erro.name = "dataPriceNotFound"
        throw erro
    }else if (typeof name !== "string") {
        const erro = new Error("Informe o nome do produto no tipo 'string'")
        erro.name = "dataNameNotFound"
        throw erro
    }else if (typeof price !== "number") {
        const erro = new Error("Informe o preço do produto no tipo 'number'")
        erro.name = "dataPriceNotFound"
        throw erro
    }else if (price <= 0){
        const erro = new Error("Informe o preço do produto, maior que zero")
        erro.name = "dataPriceInvalid"
        throw erro
    }
    produtos.push(criandoProdutos)
    res.status(201).send(produtos)
} catch (e: any) {
    if (e.name === "dataNameNotFound"){
        res.status(422).send(e.message)
    } else {
        res.status(500).send(e.message)
}
}
})


//----------------------------------Exercício 5------------------------------

app.get('/lista-produtos', (req: Request, res: Response) => {
    const  procuraProduto = req.query.procura

    if (procuraProduto === undefined) {
        res.status(200).send(produtos)
    } else {
        const produtosAchados = produtos.filter(item => item.name === procuraProduto)
        res.status(200).send(produtosAchados)
    }
})

//----------------------------------Exercício 6------------------------------

app.put('/produtos/:id', (req:Request, res:Response) => {
  const produtoId = req.params.id
  const {name, price} = req.body
  
  try{
      if (produtoId === ':id'){
          const erro = new Error("Informe o id do produto")
          erro.name = "dataIdNotFound"
          throw erro
        }
  const filtrarProduto = produtos.filter(item => item.id === produtoId)
        
  if (filtrarProduto.length === 0) {
    const erro = new Error("Informe o id do produto existente!")
    erro.name = "dataIdNotExistent"
    throw erro
  }else if (name === undefined && price === undefined) {
    const error = new Error("Informe o nome e o preço do produto.")
    error.name = "dataNamePriceNotFound"
    throw error
} else if (price !== undefined && typeof price !== 'number') {
    const error = new Error("Informe o preço do produto no tipo 'number'.")
    error.name = "dataPriceNotFound"
    throw error
} else if (price !== undefined && price <= 0) {
    const error = new Error("Informe o preço do produto, maior que zero.")
    error.name = "dataPriceInvalid"
    throw error
}

for (let produto of produtos) {
    if (produto.id === produtoId) {
        if (name !== undefined) {
            produto.name = name
        } else if (price !== undefined) {
            produto.price = Number(price)
        }
    }
}

res.status(201).send(produtos)

} catch (e: any) {
if (e.name === 'dataNameNotFound') {
    res.status(422).send(e.message)
} else if (e.name === 'IdNotExistent') {
    res.status(404).send(e.message)
} else {
    res.status(500).send(e.message)
}
}
})

//----------------------------------Exercício 7------------------------------

app.delete('/deletar/:id', (req: Request, res: Response) => {
    const produtoId = req.params.id

    try {
        if (produtoId===':id') {
            const erro = new Error('O id do produto não foi informado.')
            erro.name = "dataNotFound"
            throw erro
        }

        const filtrarProduto = produtos.filter(item => item.id === produtoId)

        if (filtrarProduto.length === 0) {
            const erro = new Error('O id do produto não existe.')
            erro.name = "idNonexistent"
            throw erro
        }

        const produtoDeletado = produtos.filter(item => item.id !== produtoId)

        res.status(201).send(produtoDeletado)

    } catch (e: any) {
        if (e.name === 'dataNotFound') {
            res.status(422).send(e.message)
        } else if (e.name === 'IdNonexistent') {
            res.status(404).send(e.message)
        } else {
            res.status(500).send(e.message)
        }
    }
})

//----------------------------------Exercício 8------------------------------
//R: Exercício refatorado no exercício 4.

//----------------------------------Exercício 9------------------------------
//R: Exercício refatorado no exercício 6.

//----------------------------------Exercício 10------------------------------
//R: Exercício refatorado no exercício 7.

app.listen(3003, () => {
    console.log("Servidor rodando na porta http://localhost:3003");
});