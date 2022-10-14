console.log("Exercício 2")

const cor1 = process.argv[2]
const cor2 = process.argv[3]
const cor3 = process.argv[4]

function imprimeTresCoresFavoritas(color1: string, color2: string, color3: string): void {
    
    console.log([color1, color2, color3])
 }

 imprimeTresCoresFavoritas(cor1 ,cor2 ,cor3)