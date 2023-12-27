import MoviesCardList from '../MoviesCardList/MoviesCardList';
// import MoviesCard from '../MoviesCard/MoviesCard';
import { useState, useEffect } from 'react';
import { MoviesApi } from '../../utils/MoviesApi';
import { BASE_URL_MOVIES_API, BASE_URL_MAIN_API } from '../../utils/consts';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import SearchForm from '../SearchForm/SearchForm';
import { MainApi } from '../../utils/MainApi';
import Preloader from '../Preloader/Preloader';
import { cardsCounterShow } from '../../utils/consts';

function Movies() {

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

    // фильмы с сервера 
    const [searchedOriginalMovies, setSearchedOriginalMovies] = useState([]);
    const [searchWord, setSearchWord] = useState(''); // слово для поиска
    const [isMovieShort, setIsMovieShort] = useState(false); // корокометражка 
    const storageSearchedMovies = JSON.parse(localStorage.getItem('storageSearchedMovies')) || []; // фильмы, которые мы искали сохраненные

    const [isLoading, setIsLoading] = useState(false);
    const [apiError, setApiError] = useState(false);
    const [searchError, setSearchError] = useState(false);
    const counter = cardsCounterShow();
    const [cardsCounter, setCardsCounter] = useState(counter.init);


    function loadMoreCards() {
        const { moreCards } = cardsCounterShow();
        setCardsCounter(cardsCounter + moreCards);
    }


    useEffect(() => {
        const searchFromStorageResult = JSON.parse(localStorage.getItem('storageSearchResult')) || [];
        const searchFromStorageSearchWord = localStorage.getItem('storageSearchWord') || '';
        const searchFromStorageIsShort = JSON.parse(localStorage.getItem('storageIsMovieShort')) || false;

        searchFromStorageResult && setSearchedOriginalMovies(searchFromStorageResult);
        searchFromStorageSearchWord && setSearchWord(searchFromStorageSearchWord);
        searchFromStorageIsShort && setIsMovieShort(searchFromStorageIsShort);
    }, []);


    // вспомогательные функции 
    function optimizedSearchMovie(movies, searchWord, isShort) {
        const movieResult = searchWord.toLowerCase().trim();

        const searchedMovies = movies
            .filter((movie) => {
                const ruName = movie.nameRU && movie.nameRU.toLowerCase();
                const enName = movie.nameEN && movie.nameEN.toLowerCase();
                return (ruName.match(movieResult)) || (enName && enName.match(movieResult));
            });

        if (isShort) {
            return searchedMovies.filter((movie) => movie.duration <= 40);
        }

        return searchedMovies;
    };


    function optimizeMoviesData(movies) {
        return movies
            .map((movie) => ({
                country: movie.country || 'неизвестно',
                director: movie.director || 'неизвестно',
                duration: movie.duration || 10,
                year: movie.year || 1000,
                description: movie.description || 'неизвестно',
                image: `https://api.nomoreparties.co/${movie.image.url}`,
                trailerLink: movie.trailerLink,
                thumbnail: `https://api.nomoreparties.co/${movie.image.url}`,
                movieId: movie.id,
                nameRU: movie.nameRU || 'неизвестно',
                nameEN: movie.nameEN || 'неизвестно',
            }))
            .map((movie) => (
                movie.trailerLink ? movie : { ...movie, trailerLink: movie.image }
            ));
    };


    // 

    function handleInitialSearch(searchWord, isMovieShort) {
        if (!storageSearchedMovies.length) {
            setIsLoading(true);
            moviesApi.getMovies()
                .then((serverMovies) => {
                    const optimizedMovies = optimizeMoviesData(serverMovies);
                    localStorage.setItem('storageSearchResult', JSON.stringify(optimizedMovies));
                    const searchedMovies = searchWord
                        ? searchedMovies(optimizedMovies, searchWord, isMovieShort)
                        : [];
                    handleSearchResult(searchedMovies);
                })
                .catch((err) => {
                    console.log(err);
                    // setSearchError(true)
                    setApiError(true)
                })
                .finally(() => setIsLoading(false));
        } else {
            const searchedMovies = searchWord
                ? searchedMovies(storageSearchedMovies, searchWord, isMovieShort)
                : [];
            handleSearchResult(searchedMovies);
        }
    };


    function handleSearchResult(movies) {
        setSearchedOriginalMovies(movies);
        localStorage.setItem('storageSearchResult', JSON.stringify(movies));
        movies.length === 0
            ? setSearchError(true)
            : setSearchError(false)
    }

    function handleSubmitSearch(searchWord) {
        setSearchWord(searchWord);
        localStorage.setItem('storageSearchWord', searchWord);
        handleInitialSearch(searchWord, isMovieShort);
    };

    function handleChangeCheckBox(isChecked) {
        setIsMovieShort(isChecked)
        localStorage.setItem('storageIsMovieShort', isChecked);
        handleInitialSearch(searchWord, isChecked);
    }

    return (
        <>
            <SearchForm
                handleSearch={handleSubmitSearch}
            />
            <FilterCheckbox
                handleChangeCheckBox={handleChangeCheckBox}
            />

            {isLoading && (<Preloader />)}
            <MoviesCardList
                isLoading={isLoading}
                showApiError={apiError} // значения булевы
                showSearchError={searchError} // значения булевы
            />
        </>
    )
}

export default Movies;