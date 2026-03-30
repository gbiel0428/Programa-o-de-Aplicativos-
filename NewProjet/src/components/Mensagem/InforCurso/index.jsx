import { useState } from 'react'
import './style.css'

function InforCurso() {
    const [nome , setNome] = useState ("Programação de aplicativos")
    const [cargaHoraria , setCargaHoraria] = useState(90)
    const [local , setLocal] = useState("SENAI")

    return (
        <div className="InforCurso">
            <h2>Dados do Curso</h2>
            <p>Nome: {nome}</p>
            <p>Carga Horária: {cargaHoraria}</p>
            <p>Local: {local}</p>

        </div>
    )
}


export default InforCurso