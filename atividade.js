const listadeAlunos = [ 
    {nome: "Ana", nota: 5.0},
    {nome: "Bruno",nota: 10.0},
    {nome: "Carla", nota : 2.0},
    {nome: "Andrea",nota: 7.0},
    {nome: "Marta", nota: 6.0}
]


console.log("Encontre a aluna Marta e mostre o nome e a media dela.")
const usuarioEncontrado = listadeAlunos.find(u => u.nome === "Marta")
console.log(usuarioEncontrado)
console.log(`Nome: ${usuarioEncontrado.nome} \nNota: ${usuarioEncontrado.nota}`)

console.log("Mostre a media geral da turma.")
const mediageral = listadeAlunos.reduce((total, alunos) => total + alunos.nota/listadeAlunos.length , 0 )
console.log(mediageral)

console.log("\nMostre o nome e a nota dos  alunos com nota abaixo de 7.0")
const notabaixo = listadeAlunos.filter(u => u.nota <7)
notabaixo.forEach(u =>
    console.log(`${u.nome} com nota ${u.nota}`)
)

console.log("\nMostre apenas o nome dos alunos com nota maior ou igual a 7")
const notaalto = listadeAlunos.filter(u => u.nota >=7)
notaalto.forEach(u =>
    console.log(`${u.nome} com nota ${u.nota}`)
)