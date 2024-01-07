// import './SavedMovies.css';
import preview from '../../images/film_preview.png';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';
import { useState, useEffect, useContext } from 'react';
import { MoviesApi } from '../../utils/MoviesApi';
import { BASE_URL_MOVIES_API, BASE_URL_MAIN_API } from '../../utils/consts';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import { currentUserContext } from '../../contexts/CurrentUserContext';
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
    const [foundMovies, setFoundMovies] = useState([]);
    const [savedSearchResults, setSavedSearchResults] = useState({ film: '', shorts: false });
    const [isLoading, setIsLoading] = useState(false);
    const [apiError, setApiError] = useState(false);
    const { savedMovies } = useContext(currentUserContext);
    const [movies, setMovies] = useState([]);
    const [searchError, setSearchError] = useState(false)

    const [searchData, setSearchData] = useState({
        searchWord: '',
        isMovieShort: false,
    });

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

    // console.log(savedMovies)

    function handleSearchMovies(searchWord, isMovieShort) {
        const foundMovies = optimizedSearchMovie(savedMovies, searchWord, isMovieShort);
        foundMovies.length === 0 ? setSearchError(true) : setSearchError(false);
        setMovies(foundMovies);
    };

    useEffect(() => {
        setMovies(savedMovies);
        handleSearchMovies(searchData.searchWord, searchData.isMovieShort);
        !savedMovies.length ? setSearchError(true) : setSearchError(false);
    }, [savedMovies]);

    const handleSearchSubmit = (word) => {
        setSearchData({ ...searchData, searchWord: word });
        handleSearchMovies(word, searchData.isMovieShort);
    };

    function handleChangeCheckBox(isChecked) {
        setSearchData({ ...searchData, isMovieShort: isChecked });
        handleSearchMovies(searchData.searchWord, isChecked);
    }

    return (
        <>
            <SearchForm
                handleSearch={handleSearchSubmit}
            // savedSearchResults={savedSearchResults}
            />
            <FilterCheckbox
                handleChangeCheckBox={handleChangeCheckBox}
            />

            {isLoading && (<Preloader />)}
            <MoviesCardList
                isLoading={isLoading}
                apiError={apiError}
            />
        </>
    )
}

export default SavedMovies;