//------------------ Exercício 1 -------------------
//a)

const printNumbers = (n: number) => {
    if (n >= 0) {
      printNumbers(n - 1);
      console.log(n);
    }
  };
  console.log(printNumbers(10));
  
  //b)
  
  const printNumbers2 = (n: number) => {
    if (n >= 0) {
      console.log(n);
      printNumbers2(n - 1);
    }
  };
  console.log(printNumbers2(10));

  //------------------ Exercício 2 -------------------

  export const calculateSumTo = (n: number, acc: number = 0): number => {
    if (n === 0) {
      return acc;
    }
    return calculateSumTo(n - 1, acc + n);
  };
  
  console.log(calculateSumTo(2));
  console.log(calculateSumTo(20));
  console.log(calculateSumTo(200));

  //------------------ Exercício 3 -------------------

  export const calculateSumTo2 = (n: number): number => {
    var sum = 0
      for (var i = 0 ; i <= n ; i++) {
          sum += i;
    }
      return sum;
  };
  
  console.log(calculateSumTo2(2));
  console.log(calculateSumTo2(20));
  console.log(calculateSumTo2(200));
  
  //------------------ Exercício 4 -------------------
  
  export const printArray = (arr: number[], i: number = arr.length - 1) => {
    if (i >= 0) {
      printArray(arr, i - 1);
      console.log(`Elemento ${i}: `, arr[i]);
    }
  };
  
  const array = [4, 5, 6, 7];
  console.log(printArray(array));


  
  