import { Request, Response } from "express"
import connection  from "../dataBase/connection"

//-----------------------Exercício 1 --------------------------------

 //b)R:
export async function selectAllUsers(): Promise <any> {
    const result = await connection.raw(`
       SELECT * FROM aula48_exercicio;
    `)

    return result[0]
 }

 export async function filterUsers(type: string): Promise <any> {
    const result = await connection.raw(`
        SELECT * FROM aula48_exercicio WHERE type = '${type}';
    `)

    return result[0]
 }


 export const getUsersType = async(req: Request, res: Response): Promise <void> => {
    const type = req.params.type as string
    let errorCode = 400
    let users

    try {

        if(type !== ':type' && type.toLowerCase() !== 'cx' && type.toLowerCase() !== 'teacher' && type.toLowerCase() !== 'operations') {
            errorCode = 404
            throw new Error("Erro! O tipo que foi informado não existe.")
        }

        if (type === ':type') {
            users = await selectAllUsers()
        } else {
            users = await filterUsers(type)
            if(users.length === 0) {
                errorCode = 404
                throw new Error("Erro! Não foi possivel encontrar um usuário com esse tipo.")
            }
        }

       res.status(200).send(users)

     } catch (error: any) {
        res.status(errorCode).send(error.message)
     }
  }