import React from 'react';
import Navbar from './Components/Navbar';
import Projects from './Components/project';
import About from './Components/About';
import Skills from './Components/skills';
import Contact from './Components/contacts';
import Footer from './Components/footer';

import MySkills from './Components/myskills';


import './App.css'


const App = () => {
  return (

    <div className="app">
      <Navbar />
      <About />
      <Projects/>
      <Skills/>
      <MySkills/>
      <Contact/>
      <Footer/>


     
    </div>

  );
}

export default App;
