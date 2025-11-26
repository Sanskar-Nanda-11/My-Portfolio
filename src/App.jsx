import {React , useEffect} from 'react'   // import React and useEffect hook
import AOS from 'aos'  // import AOS library
import Hero from './components/Hero'
import 'aos/dist/aos.css' // import AOS styles
function App() {
  useEffect(() => {
    AOS.init({  // initialize AOS library
      duration: 1000, // values from 0 to 3000, with step 50ms
    })
  }, [])
  
  return (
  <main className='bg-gray-950'>
    <Hero />
  </main>
  )
}

export default App
