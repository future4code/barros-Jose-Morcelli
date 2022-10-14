console.log("Exercício 1")

function checaTriangulo(a: number, b: number, c: number): string {
    if (a !== b && b !== c) {
      return "Escaleno";
    } else if (a === b && b === c) {
      return "Equilátero";
    } else {
      return "Isósceles";
    }
  }
  
  console.log(checaTriangulo(10, 10, 10));
  console.log(checaTriangulo(20, 20, 30));
  console.log(checaTriangulo(10, 40, 20));

