import React, { useState, useEffect } from 'react';
import Footer from '../Footer/Footer';
import Portfolio from '../Portfolio/Portfolio';
import AboutMe from '../AboutMe/AboutMe';
import Techs from '../Techs/Techs';
import AboutProject from '../AboutProject/AboutProject';
import './App.css';

function App() {
  return (
    <div className="App">
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
