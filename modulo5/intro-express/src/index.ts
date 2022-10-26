import  express, { Request, Response} from 'express'
import cors from 'cors'

const app = express()

app.use(express.json())

app.use(cors())

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});

//---------------------------------------Exercício 1----------------------------------------------------------------

app.get("/", (req: Request, res: Response) => {          
    res.send("Hello from Express")
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


