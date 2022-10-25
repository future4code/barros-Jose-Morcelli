console.log("Exercício 6");

type ContaCliente = {
    cliente: string,
    saldoTotal: number,
    debitos: number[]
}

const listaDeClientes = [
	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
]

const mapearDebitos = (lista: ContaCliente[]): ContaCliente[] => {
	const valorAtualizado: ContaCliente[] = lista.map((item)=> {
		let debito: number = item.debitos.reduce((n1: number,n2: number): number => n1 + n2, 0)
		return {cliente: item.cliente, saldoTotal: (item.saldoTotal - debito), debitos: []} 
	}).filter((usuarioDevedor) => {
        return usuarioDevedor.saldoTotal < 0
	})
	  return valorAtualizado
}

console.table(mapearDebitos(listaDeClientes))