/*------------------------------------- Exercício 2
Crie uma aplicação Node que recebe uma string representando uma operação matemática e dois valores numéricos.
O retorno deverá ser o resultado da operação selecionada utilizando os 2 valores fornecidos.*/
const operacao = process.argv[2]
const numero1 = Number(process.argv[3])
const numero2 = Number(process.argv[4])

const rodaOperacao = (operacao, num1, num2) => {
    if (operacao === 'add') {
        return num1 + num2
    } else if (operacao === 'sub') {
        return num1 - num2
    } else if (operacao === 'mult') {
        return num1 * num2
    } else if (operacao === 'div') {
        return num1 / num2
    } else {
        return 'Erro. Nenhuma operação foi encontrada, tente novamente'
    }
}

const valores = rodaOperacao(operacao, numero1, numero2)
console.log(valores)