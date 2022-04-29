//----------Exercícios de interpretação de código------------

//1)a) O que vai ser impresso no console?
//Matheus Nachtergaele
//Virginia Cavendish
//canal: "Globo", horario: "14h"

//2)a) O que vai ser impresso no console?
//nome:Juca, idade: 3 , raça: SRD
//nome:Juba, idade: 3 , raça: SRD
//nome:JubO, idade: 3 , raça: SRD

//b) O que faz a sintaxe dos três pontos antes do nome de um objeto?
// os tres pontos serve para copiar a variavel completa.

//3)a) O que vai ser impresso no console?
//false
// undefined


//b) Explique o valor impresso no console. Você sabe por que isso aconteceu?
// a pessoa nao é um backender e imprimiu com boleano false, e undefined por conta da altura nao ter um valor definido

//-------------Exercícios de escrita de código-------------------

//1)a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá exatamente 
//três apelidos). 
//Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo:

// Exemplo de entrada
//const pessoa = {
    //nome: "Amanda", 
    //apelidos: ["Amandinha", "Mandinha", "Mandi"]
 //}
 
 // Exemplo de saída
 //"Eu sou Amanda, mas pode me chamar de: Amandinha, Mandinha ou Mandi"

 const pessoa = {
     nome: "Carlos",
     apelidos: ["Carlinhos","Carlão","Carlin"]

 }

console.log(frase(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]},${pessoa.apelidos[1]}
 ou de ${pessoa.apelidos[2]}`))



 //b) Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade nome, mas com uma nova 
//lista de três apelidos. Depois, chame a função feita no item anterior passando como argumento o novo objeto
 
const pessoa2={    
     ...pessoa,
    nome: "Marcos",
    apelidos: ["Marquinhos","Marcão","Marquin"]
}

console.log(`Eu sou ${pessoa2.nome}, mas pode me chamar de: ${pessoa2.apelidos[0]},${pessoa2.apelidos[1]}
 ou de ${pessoa2.apelidos[2]}`)

//2)a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão.
const objeto1={
    nome: "Matheus",
    idade: 26,
    profissão: "Pedreiro",
}

const objeto2={
    nome: "Samanta",
    idade: 23,
    profissão: "Estudante"
}
//b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:
function amigos(objeto1,objeto2){
    let amigo1 = [objeto1.nome, objeto1.nome.length, objeto1.idade, objeto1.profissão, objeto1.profissão.length]
    let amigo2 = [objeto2.nome, objeto2.nome.length, objeto2.idade, objeto2.profissão, objeto2.profissão.length]
    return [amigo1,amigo2]
}
console.log (amigos(objeto1,objeto2))

//3)a) Crie uma variável de escopo global que guarde um array vazio chamada carrinho
let carrinho = []

//b) Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as seguintes propriedades: nome 
//(string) e disponibilidade (boolean - devem começar como true)
const fruta1={
    nome: "banana",
    disponibilidade: true,
}
const fruta2={
    nome: "pera",
    disponibilidade: true,
}
const fruta3={
    nome: "melancia",
    disponibilidade: true,
}
//c) Crie uma função que receba um objeto fruta por parâmetro e coloque-a dentro do array de carrinho. Invoque 
//essa função passando os três objetos criados.
function sacolao (fruta1,fruta2,fruta3){
 carrinho = [fruta1.nome,fruta1.disponibilidade]
 carrinho.push(fruta2.nome,fruta2.disponibilidade,fruta3.nome,fruta3.disponibilidade)
 return [carrinho] 
}

//d) Imprima a variável carrinho e garanta que ela agora seja um array preenchido com três objetos.
console.log(sacolao(fruta1,fruta2,fruta3))