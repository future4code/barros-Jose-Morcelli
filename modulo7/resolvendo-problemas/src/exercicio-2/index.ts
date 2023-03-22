const acountString = (input: string) => {
    const caracter: string[] = [];
    let count = 0;
    for (let i = 0; i < input.length; i++) {
      for (let j = 0; j < input.length; j++) {
        if (input[i] === input[j]) {
          count++;
        }
      }
      const array = caracter.indexOf(input[i]+count);
  
      if(array === -1){
          caracter.push(input[i] + String(count));
          count = 0;
      }
      count = 0;
    }
    let result = "";
    for (const iterator of caracter) {
      result += String(iterator)
    }
  
    return result.length>input.length? input:result;
  };
  
  console.log(acountString("aabcccccaaa"));