//--------------Exercícios de interpretação de código---------------

//1) O que o código abaixo está fazendo? Qual o resultado impresso no console?
//Ele esta contando ate o valor inferior a cinco e somando o valor de i que da 10.Valor impresso é 10.

//2)a) O que vai ser impresso no console?
// os numeros apos o 18 [19, 21, 23, 25, 27, 30]

//b) Se eu quisesse acessar o índice de cada elemento dessa lista, o for...of... é suficiente? Se sim, 
//o que poderia ser usado para fazer isso?
//sim

//3)Qual seria o resultado impresso no console, se o usuário digitasse o número 4 ?
//*
//** 
//*** 
//**** 

//------------Exercícios de escrita de código------------------------

//1)Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável.
let bichinhosDeEstimacao=Number(prompt("Quantos bichinhos de estimação você tem?"))
//let valorBichinhosUsuario= 0
let nomesBichinhos = []
//a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"
 if(bichinhosDeEstimacao === 0){
	console.log("Que pena! Você pode adotar um pet!")

//b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e 
//guarde esses nomes em um array
}else
 for(let nome= 0 ; nome < bichinhosDeEstimacao; nome++){
	nomesBichinhos.push(prompt("Digite o nome deles:"))
}

//c) Por fim, imprima o array com os nomes dos bichinhos no console
console.log(nomesBichinhos)

//2)Considere que você tenha acesso a um array  (chamado de 'array original') que é composto somente 
//de números. Baseando-se nisso, crie uma função para cada um dos itens abaixo, realizando as operações pedidas:
let arrayOriginal =[10,22,54,78,99,114,132,154]
//a) Escreva um programa que imprime cada um dos valores do array original.
for(let i = 0; i < 8; i++){
	let numeros= arrayOriginal[i]
		console.log(numeros)
	}
//b) Escreva um programa que imprime cada um dos valores do array original divididos por 10
for (valor of arrayOriginal){
	let divisao = valor / 10
	console.log(divisao)
}

//c) Escreva um programa que crie um novo array contendo, somente, os números pares do array original e imprima 
//esse novo array
for (valor of arrayOriginal){
if	((valor % 2)=== 0){
	novaArray = [...arrayOriginal]
}
}
console.log(novaArray)
//d) Escreva um programa que crie um novo array contendo strings, da seguinte forma: "O elemento do índex i é: numero". 
//Depois, imprima este novo array.
for (let i = 0; i < arrayOriginal.length;i++){
	console.log(`O elemento do índex ${i} é: ${arrayOriginal[i]}`)
}

//e) Escreva um programa que imprima no console o maior e o menor números contidos no array original
let valorMaximo = 0
let valorMinimo = arrayOriginal[0]

for(numero of arrayOriginal){
	if(numero > valorMaximo){
		 valorMaximo= numero
	}else if (numero < valorMinimo){
		numero= valorMinimo
	}
}
console.log(`O maior número é: ${valorMaximo} e o menor é: ${valorMinimo}`)