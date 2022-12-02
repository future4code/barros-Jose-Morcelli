import { Request,Response } from "express"
import connection from "../dataBase/connection"

//-----------------------Exercício 2 --------------------------------

 //R:
export async function selectAllUsers(orderby: string): Promise <any> {
    const result = await connection.raw(`
       SELECT * FROM aula48_exercicio ORDER BY ${orderby} ASC;
    `)

    return result[0]
}

export const getUsersOrder = async (req: Request, res: Response) => {
    let orderby = req.query.orderby as string
    let errorCode = 400

    try {
        if(orderby && orderby !== 'type' && orderby !== 'name') {
            errorCode = 404
            throw new Error("Erro! O tipo que foi informado para ordenação não existe.")
        }

        if (!orderby) {
            orderby = 'email'
        }

        const users = await selectAllUsers(orderby)

        res.status(200).send(users)

    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
}