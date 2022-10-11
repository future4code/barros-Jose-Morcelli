console.log("exercicio 1");

const tempCelsius = (temperatura, converte) => {
    if (typeof temperatura === "number") {
        if (converte.toUpperCase() === "F") {
            console.log(`${temperatura}° Celsius equivale a ${temperatura * 1.8 + 32}° Farenheit.`)
        } else if (converte.toUpperCase() === "K") {
            console.log(`${temperatura}° Celsius equivale a ${temperatura + 273.15}° Kelvin.`)
        } else {
            console.log("Escolha 'K' para Kelvin ou 'F' para Farenheit. ")
        }
    } else {
        console.log("Coloque um valor numérico para a temperatura.")
    }
}

tempCelsius(5, "K")
tempCelsius(8, "F")
