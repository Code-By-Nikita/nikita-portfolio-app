import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Project.jsx';
import Experience from './components/Experience.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import './style/style.css';

const App = () => {
  return (
    <>
      <Navbar />
      <div id="about"><Hero /></div>
      <div id="skills"><Skills /></div>
      <div id="projects"><Projects /></div>
      <div id="experience"><Experience /></div>
      <div id="contact"><Contact /></div>
      <Footer />
    </>
  );
};

export default App;
