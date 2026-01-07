import { useEffect, useState } from "react";
import AOS from "aos";

import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Project from "./components/Project.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import IntroOverlay from "./components/IntroOverlay.jsx";

import { apiGet } from "./services/api.jsx";
import "aos/dist/aos.css";

function App() {
  const [loading, setLoading] = useState(true);

  // Lock scroll during intro
  useEffect(() => {
    document.body.style.overflow = loading ? "hidden" : "auto";
  }, [loading]);

  // Init AOS AFTER intro is gone
  useEffect(() => {
    if (!loading) {
      setTimeout(() => {
        AOS.init({
          duration: 1000,
          once: true,
          easing: "ease-out-cubic",
        });
        AOS.refresh();
      }, 50);
    }
  }, [loading]);

  // Backend warm-up (optional, safe)
  useEffect(() => {
    apiGet("/contact").catch(() => {});
  }, []);

  return (
    <>
      {loading ? (
        <IntroOverlay onFinish={() => setLoading(false)} />
      ) : (
        <main className="bg-gray-950 min-h-screen overflow-x-hidden">
          <Hero />
          <About />
          <Skills />
          <Project />
          <Contact />
          <Footer />
        </main>
      )}
    </>
  );
}

export default App;
