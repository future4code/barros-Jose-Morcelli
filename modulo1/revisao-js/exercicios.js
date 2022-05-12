// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  const arrayEmOrdem = array.sort((a ,b) => {
if(a > b){
    return a
}
  })
  return arrayEmOrdem
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    const numerosPares = array.filter((numero)=>{
        return (numero % 2 === 0)
})
return numerosPares
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let valoresNovaArray=[]
    array.filter((numero)=>{
        if (numero % 2 === 0){
            valoresNovaArray.push(numero ** 2)
        }
    })
    return  valoresNovaArray
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
let numeroMaior
let numeroMenor
if(num1 > num2){
  numeroMaior = num1
  numeroMenor = num2
}else{ numeroMaior = num2
  numeroMenor = num1
}return {
   maiorNumero: numeroMaior,
   maiorDivisivelPorMenor: numeroMaior % numeroMenor === 0 ? true:false,
   diferenca: numeroMaior - numeroMenor
}
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   paresN= [0]
   i=0
   while(paresN.length < n){ i+=2
     paresN.push(i)
   }
   return paresN
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
if(ladoB === ladoA && ladoB === ladoC && ladoA === ladoC){
  return "Equilátero"
}else if(ladoB !== ladoA && ladoC !== ladoB && ladoC !== ladoA){
  return "Escaleno"
}else{
  return "Isósceles"
}
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  function arrayEmOrdem(a,b){
    return a-b
  }
  array.sort(arrayEmOrdem)
  segundoMaior= array[array.length-2]
  segundoMenor= array[1]
  return [segundoMaior,segundoMenor]
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}