//------------Exercícios de interpretação de código---------

//1)a) Explique o que o código faz. Qual o teste que ele realiza?
//ele realiza um teste, se o numero que o usuario digitar for par ou = a 0 ele passa no teste.

//b) Para que tipos de números ele imprime no console "Passou no teste"? 
//somente para numeros pares

//c) Para que tipos de números a mensagem é "Não passou no teste"?
// somente para numeros impares

//2)O código abaixo foi feito por uma pessoa desenvolvedora, contratada 
//para automatizar algumas tarefas de um supermercado:

//a) Para que serve o código acima?
//O usuario escolhe uma fruta e o console imprime a fruta escolhida e o valor

//b) Qual será a mensagem impressa no console, se o valor de fruta for "Maçã"?
//O preço da fruta maça é R$ 2.25

//c) Considere que um usuário queira comprar uma Pêra, qual seria a mensagem impressa no console 
//se retirássemos o break que está logo acima do default (o break indicado pelo comentário "BREAK PARA O ITEM c.")?
// O valor da Pêra iria mudar para 5 pois sem o break nao tem um stop entre os valores, por isso é necessario o break,
// antes do default para o valor ser como o indicado 5.5.

//3)a) O que a primeira linha está fazendo?
//Ele pede um numero para o usuario, se esse numero for maior que zero ele aparece a mensagem que o numero passou no teste.

//b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
//Se o valor for o numero 10 ele recebe a mensagem que passou no teste, por ser maior que zero. Agora  sendo -10 como é 
//um valor menor que zero ele da um erro, pois nao possui resposta para valores menores a 0.

//c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
//Sim havera dois erros se nao digitar um valor maior que 0 ele da um erro, pois nao foi afirmado oque seria se fosse
// um numero menor que 0. E o outro erro é console nao consegue ler a variavel indicada.


//----------------------------- Exercícios de escrita de código ----------------------

//1)Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir 
//(apenas maiores de idade).

//a) Faça um prompt para receber a idade do usuário e guarde em uma variável.

//b) Garanta que essa variável é do tipo Number, você deve usar o cast para number para isso.

//c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, 
//imprima no console "Você pode dirigir", caso contrário, imprima "Você não pode dirigir."

let idade=Number(prompt("Qual sua idade?"))

function maiorDe18(idade){
    
    if (idade>=18)
    return "Você pode dirigir!"
     else
    return "Você não pode dirigir!"
}

console.log(maiorDe18(idade))

//2)Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar M (matutino) ou V (Vespertino) 
//ou N (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else

let turno=prompt("Qual turno do dia você estuda? Reponda com M se (matutino) ou V (Vespertino) ou N (Noturno) ").toUpperCase()
  
function turnoDoDia(){

    if (turno === "M")
    return "Bom Dia!"
    if (turno === "V") 
    return "Boa Tarde!"
    if (turno === "N") 
    return"Boa Noite!"

}
console.log(turnoDoDia())


//3)Repita o exercício anterior, mas utilizando a estrutura de switch case agora.

let turnoDeEstudo=prompt("Qual horario do dia você estuda? Reponda com M se (matutino) ou V (Vespertino) ou N (Noturno)").toUpperCase()

    switch (turnoDeEstudo){
        case "M" :
        console.log ("Bom Dia!")
        break
        case "V" :
            console.log("Boa Tarde!")
            break
            case "N" :
                console.log ("Boa Noite!")
                default: 
                    break
    }

//4)Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme com você se ele
//for do gênero fantasia e se o ingresso está abaixo de 15 reais. Faça um código que pergunta ao usuário qual o gênero 
//de filme que vão assistir e outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga vai topar 
//assistir o filme. Caso positivo, imprima no console a mensagem: "Bom filme!", caso contrário, imprima "Escolha outro 
//filme 

let amigoFilme= prompt("Qual gênero de filme você quer assistir?")
let amigoSemDin=Number(prompt("Qual o valor do ingresso?"))
if(amigoFilme === "fantasia" && amigoSemDin <= 15)
{ 

} else {console.log("Escolha outro filme")

}
console.log (`Bom Filme!`)

//-------------------------Desafio ----------------------------

//1)
let amigoQueNaoGostaDeQualquerFilme= prompt("Qual gênero de filme você quer assistir?")
let amigoDuro=Number(prompt("Qual o valor do ingresso?"))
let lanchinho=prompt("Qual lanche você vai querer?")
if(amigoQueNaoGostaDeQualquerFilme === "fantasia" && amigoDuro <= 15)
{ 

} else {console.log("Escolha outro filme")

}
console.log (`Bom Filme! 
E aproveite o seu ${lanchinho}!`)
