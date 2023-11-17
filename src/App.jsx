import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import Colaboradores from './components/Colaboradores'
import Contacto from './components/Contacto'
import Servicios from './components/Servicios'
import Informacion from './components/Informacion'
import NavBar from './layout/Navbar'

function App() {

  const [position, setPosition] = useState(0)

  return (
    <>
      <NavBar/>
      <div className='content'>
        <Home/>
        <Servicios/>
        <Colaboradores/>
        <Contacto/>
        <Informacion/>
      </div>
    </>
  )
}

export default App
