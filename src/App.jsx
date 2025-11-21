import { useState , useEffect} from 'react'
import './App.css'
import Navbar from './Components/Navbar.jsx'

function App() {
  const [count, setCount] = useState(0)
  const [targetPosition, setTargetPosition] = useState(0 , 0 )

  const navbarLinks = [
    { name: 'Home', href: '#' },      // Update hrefs as needed 
    { name: 'About', href: '#' },     // list of navbar links
    { name: 'Contact', href: '#' },
    { name: 'Resume', href: '#' },
  ];

  useEffect(() => {
      // alert("mounting component")
    return () => {
      // alert("Thanks for checking out our app! We're still building it, so we've enabled auto-reloading to always show you the latest version.")
    }
  }, [])
  return (
    <>
    <Navbar links={navbarLinks} />
    <h1> Coming Soon! </h1>
    {/* // Its On The Way 🚲🚲🚲🚲 */}
    </>
  )
}

export default App
