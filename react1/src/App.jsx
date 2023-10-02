import { useState } from 'react'
import './App.css'
import Card from './component/Card'

function App() {
  const [count, setCount] = useState(0)

  const Counter = () => {
    setCount(gas => gas + 1)
  }

  return (
    <>
    <Card/>
    </>
  )
}

export default App
