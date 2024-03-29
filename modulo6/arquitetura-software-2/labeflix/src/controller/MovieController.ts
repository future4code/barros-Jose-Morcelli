import { Request, Response } from "express";
import {MovieBusiness} from "../business/MovieBusiness"

export class MovieController {
    async create (req: Request, res: Response): Promise<void> {
        try{
            const {id, title, description,duration_in_minutes,year_of_release} = req.body;
            const movieBusiness = new MovieBusiness()
            await movieBusiness.create({id, title, description, duration_in_minutes, year_of_release})

            res.status(201).send({ message: "Filme cadastrado com sucesso!!" });

    }catch(error:any){
        res.status(400).send(error.message);
    }
}
    async getAll(req: Request, res: Response){
        try{
        const movieBusiness = new MovieBusiness()
        const result = await movieBusiness.getAll()


        res.status(201).send(result);
        }catch(error:any){
            res.status(400).send(error.message);
        }
    }

}