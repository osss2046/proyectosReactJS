import { useState } from 'react'
import './App.css'
import freeCodeCampLogo from './assets/imagenes/freecodecamp-logo.png';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';

function App() {

  const [numClics, setNumClics] = useState(0);
  const manejarClic = () =>{
    setNumClics(numClics + 1);
  }
  const reiniciarContador = () =>{
    setNumClics(0);
  }


  return (
    <>
    <div className='freecodecamp-logo-contenedor'>
      <img  className='freecodecamp-logo'
            src={freeCodeCampLogo}
            alt='logo de freeCodeCamp'
      />
    </div>
    <div className='contenedor-principal'>
      <Contador
      numClics={numClics}
      />
      <Boton
      texto='Clic'
      esBotonDeClic={true}
      manejarClic={manejarClic}
      />
      <Boton
      texto='Reiniciar'
      esBotonDeClic={false}
      manejarClic={reiniciarContador}
      />

    </div>
    </>
  )
}

export default App
