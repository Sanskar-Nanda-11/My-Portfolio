import Navbar from "./components/Navbar";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import Footer from "./sections/Footer";
import Home from "./sections/Home";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Testmonial from "./sections/Testmonial";
import ParticalsBackground from "./components/ParticalsBackground";

export default function App(){
  return(
    <div className=" relative gradient text-color-white ">
      <ParticalsBackground/>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Experience/>
      <Testmonial/>
      <Contact/>
      <Footer/>
    </div>
  )
}