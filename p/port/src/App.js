import logo from './logo.svg';
import './App.css';
import React from "react"
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Projects from './components/Projects';

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
