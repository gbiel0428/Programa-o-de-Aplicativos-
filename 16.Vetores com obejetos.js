//  Exemplos de Vetor de nomes.
const listaDeNomes = ["Ana", "Maria", "Joana"]

//  Exemplos de Vetor de números.
const listaDeNumeros = [ 1 ,2 , 3 , 4 , 5]

// Vetor de objetos com dados de nomes e idades.
// Um obejto carrega dados como uma classe.
listaDeUsuarios = [
    { nome: "Ana", idade: 25 },
    { nome: "Maria", idade: 35 },
    { nome: "Joana", idade: 45 },
    { nome: "Gabriel", idade: 12}
]

//  Percorrendo e exibindo os elementos do vetor.
//  ForEach e um laço de repetição.
console.log("Exibindo todos os usuários de vetor. ")
listaDeUsuarios.forEach( u => {
    console.log(`${u.nome} tem ${u.idade} anos.`)
})

//  Como os antigos.
console.log("\nExibindo todos os usuários de vetor. ")
for (let i  = 0; i <listaDeUsuarios.length; i++) {
    console.log(`${listaDeUsuarios[i].nome} tem ${listaDeUsuarios[i].idade} anos.`)
}

console.log("\nFiltrando maiores de 18 anos.")
const maioridade = listaDeUsuarios.filter (u => u.idade >= 18)
//  Use as {} se precisa de mais de uma linha.
//  Nao precisa  usa no caso de baixo pois não precisamos.
maioridade.forEach(u => 
    console.log(`${u.nome} tem ${u.idade} anos`)
)

console.log("\nFiltrando menores de 18 anos.")
const menoridade = listaDeUsuarios.filter(u => u.idade <18)
menoridade.forEach(u =>
    console.log(`${u.nome} tem ${u.idade}anos`)
)
console.log("\nNa lista de números, filtre e mostre apenas numeros pares.")
const pares = listaDeNumeros.filter(n => n % 2 == 0 )
console.log(pares)

console.log("\nNa lista de nomes , mostre todos os nomes com forEach.")
listaDeNomes.forEach( u => {
    console.log(u)
})

console.log("\nNa lista de usúarios, mostre apenas  os nomes.")
const nomes= listaDeUsuarios.map(u => u.nome)
nomes.forEach(nome => console.log(`Nome: ${nome}`))

console.log("\nNa lista de usuarios,encontre um usúario")
const usuarioEncontrado = listaDeUsuarios.find(u => u.nome === "Ana")
console.log(usuarioEncontrado)
console.log(`Nome: ${usuarioEncontrado.nome} \nIdade: ${usuarioEncontrado.idade}`)

console.log("\nNa lista de usuarios,encontre um usúario pela idade")
const usuarioidade = listaDeUsuarios.find(u => u.idade === 45)
console.log(usuarioidade)
console.log(`Nome: ${usuarioidade.nome}\nIdade: ${usuarioidade.idade}`)

console.log("\nNa lista de usúarios, somando todas as idades: ")
const somaIdade =  listaDeUsuarios.reduce((total , usuario) => total + usuario.idade,0)
console.log(somaIdade)