//------Exercícios de interpretação de código-----

//1)
let array
console.log('a. ', array)    //undefined

array = null
console.log('b. ', array)  // null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)   // soma dos caracteres 11

let i = 0
console.log('d. ', array[i]) // ele mostra o primeiro da lista que é o 3

array[i+1] = 19
console.log('e. ', array)// ele trocou o 4 pelo 19 da lista

const valor = array[i+6] // ele mostra o 9 que é o i+6 da lista
console.log('f. ', valor)

//2)
let frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
// SUBI NUM ÔNIBUS EM MIRROCOS 27 - a frase foi imprimida em maiuscula e o "A" substituido por "I" 
// e a contagem de caracteres por ultimo

// ----------------Exercícios de escrita de código-----------

//1)Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, Imprima no console a seguinte mensagem:
//O e-mail `emailDoUsuario` foi cadastrado com sucesso. Seja bem-vinda(o), `nomeDoUsuario`!

let emailDoUsuario= prompt("Digite seu e-mail")
let nomeDoUsuario= prompt("Digite seu usuario")
console.log ("O e-mail " +emailDoUsuario+ " foi cadastrado com sucesso. Seja bem-vinda(o)," +nomeDoUsuario+"!")

//2)Faça um programa que contenha um array com 5 das suas comidas preferidas, 
//armazenado em uma variável. Em seguida, siga os passos:

//a) Imprima no console o array completo
let comidasFavoritas=["torta","chocolate","esfiha","pizza","sorvete"]
console.log (comidasFavoritas);

//b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas,
// **uma embaixo da outra**.
console.log (`Essas são as minhas comidas preferidas:
torta
chocolate
esfiha
pizza
sorvete`)

//c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela 
//inserida pelo usuário. Imprima no consolea nova lista

let comidaUsuario = (prompt("Qual sua comida preferida?"))
comidasFavoritas[1]= comidaUsuario
console.log(comidasFavoritas)

//3)Faça um programa, seguindo os passos:

//a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`
array =[]
//b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array
let tarefa1 =prompt("Digite uma tarefa que precise realizar no dia")
let tarefa2 =prompt("Digite uma segunda tarefa que precise realizar no dia")
let tarefa3 =prompt("Digite uma terceira e ultima tarefa que precise realizar no dia")
//c) Imprima o array no console
let tarefaUsuario = ("Essas são suas tarefas do dia :")
console.log (tarefaUsuario)
let listaDeTarefas= [tarefa1,tarefa2,tarefa3]
console.log (listaDeTarefas)

//d) Peça ao usuário q digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2
let usuarioEscolha=(prompt("Digite o indice de uma tarefa que ja realizou : 0,1 ou 2"))

//e) Remova da lista o item de índice que o usuário escolheu.gel
listaDeTarefas.splice(usuarioEscolha,1)

//f) Imprima o array no console

console.log (listaDeTarefas)
//----------Desafios-------

//1. Receba uma frase e retorne um array onde cada elemento é uma das palavras da frase, ignorando os espaços
<<<<<<< HEAD
let fraseUsuario = prompt("Digite uma bela frase!").trim
console.log (fraseUsuario)
let resultadoFrase= [fraseUsuario,fraseUsuario]
=======
frase = prompt("Digite uma bela frase!").trim
console.log (frase)
let resultadoFrase= [frase,frase]
>>>>>>> 79fef98f0d48f90751c8d5018b0238b2d2cc09b9
console.log(resultadoFrase)

//2. Dado o array `["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]`, faça um programa 
//que acha o índice da palavra Abacaxi e imprime tanto o índice quanto o tamanho do array

let listaDeFrutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
console.log (listaDeFrutas.includes("Abacaxi"))
console.log (listaDeFrutas.length)
