console.log("exercicio 4");

const primeiraLista = [
	{
		nome: "Banana"
	},
	{
		nome: "Laranja"
	},
    {
		nome: "Ameixa"
	}
]

const segundaLista= [
	{
		nome: "Laranja"
	},
	{
		nome: "Cebola"
	},
    {
		nome: "Carambola"
	}
]

const terceiraLista = [...primeiraLista, ...segundaLista]

let listas = terceiraLista.filter((a) => {
	return !this[JSON.stringify(a)] && (this[JSON.stringify(a)] = true);
}, Object.create(null))

console.log(listas)
