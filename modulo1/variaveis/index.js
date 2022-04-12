
/* 1.

let a = 10
let b = 10

console.log(b)

b = 5                             R: 10 10 5
console.log(a, b)

 2.

let a = 10
let b = 20                       R: 10 10 10
c = a
b = c
a = b

console.log(a, b, c)*/

// 3.

let quantoRecebe = "Você recebe"
let hora = "por hora"
let valor = 5
let p = prompt("Quantas horas você trabalha por dia?")
let t = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${t/p} por hora`)

console.log (quantoRecebe ,valor ,hora)

// a)
let nome = "José"
// b)
let idade = 27
// c)
console.log ( typeof nome ) //string
console.log ( typeof idade ) // number
// d)
let respostaQuestaoD = " Nome gerou um typeof string ,tudo dentro de aspas sao string  e idade typeof number ,que esta sem aspas e é um numero"
// e) 
console.log (respostaQuestaoD)

console.log (nome ,idade)
// f)
let pergunta = prompt("Qual o seu nome?") //string
let perguntaDois = prompt ("Qual sua idade?") //string

// g)
let oi = "Olá"
let vctem = "Você tem"
let vida = "anos!"
console.log (oi ,nome ,vctem ,idade ,vida)

// 2)
// a)
let x = prompt("Você esta de vermelho ?")
let y = prompt("Você gostou da aula de hoje?")
let z = prompt("Você dormiu bem ?")

//b)
let negativo = "Não"
let positivo = "SIM"

console.log (x ,negativo)
console.log (y ,positivo)
console.log (z ,positivo)

// 3)

let a = 10
let b = 25
let c = 0
// Aqui faremos uma lógica para trocar os valores

// Depois de trocados, teremos o seguinte resultado:
console.log("O novo valor de a é", c) // O novo valor de a é 25
console.log("O novo valor de b é", a) // O novo valor de b é 10
console.log("O novo valor de c é", b)

/*let a = c
let b = a
let c = b 

console.log ('O novo valor de a é', c)
console.log ("O novo valor de b é", a)
console.log ("O novo valor de c é", b)*/