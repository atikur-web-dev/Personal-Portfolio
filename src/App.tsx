import { useEffect } from 'react';
import Navbar from "./components/layout/Navbar";
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';

function App() {
  useEffect(() => {
    document.title = "Atikur Rahman | MERN Stack Developer";
  }, []);

  return (
    <div className="min-h-screen bg-bgDark">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default App;