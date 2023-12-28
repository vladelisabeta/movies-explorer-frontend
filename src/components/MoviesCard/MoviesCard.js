import './MoviesCard.css';
import { useState, useContext, useEffect } from 'react';
import preview from '../../images/film_preview.png';
import { BASE_URL_MAIN_API } from '../../utils/consts';
import { MainApi } from '../../utils/MainApi';
import { movieDurationConverted } from '../../utils/consts';
import { currentUserContext } from '../../contexts/CurrentUserContext';

function MoviesCard({ film }) {
    const pathname = window.location.pathname;
    const { nameRU, trailerLink, thumbnail, duration, image } = film;
    const { savedMovies, setSavedMovies } = useContext(currentUserContext);
    const [mainId, setMainId] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isMovieSaved, setIsMovieSaved] = useState(false);

    const mainApi = new MainApi({
        baseUrl: BASE_URL_MAIN_API,
        headers: {
            'Content-Type': 'application/json'
        }
    });

    function handleLikeMovie() {
        setIsLoading(true);
        mainApi.saveMovie(film)
            .then((movieData) => {
                setSavedMovies([...savedMovies, movieData]);
                setIsMovieSaved(true);
            })
            .catch((err) => console.log(err))
            .finally(() => setIsLoading(false));
    };

    function handleRemoveMovie() {
        setIsLoading(true);
        mainApi.removeMovie(mainId)
            .then(() => {
                setSavedMovies(savedMovies.filter((movieData) => {
                    return !(movieData._id === mainId);
                }));
                setIsMovieSaved(false);
            })
            .catch((err) => console.log(err))
            .finally(() => setIsLoading(false));
    };


    return (
        <li className='movie-card'>
            <a className='movie-card__link' href={trailerLink}>
                <img className='movie-card__preview' src={`https://api.nomoreparties.co/${image.url}`} alt='превью картинка фильма'></img>
            </a>
            <div className='movie-card__description-box'>
                <p className='movie-card__film-name'>{nameRU}</p>
                {/* <button className='movie-card__button-save' type='button'></button> */}
                <button className={pathname === '/saved-movies' ? 'movie-card__button-delete' : 'movie-card__button-save'} type='button' onClick={isMovieSaved ? handleRemoveMovie : handleLikeMovie}></button>
            </div>
            <div className='movie-card__time-box'>
                <p className='movie-card__film-time'>{movieDurationConverted(duration)}</p>
            </div>
        </li>
    )
}

export default MoviesCard;