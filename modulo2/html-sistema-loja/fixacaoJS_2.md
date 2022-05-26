~~~javascript
function calculaPrecoTotal(quantidade) {
  // Escreva seu código aqui
let valorUnitario= 0
let valorTotal= 0

    if(quantidade <12){
        valorUnitario= 1.3
    }else{
        valorUnitario= 1.0
    }  
        valorTotal= quantidade * valorUnitario
        return valorTotal
    }
    