//  Vetores.

const listaDeNomes = ["Marta" , "José" , "Maria"]

console.log("Exibindo todos os elementos: ")
console.log(listaDeNomes)

console.log("\nExibindo o primeiro Elemento: ")

//  Começa do 0 O PRIMEIRO ELEMENTO.
console.log(listaDeNomes[0])

console.log("\nAdicionado um Elemento: ")

listaDeNomes.push("Marília")
//  PUSH =  PUXANDO O NOME PARA A LISTA.
console.log(listaDeNomes)

//  Adicionar mais 1 nome.
listaDeNomes.push("Gabriel")
console.log(listaDeNomes)

console.log("\nRemovendo  um Elemento: ")
//  Removendo no índice 2, remover 1 elemento. 0 , 1 , 2 .
//  SPLICE = REMOVE .
listaDeNomes.splice(2,1)
console.log(listaDeNomes)

listaDeNomes.splice(1,1)
console.log(listaDeNomes)

listaDeNomes.push("Maria")
console.log(listaDeNomes)

console.log("\nRemovendo  apenas  o último Elemento: ")
listaDeNomes.pop()
console.log(listaDeNomes)

console.log("\nRemovendo  apenas  o PRIMEIRO Elemento: ")
listaDeNomes.shift()
console.log(listaDeNomes)