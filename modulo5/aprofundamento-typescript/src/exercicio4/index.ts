console.log("Exercício-4")

//a) Crie um arquivo chamado exercicio-4.ts , cole o código abaixo e use comentários para responder 
//as questões

type pokemon = {
	name: string,
    types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

//b) Como você faria, já com a extensão instalada, para transpilar(converter) esse arquivo
// typescript em um arquivo javascript?
//R: Com tsc exercicio4.ts

//c) E se este arquivo estivesse dentro de uma pasta chamada src. O processo seria 
//diferente? Se sim, descreva as diferenças
//R: É possível definir o diretório como src por meio do tsconfig.json., dessa forma  
//o comando tsc sozinho iria procurar por todos arquivos dentro da pasta src

//d) Existe alguma maneira de transpilar múltilplos arquivos de uma vez só? Caso conheça, explique como fazer.
//R: É possivel transpilar varios arquivos, colocando o nome de cada arquivo separado por espaços ou 
//só o comando tsc sozinho na pasta com os arquivos.