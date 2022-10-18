console.log("Exercício 2")

//a) Quais são as entradas e saídas dessa função? Copie a função para um arquivo .ts e faça a tipagem desses parâmetros

function obterEstatisticas(numeros:number[]):{} {

    const numerosOrdenados = numeros.sort(
        (a, b) => a - b
    )

    let soma = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

//b) Quais outras variáveis compõem essa função? Explicite a tipagem de todas elas

//R: A entrada tem que ser um number e a saida um objeto, a variavel soma esta sendo tipada como number ao ser atribuida

//c) Crie um type chamado amostra de dados, isto é, um objeto com as propriedades numeros e obterEstatisticas. Abaixo, 
//temos um exemplo de objeto desse tipo, declarado em JavaScript:

type amostraDeDados= {
    maior:number,
    menor:number,
    media:number   
}

const estatisticasObtidas = (numeros:number[]):amostraDeDados => {

    const numerosOrdenados = numeros.sort(
      (a:number, b:number) => a - b
    )
  
    let soma:number = 0
  
    for (let num of numeros) {
      soma += num
    }
  
    const estatisticas:amostraDeDados = {
      maior: numerosOrdenados[numeros.length - 1],
      menor: numerosOrdenados[0],
      media: soma / numeros.length
    }
  
    return estatisticas
  }
  
  console.table(estatisticasObtidas([7,1,9]));