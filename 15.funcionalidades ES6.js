//  Novos recursos ES6.

//  Vetor de números.

const listadenumeros =  [ 1 , 2 ,3 ,4 ,5]

console.log("Exibindo números do vetor: ")
console.log(listadenumeros)

console.log("\nMultiplicando números do vetor: ")
//  MAP = OPERAÇÃO MATEMATICA E DEPOIS SUBTITUIR O VALOR.
const dobrados =  listadenumeros.map(n => n  * 2)
console.log(dobrados)

console.log("\nFiltrar números pares do vetor: ")
const pares = listadenumeros.filter(n => n % 2 == 0)
console.log(pares)


console.log("\nSomando todos os números do vetor: ")
const soma  = listadenumeros.reduce((soma ,atual) => soma  + atual , 0 )
console.log(soma)