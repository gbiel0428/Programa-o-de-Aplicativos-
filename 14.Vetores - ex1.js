// Exercicio.

// Crie um vetor com nome de seus familiares.
//  Com seis nomes.

//  Use todos os comandos vistos em vetores após criar a lista.

const listaDefamilia =  [ "Gabriel" , "Thamires" , "Edvaldo" , "Evellyn", "Zé" , "Alice"]
console.log(listaDefamilia)


console.log("\nExibindo apenas o primeiro elemento: ")
console.log(listaDefamilia [0])

console.log("\nExibindo o último elemento:")
console.log(listaDefamilia[5])

console.log("\nAdicionando um nome na lista:")
listaDefamilia.push("Duque")
console.log(listaDefamilia)

console.log("\nRemovendo um nome da lista: ")
listaDefamilia.splice(5,1)
console.log(listaDefamilia)

console.log("\nRevomendo apenas o ultimo da lista: ")
listaDefamilia.pop()
console.log(listaDefamilia)

console.log("\nRevomendo apenas o primeiro da lista: ")
listaDefamilia.shift()
console.log(listaDefamilia)