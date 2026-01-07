import { React, useEffect } from 'react'   // import React and useEffect hook
import AOS from 'aos'  // import AOS library
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Project from './components/Project.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import { apiGet } from './services/api.jsx'
import IntroOverlay from './components/IntroOverlay.jsx'
import 'aos/dist/aos.css' // import AOS styles
function App() {
  useEffect(() => {
    AOS.init({  // initialize AOS library
      duration: 1000, // values from 0 to 3000, with step 50ms
    })
  },
    []);

  useEffect(() => {
    apiGet("/contact")
      .then((data) => console.log("Backend response:", data))
      .catch((err) => console.error("Backend error:", err));
  }, []); 

  return (
    <main className='bg-gray-950'>
      <IntroOverlay />
      <Hero />
      <About />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
