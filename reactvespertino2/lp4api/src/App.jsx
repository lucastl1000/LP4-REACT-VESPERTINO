import { useState } from 'react'
import './App.css'

import Nitro from './assets/nitro.jpg'
import AlteraDados from './components/AlteraDados'

function App() {
  const [count, setCount] = useState(0)

  return (   
    <div>
        {/*Imagem na pasta public*/}
        <img src="/carro.jpg" alt="Paisagem com um carro"/>
        {/*Imagem na pasta assets */}
        <img src={Nitro} alt="textura na cor vermelha"/>

        <AlteraDados/>
    </div> 
  )
}

export default App
