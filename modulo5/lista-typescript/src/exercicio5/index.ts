console.log("Exercício 5");

enum ROLE {
    USER = "user",
    ADMIN = "admin"
}

type Usuarios = {
    name: string,
    email: string,
    role : ROLE
}

const listaDeUsuarios: Usuarios[] = [
	{name: "Rogério", email: "roger@email.com", role: ROLE.USER},
	{name: "Ademir", email: "ademir@email.com", role: ROLE.ADMIN},
	{name: "Aline", email: "aline@email.com", role: ROLE.USER},
	{name: "Jéssica", email: "jessica@email.com", role: ROLE.USER},  
	{name: "Adilson", email: "adilson@email.com", role: ROLE.USER},  
	{name: "Carina", email: "carina@email.com", role: ROLE.ADMIN}      
] 

function mostrarEmail(lista : Usuarios[]): string[]{
const filtrar = lista.filter(item => item.role === ROLE.ADMIN)
return filtrar.map(item => item.email)
}

console.log(mostrarEmail(listaDeUsuarios));
