import React, { useState, useEffect } from 'react';
import { Routes } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Portfolio from '../Portfolio/Portfolio';
import AboutMe from '../AboutMe/AboutMe';
import Techs from '../Techs/Techs';
import AboutProject from '../AboutProject/AboutProject';
import NavTab from '../NavTab/NavTab';
import Promo from '../Promo/Promo';
import NotFound from '../NotFound/NotFound';
import Login from '../Login/Login';
import Register from '../Register/Register';
import './App.css';

function App() {
  return (
    <div className="App">
      <Register />
      {/* <Login /> */}
      {/* <NotFound /> */}
      {/* <Promo />
      <NavTab />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
      <Footer /> */}
    </div>
  );
}

export default App;
