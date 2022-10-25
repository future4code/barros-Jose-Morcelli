console.log("Exercício 8");

function operacaoFatorial(palavra: string): number {
    let valor: number = palavra.length
for (let i = 1; i < palavra.length; i ++) {
    valor = valor * i
}
    return valor
}

console.log(operacaoFatorial("sol"));
console.log(operacaoFatorial("mesa"));
console.log(operacaoFatorial("cesta"));
console.log(operacaoFatorial("jantar"));
