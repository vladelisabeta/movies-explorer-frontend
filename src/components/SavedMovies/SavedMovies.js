import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';
import { useState, useEffect } from 'react';
import { MoviesApi } from '../../utils/MoviesApi';
import { BASE_URL_MOVIES_API, BASE_URL_MAIN_API } from '../../utils/consts';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import SearchForm from '../SearchForm/SearchForm';
import { MainApi } from '../../utils/MainApi';
import Preloader from '../Preloader/Preloader';

function SavedMovies({ savedMovies, onClickRemove, onClickLike }) {

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

    // const [originalMovies, setOriginalMovies] = useState([]);
    // const [foundMovies, setFoundMovies] = useState([]);
    // const [savedSearchResults, setSavedSearchResults] = useState({ film: '', shorts: false });
    const [isLoading, setIsLoading] = useState(false);
    const [apiError, setApiError] = useState(false);
    const [movies, setMovies] = useState([]);
    const [searchError, setSearchError] = useState(false)

    const [searchedOriginalMovies, setSearchedOriginalMovies] = useState([])

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
                isLoading={isLoading}
                showApiError={apiError} // значения булевы
                showSearchError={searchError}
                setShowSearchError={setSearchError}
                setShowApiError={setApiError}
            />
            <FilterCheckbox
                handleChangeCheckBox={handleChangeCheckBox}
            />

            {isLoading && (<Preloader />)}
            <MoviesCardList
                savedMovies={movies}
                onClickRemove={onClickRemove}
                onClickLike={onClickLike}
                searchedOriginalMovies={searchedOriginalMovies}
            />
        </>
    )
}

export default SavedMovies;