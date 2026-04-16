import { useState } from 'react'
import './style.css'

export default function AdicionarTime () {
    const [nome, setNome] = useState ('')
    const [ano , setAno] = useState ('')
    const [divisao,setDivisao] = useState('')
    const [ listadeTime, setlistadeTime] = useState ([])

    const handlerAcionarTime = (event) => {
        event.preventDefault()
        if (nome && ano && divisao) {
            setlistadeTime ([... listadeTime, {nome,ano,divisao}])
            setNome ('')
            setAno('')
            setDivisao('')
        }
    }
    
    return (
        
        <div className='lista'>
            <h2>Adicionar Time</h2>
            <form onSubmit={handlerAcionarTime}>
                <input type='text' placeholder='Nome do Time'
                value={nome}
                onChange={(e) => setNome(e.target.value)} />

                <input type='text' placeholder='Ano de criação do Time'
                value={ano}
                onChange={(e) => setAno(e.target.value)} />

                <input type='text' placeholder='Divisão do Time'
                value={divisao}
                onChange={(e) => setDivisao(e.target.value)} />

                <button type='submit'>Adiconar</button>
            </form>

            <br />

            <h2>Times Adiconados</h2>

            <ul>
                {listadeTime.map((usuario,index) => (
                    <li key={index}>
                        {usuario.nome} - {usuario.ano} - {usuario.divisao}
                    </li>
                ))}
            </ul>
        </div>
    )
}

