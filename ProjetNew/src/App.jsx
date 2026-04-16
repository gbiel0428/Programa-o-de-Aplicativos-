import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import AdicionarTime from './components/adicionarTime'
import logo from './assets/logo.jpg'

function App() {

  return (
    <>
      <h1>Adicionar Times</h1>
      <img src={logo} alt="Logo do Site" className="logo-central" />
      <Header />
      <AdicionarTime />
    <hr />
    <Footer />
  </>
  )
}

export default App
