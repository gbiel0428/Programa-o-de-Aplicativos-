import './App.css'
import Mensagem from './components/Mensagem'
import InforAluno from './components/Mensagem/InforAluno'
import InforCurso from './components/Mensagem/InforCurso'

function App() {
  return (
    <>
    <h1>Bem-Vindo ao meu New Projeto.</h1>

    <Mensagem />
    <InforAluno />
    <hr />
    <InforCurso />
    </>
  )
}

export default App
