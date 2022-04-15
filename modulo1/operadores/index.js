//---Exercícios de interpretação de código---

// 1.
const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)     // False

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado)        // False

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)             // True

console.log("d. ", typeof resultado)  // False

// 2.
let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

let soma = Number (primeiroNumero) + Number (segundoNumero)      // No console ele aparece adicionando os dois numeros e nao 
//                                                somando como deveria.

console.log(soma)

// 3. A solução seria a converção do tipo string para number.


//----Exercícios de escrita de código---

// 1. a) Pergunte a idade do usuário

let idadeUsuario = Number(prompt("Qual a sua idade?"))

//b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga

let idadeAmigo = Number(prompt("Qual a idade do seu melhor amigo ou da sua melhor amiga?"))
 
//c) **Imprima na console** a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (`true` ou `false`)

let Sim = true
let Não = false

console.log (prompt("Sua idade é maior do que a do seu melhor amigo?", Sim ))

//d) **Imprima na console** a diferença de idade (não tem problema se sair um número negativo)

console.log (idadeUsuario - idadeAmigo)


// 2.a) Peça ao usuário que insira um número **par**

let valorPar = Number (prompt("Digite um número par" ))



//b) Imprima na console **o resto da divisão** desse número por 2.

console.log (valorPar / 2)

//c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.

console.log("Ele divide o valor corretamente")

//d) O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código

console.log("Com o valor impar ele da um valor, quebrado, que seria o resto")

//3.Faça um programa que pergunte ao usuário sua idade em anos. Depois, imprima no console 

let anosUsuario =  (prompt("Quantos anos você tem?"))

//a) A idade do usuário em meses
let meses = 12
console.log (meses * anosUsuario, "meses")

//b) A idade do usuário em dias
let dias = 365
console.log (dias * anosUsuario, "dias")


//c) A idade do usuário em horas
let horas = 8.760
console.log (horas * anosUsuario, "horas")

//4.Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operações e 
//imprima no console as seguintes mensagens seguidas pelo true ou false:
let primeiroNum = prompt("Digite um número")
let segundoNum = prompt("Digite um segundo numero")


//O primeiro numero é maior que segundo? true
console.log (primeiroNum > segundoNum)

//O primeiro numero é igual ao segundo? false
console.log (primeiroNum === segundoNum)

//O primeiro numero é divisível pelo segundo? true
console.log (primeiroNum !=  segundoNum ) 

//O segundo numero é divisível pelo primeiro? true
console.log (segundoNum != primeiroNum)

//nao consegui fazer os desafios :(
