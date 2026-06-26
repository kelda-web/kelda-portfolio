import { useState, useEffect } from 'react';
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import About from './component/About';
import Skills from './component/Skills';
import Project from './component/Project';
import Contact from './component/Contact';
import Footer from './component/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const handleScroll = () => {
    const sections = ['home', 'about', 'skills', 'projects', 'contact'];
    const scrollPosition = window.scrollY + 100;

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const offsetTop = element.offsetTop;
        const offsetHeight = element.offsetHeight;

        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          setActiveSection(section);
          break;
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-slate-950 min-h-screen">
      <Navbar activeSection={activeSection} />
      <main>
        <Hero />
        <About id="about" />
        <Skills id="skills" />
        <Project />
        <Contact id="contact" />
      </main>
      <Footer />
    </div>
  );
}

export default App;