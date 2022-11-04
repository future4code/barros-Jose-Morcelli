console.log("Exercício 1")

//a) Crie uma variável minhaString do tipo string e atribua um valor a ela. Tente atribuir um número a
// esta variável. O que acontece?

const minhaString: string = "9"

//R: Ele da um erro O tipo 'number' não pode ser atribuído ao tipo 'string'. Ele so aceita o tipo string 
//por estar atribuido apenas o tipo string.

//b) Crie uma variável meuNumero do tipo number e atribua um valor numérico. Como fazer para que essa variável
// também aceite strings? Ou seja, como criamos no typescript uma variável que aceite mais de um tipo de valor?

const meuNumero: number|string = "olá eu sou um numero"

//R: Utilizando o "pipe | " podemos atribuir dois valores a uma variável, podendo ser no caso uma string 
// ou um number

//c) Agora crie um novo objeto. Este objeto é uma pessoa, e deve possuir três propriedades:
//nome, que é uma string;
//idade, que é um número;
//corFavorita, que é uma string.

type Person={
    nome:string,
    idade:number,
    corFavorita:string
}



//d) Modifique a propriedade corFavorita para que apenas seja possível escolher entre as cores do 
//arco-íris. Utilize um enum para isso.

enum ArcoIris {
    RED = "Vermelho",
    ORANGE = "Laranja",
    YELLOW = "Amarelo",
    GREEN = "Verde",
    BLUE = "Azul",
    INDIGO = "Anil",
    VIOLET = "Violeta"
}

//Crie mais três objetos, que também precisam ter apenas os campos definidos acima. Crie um tipo 
// Pessoa para garantir que todos os objetos tenham os mesmos campos.

const pessoa1:Person={
    nome:"José",
    idade:28,
    corFavorita: ArcoIris.GREEN
}

const pessoa2:Person={
   nome:"Paula",
   idade:28,
   corFavorita: ArcoIris.VIOLET
}

const pessoa3:Person={
   nome:"Mizael",
   idade:29,
   corFavorita: ArcoIris.BLUE
}

console.table(pessoa1)