import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Gatitos from './componentes/Gatitos';

function App() {
  const descripcion1 = "Kuki es un gato muy cariñoso y le encanta jugar con las " + 
  "pelotitas de papel, es de tamaño pequeño además es muy cariñoso y es el mejor amigo del waffles."

  const descripcion2 = "Waffles es un gato muy jugueton y le encanta jugar con las " +
  "pelotitas de papel, es de tamaño pequeño además es muy cariñoso y es el mejor amigo del kuki."

  const descripcion3 = "Yupi es un gato muy cariñoso y le encanta jugar con las " +
  "con lo que sea, es de tamaño pequeño además es muy cariñoso y le encanta dormir en la cama."
  return (

    <div className="App">
      <div className="contenedor-principal">
        <h1> Les presento los 4 gatos que me acompañan </h1>
      
        <Gatitos
          nombre="Kuki"
          tipo="gato negro"
          descripcion={descripcion1}
          imagen="kuki"
         />
                 <Gatitos
          nombre="Waffles"
          tipo="gato naranjo"
          descripcion={descripcion2}
          imagen="waffles"
         />
                 <Gatitos
          nombre="Yupi"
          tipo="gato siames"
          descripcion={descripcion3}
          imagen="yupi"
         />
      </div>
    </div>

  )
}

export default App
