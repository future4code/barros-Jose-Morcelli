//--------------Exercícios de interpretação de código-------------

//1)a) O que vai ser impresso no console?
//Toda a array !

//2)a) O que vai ser impresso no console?
// Somente os nomes listados da array

//3)a) O que vai ser impresso no console?
//Somente os apelidos que nao sao Chijo.

//-------------------Exercícios de escrita de código--------------

//1)Dado o seguinte array de cachorrinhos que são clientes de um pet shop, 
//realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

 //a) Crie um novo array que contenha apenas o nome dos doguinhos
const nomesDosPets = pets.map((pets,indice,array)=>{
console.log(pets.nome)
})

 //b) Crie um novo array apenas com os cachorros salsicha
 const cachorrosSalsicha = pets.filter((pets,indice,array)=>{
if(pets.raca === "Salsicha")
    console.log(pets)
 })

 //c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. 
 //A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a [NOME]!"
 const descontoPoodles = pets.filter((pets)=>{
     if(pets.raca === "Poodle")
     console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a `,pets.nome )
 })
    
 //2)Dado o seguinte array de produtos, realize as operações pedidas nos itens abaixo utilizando as 
 //funções de array map e filter:

 const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]
 //a) Crie um novo array que contenha apenas o nome de cada item
const nomeDeProdutos = produtos.map((produtos)=>{
    console.log(produtos.nome)
})

 //b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em 
 //todos eles
 const descontoProdutos = produtos.map((produtos)=>{
if(produtos.preco - 5)
console.log(produtos)
 })

 //c) Crie um novo array que contenha apenas os objetos da categoria Bebidas
 const apenasBebidas = produtos.filter((produtos,index,array)=>{
     if(produtos.categoria === `Bebidas`){
     return(produtos)
     }
    })
console.log (apenasBebidas)

 //d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"
 const apenasYpe = produtos.filter((produtos)=>{
    return(produtos.nome.includes ("Ypê"))    
    })

console.log(apenasYpe)
 //e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". Esse array deve conter frases 
 //apenas dos itens cujo nome contenha a palavra "Ypê"
const promocaoYpe=produtos.filter((produtos)=>
{
return produtos.nome.includes("Ypê")}).map((produtos)=>
{return `Compre ${produtos.nome} por ${produtos.preco}`})

console.log(promocaoYpe)