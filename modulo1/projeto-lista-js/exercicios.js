// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}
console.log (soma (1, 2 ))

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
const altura = prompt('Digite a altura de um retangulo!')
const largura = prompt('Digite a largura de um retangulo!')

console.log(altura * largura)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui

const anoAtual = prompt('Digite o ano atual!')
const anoDeNascimento = prompt('Digite seu ano de nascimento!')

console.log(anoAtual - anoDeNascimento)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
const imc = peso / (altura * altura)
return imc
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
let nome = prompt('Qual seu nome?')
let idade = Number (prompt('Qual sua idade?'))
let email = prompt ('Qual o seu e-mail?')

console.log (`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05 
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
let cor1 = prompt("Qual sua primeira cor favorita?")
let cor2 = prompt("Qual sua segunda cor favorita?")
let cor3 = prompt("Qual sua terceira cor favorita?")

const lista=[cor1,cor2,cor3]
console.log (lista)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  
}


// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
let custo = 3000
let valorIngresso = 100
console.log( custo*valorIngresso)
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}