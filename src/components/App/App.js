import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
// это надо

// import ProtectedRoute from './ProtectedRoute';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'
// import { currentUserContext } from '../contexts/CurrentUserContext';
import Footer from '../Footer/Footer';

import NotFound from '../NotFound/NotFound';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Profile from '../Profile/Profile';
import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import LoggedInHeader from '../LoggedInHeader/LoggedInHeader';
import Header from '../Header/Header';
import Main from '../Main/Main';
import './App.css';
import SavedMovies from '../SavedMovies/SavedMovies';
import { MainApi } from '../../utils/MainApi';
import { MoviesApi } from '../../utils/MoviesApi.js';
// import { mainApi } from '../../utils/MainApi';
import { BASE_URL_MAIN_API, BASE_URL_MOVIES_API } from '../../utils/consts.js'

function App() {

  // api

  const mainApi = new MainApi({
    baseUrl: BASE_URL_MAIN_API,
    headers: {
      'Content-Type': 'application/json'
    }
  });

  const moviesApi = new MoviesApi({
    baseUrl: BASE_URL_MOVIES_API,
    headers: {
      'Content-Type': 'application/json'
    }
  });
  // стейты 

  //  стейт логина
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  //  стейт юзера 
  const [currentUser, setCurrentUser] = useState({});

  //  стейт фильмов
  const [movies, setMovies] = useState([]);

  // стейт прелоадера
  const [isLoading, setIsLoading] = useState(false);


  // временное решение меню ??????
  const [isMenuPopupOpen, setMenuPopupOpen] = useState(false);

  //  упрощенная запись 
  const navigate = useNavigate();



  //  юз эффекты
  // проверка и установка излоггед ин
  useEffect(() => {
    if (isLoggedIn) {
      mainApi.getToken();
    }
  }, [isLoggedIn]);


  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    console.log('jwt: первый джвт ', jwt);

    if (jwt) {
      mainApi
        .checkToken(jwt)
        .then((res) => {
          setIsLoggedIn(true);
          setIsLoading(false)
          // navigate("/movies");
          console.log(res)
          console.log('isLoggedIn в конце юз эффект 2 что залогинено:', isLoggedIn);
        })
        .catch((err) => {
          console.log(err);
          handleLogOut();
        });
    } else {
      setIsLoggedIn(false);
      setIsLoading(false);
    }

  }, []);


  // основная логика в функциях

  function handleLoginUser(email, password) {
    setIsLoading(true)
    mainApi.signInUser(email, password)
      .then((res) => {
        localStorage.setItem('jwt', res.token);
        console.log(res.token)
        setIsLoggedIn(true);
        // setEmail(email)
        navigate('/movies')
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleRegistrationUser(name, email, password) {
    mainApi.signUpUser(name, email, password)
      .then((res) => {
        handleLoginUser()
        console.log('регистрация прошла успешно')
        navigate('/signin')
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  function handleLogOut() {
    console.log('jwt успешно удален')
    localStorage.removeItem("jwt");
    console.log('произошел выход из учетной записи')
    setIsLoggedIn(false);
    navigate('/signin');
    // setEmail('')
  }


  // вспомогательные функции
  function handleMenuPopupOpen() {
    setMenuPopupOpen(true)
  };

  function closeMenuPopup() {
    setMenuPopupOpen(false)
  }

  return (
    // <currentUserContext.Provider value={currentUser}>
    <div className="app">
      <Routes>

        {/* лендинг */}
        <Route path='/' element={
          <>
            <Header
              isLoggedIn={isLoggedIn}
              isOpen={isMenuPopupOpen}
              onClose={closeMenuPopup}
              onClickMenu={handleMenuPopupOpen} />
            <Main />
            <Footer />
          </>
        } />
        {/* фильмы роут */}
        <Route path='/movies' element={
          <>
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <LoggedInHeader
                isOpen={isMenuPopupOpen}
                onClose={closeMenuPopup}
                onClickMenu={handleMenuPopupOpen}
              />
              <SearchForm />
              <FilterCheckbox />
              <MoviesCardList />
              <Footer />
            </ProtectedRoute>
          </>
        } />
        {/* сохраненные фильмы роут */}
        <Route path='/saved-movies' element={
          <>
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <LoggedInHeader
                isOpen={isMenuPopupOpen}
                onClose={closeMenuPopup}
                onClickMenu={handleMenuPopupOpen}
              />
              <SearchForm />
              <FilterCheckbox />
              <SavedMovies />
              <Footer />
            </ProtectedRoute>
          </>

        } />
        {/* профайл роут */}
        <Route path='/profile' element={
          <>
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <LoggedInHeader
                isOpen={isMenuPopupOpen}
                onClose={closeMenuPopup}
                onClickMenu={handleMenuPopupOpen}
              />
              <Profile
                onLogOut={handleLogOut}
              />
            </ProtectedRoute>
          </>
        } />
        {/* авторизация роут (логин) */}
        <Route path='/signin' element={<Login
          onLogin={handleLoginUser}
        />} />
        {/* регистрация роут  */}
        <Route path='/signup' element={<Register
          onRegister={handleRegistrationUser}
        />} />
        {/* неизвестная страница роут  */}
        <Route path='*' element={
          <NotFound />
        } />
      </Routes>
    </div>
    // </currentUserContext.Provider>
  );
}

export default App;
