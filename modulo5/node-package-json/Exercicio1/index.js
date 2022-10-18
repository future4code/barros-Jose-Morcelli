/*-------------------------------------Exercício 1

a) Responda como comentário no seu código: como fazemos para acessar os parâmetros passados na linha 
de comando para o Node?

R: Para passar os parâmetros, devemos digitar o seguinte na linha de comando: 
node ./nome-arquivo.js valor
é necessário atribuir o process.argv[2](numero 2 que seria o indice) à uma variável para poder acessá-la.

b) Crie um programa que receba seu nome e sua idade. Após receber estes valores, imprima no console uma mensagem que siga
a seguinte estrutura:*/

const nomeCliente = process.argv[2]
const idadeCliente = Number(process.argv[3])

const imprimeNomeIdade = (nome, idade) => {
    console.log(`Olá, ${nome}! Você tem ${idade} anos.`)
}

imprimeNomeIdade(nomeCliente, idadeCliente)

/*c) Altere o programa acima para que mostre também a sua idade daqui a sete anos.*/
const imprimeMais7 = (nome, idade) => {
    console.log(`Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${idade + 7} anos.`)
}

imprimeMais7( nomeCliente,idadeCliente)