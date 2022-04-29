
//------------------Exercícios de interpretação de código-----------

// 1)

//a) O que vai ser impresso no console?
//10
//50

//b) O que aconteceria se retirasse os dois `console.log` 
//e simplesmente invocasse a função `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console?
//Provavelmente nao iria ser impresso no console, mas seria resolvida a funcão.

//2)
/*a. Explique o que essa função faz e qual é sua utilidade
Nessa função ela pede um texto para o usuario, com o comparador booleano ele verifica se contem a palavra cenoura 
em maiusculo,minusculo e afirma como true, se nao houver ele responde como false

b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
     i.   `Eu gosto de cenoura` //true
     ii.  `CENOURA é bom pra vista` //true
     iii. `Cenouras crescem na terra` //true
*/

//----------------------------Exercícios de escrita de código------------

//1)Escreva as funções explicadas abaixo:
//a) A função não deve receber nenhum parâmetro e deve imprimir uma 
//   mensagem falando algumas informações sobre você, como: 

//"Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."

//Troque o nome, idade, cidade e se é estudante ou não por informações sobre você. 
//Lembrando que a função não possui entradas, apenas imprime essa mensagem.

function minhasInformaçoes(){
console.log("Eu sou José, tenho 27 anos, moro em São Paulo e sou estudante!")

}
minhasInformaçoes()

//b)  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome (string),
// a idade (number), a cidade (string) e uma profissão (string). 
//Ela deve retornar uma string que unifique todas as informações da pessoa em uma só mensagem com o template:

//Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e sou [PROFISSÃO].

//exemplo
//Para a entrada:  `"Laís"`, `23`, `"São Paulo"` e `"instrutora"`, deve retornar:

//`"Eu sou Laís, tenho 23 anos, moro em Rua Guarapari 190 e sou instrutora."`

function informações(nome, idade, endereço, profissão){
console.log(`Eu sou ${nome}, tenho ${idade}, anos, moro em ${endereço}, e sou ${profissão}`)

}

informações("José","27","Travessa Luis Gonçalves 104","sou promotor")

//2) Escreva as funções explicadas abaixo:

//a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das 
//duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.

function soma (primeiroValor,segundoValor){
     return primeiroValor + segundoValor
}
console.log (soma (50,22))

//b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro 
//número é maior ou igual ao segundo.

function valores (valor1,valor2){
     return valor1 >= valor2
}
console.log (valores(40,16))

//c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não

function parOuImpar(numero){
     return (numero % 2 === 0)    
}
console.log (parOuImpar(44))

//d) Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem,
//juntamente com uma versão dela em letras maiúsculas.

function mensagem (umaMensagem){

return prompt (umaMensagem).toUpperCase()

}
console.log (mensagem("Digite uma mensagem").length)

//3)Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). 
//Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados 
//pelo usuário sendo o argumento. Por fim, mostre no console o resultado das operações:

//Números inseridos: 30 e 3
//Soma: 33
//Diferença: 27
//Multiplicação: 90
//Divisão: 10
