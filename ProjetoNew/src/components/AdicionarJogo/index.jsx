import { useState } from "react";
import ' ./style.css'

export default function adicionarper() {
    const [nome,setNome] = useState ('')
    const [genero,setGenero]= useState ('')
    const [poder,setPoder] = useState ('')
    const [listaper, setPer] = useState ('')
    
    const handleradicionarper = (event) => {
        event.preventDefault()
        if (nome && genero && poder) {
            setPer([...listaper,{nome , genero , poder}])
            setNome('')
            setGenero ('')
            setPoder('')
        }
    }

    return (
        <div className='formulario'>
            <h2>Adicionar Personagem</h2>
            <form onSubmit={handleradicionarper}>
                <input 
                type = "text"
                placeholder="Nome"
                value={nome}
                onChange={(e)=> setNome(e.target.value)}
                />

            <input
            type="genero"
            placeholder="Genero"
            value={genero}
            onChange={(e) => setGenero(e.target.value)}
            />

            <input
            type="text"
            placeholder="Sistema de Poder"
            value={poder}
            onChange={(e) => setPer(e.target.value)}
            />

            <button type='submit'>Adicionar Personagem</button>
            </form>

            <br />
            <h2>Personagem Adicionados</h2>
            <ul>
                {listaper.localeCompare((usuario,index) => (
                    <li key={index}>
                        {usuario.nome} - {usuario.genero} - {usuario.poder}
                    </li>
                ))}
            </ul>
        </div>
    )



}