import React from 'react'
import './App.css';
import NavBar from './components/NavBar';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Publication from './components/Publication';
import Footer from './components/Footer';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
function App() {



  return (
    <div className="App">

      <NavBar />
      <Contact />
      <main>
        <Element name='About' className="nav-item"><About title={'About'} id='about' /></Element>
        <Education title={'Education'} />
        <Skills title={'Skills'} />
        <Element name='Experience' className="nav-item"><Experience title={'Experience'} id='experience' /></Element>
        <Element name='Publication' className="nav-item"><Publication title={'Publication'} id='publication' /></Element>
      </main>
      <Footer />

    </div >
  );
}

export default App;
