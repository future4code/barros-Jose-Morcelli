import {Request, Response} from 'express'
import { addressInfo } from '../services/addressInfo'


export const getAddressCep = async (req: Request, res: Response) => {
    const {cep} = req.body
    let errorCode = 400

    try {
        if(!cep) {
            errorCode = 422
            throw new Error("Erro! Informe o cep.")
        }

        const address = await addressInfo(cep)
        const result = {
            logradouro: address.logradouro,
            bairro: address.bairro,
            cidade: address.localidade,
            estado: address.uf
        }
        console.log(result)
        res.status(200).send(result)

    } catch (err: any) {
        res.status(errorCode).send(err.message)
    }
}