import Navsection from './Components/Navsection';
import About from './Components/About';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import BackToTop from './Components/BackToTop';
import { Analytics } from "@vercel/analytics/react"
const App = () => {
  return (
    <>
    <Analytics/>
      <Navsection />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
      <BackToTop/>
    </>
  );
}

export default App;
