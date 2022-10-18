/*------------------------------------ Exercício 3
Crie uma aplicação Node que receba uma string representando uma tarefa. O programa deve adicionar a nova tarefa em uma variável
que represente uma lista de tarefas. A lista de tarefas pode estar criada antes da execução do código. Após adicionar o item à lista,
exiba a lista atualizada.*/

let novasTarefas = process.argv

const listaTarefas = novasTarefas.filter((item, indice)=>{
    return indice > 1
})

console.log("Nova tarefa adicionada!!!")
console.log(`Tarefas: [${listaTarefas}]`)