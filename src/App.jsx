import Navsection from './Components/Navsection';
import About from './Components/About';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import { FaArrowUp } from "react-icons/fa";
import 'aos/dist/aos.css';

const App = () => {
  return (
    <>
      <Navsection />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
      <a href="#home">
      <button className="backToTop"  
      onClick={() =>
      window.scrollTo({
      top: 0,
      behavior: "smooth",
        })
      }
      >
      <FaArrowUp />
      </button>
      </a>
      
    </>
  );
}

export default App;
