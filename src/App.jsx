import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import Navsection from './Components/Navsection';
import About from './Components/About';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-out-sine',
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <Navsection />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
