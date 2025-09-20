import React from 'react';
import './global.css';

// Components
import Navbar from './components/Navbar/Navbar';

// Sections
import Onboarding from './sections/Onboarding/Onboarding';
import About from './sections/About/About';
import Skills from './sections/Skills/Skills';
import Projects from './sections/Projects/Projects';
import Writings from './sections/Writings/Writings';
import Contact from './sections/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Onboarding />
        <About />
        <Skills />
        <Projects />
        <Writings />
        <Contact />
      </main>
    </div>
  );
}

export default App;