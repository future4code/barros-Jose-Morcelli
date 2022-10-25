console.log("Exercício 7");

type Produto = {
    nome: string,
    quantidade: number,
    valorUnitario: number
}

const ajustaPreco = (preco :number): string => {
	const valorAjustado: string = preco.toFixed(2).replace('.', ',')
	return "R$ "+valorAjustado
}

const estoque = [
	{ nome: "MacMugffin", quantidade: 37, valorUnitario: 51.040},
	{ nome: "Vassoura voadora", quantidade: 56, valorUnitario: 210.0},
	{ nome: "Laço da verdade", quantidade: 32, valorUnitario: 571.5},
	{ nome: "O precioso", quantidade: 1, valorUnitario: 9181.923},
	{ nome: "Caneta de 250 cores", quantidade: 123, valorUnitario: 17},
	{ nome: "Plumbus", quantidade: 13, valorUnitario: 140.44},
	{ nome: "Pokebola", quantidade: 200, valorUnitario: 99.9915}
]

type NovoProduto = {
    nome: string
    quantidade: number,
    valorUnitario: string

}

const comparacaoQuantidade = ((item1: Produto,item2: Produto): number =>{
    if(item1.quantidade < item2.quantidade)
    return -1
    if(item1.quantidade > item2.quantidade)
    return 1
    return 0
})

const arrumandoEstoque = ((lista: Produto[]): NovoProduto[] =>{
    estoque.sort(comparacaoQuantidade)
const mapProdutos: NovoProduto[] = estoque.map((item)=>{
    return {nome: item.nome, quantidade: item.quantidade, valorUnitario:(ajustaPreco(item.valorUnitario))}
})
    return mapProdutos
})

console.table(arrumandoEstoque(estoque))