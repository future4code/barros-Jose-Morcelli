import { Request, Response } from "express"
import  connection  from "../dataBase/connection"

//-----------------------Exercício 1 --------------------------------

 //a)R:
export async function selectAllUsers(): Promise <any> {
    const result = await connection.raw(`
       SELECT * FROM aula48_exercicio;
    `)
 
    return result[0]
 }
 
 export async function filterUsers(name: string): Promise <any> {
    const result = await connection.raw(`
        SELECT * FROM aula48_exercicio WHERE name LIKE '%${name}%';
    `)
 
    return result[0]
 }
 
 
 export const getUsersName = async(req: Request, res: Response): Promise <void> => {
    const name = req.query.name as string
    let errorCode = 400
    let users
 
    try {
 
       if (!name) {
          users = await selectAllUsers()
       } else {
          users = await filterUsers(name)
          if(users.length === 0) {
             errorCode = 404
             throw new Error("Erro! Não existe usuário com esse nome.")
          }
       }
 
       res.status(200).send(users)
 
     } catch (error: any) {
        res.status(errorCode).send(error.message)
     }
  }