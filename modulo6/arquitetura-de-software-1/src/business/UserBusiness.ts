import { UserDatabase }  from "../data/UserDataBase";
import { user } from "../types/user";

export class UserBusiness {
  createUser = async (input: any): Promise<void> => {
    try {
      const { name, email, password } = input;

      if (!name || !email || !password) {
        throw new Error(
          'Preencha os campos "name", "email" e "password"'
        );
      }

      if (password.length < 6) {
        throw new Error("Senha muito curta");
      }

      const id: string = Date.now().toString();

      const userDatabase = new UserDatabase();
      const usersBase = await userDatabase.findUser();

      const userExist = usersBase.findIndex((user)=>{
        return user.email === email;
      })

      if(userExist != -1){
        throw new Error("Email já cadastrado!");
      }

      await userDatabase.insertUser({
        id,
        name,
        email,
        password,
      });
    } catch (error:any) {
        throw new Error(error.message)
    }
  };

  findUser = async ():Promise<user[]> => {
    const userDatabase = new UserDatabase();
    const result = await userDatabase.findUser();
    return result;
  };

  deleteUser = async (id:string):Promise<void> => {
    if (!id) {
      throw new Error("id do usuário é obrigatório.");

    }

    const userDatabase = new UserDatabase();
    const usersBase = await userDatabase.findUser();

      const userExist = usersBase.findIndex((user)=>{
        return user.id === id;
      })

      if(userExist === -1){
        throw new Error("Usuário não encontrado!");
      }

     await userDatabase.deleteUser(id)
  };
}