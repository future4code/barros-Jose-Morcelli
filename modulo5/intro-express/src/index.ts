import  express, { Request, Response} from 'express'
import cors from 'cors'

const app = express()

app.use(express.json())

app.use(cors())

//---------------------------------------Exercício 1----------------------------------------------------------------

app.get("/", (req: Request, res: Response) => {          
    res.status(200).send("Hello from Express")
})

//---------------------------------------Exercício 2----------------------------------------------------------------

type Usuarios ={
    id: number,
    name: string,
    phone: number,
    email: string,
    website: string
}

//---------------------------------------Exercício 3----------------------------------------------------------------

const users :Usuarios[] = [
    {
        id: 1,
        name: "José",
        phone: 11955984582,
        email: "josé@gmail.com",
        website: "http://josé-barros.com"
    },
    {
        id: 2,
        name: "Paula",
        phone: 11962346437,
        email: "paula@gmail.com",
        website: "http://paula-santos.com"
    },
    {
        id: 3,
        name: "Manoel",
        phone: 1177872277,
        email: "manoel@gmail.com",
        website: "http://manoel-santana.com"
    },
    {
        id: 4,
        name: "Lucas",
        phone: 1335390459,
        email: "lucass@gmail.com",
        website: "http://lucass-dasilva.com"
    },
    {
        id: 5,
        name: "Mizael",
        phone: 1335390459,
        email: "mizael@gmail.com",
        website: "http://mizael-cardozo.com"
    }
]

//---------------------------------------Exercício 4----------------------------------------------------------------

app.get("/users", (req: Request, res: Response) => {          
    
    res.status(200).send(users)
})

//---------------------------------------Exercício 5----------------------------------------------------------------

type Post = {
    id: number,
    title: string,
    body: string,
    userId: number
}

//----------------------------------------Exercício 6----------------------------------------------------------------

//R: Pelo que eu entendi seria melhor criar fora, que somente o id seria possivel criar dentro do array do usuario, 
//o userId no post ja é pra gente verificar e vincular com um usuario, sendo assim nao haveria necessidade ser dentro do array.

const posts: Post[] = [
    {
        id: 1,
        title: "Hello",
        body: "World",
        userId: 1
    },
    {
        id: 2,
        title: "Hello",
        body: "World",
        userId: 2
    },
    {
        id: 3,
        title: "Hello",
        body: "World",
        userId: 3
    },
    {
        id: 4,
        title: "Hello",
        body: "World",
        userId: 4
    },
    {
        id: 5,
        title: "Hello",
        body: "World",
        userId: 5
    },
]

//---------------------------------------Exercício 7----------------------------------------------------------------

app.get('/users/posts', (req: Request, res: Response) => {
  
    res.status(200).send(posts)

})

//---------------------------------------Exercício 8----------------------------------------------------------------

app.get('/users/posts/:userId', (req: Request, res: Response) => {
    
    const userId = req.params.userId;
    const verificaPost = posts.find( post => post.userId === Number(userId));
    const filtrarPost = posts.filter( post => post.userId === Number(userId)); 
    if(!verificaPost){
      return res.status(401).send("Id inexistente! Digite um Id valido!");
    } else {
      return res.status(201).send(filtrarPost);
    }
  
  })

  app.listen(3003, () => {
    console.log("Servidor Executando em http://localhost:3003");
});