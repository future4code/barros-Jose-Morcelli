console.log("Exercício 2");

const tipoDeVariavel1 = 100
const tipoDeVariavel2 = "Ola eu sou uma string"
const tipoDeVariavel3 = true
const tipoDeVariavel4 = [2]

function declaraType(item:any):void {
    console.log(typeof(item))
}

declaraType(tipoDeVariavel1)
declaraType(tipoDeVariavel2)
declaraType(tipoDeVariavel3)
declaraType(tipoDeVariavel4)

