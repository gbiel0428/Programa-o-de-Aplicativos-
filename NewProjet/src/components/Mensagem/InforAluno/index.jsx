import './style.css'

function InforAluno() {
    const name = "João Silva"
    const idade = 23
    const curso = "Desenvolvimento de Sistemas"

    return (
        <div className='info-aluno'>
            <h2>Informações do aluno: </h2>
            <p>Nome: {name}</p> 
            <p>Idade: {idade}</p>
            <p>Curso: {curso}</p>
        </div>
    )
}

export default InforAluno