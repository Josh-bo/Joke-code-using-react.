import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Apifetch from './Components/Apifetch'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Apifetch/>
    </>
  )
}

export default App
