// import './SavedMovies.css';
import preview from '../../images/film_preview.png';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';
import { useState, useEffect } from 'react';
import { MoviesApi } from '../../utils/MoviesApi';
import { BASE_URL_MOVIES_API, BASE_URL_MAIN_API } from '../../utils/consts';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import SearchForm from '../SearchForm/SearchForm';
import { MainApi } from '../../utils/MainApi';
import Preloader from '../Preloader/Preloader';

function SavedMovies() {

    const moviesApi = new MoviesApi({
        baseUrl: BASE_URL_MOVIES_API,
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const mainApi = new MainApi({
        baseUrl: BASE_URL_MAIN_API,
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const [originalMovies, setOriginalMovies] = useState([]);
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [savedSearchResults, setSavedSearchResults] = useState({ film: '', shorts: false });
    const [isLoading, setIsLoading] = useState(false);
    const [apiError, setApiError] = useState(false);


    function filterMovies(searchResult, films) {
        setSavedSearchResults(searchResult);
        setSavedSearchResults(films.filter((movie) => {
            const isFilmFound = movie.nameRU.toLowerCase().includes(searchResult.film.toLowerCase());
            return searchResult.shorts ? (isFilmFound && movie.duration <= 40) : isFilmFound;
        }));
    }


    useEffect(() => {
        setIsLoading(true);
        moviesApi.getMovies()
            .then((recievedServerMovies) => {
                const savedMovies = recievedServerMovies.filter((movie) => movie.isSaved);
                setOriginalMovies(savedMovies);
                filterMovies(savedSearchResults, savedMovies);
            })
            .catch((err) => {
                console.log(err);
                setApiError(true);
            })
            .finally(() => {
                setIsLoading(false)
            })
    }, []);

    function onClickRemoveMovie(movie) {
        mainApi.removeMovie(movie)
            .then((updatedMovies) => {
                const savedMovies = updatedMovies.filter((film) => film.isSaved);
                setOriginalMovies(savedMovies);
                filterMovies(savedSearchResults, savedMovies)
            })
            .catch((err) => {
                console.log(err);
                setApiError(true);
            })
    }

    function handleClickSearch(search) {
        filterMovies(search, originalMovies)
    }

    return (
        <>
            <SearchForm
                handleSearch={handleClickSearch}
                savedSearchResults={savedSearchResults}
            />
            <FilterCheckbox />

            {isLoading && (<Preloader />)}
            <MoviesCardList
                movieCards={filterMovies}
                onClickRemoveButton={onClickRemoveMovie}
                isLoading={isLoading}
                apiError={apiError}
            />
        </>
    )
}

export default SavedMovies;