import { useState } from 'react'
import './App.css'
import freeCodeCampLogo from './assets/imagenes/freecodecamp-logo.png'
import Boton from './componentes/Boton'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img 
        src={freeCodeCampLogo} 
        className='freecodecamp-logo'
        alt='imagen de logo' />
      </div>
      <div className='contenedor-calculadora'>
        <div className='fila'>
          <Boton>
            1
          </Boton>
          <Boton>
            +
          </Boton>
        </div>
        <div className='fila'></div>
        <div className='fila'></div>
        <div className='fila'></div>
        <div className='fila'></div>
      </div>
    </div>
  )
}

export default App;
