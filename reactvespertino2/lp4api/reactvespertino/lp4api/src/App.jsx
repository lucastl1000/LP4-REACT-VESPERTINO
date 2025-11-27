//hooks
import { useState } from 'react'
//Components
import FirstComponent from './components/FirstComponent'
import TemplateExpressions from './components/TemplateExpressions'
import Events from './components/Events'
//Style
import './App.css'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>IFMS</h1>
      <h2>LP4 + React</h2>
      <FirstComponent/>
      <TemplateExpressions/>
      <Events/>
    </div>
  )
}

export default App
