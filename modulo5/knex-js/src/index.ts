import express, { Request, Response} from "express"
import connection from './dataBase/connection'
import cors from 'cors'

const app = express()

app.use(express.json())

app.use(cors())

app.get("/actor",async (req:Request, res:Response) : Promise<void> => {
    const id = req.query.id;
    let result;
    try{
        if(id){
          result = await connection.raw(
                `SELECT * FROM Actor 
                 WHERE id = ${id} `
            )
        }else {
            result = await connection.raw(
                `SELECT * FROM Actor `
            )
        }
          res.status(200).send(result[0])  
    }catch (error : any) {
            console.log(error.message);
            
        }
    }
)

//---------------------------------- Exercício 1 ------------------------------

//a) R: Quando usamos o raw, ele retorna exatamente o que é devolvido pelo MySQL, 
//. Por isso precisamos definir o primeiro retorno da array, para vermos somente a resposta da query.

//b) R:

app.get("/actors", async (req: Request, res: Response): Promise<void> => {
    const nome = req.query.nome
    let errorCode = 400
    let result

    try {
        if (!nome) {
            errorCode = 422
            throw new Error("Informe (nome) como parametro.");
        }

        result = await connection.raw(
            `SELECT * FROM Actor 
            WHERE nome = "${nome}" `
        )
        res.status(200).send(result[0])
        
    } catch (e:any) {
        res.status(errorCode).send(e.message)
    }
})

app.listen(3003, () => {
    console.log("Servidor rodando na porta http://localhost:3003");
});

//c) R: 
app.get("/actors/:gender", async (req: Request, res: Response): Promise<void> => {
    const gender = req.params.gender as string
    let errorCode = 400
    let result

    try {
        if (!gender || (gender !== 'male' && gender !== 'female')) {
            errorCode = 422
            throw new Error("Informe 'male' ou 'female'.");
        }

        result = await connection.raw(`
            SELECT COUNT(*) FROM Actor WHERE gender = "${gender}"
        `)

        res.status(200).send(result[0][0])

    } catch (e:any) {
        res.status(errorCode).send(e.message)
    }

})

//------------------------------ Exercício 2 ------------------------------

//a) R: 
app.put("/actor", async (req:Request, res:Response):Promise<void> => {
    const body = req.body
    let result;
    try {
        await connection("Actor")
        .update({
            salary:body.salary
        })
        .where({
            id:body.id
        })
        res.send("Salário alterado com sucesso!")
    } catch (error:any) {
        res.send(error.message)
    }
})

//b) R:
app.delete("/actor/:id", async (req:Request, res:Response):Promise<void> => {
    let result;
    const id = req.params.id
    try {
        await connection("Actor")
        .where({
            id:id
        })
        .delete()
        res.send("Deletado com sucesso!")
    } catch (error:any) {
        res.send(error.message)
    }
})

//c) R:

//------------------------------Exercício 3 ------------------------------

//a) R: 
app.get("/actorId", async(req:Request, res:Response):Promise<void> => {
    const id = req.query.id as string
    try {
        const actor = await connection("Actor")
        .where({
            id:id
        })
        res.status(200).send(actor)
    } catch (error:any) {
        res.send(error.message)
    }
})