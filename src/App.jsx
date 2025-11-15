import { useState , useEffect} from 'react'
import './App.css'
import Navbar from './Components/Navbar.jsx'

function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
      // alert("mounting component")
    return () => {
      alert("This Web App is Under Development , for your Easyness this website reloads automatically by itself")
    }
  }, [])
  

  return (
    <>
    <Navbar />
    <h1> Coming Soon! </h1>
    {/* // Its On The Way 🚲🚲🚲🚲 */}
    </>
  )
}

export default App
