import './MoviesCardList.css'
import React, { useState, useEffect, useContext } from 'react';
import { currentUserContext } from '../../contexts/CurrentUserContext';
import MoviesCard from '../MoviesCard/MoviesCard';
import SavedMovies from '../SavedMovies/SavedMovies';
import Preloader from '../Preloader/Preloader';
import { cardsCounterShow } from '../../utils/consts';


function MoviesCardList({ loadMoreCards, moreMoviesCheck, isSearchEmpty, isSearchSuccessfull, handleMovieToggle, isLoading, apiError, movieCardsOriginal }) {
    const pathname = window.location.pathname;

    // это для сохраненного поиска
    const { savedMovies } = useContext(currentUserContext);

    const [cardsDisplayed, setCardsDisplayed] = useState(0);
    const [totalCards, setTotalCards] = useState(0);

    useEffect(() => {
        const counters = cardsCounterShow();
        setCardsDisplayed(counters.init);
    }, []);

    // const displayedMovieCards = movieCardsOriginal.slice(0, cardsDisplayed).map((movie) => (
    //     <MoviesCard buttonClass='movie-card__button-delete' key={movie.movieId} film={movie} />
    // ));

    function isMovieSaved(movie) {
        const currentMovie = savedMovies.find((movieData) => movieData.movieId === movie.movieId);
        return currentMovie
            ? { isMovieSaved: true, id: currentMovie._id }
            : { isMovieSaved: false, id: '' }
    };

    function displayMovieCards() {
        if (!movieCardsOriginal) {
            return null;
        }
        return movieCardsOriginal.slice(0, cardsDisplayed).map((movie) => (
            <MoviesCard buttonClass='movie-card__button-delete' key={movie.movieId} movie={movie} checkIsMovieSaved={isMovieSaved(movie)} />
        ));
    }

    useEffect(() => {
        setTotalCards(movieCardsOriginal.length);
    }, [movieCardsOriginal]);

    function loadMoreCards() {
        const counters = cardsCounterShow();
        setCardsDisplayed(cardsDisplayed + counters.more);
    };

    // логика кнопки
    const buttoneName = 'movies-card-list__button-more';
    const buttonModifiedName = pathname === '/saved-movies' || cardsDisplayed === movieCardsOriginal.length ? 'movies-card-list__button-more_hidden' : '';
    const isHiddenButton = `${buttoneName} ${buttonModifiedName}`


    return (
        <section className='movies-card-list'>
            <div className='movies-card-list__box'>
                <ul className='movies-card-list__grid'>
                    {displayMovieCards()}
                    {/* <MoviesCard buttonClass='movie-card__button-delete' />
                    <MoviesCard buttonClass='movie-card__button-delete' />
                    <MoviesCard buttonClass='movie-card__button-delete' />
                    <MoviesCard buttonClass='movie-card__button-delete' />
                    <MoviesCard buttonClass='movie-card__button-delete' />
                    <MoviesCard buttonClass='movie-card__button-delete' />
                    <MoviesCard buttonClass='movie-card__button-delete' />
                    <MoviesCard buttonClass='movie-card__button-delete' />
                    <MoviesCard buttonClass='movie-card__button-delete' />  */}
                </ul>
                <div className='movies-card-list__button-box'>
                    <button type='button' className={isHiddenButton} onClick={loadMoreCards}>Ещё</button>
                </div>
            </div>

        </section>
    )
}

export default MoviesCardList;