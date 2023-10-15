import React from "react"

import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import HeroSection from './components/HeroSection';
import Projects from './components/Projects';
import Skills from './components/Skills';

import logo from './logo.svg';
import './App.css';

function App() {

  const [offsetWidth, setOffsetWidth] = React.useState(0)

  function setOffset(no) {
    setOffsetWidth(no)
  }

  React.useEffect(() => {
    console.log(offsetWidth)
  }, [offsetWidth])

  return (
    <div className="App">
      <HeroSection />
      <AboutMe />
      <Skills />
      <Projects 
        setOffset={setOffset}
      />
      <Contact 
        offsetWidth={offsetWidth}
      />
      
    </div>
  );
}

export default App;
