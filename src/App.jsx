import { useState , useEffect} from 'react'
import './App.css'
import Navbar from './Components/Navbar.jsx'

function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
      // alert("mounting component")
    return () => {
      alert("Thanks for checking out our app! We're still building it, so we've enabled auto-reloading to always show you the latest version.")
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
