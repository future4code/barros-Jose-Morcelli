import express,{Request,Response} from "express"
import {users} from "./data"
import cors from 'cors'
import * as allTypes from './type'

const app = express()

app.use(express.json())

app.use(cors())

//--------------------------------------Exercício 1-------------------------------
app.get("/users",(req: Request ,res: Response ) => {

    try{
        res.status(200).send(users)
    }catch(e){
        res.status(500).send("Erro no servidor! Tente novamente.")
    }
})

//a. Qual método HTTP você deve utilizar para isso?
//R: Utilizei o metodo GET para pegar todos os usuários

//b. Como você indicaria a entidade que está sendo manipulada?
//R: Atravez da URL informada.

//--------------------------------------Exercício 2-------------------------------
app.get("/usersType", (req: Request ,res: Response) => {
    const data = req.query.type
    let errorCode = 400
    let filterType

    try{
        if(data !== allTypes.UserType.ADMIN && data !== allTypes.UserType.NORMAL) {
            errorCode = 422
            throw new Error("Tipo de usuário inválido,insira um valido 'ADMIN' ou 'NORMAL'.")
        } else {
            filterType = users.filter((user) => {
                return user.type === data
            })
            if(filterType.length === 0) {
                errorCode = 404
                throw new Error("Nenhum usuário encontrado.")
            }
        }
        res.status(200).send(filterType)
    } catch(e:any){
        res.status(errorCode).send(e.message)
    }
})

//a. Como você passou os parâmetros de type para a requisição? Por quê?
//R: Passei os parâmetros via query, por ser apenas uma propriedade.

//b. Você consegue pensar em um jeito de garantir que apenas types válidos sejam utilizados?
//R: Eu garanti que os types seriam validos utilizando o if para garantir a segurança dos dados do ENUM.

//--------------------------------------Exercício 3-------------------------------
app.get('/userName',(req: Request,res: Response ) =>{
let errorCode = 400
let filterName

try{

}catch
})

//a. Qual é o tipo de envio de parâmetro que costuma ser utilizado por aqui?
//R:

//b. Altere este endpoint para que ele devolva uma mensagem de erro caso nenhum usuário tenha sido encontrado.
//R:

//--------------------------------------Exercício 4-------------------------------
app.post('/',(req: Request,res: Response ) => {
})

//--------------------------------------------------------------------------------

app.listen(3003, () => {
    console.log("Servidor rodando na porta http://localhost:3003");
});