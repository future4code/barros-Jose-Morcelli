console.log("exercício 2 - Cadastro de cliente");

const clientesFieis = [
	{ id: 1, nome: "Fulano" },
	{ id: 2, nome: "Ciclano" },
	{ id: 3, nome: "Beltrano" },
	{ id: 4, nome: "Fulana"}
]

const registrarCliente = (novoCliente) =>{
    const checarId =() =>{
			for(let cliente of clientesFieis){
            if(cliente.id === novoCliente.id){
			return true
			}
	}
}

if(checarId() === true){
	console.log(`Parâmetro inválido ('Id ${novoCliente.id} já existe').`)
} else if(typeof novoCliente.name === "string"){
	clientesFieis.push(novoCliente)
}
}
registrarCliente({ id: 5, name: "Morcelli"})


console.log(clientesFieis)


console.log("exercicio 2 - Geração de tabuada")

const geracaoDeTabuada = (numero) => {

	let multipicacao = 0
	let tabuada = []

	if(typeof numero !== "number" ){
		console.log("Parâmetro inválido ('tem que ser um número')")
	} else if(numero > 10){
		console.log("Parâmetro inválido ('número tem que valer entre 1 e 10')")
	} else {
		for(let i = 0; i <=10; i++){
			multipicacao = `${numero} * ${i} = ${numero * i}`
			tabuada.push(multipicacao)
		}
		console.log(tabuada)
	}
}

geracaoDeTabuada(3)