import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";

export class UserController {
  createUser = async (req: Request, res: Response): Promise<void> => {
    try {
      const input: any = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      };

      const userBusiness = new UserBusiness();
      await userBusiness.createUser(input);

      res.status(201).send({ message: "Usuário criado!" });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };

  findUser = async (req: Request, res: Response): Promise<void> => {
    try {
      const userBusiness = new UserBusiness();
      const result = await userBusiness.findUser();
      res.status(200).send(result);
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };

  deleteUser = async (req:Request, res:Response):Promise<void> => {
    try {
      const id = req.params.id;
      console.log(id);

      const userBusiness = new UserBusiness();
      await userBusiness.deleteUser(id);
      res.status(200).send({ message: "Usuário deletado!" });
    } catch (error:any) {
      res.status(400).send(error.message);
    }
  };
}