import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <h1> Coming Soon! </h1>
    {/* // Its On The Way 🚲🚲🚲🚲 */}
    </>
  )
}

export default App
