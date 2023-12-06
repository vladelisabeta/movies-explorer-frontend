import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
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
import Profile from '../Profile/Profile';
import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import MoviesCard from '../MoviesCard/MoviesCard';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Navigation from '../Navigation/Navigation';
import LoggedInHeader from '../LoggedInHeader/LoggedInHeader';
import Header from '../Header/Header';
import './App.css';
import SavedMovies from '../SavedMovies/SavedMovies';

function App() {


  const [isMenuPopupOpen, setMenuPopupOpen] = useState(false);

  function handleMenuPopupOpen() {
    setMenuPopupOpen(true)
  };

  function closeMenuPopup() {
    setMenuPopupOpen(false)
  }

  return (
    <div className="App">
      <Routes>

        {/* лендинг */}
        <Route path='/' element={
          <>
            <Header />
            <Promo />
            <NavTab />
            <AboutProject />
            <Techs />
            <AboutMe />
            <Portfolio />
            <Footer />
          </>
        } />

        <Route path='/movies' element={
          <>
            <LoggedInHeader
              isOpen={isMenuPopupOpen}
              onClose={closeMenuPopup}
              onClickMenu={handleMenuPopupOpen}
            />
            <SearchForm />
            <FilterCheckbox />
            <MoviesCardList />
            <Footer />
          </>
        } />
        <Route path='/saved-movies' element={
          <>
            <LoggedInHeader
              isOpen={isMenuPopupOpen}
              onClose={closeMenuPopup}
              onClickMenu={handleMenuPopupOpen}
            />
            <SearchForm />
            <FilterCheckbox />
            <SavedMovies />
            <Footer />
          </>

        } />
        <Route path='/profile' element={
          <>
            <LoggedInHeader
              isOpen={isMenuPopupOpen}
              onClose={closeMenuPopup}
              onClickMenu={handleMenuPopupOpen}
            />
            <Profile />
          </>
        } />
        <Route path='/signin' element={<Login />} />
        <Route path='/signup' element={<Register />} />

        <Route path='*' element={
          <NotFound />
        } />
      </Routes>
      {/* <Navigation /> */}
      {/* <MoviesCardList /> */}
      {/* <MoviesCard /> */}
      {/* <LoggedInHeader /> */}
      {/* <SearchForm /> */}
      {/* <FilterCheckbox /> */}
      {/* <Profile /> */}
      {/* <Register /> */}
      {/* <Login /> */}
      {/* <NotFound /> */}
      {/* <Header />
      <Promo />
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
