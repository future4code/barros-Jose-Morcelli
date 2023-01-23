import { app } from "./app"
import { UserController } from "./controller/UserController"

const userController = new UserController()

app.post('/createUser', userController.createUser)

app.delete('/user/:id', userController.deleteUser)

app.get('/all', userController.findUser)

