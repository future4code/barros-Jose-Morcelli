import { v4 as generateId } from 'uuid'
import {MovieDatabase} from '../data/MovieDatabase'

export class MovieBusiness{
    async create({title,description, duration_in_minutes,year_of_release}:any): Promise<void>{
        if (!title || !description || !duration_in_minutes || !year_of_release) {
            throw new Error("Dados inválidos (title,description, duration_in_minutes,year_of_release)")
          } 

          const id = generateId()

          const movieDataBase = new MovieDatabase()
          await movieDataBase.create({id, title, description, duration_in_minutes, year_of_release});

    }
async getAll(){
    const movieDataBase = new MovieDatabase()
    const result = await movieDataBase.getAll();
    return result;
}

}