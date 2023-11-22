import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Store from './components/Store'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
      <div>
        <Store/>
      </div>
    </>
  )
}

export default App
