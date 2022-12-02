import { Request, Response } from "express"
import connection from "../dataBase/connection"

//-----------------------Exercício 3 --------------------------------

 //R:
export async function selectFiveUsers(offset: number): Promise <any> {
    const result = await connection.raw(`
        SELECT * FROM aula48_exercicio LIMIT 5 OFFSET ${offset};
    `)

    return result[0]
}

export const getUsersPage = async(req: Request, res: Response): Promise <void> => {
    const page = Number(req.query.page)
    let errorCode = 400
    let offset

    try {
        if(!page) {
            offset = 0
        } else {
            offset = 5 * (page -1)
        }

        const users = await selectFiveUsers(offset)
        if(users.length === 0) {
            errorCode = 404
            throw new Error("Erro! Não contém usuários nessa página.")
        }

        res.status(200).send(users)

    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
  }