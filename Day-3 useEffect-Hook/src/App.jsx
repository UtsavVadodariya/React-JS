import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseEffect from './Component/Hooks/UseEffect'
import UseEffect1 from './Component/Hooks/UseEffect1'
import UseEffect2 from './Component/Hooks/UseEffect2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <UseEffect />
      <UseEffect1 />
      <UseEffect2/>
    </div>
  )
}

export default App
