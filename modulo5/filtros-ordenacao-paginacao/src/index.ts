import { app }  from "./app"
import { getUsersName } from "./endpoints/getUsersName"
import { getUsersType } from "./endpoints/getUsersType"
import { getUsersOrder } from "./endpoints/getUsersOrder"
import { getUsersPage } from "./endpoints/getUsersPage"
import { getAllUsers } from "./endpoints/getAllUsers"

 //-----------------------Exercício 1 --------------------------------

 //a)R:
 app.get("/users/filterByName", getUsersName)

 //b)R:
 app.get("/users/:type", getUsersType)

 //-----------------------Exercício 2 --------------------------------

 //R:
 app.get("/users/order", getUsersOrder)

 //-----------------------Exercício 3 --------------------------------

 //R:
 app.get("/users/page,", getUsersPage)

 //-----------------------Exercício 4 --------------------------------

 //R:
app.get("/users/:type", getAllUsers)

