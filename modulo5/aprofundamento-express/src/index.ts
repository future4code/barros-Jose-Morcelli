import express,{ Request, Response} from "express"
import cors from 'cors'

const app = express()

app.use(express.json())

app.use(cors())

//----------------------------------------Exercício 1----------------------------------------------

app.get("/ping", (req: Request, res: Response) => {          
    res.send("Pong! 🏓")
})

//----------------------------------------Exercício 2----------------------------------------------

type Afazeres = {
    id: number,
    title: string,
    completed: boolean,
    userId: number
}

//----------------------------------------Exercício 3----------------------------------------------

const tipoDeAfazeres: Afazeres[] = [
{
    id: 1,
    title: "Tomar café",
    completed: true,
    userId: 1
},
{
    id: 2,
    title: "Arrumar o quarto",
    completed: true,
    userId: 2
},
{
    id: 3,
    title: "Ir no mercado",
    completed: false,
    userId: 3
},
{
    id: 4,
    title: "Estudar",
    completed: true,
    userId: 4
}
]

//----------------------------------------Exercício 4-------------------------------------------------

app.get("/lista", (req: Request, res: Response) => {
const statusLista = req.query.status
let filtraLista

if (!statusLista) {
    res.status(400).send(" Adicione ao parametro completed 'true' ou 'false'.")
} else if (statusLista === "true") {
    filtraLista = tipoDeAfazeres.filter((afazer)=> {
        return afazer.completed === true
    })
} else if (statusLista === "false") {
    filtraLista = tipoDeAfazeres.filter((afazer)=> {
        return afazer.completed === false
})
} else {
    res.status(400).send("Faltando parametro ao completed. Adicione 'true' ou 'false'.")
    
}
    res.status(201).send(filtraLista)
})

//----------------------------------------Exercício 5------------------------------------------------

app.post("/criar", (req: Request, res: Response) => {
const {id, title, completed, userId} = req.body
let criandoAfazeres = {
    id,
    title,
    completed,
    userId
}

if( !id || !title || !completed === undefined || !userId){
   return res.status(400).send("Adicione os parametros necessários")
}

tipoDeAfazeres.push(criandoAfazeres)
res.status(200).send(tipoDeAfazeres)

})

//----------------------------------------Exercício 6------------------------------------------------

app.put("/editar/:id", (req: Request, res: Response) => {
const fazerId = Number(req.params.id)
const userId = req.headers.authorization

if(!userId) {
    res.status(400).send("Falha!! Preencha o id de usuário!.")
} else if(!fazerId) {
    res.status(400).send("Falha!! Preencha o id tarefa que altera o status.")
    } else {
        for(let i = 0; i < tipoDeAfazeres.length; i ++) {
            if(tipoDeAfazeres[i].id === fazerId) {
                tipoDeAfazeres[i].completed = !tipoDeAfazeres[i].completed
            }
        }
    }
    res.status(200).send(tipoDeAfazeres)
})

//----------------------------------------Exercício 7------------------------------------------------

app.delete("/deletar", (req: Request,res: Response) => {

})

//----------------------------------------Exercício 8------------------------------------------------



app.listen(3003, () => {
    console.log("Servidor Executando em http://localhost:3003")
})