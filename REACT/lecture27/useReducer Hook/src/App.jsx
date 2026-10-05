import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { CounterReader } from './CounterReader'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <CounterReader/>
    </>
  )
}

export default App
