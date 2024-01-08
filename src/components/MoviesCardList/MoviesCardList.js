import './MoviesCardList.css'
import React, { useState, useEffect } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
import { cardsCounterShow } from '../../utils/consts';


function MoviesCardList({ savedMovies,
    onClickRemove, onClickLike,
    searchedOriginalMovies }) {
    const pathname = window.location.pathname;


    const [cardsDisplayed, setCardsDisplayed] = useState(0);
    const [totalCards, setTotalCards] = useState(0);

    useEffect(() => {
        const counters = cardsCounterShow();
        setCardsDisplayed(counters.init);
    }, []);

    function isMovieSaved(movie) {
        const currentMovie = savedMovies.find((movieData) => movieData.movieId === movie.movieId);
        return currentMovie
            ? { isMovieSaved: true, id: currentMovie._id }
            : { isMovieSaved: false, id: '' }
    };

    function displayMovieCards() {
        if (pathname === '/saved-movies') {

            return savedMovies.length ? savedMovies.map((movie) => (
                <MoviesCard buttonClass='movie-card__button-delete' key={movie.movieId} movieCard={movie} checkIsMovieSaved={isMovieSaved(movie)}
                    onClickRemove={onClickRemove}
                    onClickLike={onClickLike} />
            )) : '';

        } else {
            return searchedOriginalMovies.slice(0, cardsDisplayed).map((movie) => (
                <MoviesCard buttonClass='movie-card__button-delete' key={movie.movieId} movieCard={movie} checkIsMovieSaved={isMovieSaved(movie)}
                    onClickRemove={onClickRemove}
                    onClickLike={onClickLike} />
            ));
        }
    }

    useEffect(() => {
        setTotalCards(searchedOriginalMovies.length);
    }, [searchedOriginalMovies]);

    function loadMoreCards() {
        const counters = cardsCounterShow();
        setCardsDisplayed(cardsDisplayed + counters.more);
    };


    // логика кнопки
    const buttoneName = 'movies-card-list__button-more';
    const buttonModifiedName = pathname === '/saved-movies' || cardsDisplayed >= totalCards ? 'movies-card-list__button-more_hidden' : '';
    const isHiddenButton = `${buttoneName} ${buttonModifiedName}`


    return (
        <section className='movies-card-list'>
            <div className='movies-card-list__box'>
                <ul className='movies-card-list__grid'>
                    {displayMovieCards()}
                </ul>
                <div className='movies-card-list__button-box'>
                    <button type='button' className={isHiddenButton} onClick={loadMoreCards}>Ещё</button>
                </div>
            </div>

        </section>
    )
}

export default MoviesCardList;